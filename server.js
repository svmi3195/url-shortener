var http = require('http');

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