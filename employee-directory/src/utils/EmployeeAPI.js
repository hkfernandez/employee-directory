import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
	console.log('HITTING AXIOS SEARCH');
    return axios.get(BASEURL);
    // return axios.get(BASEURL + query + APIKEY);
  }
};
