const axios = require('axios');

const key = process.env.alpha_api_key; 

const getSectorPerformance = () => {
	return axios.get('https://www.alphavantage.co/query?function=SECTOR&apikey=ISP6LAA8IQ27OZP2')
		.then((response)=>{
			return response
		})
		.catch((error) => {
			console.log(error);
		});
}

module.exports = { getSectorPerformance};
