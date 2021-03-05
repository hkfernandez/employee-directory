import React from 'react'

const styles = {
	ul: {
		width: "100%"
	},
	displayFlexCenter: {
		flexDirection: "row",
		alignItems: "center",
	},
	li: {
		width: "80%",
		maxWidth: "900px",
		padding: ".5em 1.5em",
		margin: ".5em",
		background: "#e8eaf6",
		borderRadius: ".5em",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	photo: {
		borderRadius: ".5em"
	},
	name: {
		width: "150px",
		textAlign: "left"
	},
	email: {
	  width: "250px",
	  textAlign: "right"
	}
  };

// function EmployeeRow ({picture, name, cell, phone, email}) {
function EmployeeRow ({employeeInfo}) {
	console.log('EMPLOYEE INFO', employeeInfo[0]);
	return (
		<ul style={styles.ul}>
			{
				employeeInfo.map(
					employee => (
						<li key={employee.email} style={styles.li}>
							<img src={employee.picture.medium} alt="Employee" style={styles.photo}/>
							<span style={styles.name}>{`${employee.name.first} ${employee.name.last}`}</span> 
							<span>c.{employee.cell}</span> 
							<span>o.{employee.phone}</span>
							<span style={styles.email}>{`${employee.email}`}</span>
						</li>
					)
				)
			}
		</ul>
	)
}
 export default EmployeeRow;