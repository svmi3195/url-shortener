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

app.get('/https://*', function(req, res){

    var orig = req.originalUrl.slice(1);
    var short = '';

    var inLink = Link({
        original  : orig,
        shortened : orig + 'ZZZ'
    });

   Link.find({ original: orig }, function(err, haveLink){
        if(err) return console.error(err);
        if(haveLink[0]) console.log(haveLink[0]['shortened']);
        else{
            inLink.save(function(err, data){
                if(err) return console.error(err);
                console.log('input saved');
                return orig + 'ZZZ';
        }); 
        }
    });


    var urls = {
        original: orig,
        shortened: short
    };

    res.send(JSON.stringify(urls));

});

app.listen(port);