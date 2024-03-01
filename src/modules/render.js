import { createToDoCard } from './todos'
import { projectsArray, findProject } from './datahandler'
import init from '..'
import createModal from './modals'

// Event listeners for toolbar:
const toolBar = () => {
	const addTodoBtn = document.querySelector('#button-todo')
	addTodoBtn.addEventListener('click', (e) => {
		createModal(e.target.getAttribute('type'))
		modal.showModal()
	})
	const addProjectBtn = document.querySelector('#button-project')
	addProjectBtn.addEventListener('click', (e) => {
		createModal(e.target.getAttribute('type'))
		modal.showModal()
	})
}
// Render the content area of the page.
const renderDOM = (proj) => {
	// Set the project to be rendered
	let currentProject = findProject(proj)
	// If the current project is not defined, set to first project in array
	if (currentProject === undefined) {
		currentProject = projectsArray[0]
		// If NO projects are present at all, initialise a default project.
		if (currentProject === undefined) {
			init()
			return
		}
	}

	// Make sure a project exist before trying to render it.
	if (currentProject) {
		console.log('Rendering project: ')
		console.log(currentProject)
		// Fetch relevant DOM (content area)
		const display = document.querySelector('.content-container')
		display.textContent = ''

		// Create new DOM elements for project
		const projRender = document.createElement('div')
		projRender.classList.add('project-render')

		const projTitle = document.createElement('h1')
		projTitle.classList.add('project-render-title')
		projTitle.textContent = currentProject.title
		projRender.appendChild(projTitle)
		display.appendChild(projRender)

		// Create dom elements for projects todos
		const todosContainer = document.createElement('div')
		todosContainer.classList.add('todos-container')
		//
		const projectTodos = currentProject.todos
		projectTodos.forEach((todo) => {
			createToDoCard(todo, todosContainer)
		})

		projRender.appendChild(todosContainer)
		// Define current project, starting at index 0(default)
	}
}

function updateTree(projectsArray) {
	// Console log for status trigger
	console.log('updateTree triggered! Array received:')
	console.log(projectsArray)

	// fetch display element on DOM
	const display = document.querySelector('.overview-tree')
	// Clear existing content from element, for new version.
	display.textContent = ''

	// Create new DOM content
	const title = document.createElement('div')
	title.classList.add('title')
	title.textContent = 'PROJECTS'

	// tree roots render
	const treeRender = document.createElement('ul')
	treeRender.classList.add('overview')
	// for each project in projectsArray
	projectsArray.forEach((project, projectIndex) => {
		// add a project li element to tree root render
		const treeProject = document.createElement('li')
		treeProject.classList.add('overview-project')
		treeProject.addEventListener('click', () => renderDOM(project.title))

		const projectTitle = document.createElement('div')
		projectTitle.textContent = project.title

		const projectDelBtn = document.createElement('button')
		projectDelBtn.classList.add('delBtn')
		projectDelBtn.innerHTML = '&#10006'
		projectDelBtn.addEventListener('click', () => {
			projectsArray.splice(projectIndex, 1)
			updateTree(projectsArray)
		})
		// put the project elements together
		projectTitle.appendChild(projectDelBtn)
		treeProject.appendChild(projectTitle)

		// add todo titles of each project li as sub-li
		project.todos.forEach((todo, todoIndex) => {
			const projectTodoContainer = document.createElement('li')
			projectTodoContainer.classList.add('overview-todo')
			const projectTodoText = document.createElement('div')
			const projectTodoTitle = document.createElement('p')
			projectTodoTitle.textContent = todo.title
			const projectTodoDate = document.createElement('p')
			projectTodoDate.textContent = todo.dueDate
			projectTodoText.append(projectTodoTitle, projectTodoDate)

			const todoDelBtn = document.createElement('button')
			todoDelBtn.classList.add('delBtn')
			todoDelBtn.innerHTML = '&#10006'
			todoDelBtn.addEventListener('click', () => {
				projectsArray[projectIndex].todos.splice(todoIndex, 1)
				updateTree(projectsArray)
				render(findProject(project.title))
			})
			// put the todo elements together
			projectTodoContainer.append(projectTodoText, todoDelBtn)
			treeProject.appendChild(projectTodoContainer)
		})
		// attached project elements to tree root
		treeRender.appendChild(treeProject)
	})
	// attach tree root to display
	display.append(title, treeRender)
}

export { renderDOM, updateTree, toolBar }
