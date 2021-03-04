import React from 'react'
import PageHeader from './PageHeader'
import employeeAPI from '../utils/EmployeeAPI'
import EmployeeRow from './EmployeeRow'

class EmployeeContainer extends React.Component {

	state = {
		employeeList:[],
		queryString: ""
	}

	componentDidMount() {
		this.retreiveEmployeeData();
	}
	
	retreiveEmployeeData = () => {
		employeeAPI.search()
		.then(
			res => {
				this.setState({ employeeList: res.data.results })
				console.log(this.state.employeeList);
			}
		)  
		.catch(err => console.log(err));
	};
	
	handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState( { [name]: value } );
		console.log(this.state.queryString);
	};
	
	handleFormSubmit = event => {
		event.preventDefault();
		this.searchEmployees(this.state.queryString);
	};

	
	render() {
		// console.log(this.state.employeeList[0]);
		return (
			<div>
				<PageHeader
					search={this.state.queryString}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
				/>
				<EmployeeRow employeeInfo={this.state.employeeList}/>
				{/* {
					this.state.employeeList.map(
						employee => <EmployeeRow employeeInfo={employee} key={employee.email}/>
					)
					// .filter(
					// 	employee => {
					// 		return employee.name.first.search(/a/)>0
					// 	}
					// )
				} */}
			</div>
		);
	}
}

 export default EmployeeContainer;