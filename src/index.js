import './style.css'
import { toolBar, renderDOM, updateTree } from './modules/render'
import { projectsArray } from './modules/datahandler'
import project from './modules/projects'

// Initialise page, checks for existing projects otherwise creates default project.
// Also activates various modules
export default function init() {
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
init()
