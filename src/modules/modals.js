import './modals.css'
import { projectsArray, updateTree } from '../index'
import ToDo from './todos'
import project from './projects'

export default function createModal(type) {
	// Fetch modal element from DOM
	const modal = document.querySelector('#modal')
	modal.textContent = ''

	// Create relevant modal content
	// Form elements holds entire form inside modal
	const form = document.createElement('form')
	form.setAttribute('autocomplete', 'off')

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

	//submit button
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

	// Button functionality:
	// Submit button
	// Fetch input values
	let modalInput = modal.querySelectorAll('select, input, textarea')

	// Add event listener to submit button.
	submitBtn.addEventListener('click', (e) => {
		e.preventDefault()
		console.log(modalInput.value)
		console.log('inputPara type' + inputPara.getAttribute('type'))
		const inputType = inputPara.getAttribute('type')
		/* 		// Prevent default button behavior
		e.preventDefault() */
		// function to fetch project object from array
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
			const checkList = modalInput[6].value.trim()

			// Create todo object
			const todo = new ToDo(
				title,
				description,
				dueDate,
				priority,
				notes,
				checkList
			)
			// fetch project object from title
			const selectedProject = findProject(projectTitle)
			if (selectedProject) {
				selectedProject.addToProject(todo)
				updateTree(projectsArray)
				modal.close()
			} else {
				console.error(`Project with title: ${projectTitle} not found in array.`)
			}
		} else if (inputType === 'project') {
			const projectName = modalInput[0].value.trim()

			const newProject = new project(projectName)

			projectsArray.push(newProject)
			console.log(projectsArray)
			updateTree(projectsArray)
			modal.close()
		}

		// done, close modal
	})

	// Cancel button
	cancelBtn.addEventListener('click', (e) => {
		// prevent default behavior
		e.preventDefault()
		// clear dataset
		modalInput = ''
		//close modal
		modal.close()
	})
}

function createTodoModal(inputPara) {
	// inputPara will hold all input elements for easy appending later
	// assign type attribute for later processing
	inputPara.setAttribute('type', 'todo')
	//Project input
	const projectCont = document.createElement('div')
	const projectLabel = document.createElement('label')
	projectLabel.setAttribute('for', 'projectSelect')
	projectLabel.textContent = 'Active project: '
	const projectSelect = document.createElement('select')
	projectSelect.setAttribute('name', 'select-Project')
	projectSelect.setAttribute('id', 'select-Project')
	projectsArray.forEach((project) => {
		const projectItem = document.createElement('option')
		projectItem.setAttribute('value', project.title)
		projectItem.textContent = project.title
		projectSelect.appendChild(projectItem)
	})
	projectCont.append(projectLabel, projectSelect)

	// Title input
	const titleCont = document.createElement('div')
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleCont.append(titleLabel, titleInput)

	// description input
	const descCont = document.createElement('div')
	const descriptionLabel = document.createElement('label')
	descriptionLabel.setAttribute('for', 'descriptionInput')
	descriptionLabel.textContent = 'Description: '
	const descriptionInput = document.createElement('input')
	setInputAttributes(descriptionInput, 'description', 'text')
	descCont.append(descriptionLabel, descriptionInput)

	// dueDate input
	const dueDateCont = document.createElement('div')
	const dueDateLabel = document.createElement('label')
	dueDateLabel.setAttribute('for', 'dueDateInput')
	dueDateLabel.textContent = 'Due date: '
	const dueDateInput = document.createElement('input')
	setInputAttributes(dueDateInput, 'dueDate', 'date')
	dueDateCont.append(dueDateLabel, dueDateInput)

	// priority
	const priorityCont = document.createElement('div')
	const priorityLabel = document.createElement('label')
	priorityLabel.setAttribute('for', 'priorityInput')
	priorityLabel.textContent = 'Priority: '
	const priorityInput = document.createElement('input')
	setInputAttributes(priorityInput, 'priority', 'checkbox')
	priorityCont.append(priorityLabel, priorityInput)

	// Notes
	const notesCont = document.createElement('div')
	const notesLabel = document.createElement('label')
	notesLabel.setAttribute('for', 'notesInput')
	notesLabel.textContent = 'Notes: '
	const notesInput = document.createElement('textarea')
	setInputAttributes(notesInput, 'notes', 'textArea')
	// textArea specific attributes

	notesCont.append(notesLabel, notesInput)

	// checklists(rest)
	const checklistCont = document.createElement('div')
	const checklistLabel = document.createElement('label')
	checklistLabel.setAttribute('for', 'checklistInput')
	checklistLabel.textContent = 'Checklist: '
	const checklistInput = document.createElement('input')
	setInputAttributes(checklistInput, 'checklist', 'text')
	checklistCont.append(checklistLabel, checklistInput)

	// Put it all together
	inputPara.append(
		projectCont,
		titleCont,
		descCont,
		dueDateCont,
		priorityCont,
		notesCont,
		checklistCont
	)
}

function createProjectModal(inputPara) {
	// inputPara holds elements below for easy appending
	// assign type attribute for later processing
	inputPara.setAttribute('type', 'project')
	const titleLabel = document.createElement('label')
	titleLabel.setAttribute('for', 'titleInput')
	titleLabel.textContent = 'Title: '
	const titleInput = document.createElement('input')
	setInputAttributes(titleInput, 'title', 'text')
	// add extra attribute on this one so it's the first input field focussed
	titleInput.setAttribute('autofocus', '')
	// package element
	titleLabel.appendChild(titleInput)
	// put it together
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
