const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user:'KyOIjw8iyjQOQPOd',
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database:'todoapp',
});

module.exports = pool;
