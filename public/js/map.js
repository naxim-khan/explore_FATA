<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYx1t41Tpk35TFCp71JyeNAfyJJAszZ7Y&callback=initMap&libraries=places&v=weekly" async defer></script>
function initMap() {
    // Replace these with the latitude and longitude of the region you want to show
    const regionLat = 33.738045;
    const regionLng = 73.084488;

    const mapOptions = {
        center: { lat: regionLat, lng: regionLng },
        zoom: 13, 
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker for the region
    const marker = new google.maps.Marker({
        position: { lat: regionLat, lng: regionLng },
        map: map,
        title: 'FATA Region',
    });

    // Create a PlacesService instance
    const service = new google.maps.places.PlacesService(map);

    // Define icons URLs
    const hospitalIcon = 'https://maps.google.com/mapfiles/ms/icons/hospital.png';
    const hotelIcon = 'https://maps.google.com/mapfiles/ms/icons/lodging.png';
    const shopIcon = 'https://maps.google.com/mapfiles/ms/icons/shopping.png';

    // Search for hospitals
    service.nearbySearch({
        location: { lat: regionLat, lng: regionLng },
        radius: 5000, // Search within 5 km radius
        type: 'hospital'
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                    icon: hospitalIcon,
                });
            });
        } else {
            console.error('Failed to load hospitals: ' + status);
        }
    });

    // Search for hotels
    service.nearbySearch({
        location: { lat: regionLat, lng: regionLng },
        radius: 5000, // Search within 5 km radius
        type: 'lodging'
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                    icon: hotelIcon,
                });
            });
        } else {
            console.error('Failed to load hotels: ' + status);
        }
    });

    // Search for shops
    service.nearbySearch({
        location: { lat: regionLat, lng: regionLng },
        radius: 5000, // Search within 5 km radius
        type: 'store'
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            results.forEach(place => {
                new google.maps.Marker({
                    position: place.geometry.location,
                    map: map,
                    title: place.name,
                    icon: shopIcon,
                });
            });
        } else {
            console.error('Failed to load shops: ' + status);
        }
    });
}