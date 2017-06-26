const express = require('express');
const bodyParser = require('body-parser')
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/search', (req, res) => {
  let item = req.body.item;
  let appID = 'f4b3c424';
  let appKey = 'f657bcbb2f43a3a73f4c251076307c3b';
  let url = 'https://api.edamam.com/search/?q=';
  let options = {
    method: 'GET',
    uri: url + item + '&app_id=' + appID + '&app_key=' + appKey,
    gzip: true
  };
  request(options, (err, res, body) => {
    console.log(body);
  }).then((result) => {
    console.log(result);
  })
});

app.listen(3000, function() {
  console.log('Connection established.  Listening on port 3000!');
})