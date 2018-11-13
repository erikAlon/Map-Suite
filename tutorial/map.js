function loadMap() {
  var mapOptions = {
    center: new google.maps.LatLng(29.753317, -95.359731),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
  };

  var map = new google.maps.Map(document.getElementById('sample'), mapOptions);

  // var marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(29.751315, -95.376346),
  //   map: map,
  //   animation: google.maps.Animation.BOUNCE,
  //   draggable: true,
  //   icon: 'art.jpg',
  // });

  // marker.setMap(null);

  // var directRouter = new google.maps.Polyline({
  //   path: [
  //     new google.maps.LatLng(29.713097, -95.571051),
  //     new google.maps.LatLng(29.741488, -95.460636),
  //   ],
  //   strokeColor: '#0000FF',
  //   strokeOpacity: 0.6,
  //   strokeWeight: 2,
  // });

  // directRouter.setMap(map);
  // directRouter.setmap(null);

  /* // Sectioning off an area on the map with Polylines
  var myPath = [
    new google.maps.LatLng(29.780327, -95.561088),
    new google.maps.LatLng(29.596013, -95.622112),
    new google.maps.LatLng(29.739325, -95.464456),
    new google.maps.LatLng(29.780327, -95.561088),
  ];

  var cityPath = new google.maps.Polygon({
    path: myPath,
    strokeColor: '#0000FF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    filColor: '#0000FF',
    fillOpacity: 0.4,
  });

  cityPath.setMap(map); */

  /* // Drawing Lyft prime time rectangles
  // subtracted/ added 0.005 to bounds
  var rectangle = new google.maps.Rectangle({
    strokeColor: '#FF8080',
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: '#FF8080',
    fillOpacity: 0.4,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(29.591013, -95.627112),
      new google.maps.LatLng(29.601013, -95.617112)
    ),
  }); */

  var symbolMarker = new google.maps.Marker({
    position: map.getCenter(),
    icon: {
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      scale: 4,
      strokeWeight: 2,
      strokeColor: '#713736',
    },
    draggable: true,
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: 'vroom vroom',
  });

  google.maps.event.addListener(symbolMarker, 'drag', function() {
    infowindow.open(map, symbolMarker);
  });
}

google.maps.event.addDomListener(window, 'load', loadMap);
