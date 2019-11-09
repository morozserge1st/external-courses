const profile = document.querySelector('.profile');
const menu = document.querySelector('.menu');
const arrow = document.querySelector('.arrow');

let isOpen = false;

profile.addEventListener("click", showUserMenu);

function showUserMenu() {
  let visibility = 'hidden';
  let transform = 'rotateZ(0deg)';

  isOpen = !isOpen;
  if (isOpen) {
    visibility = 'visible';
    transform = 'rotateZ(180deg)';
  }

  arrow.style.transform = transform;
  menu.style.visibility = visibility;
}
