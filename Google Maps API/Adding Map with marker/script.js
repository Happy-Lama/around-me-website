
// Initialise and add the map
function initMap(){ 
    
    if('geolocation' in navigator){

        // geolocation available
        navigator.geolocation.getCurrentPosition((position)=>{

            // The current location
            let current_pos = {lat: position.coords.latitude, lng:position.coords.longitude};

                // The map, centered at Uluru
            const map = new google.maps.Map(document.getElementById("map"),{
                zoom: 8,//zoom level
                center: current_pos, //tells google maps API where to center map
            });

            // The marker, positioned at Uluru; puts marker on map
            const marker = new google.maps.Marker({
                position: current_pos, //sets position of the marker
                map: map,
            });

        },

        function error(error){
            console.log(error);
        },

        options = {
            enableHighAccuracy: false,
            maximumAge: 30000,
            timeout: 27000
          }
          );
    }else{

        // geolocation is not available
        console.log("GEOLOCATION UNAVAILABLE");
        alert("Geolocation is not supported on this browser");
    }
}

// new google.maps.Map() creates new google maps object