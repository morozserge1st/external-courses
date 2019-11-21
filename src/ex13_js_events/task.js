const main = document.querySelector('.main');
const profile = document.querySelector('.profile');
const menu = document.querySelector('.menu');
const arrow = document.querySelector('.arrow');

const localStorageData = JSON.parse(localStorage.getItem('data'));
let dataMock = localStorageData ? localStorageData : [
  {
    id: 1,
    title: 'backlog',
    issues: [],
  },
  {
    id: 2,
    title: 'ready',
    issues: [],
  },
  {
    id: 3,
    title: 'in progress',
    issues: [],
  },
  {
    id: 4,
    title: 'finished',
    issues: []
  }
];

let isOpen = false;

profile.addEventListener('click', showUserMenu);

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

function createCard(id, title) {
  const card = document.createElement('section');
  card.className = 'card';
  card.id = id;
  main.append(card);

  const header = document.createElement('div');
  header.className = 'card__header';
  header.innerHTML = `
    <span>${title}</span>
    <img src="./img/ellipsis.svg" alt="ellipsis" />
  `
  card.append(header)

  const container = document.createElement('div');
  container.className = 'container';
  card.append(container)

  const list = document.createElement('div');
  list.className = 'card__list';
  container.append(list);

  const button = document.createElement('button');
  button.className = 'card__button';
  button.innerHTML = '<span>+</span>Add card'
  container.append(button);
}

function createCardItem(list, data) {
  for (let i = 0; i < data.length; i++) {
    const item = document.createElement('div');
    item.className = 'card__item';
    item.id = data[i].id;
    item.innerText = data[i].name;
    list.append(item);
  }
}

function checkCardParams() {
  const cards = document.querySelectorAll('.card');
  const button = document.querySelectorAll('.card__button');

  for (let i = 0; i < cards.length; i++) {
    if (cards[i].clientHeight > main.clientHeight - 50) {
      cards[i].querySelector('.container').style.overflowY = 'auto';
    } else {
      cards[i].querySelector('.container').style.removeProperty('overflow-y');
    }
  }

  for (let i = 1; i < button.length; i++) {
    dataMock[i - 1].issues.length ? button[i].disabled = false : button[i].disabled = true;
  }
}

function addInput() {
  const wrap = document.createElement('div');
  wrap.className = 'wrap';
  this.previousSibling.append(wrap);

  const input = document.createElement('input');
  input.className = 'input';
  wrap.append(input)

  input.focus();
  input.addEventListener('blur', removeInput);
  checkCardParams();
}

function removeInput() {
  this.removeEventListener('blur', removeInput);
  addIssue(this.value);

  this.parentNode.remove();
}

function addIssue(text) {
  if (text.trim()) {
    const issue = {
      id: Math.random(),
      name: text
    };

    dataMock[0].issues = [...dataMock[0].issues, issue];

    localStorage.setItem('data', JSON.stringify(dataMock));

    const list = document.querySelector('.card__list');
    list.innerHTML = '';
    createCardItem(list, dataMock[0].issues);

    checkCardParams();
  }
}

function makeSelect(index) {
  /* The following functions are made inside for index closure. */

  function removeSelect() {
    this.removeEventListener('blur', removeSelect);

    if (this.selectedIndex) {
      moveIssue(+this[this.selectedIndex].id)
    }
    this.parentNode.remove();
  }

  function moveIssue(id) {
    const issue = dataMock[index - 1].issues.find(x => x.id === id);

    dataMock[index - 1].issues = dataMock[index - 1].issues.filter(x => x.id !== id);
    dataMock[index].issues = [...dataMock[index].issues, issue];

    localStorage.setItem('data', JSON.stringify(dataMock));

    const list = document.querySelectorAll('.card__list');
    for (let i = 0; i < list.length; i++) {
      if(i === index - 1 || i === index) {
        list[i].innerHTML = '';
        createCardItem(list[i], dataMock[i].issues);
      }
    }
    checkCardParams();
  }

  return function addSelect() {
    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    this.previousSibling.append(wrap);

    const select = document.createElement('select');
    select.className = 'select';
    wrap.append(select);

    const option = document.createElement('option');
    select.append(option)

    dataMock[index - 1].issues.map(issue => {
      const option = document.createElement('option');
      option.id = issue.id;
      option.value = issue.name;
      option.textContent = issue.name;
      select.append(option)
    });

    select.addEventListener('blur', removeSelect);
    select.focus();
    checkCardParams();
  }
}

(function onLoad(data) {
  for (let i = 0; i < data.length; i++) {
    const {
      id,
      title,
      issues
    } = data[i];
    createCard(id, title);

    const card = document.getElementById(id);
    const list = card.querySelector('.card__list');
    createCardItem(list, issues);

    const button = card.querySelector('.card__button');
    i === 0 ? button.addEventListener('click', addInput) : button.addEventListener('click', makeSelect(i));

    checkCardParams();
  }
}(dataMock));
