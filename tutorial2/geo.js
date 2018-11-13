var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 14,
  });
  infoWindow = new google.maps.InfoWindow();

  console.log(navigator.geolocation);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        console.log(pos);

        // infoWindow.setPosition(pos);
        // infoWindow.setContent('Location found.');
        // infoWindow.open(map);

        map.setCenter(pos);

        // var marker = new google.maps.Marker({
        //   position: pos,
        //   draggable: true,
        //   map: map,
        // });
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeLocation
      ? 'Error: The Geolocation service failed.'
      : "Error: Your browser doesn't support gelocation."
  );
  infoWindow.open(map);
}
