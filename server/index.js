require('newrelic');
const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
const dbIndex = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/homes/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/homes/:id/images', (req, res) => {

  const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  let { id } = req.params;
  if ( id > 100000 ) {
    id = randomNumGenerator(1, 100000);
  }
  dbIndex.getAllImages(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
