const { Client } = require('pg');
const client = new Client({
  user: 'postgres',
  host: 'ec2-3-16-187-141.us-east-2.compute.amazonaws.com',
  database: 'images',
  password: 'sdcpsql',
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