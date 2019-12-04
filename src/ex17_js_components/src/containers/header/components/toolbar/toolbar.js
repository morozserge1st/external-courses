import {Button} from '../../../button';
import {Profile} from '../profile/profile';
import PlusIcon from '../../../../icons/plus.svg';
import './toolbar.css';

export const Toolbar = () => {
  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';

  const profile = document.createElement('div');
  profile.className = 'profile';

  toolbar.append(Button('toolbar__button',`<img src="${PlusIcon}"/><span>Create new list</span>`));
  toolbar.append(Profile());

  return toolbar;
};
