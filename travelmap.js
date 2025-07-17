//18.4714° N, 77.9229° W
var coordinates = [18.4714,-77.9229];

let map = L.map("map", {
   center: coordinates,
   zoom:10
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let circleMarker = L.circle(coordinates, {
   color:"white",
   fillColor: "purple", 
   fillOpacity: 0.25,
   radius: 50
   }).bindPopup(`<iframe width="280" height="160" src="https://www.youtube.com/embed/DJcJxu5JehI?si=D7TQHBfJM2qQmZUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`).addTo(map);
