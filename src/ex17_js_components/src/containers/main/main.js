import {Card} from './components/card/card';
import {cards} from './main-controller';
import './main.css';

export const Main = () => {
  const main = document.createElement('main');
  main.className = 'main';

  cards.map((card, index) => {
    main.append(Card(card, index));
  })

  return main;
};
