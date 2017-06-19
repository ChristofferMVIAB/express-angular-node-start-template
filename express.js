var express = require('express')
var app = express()

app.use('/static', express.static(__dirname + '/static'));
app.use('/static/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/static/angular-route', express.static(__dirname + '/node_modules/angular-route'));

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/static' });
});


app.listen(3000, function () {
  console.log('Listening on port 3000!');
});