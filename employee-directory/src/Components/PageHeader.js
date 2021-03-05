import React from 'react'
import SearchBar from './SearchBar'
import ListHeader from './ListHeader'

const styles = {
	h1: {
		fontSize: "4em",
		margin: ".25em",
		color: "dimgrey"
	}
}

function PageHeader (props) {
	return (
		<>
			<h1 style={styles.h1}>Team Members</h1>
			<SearchBar		  
				search={props.queryString}
				handleFormSubmit={props.handleFormSubmit}
				handleInputChange={props.handleInputChange}
				filterEmployeeList={props.filterEmployeeList}
				/>
			<ListHeader
				changeSortOrder={props.changeSortOrder}
			/>
		</>
	)
}
 export default PageHeader;