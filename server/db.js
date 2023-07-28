const { Pool } = require('pg');
require('dotenv').config();

console.log('USERNAME:', process.env.userNme);
console.log('PASSWORD:', process.env.passWrd);
console.log('HOST:', process.env.HOST);
console.log('DBPORT:', process.env.DBPORT);

const pool = new Pool({
  user: process.env.userNme,
  password: process.env.passWrd,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database:'todoapp',
});

module.exports = pool;
