var express = require('express');
var app = express();
var mongoose = require('mongoose');

var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://short:short@ds159328.mlab.com:59328/url-shortener-data');

var Schema = mongoose.Schema;
 
var linkSchema = new Schema({
    original  : String,
    shortened : String
});

var Link = mongoose.model('Link', linkSchema);

var google = Link({
    original  : 'https://www.google.ru/',
    shortened : '12345'
});

google.save(function(error){
    if(error) throw error;

    console,log('input saved');
})

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