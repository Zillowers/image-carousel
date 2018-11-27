const { Client } = require('pg');
const client = new Client({
  user: 'Phantogram',
  host: 'localhost',
  database: 'images',
  port: 5432,
});

client.connect();

const getAllImages = (houseID, callback) => {
  client.query(`SELECT * FROM carousel WHERE houseID = ${houseID} LIMIT 4`, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results.rows);
    }
  });
};

module.exports = {
  client,
  getAllImages,
};