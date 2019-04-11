import React from "react"

const Filter = props => {
	return (
		<>
			<button className="btn btn-primary mr-2">All</button>
			<button className="btn btn-warning mr-2">Doing</button>
			<button className="btn btn-secondary mr-4">Done</button>
			<button className="btn btn-danger mr-2">Clear</button>
		</>
	)
}

export default Filter
