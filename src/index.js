import './style.css'
import ToDo from './modules/todos'

let test = new ToDo(
	'title',
	'descriptionhere',
	'20-02-2024',
	'poop',
	'noted to be notes',
	'no checklist',
	'but there is',
	'butnotruly',
	'cmontinychecklist',
	'letsgooo!'
)
let test2 = new ToDo(
	'title2butitswaytoolong',
	'descriptionheretoo',
	'20-02-2024',
	'high priority',
	'noted to be notes',
	'checklist'
)

test.printToDo()
test2.printToDo()
