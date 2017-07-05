const db = require('../models/setup');

function getAllStock() {
	const queryPromise = db.manyOrNone(`SELECT * FROM watchlist`); 
	return queryPromise;
}

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

function destory(id) {
	return db.oneOrNone("DELETE FROM watchlist WHERE id=$1", [id])
}

module.exports={addStock, update, findByUser, destory};

