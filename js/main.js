document.getElementById('nav-home').addEventListener('click', () => {nav('index')});
document.getElementById('nav-menu').addEventListener('click', () => {nav('menu')});
document.getElementById('nav-locations').addEventListener('click', () => {nav('locations')});

function nav(target) {
  history.replaceState({}, document.title, `./${target}.html`);
  location.reload();
  return false;
}