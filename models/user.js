const bcrypt = require('bcryptjs');

const db = require('../models/setup');


function create (user) {
  const password = bcrypt.hashSync(user.password, 10);

  return db.oneOrNone(`
    INSERT INTO users
    (email, password_digest)
    VALUES
    ($1, $2)
    RETURNING *;`,
    [ user.email, password]
  );
};

function findByEmail (email) {
  return db.oneOrNone(`
    SELECT *
    FROM users
    WHERE email = $1;`,
    [email]
  );
};

function showStock(id) {
  return db.query("SELECT * FROM watchlist WHERE user_id=$1", [id])
}


module.exports = {create, findByEmail, showStock};