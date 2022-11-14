function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 22.7345202, lng: 71.6450864};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Surendrnagar, GUJ' // Title Location
    });
}