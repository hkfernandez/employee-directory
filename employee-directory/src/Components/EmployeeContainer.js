import React from 'react'
import PageHeader from './PageHeader'
import API from '../utils/EmployeeAPI'

class EmployeeContainer extends React.Component {
	state = {
		employeeList:[],
		queryString: ""
	}
	componentDidMount() {
		this.searchEmployees("kittens");
	  }
	
	  searchEmployees = query => {
		API.search(query)
		  .then(res => this.setState({ employeeList: res.data.data }))
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
		  </div>
		);
	  }
}

 export default EmployeeContainer;