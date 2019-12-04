(function () {
const toggleMenu = document.querySelector('#toggleMenu');
const menu = document.querySelector('#menu');
//
toggleMenu.addEventListener('click', () => {
  if (menu.classList.contains('is-active')) {this.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-active');}
  else {menu.classList.add('is-active'); this.setAttribute('aria-expanded', 'true');}
});
})