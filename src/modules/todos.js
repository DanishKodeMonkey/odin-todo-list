import { format } from 'date-fns'
import createModal from './modals'
// Class module to export ,keep in mind it should only create the class objects.
class ToDo {
	constructor(project, title, desc, dueDate, priority, notes) {
		this.project = project
		this.title = checkTitle(title)
		this.description = checkDesc(desc)
		this.dueDate = formatDate(dueDate)
		this.priority = priority
		this.notes = notes
		this.id = generateUniqueID()
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
	return format(new Date(dueDate), 'MM-dd-yyyy')
}

// Function for creating ToDo cards for render
function createToDoCard(todo, todosContainer) {
	const todoCard = document.createElement('div')
	todoCard.classList.add('todo-card', 'hidden-card')

	const toggleCard = () => {
		if (todoCard.classList.contains('hidden-card')) {
			showCard(todo)
		} else {
			hideCard()
		}
	}

	const showCard = (todo) => {
		todoCard.classList.remove('hidden-card')
		todoCard.classList.add('show-card')
		renderValues('full')
		addEditButton(todo)
	}

	const hideCard = () => {
		todoCard.classList.add('hidden-card')
		todoCard.classList.remove('show-card')
		renderValues('mini')
		removeEditButton()
	}

	const addEditButton = (todo) => {
		const editBtn = todoCard.querySelector('.card-edit-btn')
		if (!editBtn) {
			const editBtn = document.createElement('button')
			editBtn.textContent = 'Edit'
			editBtn.classList.add('card-edit-btn')
			editBtn.addEventListener('click', () => {
				console.log('Sending todo to editCard' + Object.entries(todo))
				editCard(todo)
			})
			todoCard.appendChild(editBtn)
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

	function renderValues(state) {
		console.log('renderValues trigger, received data: ')
		console.log(state)
		todoCard.innerHTML = ''
		if (todo !== undefined) {
			for (const [key, value] of Object.entries(todo)) {
				if (state !== 'full') {
					// minimised state triggered
					if (key !== 'title' && key !== 'dueDate') {
						continue
					} //Skip itteration for this state if not title or dueDate
				}
				if (key === 'project' || key === 'id') {
					continue //skip itteration for project title, irrelevant.
				}
				// Check if card was already rendered:

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
	}
	console.log('Rendering values in mini format')
	renderValues('mini')
}
// Function for creating unique IDs
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
function editCard(card) {
	const values = Object.values(card)
	createModal('edit Todo', values)
	modal.showModal()
}
export { ToDo, createToDoCard }
