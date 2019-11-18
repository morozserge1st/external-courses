const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log('Backend NodeJS live on ' + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/asset/task-01.html');
});

app.use(express.static('asset'));

app.get('/api/v1/images', (req, res) => {
  fs.readdir('./asset/img', (err,items) => {
    if(items[0] == '.DS_Store') {
      items.splice(0,1);
    }
    res.json({
      data: items
    });  
  })
});
