import project from './projects'
import { projectsArray } from './datahandler'

// This module handles saving and loading data from storage

// First, check if localStorage is supported and avaible (Thanks Mozilla)

function storageAvailable(type) {
	console.log(`Checking for ${type} availability...`)
	let storage
	try {
		// Open the storage section of the window element
		// create a item with a string value
		// Attempt to send the item to storage, and remove it.
		// If it succeeds, return true.
		storage = window[type]
		const x = '__storage_test__'
		storage.setItem(x, x)
		storage.removeItem(x)
		console.log(`${type} test successful! ${type} ready!`)
		return true
		//if it fails, catch error
	} catch (e) {
		e instanceof DOMException &&
			// Everything except firefox
			(e.code === 22 ||
				//Firefox
				e.code === 1014 ||
				// test name field too, because code may not be present
				// everything except firefox
				e.name === 'QuotaExceededError' ||
				// Firefox
				(e.name === 'NS_ERROR_DOM_QUOTE_REACHED' &&
					// Acknowledge QuoteExceededError only if there's already something stored.
					storage &&
					storage.length !== 0))
	}
}

// Function that checks storage on init()
function checkStorage(data) {
	console.log(`CheckStorage trigger, received ${data}, processing...`)

	console.log(`Checking local storage for item ${data}`)
	if (!localStorage.getItem(data)) {
		console.log(`${data} not found.`)
		console.log(localStorage)
		return false
	} else if (localStorage.getItem(data)) {
		console.log(`${data} found!`)
		console.log(localStorage)
		return true
	}
}

function saveProjects(projectsArray) {
	console.log('SaveProjects trigger, received: ')
	console.log(projectsArray)
	console.log('transfering array to storage as string...')
	localStorage.setItem('projects and todos', JSON.stringify(projectsArray))
	console.log('array saved to storage, result: ')
	console.log(localStorage)
}

/* function saveTodos(project) {
	const projectTodos = []
	project.forEach((todo) => {
		projectTodos.push(todo)
	})
	console.log(projectTodos)
} */

function getProjects() {
	console.log('getProjects trigger')
	console.log('Getting objects from localStorage...')
	console.log(localStorage.getItem('projects and todos'))
	console.log('Parsing as array...')
	const projectsAndTodos = JSON.parse(
		localStorage.getItem('projects and todos')
	)
	console.log('DONE! Result: ')
	console.log(projectsAndTodos)
	console.log('Re-creating projects...')
	projectsAndTodos.forEach((savedProject) => {
		const reconstructedProject = new project(
			savedProject.title,
			savedProject.todos
		)
		console.log('Reconstructed object: ')
		console.log(reconstructedProject)

		projectsArray.push(reconstructedProject)
		console.log('Active session updated, result: ')
		console.log(projectsArray)
	})
	return projectsArray
}

// Test if storage has been populated (need to be implemented properly)

// Storage only supports storing and retrieving strings, for arrays and objects, stringify.

/* const person = { name: "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" } */

// Get values from storage (to be implemented)
/* function getProjectsAndTodos(){
    // Assign all of the projects here to variables
    const project1 = localStorage.getItem("project1")
    //ETC

    //assign all stored todos as variables
    const todo1 = localStorage.getItem("todo1")
    //etc

    // run constructors with the data, effectively making new todos (start with projects)

} */

// FUnction to set values in storage(or update them if existing)
/* function setProjectsAndTodos(){
localStorage.setItem("project1", document.getElementById("project1").value)
localStorage.setItem("todo1", document.getElementById("todo1").value)
} */

// The storage event can be listened to, useful for debugging
/* window.addEventListener("storage", (e) =>{
    console.log(e.key) // key of the data that changed
    console.log(e.oldValue) // Old value before the chance
    console.log(e.newValue) //new value afater teh change
    console.log(e.my-url) // url where the change happened
    console.log(JSON.stringify(e.storageArea)) // The storage object itself stringified for content view.
}) */

// Remove items from storage

/* function removeTodo(){
    localStorage.removeItem("todo")
} */

/* function removeProject(){
    selectedproject.forEach('todo', () =>{
        removeTodo()
    }
    localStorage.removeItem(selectedproject)
    )
} */

export { checkStorage, storageAvailable, saveProjects, getProjects }
