import React from 'react'

// function EmployeeRow ({picture, name, cell, phone, email}) {
function EmployeeRow ({employeeInfo}) {
	console.log('EMPLOYEE INFO', employeeInfo);
	return (
		<ul className="list-group">
		{employeeInfo.map(employee => (
			<li className="list-group-item" key={employee.email.id}>
				{`${employee.name.first} ${employee.name.last} ${employee.cell} ${employee.phone} ${employee.email}`}
			</li>
		))}
		</ul>


		// <section>
		// 	<img src={employeeInfo.picture.medium} alt="Employee"/>
		// 	{`${employeeInfo.name.first} ${employeeInfo.name.last} ${employeeInfo.cell} ${employeeInfo.phone} ${employeeInfo.email}`}
		// </section>
	)
}
 export default EmployeeRow;