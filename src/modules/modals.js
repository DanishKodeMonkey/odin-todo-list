import './modals.css'

export default function createModal(type) {
	// Fetch modal element from DOM
	const modal = document.querySelector('#modal')

	// Create relevant modal content
	// Form elements holds entire form inside modal
	const form = document.createElement('form')

	//Title element, tells the type of object being created
	const paraTitle = document.createElement('p')
	paraTitle.classList.add('container', 'header')
	const modalLabel = document.createElement('label')
	modalLabel.setAttribute('for', 'modal')
	modalLabel.textContent = type.toUpperCase()
	paraTitle.appendChild(modalLabel)

	// Check which type the modal is for(todo, or project?)
	//Create relevant input fields
	const inputPara = document.createElement('p')
	inputPara.classList.add('container')
	if (type === 'todo') {
		createTodoModal(inputPara)
	} else if (type === 'project') {
		createProjectModal(inputPara)
	}

	//Modal buttons
	const btnDiv = document.createElement('div')
	const submitBtn = document.createElement('input')
	submitBtn.classList.add('modal-button')
	submitBtn.setAttribute('type', 'submit')
	submitBtn.setAttribute('id', 'submit')
	submitBtn.setAttribute('value', 'submit')
	const cancelBtn = document.createElement('input')
	cancelBtn.classList.add('modal-button')
	cancelBtn.setAttribute('type', 'submit')
	cancelBtn.setAttribute('id', 'cancel')
	cancelBtn.setAttribute('value', 'cancel')
	btnDiv.append(submitBtn, cancelBtn)

	//put it all together!
	form.append(paraTitle, inputPara, btnDiv)
	modal.appendChild(form)
}

function createTodoModal(inputPara) {
	// input para will hold all input elements for easy appending later

	// Title input
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleLabel.appendChild(titleInput)

	// description input
	const descriptionLabel = document.createElement('label')
	descriptionLabel.setAttribute('for', 'descriptionInput')
	descriptionLabel.textContent = 'Description: '
	const descriptionInput = document.createElement('input')
	setInputAttributes(descriptionInput, 'description', 'text')
	descriptionLabel.appendChild(descriptionInput)

	// dueDate input
	const dueDateLabel = document.createElement('label')
	dueDateLabel.setAttribute('for', 'dueDateInput')
	dueDateLabel.textContent = 'Due date: '
	const dueDateInput = document.createElement('input')
	setInputAttributes(dueDateInput, 'dueDate', 'date')
	dueDateLabel.appendChild(dueDateInput)

	// priority
	const priorityLabel = document.createElement('label')
	priorityLabel.setAttribute('for', 'priorityInput')
	priorityLabel.textContent = 'Priority: '
	const priorityInput = document.createElement('input')
	setInputAttributes(priorityInput, 'priority', 'checkbox')
	priorityLabel.appendChild(priorityInput)

	// Notes
	const notesLabel = document.createElement('label')
	notesLabel.setAttribute('for', 'notesInput')
	notesLabel.textContent = 'Notes: '
	const notesInput = document.createElement('textarea')
	setInputAttributes(notesInput, 'notes', 'textArea')
	// textArea specific attributes
	notesInput.setAttribute('rows', '4')
	notesInput.setAttribute('cols', '10')
	notesLabel.appendChild(notesInput)

	// checklists(rest)
	const checklistLabel = document.createElement('label')
	checklistLabel.setAttribute('for', 'checklistInput')
	checklistLabel.textContent = 'Checklist: '
	const checklistInput = document.createElement('input')
	setInputAttributes(checklistInput, 'checklist', 'text')
	checklistLabel.appendChild(checklistInput)

	// Put it all together
	inputPara.append(
		titleLabel,
		descriptionLabel,
		dueDateLabel,
		priorityLabel,
		notesLabel,
		checklistLabel
	)
}

function createProjectModal(inputPara) {
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleLabel.appendChild(titleInput)

	inputPara.appendChild(titleLabel)
}

function setInputAttributes(elem, type, inpType) {
	const attributes = {
		name: 'project-' + type,
		id: 'project-' + type,
		type: inpType,
		required: '',
	}
	for (const [key, val] of Object.entries(attributes)) {
		elem.setAttribute(key, val)
	}
}
