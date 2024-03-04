import './style.css'
import { toolBar, renderDOM, updateTree } from './modules/render'
import { projectsArray } from './modules/datahandler'
import project from './modules/projects'
import { checkStorage, storageAvailable } from './modules/data-storage'

// Initialise page, checks for existing projects otherwise creates default project.
// Also activates various modules
export default function init() {
	console.log('initialiser triggered')
	console.log(`Checking ProjectsArray...`)
	if (projectsArray.length === 0) {
		console.log('projectsArray is empty. Creating default project...')
		let defaultProject = new project()
		projectsArray.push(defaultProject)
		console.log(`default object created, name: ${defaultProject.title}`)
		// Check storage implementation ready
	} else console.log(`Array found in projectsArray: ${projectsArray[0].title}`)
	// Check storage..
	storageAvailable('localStorage')
	checkStorage(projectsArray[0])

	// update DOM tree
	toolBar()
	renderDOM()
}
init()
