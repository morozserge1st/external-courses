import {initialData} from '../../constants/initial-data';
import {Issue} from './components/issue/issue';

export let cards = initialData;

export function addIssue(issue, index) {
  cards = cards.map((item, i) => i === index ? ({
    ...item,
    issues: item.issues.concat(issue)
  }) : item);
  
  localStorage.setItem('data', JSON.stringify(cards));

  repaintCard(index);
  disableButton()
}

export function deleteIssue(id, index) {
  cards = cards.map((item, i) => i === index ? ({
    ...item,
    issues: item.issues.filter(x => x.id !== id)
  }) : item);

  localStorage.setItem('data', JSON.stringify(cards));

  repaintCard(index);
  disableButton();
}


function repaintCard (index) {
  const cardList = document.querySelectorAll('.card__list')[index];
  cardList.replaceWith(Issue(cards[index].issues));
}

export function disableButton() {
  const buttons = document.querySelectorAll('.card__button');

  for (let i = 1; i < buttons.length; i++) {
    buttons[i].removeAttribute('disabled');

    if (!cards[i - 1].issues.length) {
      buttons[i].setAttribute('disabled', 'true');
    }
  }
}
