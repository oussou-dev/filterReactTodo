import React from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			newInput: "",
			editingMode: false,
			editingIndex: null,
			filter: "all",
			todos: [
				{ id: 1, name: "JavaScript", completed: false },
				{ id: 2, name: "Python", completed: false },
				{ id: 3, name: "Sodidity", completed: false }
			],
			notification: null
		}
	}

	handleChange = e => {
		// console.log(e.target.value)
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
				this.state.todos[this.state.todos.length - 1].id + 1 // => lastTod.id + 1
			// console.log(newID)
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
		this.alert("Todo added sucessfully")
	}

	editTodo = index => {
		const newEditingMode = !this.state.editingMode
		this.setState({
			editingMode: newEditingMode,
			newInput: this.state.todos[index].name,
			editingIndex: index
		})
	}

	updateTodo = () => {
		const todos = [...this.state.todos]
		const editingTodo = todos[this.state.editingIndex]
		editingTodo.name = this.state.newInput
		this.setState({
			todos: todos,
			editingMode: null,
			newInput: ""
		})
		this.alert("Todo updated sucessfully")
	}

	deleteTodo = index => {
		const todoIdToDelete = this.state.todos[index].id
		const actualTodos = this.state.todos
		const finalTodos = actualTodos.filter(
			todo => todo.id !== todoIdToDelete
		)

		this.setState({
			todos: finalTodos
			// notification: "Todo deleted sucessfully"
		})

		this.alert("Todo deleted sucessfully")
	}

	alert = notification => {
		this.setState({
			notification
		})

		setTimeout(() => {
			this.setState({
				notification: null
			})
		}, 1300)
	}

	todoCompleted = (e, index) => {
		// console.log(e.target.checked)
		const todos = [...this.state.todos]
		todos[index].completed = e.target.checked
		console.log(todos)
		this.setState({
			todos
		})
	}

	// searchTodo = query => {
	// 	// console.log(query)
	// 	const queryTodo = query.target.value.toLowerCase()
	// 	console.log(queryTodo)
	// 	const actualTodos = [...this.state.todos]
	// 	const finalTodos = actualTodos.filter(todo => {
	// 		// if (queryTodo.length > 0) {
	// 		// 	return todo.name.toLowerCase() === queryTodo
	// 		// } else {
	// 		// 	return todo
	// 		// }
	// 		return todo.name.indexOf(queryTodo) !== -1
	// 	})

	// 	console.log(finalTodos)
	// 	this.setState({
	// 		todos: finalTodos
	// 	})
	// }

	setFilter = filter => {
		this.setState({
			filter: filter
		})
	}

	render() {
		// console.log(this.state.todos)
		return (
			<div className="container p-3">
				<div className="jumbotron p-2">
					<h1 className="display-4 text-center">Todo List</h1>
					<p className="lead text-center">
						<span style={{ fontSize: "15px" }}>
							ReactJS / Bootstrap 4 / Axios
						</span>
					</p>
				</div>

				{/* <div className="container"> */}
				{this.state.notification && (
					<div className="alert alert-success">
						<p className="text-center my-auto">
							{this.state.notification}
						</p>
					</div>
				)}
				{/* </div> */}

				<AddTodo
					addTodo={this.addTodo}
					handleChange={this.handleChange}
					newInput={this.state.newInput}
					editingMode={!this.state.editingMode}
					updateTodo={this.updateTodo}
				/>

				{!this.state.editingMode && (
					<TodoList
						todos={this.state.todos}
						deleteTodo={this.deleteTodo}
						editTodo={this.editTodo}
						todoCompleted={this.todoCompleted}
						// searchTodo={this.searchTodo}
						setFilter={this.setFilter}
						currentFilter={this.state.filter}
					/>
				)}
				<br />
			</div>
		)
	}
}

export default App
