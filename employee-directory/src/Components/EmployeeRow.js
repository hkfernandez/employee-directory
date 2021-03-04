import React from 'react'

// function EmployeeRow ({picture, name, cell, phone, email}) {
function EmployeeRow ({employeeInfo}) {
	return (
		<section>
			<img src={employeeInfo.picture.medium} alt="Employee Photo"/>
			{`${employeeInfo.name.first} ${employeeInfo.name.last} ${employeeInfo.cell} ${employeeInfo.phone} ${employeeInfo.email}`}
		</section>
	)
}
 export default EmployeeRow;