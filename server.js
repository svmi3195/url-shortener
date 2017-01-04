var http = require('http');
var express = require('express');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});

    var orig = req.url.slice(1);
    var short = "";   

    var urls = {
        original: orig,
        shortened: short
    };

    res.end(JSON.stringify(urls));

}).listen(1337, '127.0.0.1');