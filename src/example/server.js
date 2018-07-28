var http = require('http');
var fs = require('fs');
// var client = require('./client.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = require('request');
var DomParser = require('dom-parser');
const xml = require("xml-parse");

http.createServer(function (req, res) {

    request(
        'https://models.physiomeproject.org/workspace/267/rawfile/HEAD/test.xml',
        function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.

            // change attribute
            var mystr = body.slice(0, body.indexOf("name=")) + 'name="myNameAttr" ' + body.slice(body.indexOf("plot"));
            console.log("mystr: ", mystr);

            // change x and y component
            mystr = mystr.slice(0, mystr.indexOf('target="xtarget"')) + 'target="J_NHE3_Na" ' + mystr.slice(mystr.indexOf("taskReference="));
            mystr = mystr.slice(0, mystr.indexOf('target="ytarget"')) + 'target="C_ext_Na" ' + mystr.slice(mystr.indexOf("taskReference="));

            var parser = new DomParser();
            var xmlDoc2 = parser.parseFromString(mystr);

            console.log("xmlDoc2 and typeof xmlDoc2: ", xmlDoc2.rawHTML, typeof xmlDoc2);

            fs.writeFile('mynewfile.xml', xmlDoc2.rawHTML, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        });

}).listen(8080, "localhost", function () {
    console.log("Running server at ABI on " + "localhost" + ":" + 8080);
});

// var parser = new DomParser();
// fs.readFile('index.html', 'utf8', function (err, html) {
//     if (!err) {
//         var dom = parser.parseFromString(html);
//
//         console.log("dom: ", dom);
//         // console.log("tagname: ", dom.getElementsByTagName('ns0:located_in'));
//     }
//     else
//         console.log("Error!");
// })

// function handleResponse(request, responseHandler, isJsonResponse) {
//     //     console.log("entry 6");
//     //
//     //     if ((request.readyState == 4) && (request.status == 200)) {
//     //
//     //         console.log("entry 7");
//     //
//     //         // Default to isJsonResponse = true
//     //         if (isJsonResponse == undefined) {
//     //             console.log("entry 8");
//     //             isJsonResponse = true;
//     //         }
//     //
//     //         if (isJsonResponse) {
//     //             console.log("entry 9");
//     //             responseHandler(JSON.parse(request.responseText));
//     //         }
//     //         else {
//     //             console.log("entry 10");
//     //             responseHandler(request.responseText);
//     //         }
//     //     }
//     //     else if (request.readyState == 4) {
//     //         console.log("entry 11");
//     //
//     //         console.log("ERROR!");
//     //         console.error(request.responseText);
//     //     }
//     // }

// Makes an Ajax GET request to 'requestUrl'
// var sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
//     var request = new XMLHttpRequest();
//
//     console.log("entry 2");
//
//     request.onreadystatechange = function () {
//         console.log("entry 3");
//
//         handleResponse(request, responseHandler, isJsonResponse);
//     };
//
//     console.log("entry 4");
//     request.open("GET", requestUrl, true);
//     console.log("entry 5");
//     request.send(null); // for POST only
// }

// sendGetRequest(
//     'annotation.xml',
//     function (annotationHtml) {
//         console.log("entry 1");
//         console.log("msg: ", annotationHtml);
//
//         fs.writeFile('mynewfile.xml', annotationHtml, function (err) {
//             if (err) throw err;
//             console.log('Saved!');
//         });
//     },
//     false);
