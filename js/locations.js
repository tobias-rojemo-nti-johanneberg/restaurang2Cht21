const main = document.getElementById('location-wrapper');
const locations = [];

for (let i = 0; i < main.children.length; i++) {
  locations.push(main.children[i]);
}

let currentLocation = 0;
locations[0].children[0].hidden = false;
locations[0].children[1].children[0].hidden = false;
locations[0].children[1].children[1].hidden = false;

function nextLocation() {
  locations[currentLocation%locations.length].children[0].hidden = true;
  locations[currentLocation%locations.length].children[1].children[0].hidden = true;
  locations[currentLocation%locations.length].children[1].children[1].hidden = true;

  currentLocation++;
  
  locations[currentLocation%locations.length].children[0].hidden = false;
  locations[currentLocation%locations.length].children[1].children[0].hidden = false;
  locations[currentLocation%locations.length].children[1].children[1].hidden = false;
}

//setInterval(nextLocation, 10000);