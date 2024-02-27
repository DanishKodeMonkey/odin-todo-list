import { format } from 'date-fns'

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

export default class ToDo {
	constructor(title, desc, dueDate, priority, notes, ...checkList) {
		this.title = checkTitle(title)
		this.desc = checkDesc(desc)
		this.dueDate = formatDate(dueDate)
		this.priority = isPriority(priority)
		this.notes = notes
		//checkList is a array, perfect.
		this.checklist = checkList
	}
	printToDo() {
		console.log('====================================================')
		console.log(`title: ${this.title},`)
		console.log(`description: ${this.desc},`)
		console.log(`due date: ${this.dueDate},`)
		console.log(`priority: ${this.priority},`)
		console.log(`notes: ${this.notes},`)
		console.log(`checklist: ${this.checklist}.`)
		console.log('====================================================')
	}
}

// Checks below

function checkTitle(title) {
	// Would also include sanitisation
	if (title.length <= 10) return title
	else return 'Title too long'
}

function checkDesc(desc) {
	// Would also include sanitisation
	if (desc.length <= 100) return desc
	else return 'Description too long'
}

function formatDate(dueDate) {
	const arr = dueDate.split(/-/)

	return format(new Date(arr[2], arr[1], arr[0]), 'dd-MM-yyyy')
}

function isPriority(priority) {
	if (priority == 'yes') return true
	else return false
}

function createChecklist(checkList) {
	//reserved for UI implementation?
}
