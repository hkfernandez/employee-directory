import React from 'react'

const styles = {
	button: {
		padding: ".5em 1.5em",
		margin: ".5em",
		color: "dimgrey",
		fontSize: "1.25em",
		border: "none",
		borderRadius: ".5em",
		backgroundColor: "gold",
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