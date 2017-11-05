var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

//create the server object
http.createServer(function  (req, res) {
    //Only needed if returning HTML and need a "status" 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("<br>Hello World!<br>");
    //The "req" is the argument that represents the request from the client
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
