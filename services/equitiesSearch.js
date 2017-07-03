const axios = require('axios');

const key = process.env.alpha_api_key; 

const getStock = (name) => {
	return axios.get(`http://marketdata.websol.barchart.com/getQuote.json?key=4bfdb2da99476a86a66cae1eef9b6aaa&symbols=${name}`)
		.then((response)=>{
			return response
			console.log(response)
		})
		.catch((error) => {
			console.log(error);
		});
}

module.exports = { getStock };
