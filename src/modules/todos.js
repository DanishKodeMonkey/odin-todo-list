import { format } from 'date-fns'
import createModal from './modals'
import { projectsArray } from '..'
// Class module to export ,keep in mind it should only create the class objects.
// Keep type checks, as seperate functions

// Pseudocode todos (ironic I know)
/* Title should just be title, 
    can be whatever. 
      --  Make sure input is sanitised? -- it's an exercise, keep in mind for future project tho
        Limit to 30 letters? */
/* desc should be description, 
    can be whatever. 
        --Make sure input is sanitised?  -- not part of exercise, but good practice
        Limit to 100 letters? */
/* due date 
    should be type checked, 
        accept format dd/mm/yyyy?
        Option1: use function "formatDate() in constructor"
            function formatDate() should use checkDate() for type check
            return false if invalid, send to formatDate which returns "invalid format"
                if statements?
        Option2: use webpack library date-fns
    and turned into actual date object?  */
/* priority
    should be deterrmined between low, medium and high priority
        or just boolean ... probably just boolean
        if priority, make it stand out? */
/* notes
    can be whatever
    max 300 characters
    sanitise before input */
/* checklist (mainly during UI stage, 
            can check if accepts rest arguments tho 
            and throw into array during logic stage)
    optional,
    Logic stage:
    Accepts remaining arguments
        parse into constructor that accepts any number of inputs
        should have method that logs all checkpoints
    UI stage:
    accepts remaining arguments, and throws them into constructor
        named "createChecklist"
    create form div checklist
    for each argument parsed to constructor(str) */
class ToDo {
	constructor(
		project,
		title,
		desc,
		dueDate,
		priority,
		notes /* , ...checkList */
	) {
		this.id = generateUniqueID()
		this.project = project
		this.title = checkTitle(title)
		this.description = checkDesc(desc)
		this.dueDate = formatDate(dueDate)
		this.priority = priority
		this.notes = notes
		//checkList is a array, perfect.
		/* 		this.checklist = checkList */
	}
	printToDo() {
		console.log('====================================================')
		console.log(`assigned ID: ${this.id}`)
		console.log(`assigned project: ${this.project}`)
		console.log(`title: ${this.title},`)
		console.log(`description: ${this.desc},`)
		console.log(`due date: ${this.dueDate},`)
		console.log(`priority: ${this.priority},`)
		console.log(`notes: ${this.notes},`)
		/* 		console.log(`checklist: ${this.checklist}.`) */
		console.log('====================================================')
	}
}

// Checks below

function checkTitle(title) {
	// Would also include sanitisation
	if (title.length <= 20) return title
	else return 'Title too long'
}

function checkDesc(desc) {
	// Would also include sanitisation
	if (desc.length <= 100) return desc
	else return 'Description too long'
}

function formatDate(dueDate) {
	return format(new Date(dueDate), 'dd-MM-yyyy')
}

// Function for creating ToDo cards for render
function createToDoCard(todo, todosContainer) {
	const todoCard = document.createElement('div')
	todoCard.classList.add('todo-card', 'hidden-card')

	const toggleCard = () => {
		if (todoCard.classList.contains('hidden-card')) {
			console.log('ToggleCard trigger: ' + todo)
			showCard(todo)
		} else {
			hideCard()
		}
	}

	const showCard = (todo) => {
		console.log('showCard trigger: ' + todo)
		todoCard.classList.remove('hidden-card')
		todoCard.classList.add('show-card')
		addEditButton(todo)
	}

	const hideCard = () => {
		todoCard.classList.add('hidden-card')
		todoCard.classList.remove('show-card')
		removeEditButton()
	}

	const addEditButton = (todo) => {
		if (!todoCard.classList.contains('edit-button-added')) {
			const editBtn = document.createElement('button')
			editBtn.textContent = 'Edit'
			editBtn.classList.add('card-edit-btn')
			editBtn.addEventListener('click', () => {
				console.log('Sending todo to editCard' + Object.entries(todo))
				editCard(todo)
			})
			todoCard.appendChild(editBtn)
			todoCard.classList.add('edit-button-added')
		}
	}
	const removeEditButton = () => {
		const editBtn = todoCard.querySelector('.card-edit-btn')
		if (editBtn) {
			editBtn.remove()
			todoCard.classList.remove('edit-button-added')
		}
	}
	todoCard.addEventListener('click', toggleCard)
	todosContainer.appendChild(todoCard)

	for (const [key, value] of Object.entries(todo)) {
		const todoKeyValueCont = document.createElement('div')
		todoKeyValueCont.classList.add('todo-key-value-cont')

		const todoKey = document.createElement('span')
		todoKey.classList.add('todo-key')
		todoKey.textContent = `${key.toUpperCase()}:`
		const todoValue = document.createElement('p')
		todoValue.classList.add('todo-value')
		todoValue.textContent = value
		todoKeyValueCont.append(todoKey, todoValue)
		todoCard.appendChild(todoKeyValueCont)
	}
}
// Function for creating unique IDs using a stringified date
const usedIds = []
function generateUniqueID() {
	let id
	// Keep forming a random number, until a unused number is found.
	do {
		id = Math.floor(Math.random() * 9999) + 1
	} while (usedIds.includes(id))
	// push the found number to usedID array
	usedIds.push(id)
	// Return the new ID
	return id.toString()
}
function arraysAreEqual(arr1, arr2) {
	return JSON.stringify(arr1) === JSON.stringify(arr2)
}
function editCard(card) {
	console.log(card)
	const values = Object.values(card)
	createModal('edit Todo', values)
	modal.showModal()
}
export { ToDo, createToDoCard }
