import React from 'react'

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
					placeholder="Find an Team Member..."
					id="search"
					/>
					<button onClick={props.handleFormSubmit} className="btn">
					Search
					</button>
				</div>
			</form>
		</>
	)
}
 export default SearchBar;