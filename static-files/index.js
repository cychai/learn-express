var express = require('express');
var app = express();

app.use('/public', express.static('public'));

app.use('/static', express.static('static'));

app.listen(3000, function () {
  console.log('static files app listening on port 3000!');
});