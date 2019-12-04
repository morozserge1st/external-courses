import LogoIcon from '../../../../icons/logo.svg';
import './logo.css';

export const Logo = () => {
  const logo = document.createElement('div');
  logo.className = 'logo';
  
  const img = document.createElement('img');
  img.src = LogoIcon;
  logo.append(img);

  const link = document.createElement('a');
  link.className = 'logo__link';
  link.innerText = 'Awesome Kanban Board';
  logo.append(link);

  return logo;
};
