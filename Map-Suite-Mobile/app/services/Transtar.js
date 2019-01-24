const getAlert = () => {
  fetch('https://map-suite-mobile.firebaseapp.com/transtar')
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      return resJson.message;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default {
  getAlert,
};
