// How will my app interface with Yelp's API?
import axios from 'axios';
import yelpAPI from '../../config.js';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${yelpAPI}`,
  },
});

const getCoffeeShops = (userLocation) => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'coffee,coffeeroasteries,coffeeshops',
        ...userLocation,
      },
    })
    .then((res) =>
      res.data.businesses.map((business) => {
        return {
          name: business.name,
          coords: business.coordinates,
        };
      })
    )
    .catch((error) => console.error(error));
};

export default {
  getCoffeeShops,
};
