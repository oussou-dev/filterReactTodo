import React from "react"
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

class App extends React.Component {
	render() {
		return (
			<div className="container p-3">
				<div className="jumbotron p-2">
					<h1 className="display-4 text-center">Todo List</h1>
					<p className="lead text-center">ReactJS & Bootstrap 4</p>
				</div>

				<AddTodo />

				<TodoList />
				<br />
			</div>
		)
	}
}

export default App
