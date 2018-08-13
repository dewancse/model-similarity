/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
// var ajaxUtils = require("../libs/ajax-utils.js");
var request = require('request');
var fs = require('fs');
var DomParser = require('dom-parser');

var modelSimilarity = (function (global) {

    var myAttr = "myName", myXaxis = "C_int_Na", myYaxis = "Time";

    request(
        'https://models.physiomeproject.org/workspace/267/rawfile/HEAD/test.xml',
        function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            // console.log('body:', body); // Print the HTML for the Google homepage.

            // change attribute
            var mystr = body.slice(0, body.indexOf("name=")) + 'name="' + myAttr + '" ' + body.slice(body.indexOf("plot"));
            console.log("mystr: ", mystr);

            // change x and y component
            mystr = mystr.slice(0, mystr.indexOf('target="xtarget"')) + 'target="' + myXaxis + '" ' + mystr.slice(mystr.indexOf("taskReference="));
            mystr = mystr.slice(0, mystr.indexOf('target="ytarget"')) + 'target="' + myYaxis + '" ' + mystr.slice(mystr.indexOf("taskReference="));

            var parser = new DomParser();
            var xmlDoc2 = parser.parseFromString(mystr);

            console.log("xmlDoc2 and typeof xmlDoc2: ", xmlDoc2, typeof xmlDoc2);

            // fs.writeFile('mynewfile.xml', xmlDoc2.rawHTML, function (err) {
            fs.writeFile('mynewfile.xml', mystr, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        });

    const button = document.getElementById('myButton');
    button.addEventListener('click', function (e) {
        console.log('button was clicked');
    });
})();