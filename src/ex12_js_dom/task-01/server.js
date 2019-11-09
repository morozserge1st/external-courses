const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log('Backend NodeJS live on ' + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/task-01.html');
});

app.get('/task-01.css', (req, res) => {
  res.sendFile(__dirname + '/task-01.css');
});

app.get('/task-01.js', (req, res) => {
  res.sendFile(__dirname + '/task-01.js');
});

app.get('/asset/:file', (req, res) => {
  const file = req.params.file
  res.sendFile(__dirname + '/asset/' + file)
})

app.get('/api/v1/images', (req, res) => {
  fs.readdir('./asset', (err,items) => {
    if(items[0] == '.DS_Store') {
      items.splice(0,1);
    }
    res.json({
      data: items
    });  
  })
});
