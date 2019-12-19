import {Logo} from './components/logo/logo';
import {Toolbar} from './components/toolbar/toolbar';
import './header.css';

export const Header = () => {
  const header = document.createElement('header');
  header.className = 'header';

  header.append(Logo());
  header.append(Toolbar());

  return header;
};
