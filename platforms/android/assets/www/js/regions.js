var pontos = {};
pontos['Praça Tiradentes'] = {
  center: new google.maps.LatLng(-25.428867, -49.271388),  
};
pontos['Rua das Flores'] = {
  center: new google.maps.LatLng(-25.431542, -49.274435)  
};
pontos['Rua 24 Horas'] = {
  center: new google.maps.LatLng(-25.434584, -49.276731)  
};

var regiao;

function init() {
	var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

	for (var ponto in pontos) {
	    var regiaoOptions = {
	      strokeColor: '#FF0000',
	      strokeOpacity: 0.8,
	      strokeWeight: 2,
	      fillColor: '#FF0000',
	      fillOpacity: 0.35,
	      map: map,
	      center: pontos[ponto].center,
	      radius: 5000
	    };
	    // Add the circle for this city to the map.
	    regiao = new google.maps.Circle(regiaoOptions);
	}
}

google.maps.event.addDomListener(window,'load',init);