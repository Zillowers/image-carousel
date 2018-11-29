require('newrelic');
const cluster = require('cluster');
// if (cluster.isMaster) {
//   // Count the machine’s CPUs
//   var cpuCount = require('os').cpus().length;
//   // Create a worker for each CPU
//   for (var i = 0; i < cpuCount; i += 1) {
//     cluster.fork();
//   }
// // Code to run if we’re in a worker process
// } else {

const express = require('express');
const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
const dbIndex = require('../database/index.js');
const expressStaticGzip = require('express-static-gzip');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/homes/:id', express.static(path.join(__dirname, '../client/dist')));
// app.use('/homes/:id', expressStaticGzip(path.join(__dirname, '/../public/'), {
//   enableBrotli: true,
//   customCompressions: [{
//     encodingName: 'deflate',
//     fileExtension: 'zz',
//   }],
//   orderPreference: ['br'],
// }));

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
// };