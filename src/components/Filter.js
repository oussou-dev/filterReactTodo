import React from "react"

const Filter = ({ setFilter, currentFilter }) => {
	return (
		<>
			<button
				className="btn-sm btn-primary mr-2"
				onClick={() => {
					setFilter("all")
				}}
			>
				All
			</button>
			<button
				className="btn-sm btn-warning mr-2"
				onClick={() => {
					setFilter("doing")
				}}
			>
				Doing
			</button>
			<button
				className="btn-sm btn-secondary mr-4"
				onClick={() => {
					setFilter("done")
				}}
			>
				Done
			</button>
			<button className="btn btn-danger mr-2">Clear</button>
		</>
	)
}

export default Filter
