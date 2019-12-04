import './footer.css';

export const Footer = () => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const state = document.createElement('ul');
  state.className = 'state';
  footer.append(state);

  const items = [
    'Active tasks: &lt;N&gt;',
    'Finished tasks: &lt;M&gt;'
  ];

  items.map(item => {
    const stateItem = document.createElement('li');
    stateItem.className = 'state__item';
    stateItem.innerText = item;
    state.append(stateItem);
  });

  const about = document.createElement('p');
  about.className = 'about';
  about.innerText = 'Kanban board by Sergei Morozov, 2019';
  footer.append(about);

  return footer;
};
