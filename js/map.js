// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {lat: 42.730588, lng: -73.674646},
        mapTypeId: google.maps.MapTypeId.MAP
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map,
        radius: 20
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
    ]
    heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
}

function changeRadius() {
    heatmap.set('radius', heatmap.get('radius') ? 20 : 20);
}

function changeOpacity() {
    heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
    return [

        new google.maps.LatLng(42.727418, -73.675086),
        new google.maps.LatLng(42.727418, -73.675086),
        new google.maps.LatLng(42.727491, -73.678608),
        new google.maps.LatLng(42.727694, -73.673809),
        new google.maps.LatLng(42.727694, -73.673809),
        new google.maps.LatLng(42.727694, -73.673809),
        new google.maps.LatLng(42.727694, -73.673809),
        new google.maps.LatLng(42.728260, -73.674278),
        new google.maps.LatLng(42.728292, -73.673371),
        new google.maps.LatLng(42.728421, -73.676762),
        new google.maps.LatLng(42.728421, -73.676762),
        new google.maps.LatLng(42.728421, -73.676762),
        new google.maps.LatLng(42.728578, -73.675223),
        new google.maps.LatLng(42.728720, -73.673650),
        new google.maps.LatLng(42.728720, -73.673650),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729100, -73.674019),
        new google.maps.LatLng(42.729286, -73.676996),
        new google.maps.LatLng(42.729286, -73.676996),
        new google.maps.LatLng(42.729286, -73.676996),
        new google.maps.LatLng(42.729286, -73.676996),
        new google.maps.LatLng(42.729524, -73.678931),
        new google.maps.LatLng(42.730017, -73.681170),
        new google.maps.LatLng(42.730062, -73.681899),
        new google.maps.LatLng(42.730239, -73.677962),
        new google.maps.LatLng(42.730239, -73.677962),
        new google.maps.LatLng(42.730865, -73.681654),
        new google.maps.LatLng(42.730865, -73.681654),
        new google.maps.LatLng(42.730865, -73.681654),
        new google.maps.LatLng(42.731026, -73.680513),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731048, -73.671271),
        new google.maps.LatLng(42.731224, -73.685946),
        new google.maps.LatLng(42.731367, -73.679197),
        new google.maps.LatLng(42.731367, -73.679197),
        new google.maps.LatLng(42.731367, -73.679197),
        new google.maps.LatLng(42.731367, -73.679197),
        new google.maps.LatLng(42.731931, -73.679649),
        new google.maps.LatLng(42.732204, -73.670246),
        new google.maps.LatLng(42.732204, -73.670246),
        new google.maps.LatLng(42.732233, -73.667369),
        new google.maps.LatLng(42.732233, -73.667369),
        new google.maps.LatLng(42.733166, -73.665103),
        new google.maps.LatLng(42.733268, -73.668937),
        new google.maps.LatLng(42.733268, -73.668937),
        new google.maps.LatLng(42.733489, -73.664770),
        new google.maps.LatLng(42.733489, -73.664770),
        new google.maps.LatLng(42.734341, -73.664280),
        new google.maps.LatLng(42.734763, -73.668393),
        new google.maps.LatLng(42.734763, -73.668393),
        new google.maps.LatLng(42.735522, -73.665719)




    ];
}