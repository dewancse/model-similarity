/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
var ajaxUtils = require("../libs/ajax-utils.js");
var msg = "Hello, Dewan!";

var modelSimilarity = (function (global) {

    ajaxUtils.sendGetRequest(
        'annotation.xml',
        function (annotationHtml) {
            msg = annotationHtml;
            console.log("msg: ", annotationHtml);
        },
        false);

    // $('#btn').click(function () {
    //     ajaxUtils.sendGetRequest(
    //         'annotation.xml',
    //         function (annotationHtml) {
    //             console.log(annotationHtml);
    //         },
    //         false);
    // });

    // msg = "Hello Dewan!";
})();

exports.msg = msg;