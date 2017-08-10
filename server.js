var express = require('express'),
    server = express();

server.use('/',express.static(__dirname+"/dist/"));

server.use('/coverage/',express.static(__dirname+"/analytics/coverage/"));
server.use('/coverage/',express.directory(__dirname+"/analytics/coverage/"));

server.use('/complexity/',express.static(__dirname+"/analytics/complexity/"));

server.listen(8080);
