const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));
const recipe = require('./recipeRefactor.js');
const wine = require('./wineRefactor.js');
const api = require('./config.js');
const axios = require('axios');
const Clarifai = require('clarifai');
const query = require('./query.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/search', (req, res) => {
  let data = req.body;
  console.log('data ', data);
  query.apiQuery(data, res);
});

app.post('/clarifai', (req, res) => {
  console.log(req.body);
  let imageUrl = req.body.url;
  const clarifai = new Clarifai.App({
    apiKey: api.clarifai_key
  });

  clarifai.models
  .predict(Clarifai.GENERAL_MODEL, imageUrl)
  .then((response, error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('response: ', response);
      return response;
    }
  })
  .then(result => {
    console.log('resultssst: ', result.outputs[0].data);
    return result.outputs[0].data.concepts.map(item => {
      return item.name;
    });
  })
  .then(imageText => {
    console.log('imageText ', imageText);
    query.apiQuery({item: imageText[0]}, res);
  });

});

app.listen(3000, function() {
  console.log('Connection established.  Listening on port 3000!');
});
