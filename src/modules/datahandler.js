import { ToDo } from './todos'
import project from './projects'
import { renderDOM, updateTree } from './render'
import { toolBar } from './render'
let projectsArray = []

function init() {
	console.log('initialiser triggered')
	if (projectsArray.length === 0) {
		console.log('projectsArray is empty. Creating default array')
		let defaultProject = new project()
		projectsArray.push(defaultProject)
		console.log(`default object created, name: ${defaultProject.title}`)
	} else console.log(`Array found in projectsArray: ${projectsArray[0].title}`)
	// update DOM tree
	console.log(projectsArray)
	toolBar()
	renderDOM()
	updateTree(projectsArray)
}
function updateProjectsArray(inputType, modalInput, todoID) {
	// Fetch input data from modalInput
	if (inputType === 'todo' || inputType === 'todo-edit') {
		const projectTitle = modalInput[0].value.trim()
		const title = modalInput[1].value.trim()
		const description = modalInput[2].value.trim()
		const dueDate = modalInput[3].value.trim()
		const priority = modalInput[4].checked
		const notes = modalInput[5].value.trim()

		if (inputType === 'todo-edit') {
			console.log(
				'updateProjectsArray edit trigger: ' + projectTitle,
				title,
				description,
				dueDate,
				priority,
				notes
			)
			// Find a saved todo matching ID of edited todo
			const selectedProject = findProject(projectTitle)
			const currentTodoIndex = selectedProject.todos.findIndex(
				(todo) => todo.id === todoID
			)
			console.log('todo index ' + currentTodoIndex + ' matches ' + todoID)
			if (currentTodoIndex !== -1) {
				// Remove existing todo from the array
				const currentTodo = selectedProject.todos.splice(currentTodoIndex, 1)[0]
				// Create a new todo with the updated information
				const updatedTodo = new ToDo(
					projectTitle,
					title,
					description,
					dueDate,
					priority,
					notes
				)

				if (selectedProject) {
					selectedProject.addToProject(updatedTodo)
					updateTree(projectsArray)
					renderDOM(selectedProject)
				} else {
					console.error(
						`Project with title: ${projectTitle} not found in array.`
					)
				}
			}
		}
		if (inputType === 'todo') {
			// Create todo object
			const todo = new ToDo(
				projectTitle,
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
				renderDOM(selectedProject)
			} else {
				console.error(`Project with title: ${projectTitle} not found in array.`)
			}
		}
	} else if (inputType === 'project') {
		const projectName = modalInput[0].value.trim()

		const newProject = new project(projectName)

		projectsArray.push(newProject)
		console.log(projectsArray)
		updateTree(projectsArray)
	}
}

// Function to find a project based on a project title string
function findProject(projectTitle) {
	return projectsArray.find((project) => project.title === projectTitle)
}

export { projectsArray, updateProjectsArray, findProject, init }
