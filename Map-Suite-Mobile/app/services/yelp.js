// How will my app interface with Yelp's API?
import axios from 'axios';

const getCoffeeShops = (userLocation) => {
  axios.get('http://localhost:5001/apiTest').then((response) => {
    console.log(response);
  });
  console.log('Axios finishes');
};

export default {
  getCoffeeShops,
};
