const express = require('express');
const bodyParser = require('body-parser')
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
const recipe = require('./recipeRefactor.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/search', (req, res) => {
  let item = req.body.item;
  console.log('item ', item);
  let appID = 'f4b3c424';
  let appKey = 'f657bcbb2f43a3a73f4c251076307c3b';
  let url = 'https://api.edamam.com/search?q=' + item;
  let options = {
    url: url,
    headers: {
      'app_id': appID,
      'app_key': appKey
    }
  };
  request(options).then((result) => {
    return JSON.parse(result.body).hits;
  }).then(recipes => {
    return recipe.refactor(recipes);
  }).then(result => {
    console.log('result: ', result);
  });
});

app.listen(3000, function() {
  console.log('Connection established.  Listening on port 3000!');
});

// curl "https://api.edamam.com/search?q=chicken&app_idf4b3c424=&app_key=f657bcbb2f43a3a73f4c251076307c3b&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"