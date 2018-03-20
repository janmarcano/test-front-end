const express = require('express');
const path = require('path');

const port = 8080;
const server = express();
const api = require('./server/api.js');

server.use(express.static(__dirname + '/build'));

server.use('/api', api);

server.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
);

server.listen(port);

console.log("Server listening on port: ", port);