const router = require('express').Router();
const passport = require('passport');
const equitiesSearch = require('../services/equitiesSearch'); 

router.get('/', (req, res) => {
	equitiesSearch
		.getStock()
		.then((searchdata) => {
			console.log('made it to the getStock', searchdata); 
			const data = searchdata.data; 
			res.render('search', {searchdata:data}); 
		})
		.catch((error) => {
			console.log('error at sectorperformance', error);
			res.send(error); 
		});
});

module.exports = router; 