// TODO: MY_LOCALE should be populated before the rest of the script runs

var GALLERIA = 'Houston Galleria, Hidalgo Street, Houston, TX';
var MEMORIAL = 'Citycentre, Town and Country Boulevard, Houston, TX';
var SQUARE = 'Sugar Land Town Square, City Walk, Sugar Land, TX';
var MY_LOCALE = '';

function initMap() {
  var directionsDisplay1 = new google.maps.DirectionsRenderer();
  var directionsDisplay2 = new google.maps.DirectionsRenderer();

  var directionsService = new google.maps.DirectionsService();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: GALLERIA,
  });
  infoWindow = new google.maps.InfoWindow();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        MY_LOCALE = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(MY_LOCALE);

        // Moved here!
        directionsDisplay1.setMap(map);
        directionsDisplay2.setMap(map);
        directionsDisplay1.setOptions({ suppressMarkers: false, draggable: true });
        directionsDisplay2.setOptions({ suppressMarkers: false, draggable: true });

        calcRoute1(directionsService, directionsDisplay1);
        calcRoute2(directionsService, directionsDisplay2);
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }

  // Moved!
}

function calcRoute1(directionsService, directionsDisplay1) {
  var selectedMode = 'DRIVING';
  directionsService.route(
    {
      origin: MY_LOCALE,
      destination: MEMORIAL,
      travelMode: google.maps.TravelMode[selectedMode],
    },
    function(response, status) {
      if (status == 'OK') {
        directionsDisplay1.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}

function calcRoute2(directionsService, directionsDisplay2) {
  var selectedMode = 'DRIVING';
  directionsService.route(
    {
      origin: MY_LOCALE,
      destination: SQUARE,
      travelMode: google.maps.TravelMode[selectedMode],
    },
    function(response, status) {
      if (status == 'OK') {
        directionsDisplay2.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
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
