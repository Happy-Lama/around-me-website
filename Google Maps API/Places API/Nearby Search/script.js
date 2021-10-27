var map;
var service;
var infowindow;

function initMap(){
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
            // var sydney = new google.maps.LatLng(-33.867, 151.195); //creates new LatLng object in the bounds of the Lat: -33.867, and Lng: 151.195
            const current_location = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(
                document.getElementById('map'),
                {center: current_location, zoom: 15}
            );

            //request object with query and fieldss properties.
            var request = {
                location: current_location,
                radius: 500,
                type: ['lodging']
            };

            var service = new google.maps.places.PlacesService(map);// new Google Places API service

            // use the service(Places API) method findPlaceFromQuery(request, function that takes the results a parameter and handles them appropriately)
            service.nearbySearch(request, function(results, status) {
                if(status === google.maps.places.PlacesServiceStatus.OK){
                    for(var i = 0; i < results.length; i++){
                        console.log(results[i]);
                        createMarker(results[i]);
                    }
                    // map.setCenter(results[0].geometry.location);
                }
            });
        });
    }else{
    console.log("Geolocation Unavailable");
    }
}
 //function to create a marker and place it on the map.
function createMarker(place){
    if(!place.geometry || !place.geometry.location) return;

    //marker object
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}