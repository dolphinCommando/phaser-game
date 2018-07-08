var express = require('express');

var port = 3000;

var app = express()
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', function(err, html) {
    if (err) throw err;
    res.send(html);
  });
});

app.listen(port, function() {
  console.log('App listening on port ' + port);
})