import React from 'react'
import SearchBar from './SearchBar'
import ListHeader from './ListHeader'

function PageHeader (props) {
	return (
		<>
		<h1>Page Header</h1>
		<SearchBar		  
			search={props.queryString}
			handleFormSubmit={props.handleFormSubmit}
			handleInputChange={props.handleInputChange}
			/>
		<ListHeader/>
		</>
	)
}
 export default PageHeader;