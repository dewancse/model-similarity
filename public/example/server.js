var http = require('http');
var fs = require('fs');
var client = require('./client.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');
var DomParser = require('dom-parser');
const xml = require("xml-parse");

http.createServer(function (req, res) {

    // Do something here!

}).listen(8080, "localhost", function () {
    console.log("Running server at ABI on " + "localhost" + ":" + 8080);
});