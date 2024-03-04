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
