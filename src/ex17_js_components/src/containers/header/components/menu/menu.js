import './menu.css';

export const Menu = () => {
  const menu = document.createElement('nav');
  menu.className = 'menu';

  const menuList = document.createElement('ul');
  menuList.className = 'menu__list';
  menu.append(menuList);

  const items = [
    'My account',
    'My tasks',
    'Log out'
  ];

  items.map(item => {
    const menuItem = document.createElement('li');
    menuItem.className = 'menu__item';
    menuList.append(menuItem);

    const menuLink = document.createElement('a');
    menuLink.className = 'menu__link';
    menuLink.innerText = item;
    menuItem.append(menuLink);

  });

  return menu;
};
