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
