import React from 'react'
import PageHeader from './PageHeader'
import employeeAPI from '../utils/EmployeeAPI'
import EmployeeRow from './EmployeeRow'

class EmployeeContainer extends React.Component {

	state = {
		employeeList:[],
		queryString: "",
		employeeFilteredList: [],
		nameOrder: "ascending"
	}

	componentDidMount() {
		this.retreiveEmployeeData();
	}

	changeSortOrder = () => {
		let sortedEmployeeList = this.sortEmployeeListAscending();
		if (this.state.nameOrder === "ascending") {
			console.log('CHANGE SORT ORDER METHOD CALLED', this.state.nameOrder);
			// console.log('ASCENDING LIST', ascendingEmployeeList);
			this.setState ({
				nameOrder: "decending",
				employeeFilteredList: sortedEmployeeList.reverse()
			})
		} else {
			this.setState ({
				nameOrder: "ascending",
				employeeFilteredList: sortedEmployeeList
			})
		}
	}

	retreiveEmployeeData = () => {
		employeeAPI.search()
		.then(
			res => {
				this.setState({ 
					employeeList: res.data.results,
					employeeFilteredList: res.data.results
				 });
				 this.sortEmployeeListAscending();
			}
		)  
		.catch(err => console.log(err));
	};

	sortEmployeeListAscending = () => {
		let ascendingList = this.state.employeeFilteredList.sort((a, b) => {
			let fa = a.name.first.toLowerCase(),
				fb = b.name.first.toLowerCase();
		
			if (fa < fb) {
				return -1;
			}
			if (fa > fb) {
				return 1;
			}
			return 0;
		});
		this.setState ({
			employeeFilteredList: ascendingList
		})
		return ascendingList;
	}
	
	handleInputChange = event => {
		// const name = event.target.name;
		event.preventDefault()
		const value = event.target.value;
		this.setState( { queryString: value } );
		// console.log(this.state.queryString);
		this.filterEmployeeList(value)
	};
	
	filterEmployeeList = (query) => {
		// event.preventDefault();
		console.log('FILTER EMPLOYEE LIST METHOD CALLED with query string value', this.state.queryString);
		let copyArr = this.state.employeeList.filter (employee => {
			let employeeFullName = employee.name.first +" "+employee.name.last
			console.log(this.state.queryString)
			return employeeFullName.includes(query)
			}
		)
		console.log(copyArr);
		this.setState({employeeFilteredList: copyArr})
	}

	render() {
		// console.log(this.state.employeeList[0]);
		return (
			<div>
				<PageHeader
					search={this.state.queryString}
					handleFormSubmit={this.handleFormSubmit}
					handleInputChange={this.handleInputChange}
					filterEmployeeList={this.filterEmployeeList}
					changeSortOrder={this.changeSortOrder}
				/>
				<EmployeeRow 
					employeeInfo={this.state.employeeFilteredList} 
					// searchQuery={this.state.searchQuery}
				/>
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