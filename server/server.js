const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, function() {
  console.log('Connection established.  Listening on port 3000!');
})