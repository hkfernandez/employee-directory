import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

const employeeAPI = {
	search: function() {
		return axios.get(BASEURL);
  	}
};
export default employeeAPI;