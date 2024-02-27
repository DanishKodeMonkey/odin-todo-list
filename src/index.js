import './style.css'
import ToDo from './modules/todos'

let test = new ToDo(
	'title',
	'descriptionhere',
	'20-02-2024',
	'low priority',
	'noted to be notes',
	'no checklist'
)
/* let test2 = new ToDo(
	'title2butitswaytoolong',
	'descriptionheretoo',
	'10/08/24',
	'high priority',
	'noted to be notes',
	'checklist'
) */

test.printToDo()
/* test2.printToDo() */
