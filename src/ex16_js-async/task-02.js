let articles = [
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
]

const table = document.querySelector('.table');
const input = document.querySelector('.input');

const header = [
  'Id',
  'Название'
];

function createHead(){
  const row = document.createElement('tr');
  row.className = 'table__row';
  table.append(row);

  for (let i = 0; i < header.length; i++) {
    const head = document.createElement('th');
    head.className = 'table__head';
    head.innerText = header[i];
    row.append(head);
  }
};

function createTable(data) {
  table.innerHTML = '';
  createHead();
  
  for (let i = 0; i < data.length; i++) {
    const row = document.createElement('tr');
    row.className = 'table__row';
    table.append(row);

    for (const key in data[i]) {
      if (data[i].hasOwnProperty(key)) {
        const cell = document.createElement('td');
        cell.className = 'table__cell';
        cell.innerText = data[i][key];
        row.append(cell);
      }
    }
  }
}

createTable(articles);

input.oninput = function() {
  articles = articles.filter(x => x.name.includes(input.value));
  console.log(articles)
  debounce(createTable, 1000);
};

function debounce(func, timer) {
  let isWaiting = false;

  return function() {
    if (isWaiting) return;

    func.apply(this, arguments);
    isWaiting = true;

    setTimeout(() => isWaiting = false, timer);
  };
}
