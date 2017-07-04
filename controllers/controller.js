const router = require('express').Router();
const passport = require('passport');
const equitiesSearch = require('../services/equitiesSearch'); 
const model = require('../models/model'); 


//Axios routes

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

router.get('/search', (req,res) =>{
	console.log('hey from users profile')
	model 
	.findByUsers()
	.then(savedStock => {
		res.render('users/profile', {savedStock})
	})
	.catch(err => {
		console.log(err); 

	})
})
//to save to watchlist
// router.post('users/profile', (req,res) => {
// 	console.log('hey from controller post to profile')
// 	model 
// 	.addStock(req.body.symbol, req.body.company, req.body.currentprice, req.body.closingprice)
// 	.then(stock => res.json(stock))
// 	.catch(error => console.log(error))		
// });

module.exports = router; 