// Initialize the map centered around Kentucky
var map = L.map('map').setView([37.5, -85], 7); // Adjust the initial coordinates and zoom level

// Add a tile layer to the map (You can choose different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load the GeoJSON data for Kentucky's boundaries (Replace 'kentucky.geojson' with your file path)
fetch('kentucky.geojson') // IMPORTANT: Adjust the path to your GeoJSON file
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Create a GeoJSON layer and add it to the map
        L.geoJSON(data, {
            style: {
                color: 'red',       // Border Color
                weight: 2,          // Border Thickness in Pixels
                opacity: 1,         // Border opacity (1 = fully visible)
                fillColor: 'none',  // Fill color (none to make it transparent)
            }
        }).addTo(map);
    });