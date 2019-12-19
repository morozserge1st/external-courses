import './issue.css';

export const Issue = (issues) => {
  const cardList = document.createElement('div');
  cardList.className = 'card__list';

  issues.map(issue => {
    const item = document.createElement('div');
    item.className = 'card__item';
    item.id = issue.id;
    item.innerText = issue.name;
    cardList.append(item);
  });
  
  return cardList;
};
