var express = require('express')
var path = require('path')
var app = express()

app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/static/angular', express.static(path.join(__dirname, 'node_modules/angular')));
app.use('/static/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/static/chosen-js', express.static(path.join(__dirname, 'node_modules/chosen-js')));
app.use('/static/angular-chosen', express.static(path.join(__dirname, 'node_modules/angular-chosen/dist')));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});