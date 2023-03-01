require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.SERVER_PORT || 3000;
const host = process.env.SERVER_HOST || 'http://localhost';

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/', router);
app.use(express.static(__dirname + '/build'));

app.listen(port, function() {
    console.log('Server started at : ' + host + ':' + port);
});