var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist/'));

var port = 80;

app.listen(port, function () {
  console.log(`listening on port ${port}!`);
});
