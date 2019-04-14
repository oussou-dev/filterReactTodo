import React from "react"

const Search = ({ searchTodo }) => {
	return (
		<>
			<input
				style={{ width: "35%" }}
				type="text"
				className="mr-5 form-control"
				placeholder="Search"
				onChange={searchTodo}
			/>
		</>
	)
}

export default Search
