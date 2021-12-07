const https = require('https');
const http = require('http');
const fs = require('fs');

const express = require('express')
const path = require('path')
const app = express()

const credentials  = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

app.use(express.static('public'))
app.use((req, res, next) => {
    if (!req.secure) {
      return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
  })

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(80);
httpsServer.listen(443);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'WWWNavigator.html'))
  })