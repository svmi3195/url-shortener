var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.get('/*', function(req, res){

    var orig = req.originalUrl.slice(1);
    var short = '';   

    var urls = {
        original: orig,
        shortened: short
    };

    res.send(JSON.stringify(urls));

});

app.listen(port);