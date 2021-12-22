const wrapper = document.getElementById('location-wrapper');
const buttons = [];
const locations = [];

for (let i = 0; i < wrapper.children.length; i++) {
  buttons.push(document.getElementById(`scroll-to-${i+1}`));
  buttons[i].addEventListener('click', () => {moveToLocation(i);})
}

for (let i = 0; i < wrapper.children.length; i++) {
  locations.push(wrapper.children[i]);
}

let currentLocation = 0;

function nextLocation() {
  currentLocation++;
  wrapper.style.marginLeft = `-${currentLocation%5*100}%`;
}

function moveToLocation(location) {
  currentLocation = location;
  wrapper.style.marginLeft = `-${currentLocation%5*100}%`;
}

setInterval(nextLocation, 10000);