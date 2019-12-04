import {Menu} from '../menu/menu';
import AvatarIcon from '../../../../icons/avatar.svg';
import ArrowIcon from '../../../../icons/arrow.svg';
import './profile.css';

export const Profile = () => {
  let isOpen = false;

  function showUserMenu(e) {
    let visibility = 'hidden';
    let transform = 'rotateZ(0deg)';
  
    e.stopPropagation();
    isOpen = !isOpen;
    if (isOpen) {
      visibility = 'visible';
      transform = 'rotateZ(180deg)';
      document.addEventListener('click', showUserMenu)
    } else {
      document.removeEventListener('click', showUserMenu)
    }
  
    arrow.style.transform = transform;
    menu.style.visibility = visibility;
  }

  const profile = document.createElement('div');
  profile.className = 'profile';
  profile.addEventListener('click', showUserMenu);

  const avatar = document.createElement('div');
  avatar.className = 'avatar';
  avatar.innerHTML = `<img src="${AvatarIcon}" alt="avatar"/>`;
  profile.append(avatar);

  const arrow = document.createElement('div');
  arrow.className = 'arrow';
  arrow.innerHTML = `<img src="${ArrowIcon}" alt="avatar"/>`;
  profile.append(arrow);

  const menu = Menu();
  profile.append(menu);

  return profile;
};
