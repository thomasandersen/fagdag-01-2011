var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var responseHtml = '<h1>Hello World 2</h1>\n';

    console.log('Hello', req);

    res.end(responseHtml);

}).listen(process.env.PORT, "0.0.0.0");

console.log('Server running at http://0.0.0.0:' + process.env.PORT + '/');