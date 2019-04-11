import React from "react"

const AddTodo = props => {
	return (
		<>
			<h5>Add a Todo</h5>
			<hr className="my-4" />
			<div className="d-flex mb-4">
				<input type="text" className="form-control mr-5" />
				<button className="btn btn-success">Add</button>
			</div>
			<hr className="my-4" />
		</>
	)
}

export default AddTodo
