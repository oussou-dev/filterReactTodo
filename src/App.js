import React from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			newInput: "",
			todos: [
				{ id: 1, name: "Learn JS", completed: false },
				{ id: 2, name: "Learn React", completed: false },
				{ id: 3, name: "Learn Redux", completed: false }
			]
		}
	}

	handleChange = e => {
		console.log(e.target.value)
		this.setState({
			newInput: e.target.value
		})
	}

	generateID = () => {
		const ifTodo = this.state.todos.length
		if (!ifTodo) {
			return 1
		} else {
			const newID =
				this.state.todos[this.state.todos.length - 1].id + 1
			console.log(newID)
			return newID
		}
	}

	addTodo = () => {
		const actualTodos = [...this.state.todos]
		// console.log(actualTodos)
		const newTodo = {
			id: this.generateID(),
			name: this.state.newInput,
			completed: false
		}
		// actualTodos.push(newTodo) - rmq : ok
		// const finalTodos = actualTodos.push(newTodo) - rmq: copy by ref. --> bad
		const finalTodos = [...actualTodos, newTodo] // rmq: copy by value --> ok
		// console.log(finalTodos)
		this.setState({
			todos: finalTodos,
			newInput: ""
		})
	}

	render() {
		return (
			<div className="container p-3">
				<div className="jumbotron p-2">
					<h1 className="display-4 text-center">Todo List</h1>
					<p className="lead text-center">ReactJS & Bootstrap 4</p>
				</div>

				<AddTodo
					addTodo={this.addTodo}
					handleChange={this.handleChange}
					newInput={this.state.newInput}
				/>

				<TodoList todos={this.state.todos} />
				<br />
			</div>
		)
	}
}

export default App
