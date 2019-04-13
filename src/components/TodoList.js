import React from "react"
import TodoItem from "./TodoItem"
import Filter from "./Filter"
import Search from "./Search"

class TodoList extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }

	render() {
		const { todos, deleteTodo, editTodo, todoCompleted } = this.props
		return (
			<div className="card">
				<div className="card-header d-flex flex-row align-items-center">
					<span
						style={{ fontSize: "20px", fontWeight: "bold" }}
						className="flex-fill mr-5"
					>
						TodoList
					</span>

					<Search />
					<Filter />
				</div>

				<div className="card-body">
					<ul className="list-group">
						{todos.map((todo, index) => (
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
