import React from "react"

const TodoItem = ({
	todo,
	deleteTodo,
	editTodo,
	index,
	todoCompleted
}) => {
	return (
		<li className="list-group-item d-flex flex-row justify-content-between align-items-center list-group mt-2">
			<span
				style={{
					textDecoration: todo.completed ? "line-through" : "inherit"
				}}
			>
				{todo.name}
			</span>
			<span>
				<input
					className="mr-3"
					type="checkbox"
					onChange={e => todoCompleted(e, index)}
				/>
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
