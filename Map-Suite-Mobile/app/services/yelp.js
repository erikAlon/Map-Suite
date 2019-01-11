// How will my app interface with Yelp's API?
import axios from 'axios';
import yelpAPI from '../../config.js';

// const yelpAPI =
//   'FO7fUitdYmMUgbdl1u87IOdFUf8duKY6YT_VmJh8PfYJ6i9Mzxmk1JyZ1ssVj-aEXHOS9EZz805lviTimFOZdJJ-jXZfK6Irt8eEzhmpy7JouPPl4T85uUrCja43XHYx';

const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${yelpAPI}`,
  },
});

// const getCoffeeShops = (userLocation) => {
//   return api
//     .get('/businesses/search', {
//       params: {
//         limit: 10,
//         categories: 'coffee, coffeeroasteries, coffeeshops',
//         ...userLocation,
//       },
//     })
//     .then((res) => {
//       res.data.businesses.map((business) => {
//         return {
//           name: business.name,
//           coords: business.coordinates,
//         };
//       });
//     })
//     .catch((error) => console.log(error));
// };

const getCoffeeShops = (userLocation) => {
  return [
    {
      name: 'fake name',
      coords: {
        latitude: 29.70405,
        longitude: -95.5879,
      },
    },
    {
      name: 'fake name2',
      coords: {
        latitude: 30.70415,
        longitude: -96.5889,
      },
    },
  ];
};

console.log(`***\nThis is my key\n***\n\n${yelpAPI.yelpAPI}\n\n`);

export default {
  getCoffeeShops,
};
