/* eslint-disable no-console */
require('dotenv').config();

const db = {};

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.dbUser,
  host: 'fanny.db.elephantsql.com',
  database: process.env.dbUser,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.getTableRows = async () => {
  try {
    const client = await pool.connect();

    const result = await client.query('SELECT * FROM "public"."login"');

    console.log(result.rows);

    client.release();
  } catch (err) {
    console.error('Error executing getTableRow query', err.stack);
  }
};

db.insertData = async () => {
  try {
    const client = await pool.connect();

    const UserName = 'PancakeMaker';
    const Password = 'YoDaddy52';

    const result = await client.query(
      'INSERT INTO Login (UserName, Password) VALUES ($1, $2)',
      [UserName, Password]
    );

    console.log('Successful user data insertion');

    client.release();
  } catch (err) {
    console.log('Error executing insertData query', err.stack);
  }
};

db.insertData();
module.exports = db;
