function analogFetch(url, init) {
  const xhr = new XMLHttpRequest();
  const promise = new Promise((res, rej) => {
    init ? makeRequestWistInit() : makeRequest();
    xhr.status != 200 ? rej(xhr.status + ': ' + xhr.statusText) : res(xhr.responseText);
  });

  function makeRequest() {
    xhr.open('GET', url, false);
    xhr.send();
  }

  function makeRequestWistInit() {
    xhr.open(init.method, url, false);
    if (Object.keys(init.headers).length !== 0) {
      for (const key in init.headers) {
        if (init.headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, init.headers[key])
        }
      }
    }
    xhr.send(init.body);
  }

  String.prototype.json = function () {
    return JSON.parse(this)
  }

  return promise;
}

// GET
analogFetch('https://api.github.com/users/aneelia')
  .then(res => res.json())
  .then(data => console.log(data.login));

// GET with error
analogFetch('https://api.github.com/users/a123fdf1')
  .then(res => res.json())
  .then(data => console.log(data.login))
  .catch(error => console.error(error));

// POST
const data = {
  name: 'Запрос',
  surname: 'Постов'
}

analogFetch('http://httpbin.org/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(res => res.json())
  .then(res => res.data.json())
  .then(data => console.log(`${data.name} ${data.surname}`))
  .catch(error => console.error(error));
