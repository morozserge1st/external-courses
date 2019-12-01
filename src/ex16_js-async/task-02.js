const articles = [
  {
    id: 1,
    name: 'Палитра цветов для LUA'
  },
  {
    id: 2,
    name: 'Генератор случайных чисел'
  },
  {
    id: 3,
    name: 'Переменное количество аргументов функции'
  },
  {
    id: 4,
    name: 'Вычисление функций во время компиляции'	
  },
  {
    id: 5,
    name: 'Lua assert() + m4'
  },
  {
    id: 6,
    name: 'Римская и десятичная нотация'
  },
  {
    id: 7,
    name: 'Вычисление констант препроцессором'
  },
  {
    id: 8,
    name: 'Манипуляции со строками'
  },
  {
    id: 9,
    name: 'ForCollection и ForTable'
  },
  {
    id: 10,
    name: 'Цикл стиля С/С++/С# в QPILE'
  },
  {
    id: 11,
    name: 'Статические переменные в QPILE'
  },
  {
    id: 12,
    name: 'Block .. EndBlock'
  }
];

const table = document.querySelector('.table');
const input = document.querySelector('.input');

const headers = [
  'Id',
  'Название'
];

const createHead = () => {
  const row = document.createElement('tr');
  row.className = 'table__row';
  table.append(row);

  headers.map(header => {
    const head = document.createElement('th');
    head.className = 'table__head';
    head.innerText = header;
    row.append(head);
  });
};

const createTable = (arr) => {
  table.innerHTML = '';
  createHead();
  
  arr.map(elem => {
    const row = document.createElement('tr');
    row.className = 'table__row';
    table.append(row);

    for (const key in elem) {
      if (Object.keys(elem).length) {
        const cell = document.createElement('td');
        cell.className = 'table__cell';
        cell.innerText = elem[key];
        row.append(cell);
      }
    }
  });
};

createTable(articles);

const debounce = (func, delay) => {
  let timeout;

  return () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      timeout = null;
      func();
    }, delay);
  };
};

input.addEventListener('input', debounce(() => (
  createTable(articles.filter(x => x.name.toLowerCase().includes(input.value)))
), 1000));
