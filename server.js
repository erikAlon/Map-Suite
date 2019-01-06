const express = require('express');
const cors = require('cors');
const transtar = require('./backend/transtar');

const server = express();
server.use(express.json());
server.use(cors());

transtar();

/**
 * Map-Suite API usage here
 * app.use(...);
 */

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('app running on port: ', port);
});
