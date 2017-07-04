const db = require('../models/setup');

function addStock (ticker, user_id) {
	const queryPromise = db.one(`INSERT INTO watchlist (symbol, name, price, close, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id`, [ticker.symbol, ticker.company, ticker.currentPrice, ticker.closingPrice, user_id]);
	return queryPromise; 
}

function update(symbol, name, price, close, id) {
		const queryPromise = db.one(`UPDATE watchlist SET symbol =$1, name=$2, price=$3, close=$4 WHERE id=$5 RETURNING id`, [symbol, name, price, close, id]); 
}

const findByUser = () => {
	return db.any('SELECT * FROM users'); 
}

module.exports={addStock, update, findByUser};

