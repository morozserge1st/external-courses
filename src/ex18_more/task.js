const main = document.querySelector('.main');
const toolbarButton = document.querySelector('.toolbar__button');
const profile = document.querySelector('.profile');
const menu = document.querySelector('.menu');
const arrow = document.querySelector('.arrow');

const localStorageData = JSON.parse(localStorage.getItem('data'));
let dataMock = localStorageData ? localStorageData : [];

let isOpenMenu = false;
let isOpenPopover = false;

function showUserMenu(e) {
  let visibility = 'hidden';
  let transform = 'rotateZ(0deg)';

  e.stopPropagation();
  isOpenMenu = !isOpenMenu;
  if (isOpenMenu) {
    visibility = 'visible';
    transform = 'rotateZ(180deg)';
    document.addEventListener('click', showUserMenu);
  } else {
    document.removeEventListener('click', showUserMenu);
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
    <img src="./img/ellipsis.svg" id ="${id}" class="ellipsis" alt="ellipsis" />
  `;
  card.append(header);

  const container = document.createElement('div');
  container.className = 'container';
  card.append(container);

  const list = document.createElement('div');
  list.className = 'card__list';
  container.append(list);

  const button = document.createElement('button');
  button.className = 'card__button';
  button.innerHTML = '<span>+</span>Add card';
  container.append(button);
}

function createCardItem(list, data) {
  data.map(card => {
    const item = document.createElement('div');
    item.className = 'card__item';
    item.id = card.id;
    item.innerText = card.name;
    list.append(item);
  });
}

function countTask() {
  const state = document.querySelector('.state');
  if (dataMock.length) {
    const activeTasks = dataMock[0].issues.length;
    const finishedTasks = dataMock[dataMock.length - 1].issues.length;
    state.innerHTML = `
      <li class="state__item">Active tasks: ${activeTasks}</li>
      <li class="state__item">Finished tasks: ${finishedTasks}</li>
    `;
  } else {
    state.innerHTML = '';
  }
}

function disableButton() {
  const buttons = document.querySelectorAll('.card__button');

  for (let i = 1; i < buttons.length; i++) {
    buttons[i].removeAttribute('disabled');

    if (!dataMock[i - 1].issues.length) {
      buttons[i].setAttribute('disabled', 'true');
    }
  }
}

function checkCardParams() {
  disableButton();
  countTask();
}

function addInput() {
  const wrap = document.createElement('div');
  wrap.className = 'wrap';
  this.previousSibling.append(wrap);

  const input = document.createElement('input');
  input.className = 'input';
  wrap.append(input);

  input.focus();
  input.addEventListener('blur', removeInput);
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
      moveIssue(+this[this.selectedIndex].id);
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
    select.append(option);

    dataMock[index - 1].issues.map(issue => {
      const option = document.createElement('option');
      option.id = issue.id;
      option.value = issue.name;
      option.textContent = issue.name;
      select.append(option);
    });

    select.addEventListener('blur', removeSelect);
    select.focus();
  }
}

function addPopover(e) {
  e.stopPropagation();

  const popover = document.createElement('div');
  popover.className = 'popover';
  this.parentNode.append(popover);

  const list = document.createElement('ul');
  list.className = 'popover__list';
  popover.append(list);

  const item = document.createElement('li');
  item.className = 'popover__item';
  item.innerText = 'Delete';
  item.addEventListener('click', deleteCard(this.id) );
  list.append(item);

  document.addEventListener('click', removePopover);
}

function removePopover(e) {
  e.stopPropagation();
  document.removeEventListener('click', removePopover);

  const popover = document.querySelector('.popover');
  popover.remove();
}

function addNewCardInput() {
  const card = document.createElement('div');
  card.className = 'card';
  main.prepend(card);

  const wrap = document.createElement('div');
  wrap.className = 'wrap';
  card.prepend(wrap);

  const input = document.createElement('input');
  input.className = 'input';
  wrap.append(input);

  input.focus();
  input.addEventListener('blur', removeNewCardInput);
}

function removeNewCardInput() {
  this.removeEventListener('blur', removeNewCardInput);
  addCard(this.value);

  this.parentNode.parentNode.remove();
}

function addCard(text) {
  if (text.trim()) {
    const card = {
      id: Math.random(),
      title: text,
      issues: []
    };

    dataMock = [card, ...dataMock];

    localStorage.setItem('data', JSON.stringify(dataMock));

    main.innerHTML = '';
    makeBoard(dataMock);
  }
}

function deleteCard(id) {
  return function (e) {
    e.stopPropagation();
    document.removeEventListener('click', removePopover);

    dataMock = dataMock.filter(card => card.id !== +id);
    localStorage.setItem('data', JSON.stringify(dataMock));

    main.innerHTML = '';
    makeBoard(dataMock);
  }
}

function makeBoard(data) {
  if (data.length) {
    data.map(card => {
      const {
        id,
        title,
        issues
      } = card;
      createCard(id, title);

      const item = document.getElementById(id);
      const list = item.querySelector('.card__list');
      createCardItem(list, issues);
    });

    const buttons = document.querySelectorAll('.card__button');
  
    buttons[0].addEventListener('click', addInput);
    for (let i = 1; i < buttons.length; i++) {
      buttons[i].addEventListener('click', makeSelect(i));    
    }

    const ellipsis = document.querySelectorAll('.ellipsis');
    for (let i = 0; i < ellipsis.length; i++) {
      ellipsis[i].addEventListener('click', addPopover);
    }

    checkCardParams();
  } else {
    const card = document.createElement('div');
    card.className = 'card--empty';
    card.innerText = 'Add your first card';
    main.append(card);
    
    checkCardParams();
  }
}

profile.addEventListener('click', showUserMenu);
toolbarButton.addEventListener('click', addNewCardInput);

(function onLoad(data) {
  makeBoard(data)
}(dataMock));
