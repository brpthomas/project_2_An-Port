const pgp = require('pg-promise')();

// this is another way of doing it
const db = pgp(process.env.DATABASE_URL || 'postgres://superbadpeter@localhost:5432/anport'
);

module.exports = db;