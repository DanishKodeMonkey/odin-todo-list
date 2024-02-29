import './style.css'
import project from './modules/projects'
import ToDo from './modules/todos'
import createModal from './modules/modals'
// main array containing all projects and todos (Lets not remove this without due cause yea?)
let projectsArray = []
// content area

/* pseudocode - content area 
 
 Render a display containing the selected project(perhaps chosing via the project overview?)
	Show the title of the project (e.g default for the default project)
	render a container for displaying todos
		in container render a card for each todo of the project(mainly showing title and description)
			clicking a card should expand the card in the middle of the screen(modal?)
				should be editable here? Have a edit button?(start with just showing it though)
				should be deletable here? Have a delete button? (start with just showing it though)
				clicking outside the expanded card should close the card again
clicking any other project in the project overview, clears the display, and creates a new one 
 */
// toolbar

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

function updateProjectsArray(inputType, modalInput) {
	if (inputType === 'todo') {
		const findProject = (title) => {
			return projectsArray.find((project) => project.title === title)
		}

		// Fetch input data from modalInput
		const projectTitle = modalInput[0].value.trim()
		const title = modalInput[1].value.trim()
		const description = modalInput[2].value.trim()
		const dueDate = modalInput[3].value.trim()
		const priority = modalInput[4].checked
		const notes = modalInput[5].value.trim()
		/* 			const checkList = modalInput[6].value.trim() */

		// Create todo object
		const todo = new ToDo(
			title,
			description,
			dueDate,
			priority,
			notes
			/* 				checkList */
		)
		// fetch project object from title
		const selectedProject = findProject(projectTitle)
		if (selectedProject) {
			selectedProject.addToProject(todo)
			updateTree(projectsArray)
		} else {
			console.error(`Project with title: ${projectTitle} not found in array.`)
		}
	} else if (inputType === 'project') {
		const projectName = modalInput[0].value.trim()

		const newProject = new project(projectName)

		projectsArray.push(newProject)
		console.log(projectsArray)
		updateTree(projectsArray)
	}
}

// Function for updating the overview tree on UI
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
			const projectTodoTitle = document.createElement('li')
			projectTodoTitle.classList.add('overview-todo')
			projectTodoTitle.textContent = todo.title + ' ' + todo.dueDate

			const todoDelBtn = document.createElement('button')
			todoDelBtn.classList.add('delBtn')
			todoDelBtn.innerHTML = '&#10006'
			todoDelBtn.addEventListener('click', () => {
				projectsArray[projectIndex].todos.splice(todoIndex, 1)
				updateTree(projectsArray)
			})
			// put the todo elements together
			projectTodoTitle.appendChild(todoDelBtn)
			treeProject.appendChild(projectTodoTitle)
		})
		// attached project elements to tree root
		treeRender.appendChild(treeProject)
	})
	// attach tree root to display
	display.append(title, treeRender)
}

// Page initialiser, initialise resources.
function init() {
	console.log('initialiser triggered')
	if (projectsArray.length === 0) {
		console.log('projectsArray is empty. Creating default array')
		let defaultProject = new project()
		projectsArray.push(defaultProject)
		console.log(`default object created, name: ${defaultProject.title}`)
	} else console.log(`Array found in projectsArray: ${projectsArray[0].title}`)
	// update DOM tree
	updateTree(projectsArray)
}

// Page initialiser
// Check if a project exist, if not, create a project.
// Uses a pre set blank array here until persistence is established
init()
export { projectsArray, updateProjectsArray }
// Sim tests
/* let test = new ToDo(
	'title',
	'descriptionhere',
	'20-02-2024',
	'poop',
	'noted to be notes',
	'no checklist',
	'but there is',
	'butnotruly',
	'cmontinychecklist',
	'letsgooo!'
)
let test2 = new ToDo(
	'title2butitswaytoolong',
	'descriptionheretoo',
	'20-02-2024',
	'yes',
	'noted to be notes',
	'checklist'
)

let test3 = new ToDo(
	'title3pret',
	'its pretty',
	'00-06-2026',
	'yes',
	'terep sepre lerem tuti frutti melon scrutti holy moly shifu soley'
)

// Sim tests

let project1 = new project('test Project')
let project2 = new project('second project test')

test.printToDo()
test2.printToDo()
test3.printToDo()

project1.addToProject(test)
project1.addToProject(test2)

project2.addToProject(test3)

project1.printProject()
project2.printProject()

projectsArray.push(project1, project2)
console.log(projectsArray)
updateTree(projectsArray)
 */
