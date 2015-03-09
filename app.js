var request = require('request');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  request('http://10.0.0.3/test', function (err, response, body) {
    console.log('Received: ' + body);
    console.log('Sent: Fake response\n');
    res.send('Fake response\n');
  });
});

app.get('/test', function(req, res) {
  console.log('Got here\n');
  res.send('test\n');
});

app.listen(80);
