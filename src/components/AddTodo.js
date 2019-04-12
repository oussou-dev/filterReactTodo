import React from "react"

class AddTodo extends React.Component {
	render() {
		const {
			addTodo,
			handleChange,
			newInput,
			updateTodo,
			index
		} = this.props
		// console.log(handleChange)
		return (
			<div className="d-flex mb-4">
				<input
					type="text"
					className="form-control mr-5"
					placeholder="Add a new todo"
					value={newInput}
					onChange={handleChange}
				/>

				{this.props.editingMode ? (
					<button
						className="btn btn-success"
						onClick={() => addTodo()}
					>
						Add
					</button>
				) : (
					<button
						className="btn btn-info"
						onClick={() => updateTodo(index)}
					>
						Update
					</button>
				)}
			</div>
		)
	}
}

export default AddTodo
