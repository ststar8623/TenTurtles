const express = require('express');
const bodyParser = require('body-parser')
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
const recipe = require('./recipeRefactor.js');
const wine = require('./wineRefactor.js');
const api = require('./config.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/search', (req, res) => {
  let item = req.body.item;
  console.log('item ', item);
  let options = {
    url: 'https://api.edamam.com/search?q=' + item,
    headers: {
       'app_id': api.recipe_appId,
      'app_key': api.recipe_appKey
    }
  };
  request(options).then((result) => {
    return recipe.refactor(JSON.parse(result.body).hits);
  }).then(result => {
    // console.log('result: ', result);
    let wines = ["pinot noir", "grenache", "st. laurent", "carignan", "counoise"];
    return wines;
  }).then(pairings => {
    // console.log(pairings);
    let random = Math.floor(Math.random() * pairings.length);
    console.log('random: ', random);
    let options = {
         url: 'http://services.wine.com/api/beta2/service.svc/JSON/catalog?sort=popularity|descending&apikey=' + api.wine_key,
      search: pairings[4]
    };
    request(options).then(result => {
      return wine.refactor(JSON.parse(result.body).Products.List);
      // console.log('wines: ', wines);
    }).then(result => {
      console.log('result[0]::::::::::::::::::::::::::', result);
    });
  })
});

app.listen(3000, function() {
  console.log('Connection established.  Listening on port 3000!');
});

// curl "https://api.edamam.com/search?q=chicken&app_idf4b3c424=&app_key=f657bcbb2f43a3a73f4c251076307c3b&from=0&to=3&calories=gte%20591,%20lte%20722&health=alcohol-free"

// wine pairing 
// ["pinot noir","grenache","st. laurent","carignan","counoise"]

// wine api
// http://services.wine.com/api/beta2/service.svc/format/catalog