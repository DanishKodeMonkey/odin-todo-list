import './style.css'
import { toolBar, renderDOM, updateTree } from './modules/render'
import { projectsArray } from './modules/datahandler'
import project from './modules/projects'
import {
	checkStorage,
	storageAvailable,
	saveProjects,
	getProjects,
} from './modules/data-storage'
import { ToDo } from './modules/todos'

// Initialise page, checks for existing projects otherwise creates default project.
// Also activates various modules
export default function init() {
	console.log('initialiser triggered!')
	// Check local storage access
	storageAvailable('localStorage')

	console.log(`Checking ProjectsArray...`)
	if (projectsArray.length === 0) {
		console.log('projectsArray is empty. Checking local storage...')
		if (checkStorage('projects and todos')) {
			console.log('Projects found! Transfering to active session...')
			getProjects()
		} else {
			let defaultProject = new project()

			/* 			//TESTING AREA BELOW
			let todoDefault = new ToDo(
				'Default',
				'todoDefault',
				'todoDefaultdesc',
				'2024-01-23',
				false,
				'todoDefaultNotes note'
			)
			defaultProject.addToProject(todoDefault)

			let project1 = new project('project 1')
			let ToDo1 = new ToDo(
				'project 1',
				'todo1',
				'todo1desc',
				'2024-01-03',
				true,
				'todo1Notes note'
			)
			let ToDo2 = new ToDo(
				'project 1',
				'todo2',
				'todo2desc',
				'2024-02-03',
				true,
				'todo2Notes note'
			)
			project1.addToProject(ToDo1)
			project1.addToProject(ToDo2)

			let project2 = new project('project 2')
			let ToDo3 = new ToDo(
				'project 2',
				'todo3',
				'todo3desc',
				'2025-01-03',
				true,
				'todo3Notes note'
			)
			let ToDo4 = new ToDo(
				'project 2',
				'todo4',
				'todo4desc',
				'2024-10-03',
				true,
				'todo4Notes note'
			)
			project2.addToProject(ToDo3)
			project2.addToProject(ToDo4)
			// TEst end */

			projectsArray.push(defaultProject)
			console.log(`default object created, name: ${defaultProject.title}`)
			console.log('saving to local storage...')
			saveProjects(projectsArray)
		}

		// update DOM
		toolBar()
		renderDOM(projectsArray[0])
		console.log('updating tree')
		console.log(projectsArray)
		updateTree(projectsArray)
	}
}
init()
