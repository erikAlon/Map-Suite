export default () => {
  return new Promise((resolve, reject) => {
    return resolve(
      fetch('https://map-suite-mobile.firebaseapp.com/transtar')
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          // console.log('My message in Transtar.js: ', responseJSON.message);
          return responseJSON.message;
        })
        .catch((error) => {
          // console.log('Error in Transtar.js: ', error);
        })
    );
  });
};
