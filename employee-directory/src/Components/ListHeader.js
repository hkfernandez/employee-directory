import React from 'react'

function ListHeader (props) {
	return (
		<>
			<h2>Name 
				<button onClick={props.changeSortOrder}>SORT</button> 
				Cell Office Email
			</h2>
		</>
	)
}
 export default ListHeader;