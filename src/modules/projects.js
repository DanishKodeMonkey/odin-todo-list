export default class project {
	constructor(title = 'Default', todos = []) {
		this.title = title
		this.todos = todos
	}
	addToProject(todo) {
		this.todos.push(todo)
	}

	printProject() {
		console.log(this.title)
		console.log(this.todos)
	}
}
