var express = require('express');
var app = express();
var http = require('http').Server(app);

const hostname = '127.0.0.1';
const port = 3000;

app.use('/', express.static('./'));

http.listen(port, hostname, () => {
    console.log(`Server started on port ${port}`);
});