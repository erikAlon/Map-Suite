require('dotenv').config();

const yelp = require('yelp-fusion');
const yelp_api_key = process.env.YELP_API_KEY;
const express = require('express');
const cors = require('cors');
const transtar = require('./backend/transtar');

const server = express();
server.use(express.json());
server.use(cors());

// transtar();

// Yelp interfacing with yelp-fusion
const client = yelp.client(yelp_api_key);

const searchRequest = {
  term: 'coffee',
  location: 'Houston',
  limit: 5,
};

let coffeePlaces = [];

client
  .search(searchRequest)
  .then((response) => {
    const obj = response.jsonBody;

    coffeePlaces = obj.businesses.map((business) => {
      const o = {
        name: business.name,
        coordinates: business.coordinates,
      };
      return o;
    });
  })
  .catch((error) => {
    console.log(error);
  });
// End yelp interfacing

// GET yelp locations
server.get('/api/yelp/coffee', (req, res) => {
  res.status(200).json(coffeePlaces);
});

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log('app running on port: ', port);
});
