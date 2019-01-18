// How will my app interface with Yelp's API?
import axios from 'axios';

const getCoffeeShops = (userLocation) => {
  axios
    .get('https://localhost:5000/api/yelp/coffee')
    .then((response) => {
      console.log('In Yelp component, response after axios get fetch is... ', response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default {
  getCoffeeShops,
};
