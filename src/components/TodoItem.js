import React from "react"

const TodoItem = ({ todo }) => {
	return (
		<li className="list-group-item d-flex flex-row justify-content-between align-items-center list-group mt-2">
			<span>{todo.name}</span>
			<span>
				<span className="far fa-circle mr-3" />
				<button className="btn btn-sm btn-info mr-2">
					<span className="fas fa-pencil-alt" />
				</button>
				<button className="btn btn-sm btn-danger mr-2">
					<span className="fas fa-trash" />
				</button>
			</span>
		</li>
	)
}

export default TodoItem
