

var request = require('request');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html');

})

app.use(bodyParser.urlencoded({extended: true}));

app.post('/data', function(req, res){

    var artist = req.body["artist"];
    var songname = req.body["songname"];
    request('https://api.lyrics.ovh/v1/'+ artist +'/'+ songname, function(error,response,body){
        var obj = JSON.parse(body);
        
            res.send(obj.lyrics);
        
    });

});

app.listen(3000, "0.0.0.0", function(){
    console.log("Kuulan porti 3000");
});