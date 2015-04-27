var map  = null;
var marker = null;
var longitude = null;
var latitude = null;
var pontos = {};


var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // app.receivedEvent('deviceready');
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },

    onSuccess: function(position){
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLong,
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById("map"), mapOptions);

        initPontos();

        marker = createMarker(latLong, 'Minha Localizacao') 

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
        });
    },

    onError: function(error){
        alert("the code is " + error.code + ". \n" + "message: " + error.message);
    },

};

function createMarker(latlng, label) {
        var contentString = '<b>'+label+'</b><br>';
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: label,
            zIndex: Math.round(latlng.lat()*-100000)<<5
            });
            marker.myname = label;


        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
            });
        return marker;
    }

function initPontos() {
    pontos['Praça Tiradentes'] = {
      center: new google.maps.LatLng(-25.428867, -49.271388),  
    };
    pontos['Rua das Flores'] = {
      center: new google.maps.LatLng(-25.431542, -49.274435)  
    };
    pontos['Rua 24 Horas'] = {
      center: new google.maps.LatLng(-25.434584, -49.276731)  
    };
    pontos['Casa'] = {
      center: new google.maps.LatLng(-25.442726, -49.456681)  
    };

    for (var ponto in pontos) {
        var regiaoOptions = {
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          map: map,
          center: pontos[ponto].center,
          radius: 50
        };
        // Add the circle for this city to the map.
        regiao = new google.maps.Circle(regiaoOptions);
    }
}

app.initialize();