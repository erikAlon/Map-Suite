require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const transtar = require('./backend/transtar');

const server = express();
server.use(express.json());
server.use(require('body-parser').text());
server.use(cors());

// transtar();

/**
 * Map-Suite API usage here to modulize backend
 * app.use(...);
 */
router.get('https://api.yelp.com/v3', (req, res) => {
  // params
  // interface logic
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('app running on port: ', port);
});
