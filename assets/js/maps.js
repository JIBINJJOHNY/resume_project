function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 2,
        center: new google.maps.LatLng(46.619261, -33.134766)
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [{
            position: new google.maps.LatLng(40.785091, -73.968285)
        },
        {
            position: new google.maps.LatLng(41.084045, -73.874245)

        },
        {
            position: new google.maps.LatLng(40.754932, -73.984016)
        }
    ];

    // Create markers.
    for (let i = 0; i < locations.length; i++) {
        const marker = new google.maps.Marker({
            position: locations[i].position,
            map: map,
        });
    }

}
window.initMap = initMap;