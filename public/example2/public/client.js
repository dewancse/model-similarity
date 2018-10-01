console.log('Client-side code running');

function getRequestObject() {
    // code here
    if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
        alert("Ajax is not supported!");
        return (null);
    }
}

function handleResponse(request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {

        // Default to isJsonResponse = true
        if (isJsonResponse == undefined) {
            isJsonResponse = true;
        }

        if (isJsonResponse) {
            responseHandler(JSON.parse(request.responseText));
        }
        else {
            responseHandler(request.responseText);
        }
    }

    else if (request.readyState == 4) {
        console.log("ERROR!");
        console.error(request.responseText);
    }
}

// Makes an Ajax GET request to 'requestUrl'
var sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = function () {
        handleResponse(request, responseHandler, isJsonResponse);
    };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
};

const button = document.getElementById('myButton');
button.addEventListener('click', function (e) {
    console.log('button was clicked');

    sendGetRequest(
        'https://models.physiomeproject.org/w/andre/weinstein_1995/rawfile/HEAD/Weinstein_1995_NHE3-annotations.xml',
        function (htmlContent) {
            console.log("htmlContent: ", htmlContent);
            $("#main-content").html(htmlContent);
        },
        false);
});