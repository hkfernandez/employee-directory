import React from 'react'

const styles = {
	button: {
		padding: ".5em 1em",
		margin: ".5em",
		// color: "white",
		fontSize: "1.25em",
		border: "20px solid cadeblue",
		borderRadius: ".5em",
		borderColor: "cadetblue",
		backgroundColor: "white",
		boxSizing: "border-box"
	}
}

function ListHeader (props) {
	return (
		<>
			<button onClick={props.changeSortOrder} style={styles.button}>Sort by Name</button> 
		</>
	)
}
 export default ListHeader;