export default class project {
	constructor(title = 'default') {
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