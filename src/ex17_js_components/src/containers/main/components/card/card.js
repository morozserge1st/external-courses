import {Button} from '../../../button';
import {Issue} from '../issue/issue';
import {Input} from '../input/input';
import EllipsisIcon from '../../../../icons/ellipsis.svg';
import {Select} from '../select/select';
import './card.css';

export const Card = (data, index) => {
  function addSelect() {
    const wrap = Select(index);
    const cardList = document.querySelectorAll('.card__list')[index];
    cardList.append(wrap);
    wrap.childNodes[0].focus();
  }

  function addInput() {
    const wrap = Input();
    const cardList = document.querySelectorAll('.card__list')[index];
    cardList.append(wrap);
    wrap.childNodes[0].focus()
  }
  
  const card = document.createElement('section');
  card.className = 'card';
  card.id = data.id;

  const header = document.createElement('div');
  header.className = 'card__header';
  header.innerHTML = `
    <span>${data.title}</span>
    <img src="${EllipsisIcon}" alt="ellipsis" />
  `;
  card.append(header);

  const container = document.createElement('div');
  container.className = 'container';
  card.append(container)

  const cardList = Issue(data.issues);
  container.append(cardList);

  const button = Button('card__button',`<span>+</span>Add card`);
  container.append(button);

  if (index) {
    button.addEventListener('click', addSelect);   
  } else {
    button.addEventListener('click', addInput);
  } 
  return card;
};
