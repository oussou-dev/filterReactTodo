import React from "react"
import TodoItem from "./TodoItem"
import Filter from "./Filter"
import Search from "./Search"

class TodoList extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			searchQuery: ""
		}
	}

	// MAJ de la requête de saisie
	updateSearchQuery = e => {
		this.setState({
			searchQuery: e.target.value
		})
	}

	render() {
		const {
			todos,
			deleteTodo,
			editTodo,
			todoCompleted
			// searchTodo
		} = this.props

		// Filter la liste des todos en fonction des lettres saisies
		let searchingTodos = todos.filter(todo => {
			return (
				todo.name
					.toLocaleLowerCase()
					.indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
			)
		})

		return (
			<div className="card">
				<div className="card-header d-flex flex-row align-items-center">
					{/* feature */}
					{/* <input
						className="mr-3"
						type="checkbox"
						// onChange={e => todoCompleted(e, index)}
					/> */}

					<span
						style={{ fontSize: "20px", fontWeight: "bold" }}
						className="flex-fill mr-5"
					>
						TodoList
					</span>

					<Search searchTodo={this.updateSearchQuery} />
					<Filter />
				</div>

				<div className="card-body">
					{/* feature */}
					{/* <div className="container text-center mb-2">
						il reste : x todos // liste vide
					</div> */}
					<ul className="list-group">
						{searchingTodos.map((todo, index) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								deleteTodo={() => deleteTodo(index)}
								editTodo={() => editTodo(index)}
								todoCompleted={e => todoCompleted(e, index)}
							/>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default TodoList
