import React from "react"

const TodoItem = ({ todo, deleteTodo, editTodo, index }) => {
	return (
		<li className="list-group-item d-flex flex-row justify-content-between align-items-center list-group mt-2">
			<span>{todo.name}</span>
			<span>
				{/* <span className="far fa-circle mr-3" /> */}
				<input className="mr-3" type="checkbox" />
				<button
					className="btn-sm btn-info mr-2"
					onClick={() => editTodo(index)}
				>
					<span className="fas fa-pencil-alt" />
				</button>
				<button
					className="btn-sm btn-danger mr-2"
					onClick={() => deleteTodo(index)}
				>
					<span className="fas fa-trash" />
				</button>
			</span>
		</li>
	)
}

export default TodoItem
