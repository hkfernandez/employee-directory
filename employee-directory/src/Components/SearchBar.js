import React from 'react'

const styles = {
	input: {
		width: "200px",
		padding: ".5em 1em",
		margin: ".5em",
		fontSize: "1.5em",
		border: "4px solid gold",
		borderRadius: "1em",
		backgroundColor: "white",
		boxSizing: "border-box",
		textAlign: "center"
	}
}

function SearchBar (props) {
	return (
		<>
			<form>
				<div className="form">
					<label htmlFor="search"></label>
					<input
					onChange={props.handleInputChange}
					value={props.search}
					name="search"
					type="text"
					className="form-control"
					placeholder="Search..."
					id="search"
					style={styles.input}
					/>
					{/* <button onClick={props.filterEmployeeList} className="btn"> */}
					{/* Search
					</button> */}
				</div>
			</form>
		</>
	)
}
 export default SearchBar;