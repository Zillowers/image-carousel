const { Client } = require('pg');
const client = new Client({
  user: 'Phantogram',
  host: 'localhost',
  database: 'images',
  port: 5432,
});

client.connect();

const getAllImages = (houseID, callback) => {
  client.query(`SELECT * FROM carousel WHERE houseID = ${houseID} LIMIT ${houseID}`, (err, results) => {
    console.log('What is going on?', houseID);
    if (err) {
      console.log('database/index.js line 13 query err:', err);
      callback(err);
    } else {
      console.log('database/index.js line 13 query results:', results.rows);
      callback(null, results.rows);
    }
  });
};

module.exports = {
  client,
  getAllImages,
};