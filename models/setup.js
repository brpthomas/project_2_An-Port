const pgp = require('pg-promise')();

// this is another way of doing it
const db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'express_passport'
});

module.exports = db;