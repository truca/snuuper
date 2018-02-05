var express = require('express');
var data = require('./data')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/movies', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data.movies));
});

app.get('/videogames', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data.videogames));
});

app.get('/electronics', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data.electronics));
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});