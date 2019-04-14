import React from "react"

const ClearTodos = ({ clearAll }) => {
	return (
		<button
			className="btn btn-danger mr-2"
			onClick={() => clearAll()}
		>
			Clear
		</button>
	)
}

export default ClearTodos
