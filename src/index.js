import './style.css'
import project from './modules/projects'
import ToDo from './modules/todos'
import createModal from './modules/modals'
let projectsArray = []

// App function should handle evoking DOM elements onscreen.
function app() {
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
	// Page initialiser
	// Check if a project exist, if not, create a project.
	// Uses a pre set blank array here until persistence is established
	init()
}

app()

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
	console.log('updateTree triggered! Array received:')
	console.log(projectsArray)
	const display = document.querySelector('.overview-tree')
	// Clear existing DOM for new version
	display.textContent = ''

	// Create new DOM content
	const title = document.createElement('div')
	title.classList.add('title')
	title.textContent = 'PROJECTS'

	const treeRender = document.createElement('ul')
	treeRender.classList.add('overview')
	projectsArray.forEach((project) => {
		// add a project sub-ul element to tree root
		const treeProject = document.createElement('li')
		treeProject.classList.add('overview-project')
		treeProject.textContent = project.title
		//add todo titles to project as li
		project.todos.forEach((todos) => {
			const projectTodo = document.createElement('li')
			projectTodo.classList.add('overview-todo')
			projectTodo.textContent = todos.title
			treeProject.appendChild(projectTodo)
		})
		treeRender.appendChild(treeProject)
		return treeRender
	})
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

//test

/* const testAttrBomb = document.createElement('input')

const AttrBomb = {
	name: 'project-title',
	id: 'project-title',
	type: 'text',
}

function bombAttr(bomb, element) {
	for (const [key, val] of Object.entries(bomb)) {
		element.setAttribute(key, val)
	}
}

console.log(testAttrBomb)
console.log(AttrBomb)

bombAttr(AttrBomb, testAttrBomb)
console.log(testAttrBomb)
 */
