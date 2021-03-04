import React from 'react'
import PageHeader from './PageHeader'
import RandomEmployeeAPI from '../utils/EmployeeAPI'
import ListHeader from './List Header'
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
		RandomEmployeeAPI.search()
		  .then(res => {
			  this.setState({ employeeList: res.data.results })
			  console.log('EMPLOYEE LIST STATE AFTER API CALL', this.state.employeeList);
		  })
			  
		  .catch(err => console.log(err));
	  };
	
	  handleInputChange = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
		  [name]: value
		});
	  };
	
	  // When the form is submitted, search the Giphy API for `this.state.search`
	  handleFormSubmit = event => {
		event.preventDefault();
		this.searchEmployees(this.state.queryString);
	  };
	
	  render() {
		return (
		  <div>
			<PageHeader
			  search={this.state.queryString}
			  handleFormSubmit={this.handleFormSubmit}
			  handleInputChange={this.handleInputChange}
			/>
			{/* <ResultList results={this.state.results} /> */}
			<ListHeader/>
			<EmployeeRow/>
		  </div>
		);
	  }
}

 export default EmployeeContainer;