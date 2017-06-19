var express = require('express')
var path = require('path')
var app = express()

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/static/angular', express.static(path.join(__dirname, 'node_modules/angular')));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});