console.log('Server-side code running');

const express = require('express');
const http = require('http');
const fs = require('fs');
const request = require('request');
var url = require('url');

const app = express();

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
http.createServer(function (req, res) {
    // Do something here!
    // fs.writeFile('mynewfile.xml', client.msg, function (err) {
    //     if (err) throw err;
    //     console.log('Saved!');
    // });

    console.log("req: ", req);
    console.log("res: ", res);

    request(
        'https://models.physiomeproject.org/workspace/267/rawfile/HEAD/test.xml',
        function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080, () => {
    console.log('listening on 8080');
});

// app.listen(8080, () => {
//     console.log('listening on 8080');
//
//     fs.writeFile('mynewfile.xml', 'Hello Dewan!', function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//     });
// });

// serve the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});