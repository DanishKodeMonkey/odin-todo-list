export default class project {
	constructor(title = 'Default') {
		this.title = title
		this.todos = []
	}

	addToProject(todo) {
		this.todos.push(todo)
	}

	printProject() {
		console.log(this.title)
		console.log(this.todos)
	}
}
