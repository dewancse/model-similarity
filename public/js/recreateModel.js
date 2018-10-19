var proteinModel = [
    "http://purl.obolibrary.org/obo/PR_P55018",
    "http://purl.obolibrary.org/obo/PR_Q63633",
    "http://purl.obolibrary.org/obo/PR_P37089",
    "http://purl.obolibrary.org/obo/PR_P06685",
    "http://purl.obolibrary.org/obo/PR_O35054",
    "http://purl.obolibrary.org/obo/PR_Q06393",
    "http://purl.obolibrary.org/obo/PR_Q9Z0S6",
    "http://purl.obolibrary.org/obo/PR_F1LZ52",
    "http://purl.obolibrary.org/obo/PR_P15387",
];

var csvCounter = 0, xAxis = [], yAxis = [], csvname = [], csvArray = [], dataLen = 0;
var tempxAxis = [], tempyAxis = [], counterRecreate = 0;
var color = d3.scaleOrdinal(d3.schemeCategory10);

// svg graph
var svgDiagram = function (csvData, xDomain, yDomain, csvname, counterid) {

    // make equal length of arrays in csvData
    for (var i = 1; i < csvData.length; i++) {
        var length = csvData[0].length;
        if (csvData[i].length != length) {
            csvData[i] = csvData[i].slice(0, length);
        }
    }

    console.log("xDomain, yDomain, and csvname: ", xDomain, yDomain, csvname);

    var checkBox = [];

    var svgTag = document.createElement("div");
    svgTag.innerHTML = '<svg id="svgRecreate' + counterid + '" width="960" height="500"></svg></div>';

    var div = document.getElementById("recreateID");
    div.appendChild(svgTag);

    var svg = d3.select("#svgRecreate" + counterid),
        margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleLinear()
        .rangeRound([0, width]);

    var y = d3.scaleLinear()
        .rangeRound([height, 0]);

    var line = d3.line()
        .x(function (d) {
            return x(d["xaxis"]);
        })
        .y(function (d) {
            return y(d["yaxis"]);
        });

    x.domain([xDomain[0], xDomain[1]]);
    y.domain([yDomain[0], yDomain[1]]);

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(10));

    g.append("g")
        .call(d3.axisLeft(y).ticks(10));

    var update = function () {
        for (var i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked() == false) {
                $("#" + i).css("opacity", 0);
            }
            else {
                $("#" + i).css("opacity", 1);
            }
        }
    };

    var c = 0, py = 5;
    for (var i = 1; i < csvData.length; i++) {

        console.log("c, py and color(c): ", c, py, color(c));

        for (var m = 0; m < csvData[i].length; m++) {
            csvData[i][m]["xaxis"] = csvData[0][m]["xaxis"];
        }

        g.append("path")
            .datum(csvData[i])
            .attr("id", c)
            .attr("fill", "none")
            .attr("stroke", function (d) {

                if (csvname[i - 1] != undefined) {
                    checkBox[c] = new d3CheckBox();
                    checkBox[c].x(700).y(py).checked(true).clickEvent(update);

                    g.call(checkBox[c]);
                    g.append("text")
                        .style("font", "14px sans-serif")
                        .attr("stroke", color(c))
                        .attr("x", 740)
                        .attr("y", py + 15)
                        .text(csvname[i - 1].slice(csvname[i - 1].indexOf("/") + 1));

                    return color(c);
                }
            })
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("stroke-width", 1.5)
            .attr("opacity", 1)
            .attr("d", line);

        c = c + 1;
        py = py + 20;
    }
};

var reinitRecreate = function () {
    counterRecreate++;
    xAxis = [];
    yAxis = [];
    csvname = [];
    csvArray = [];
    dataLen = 0;
    csvCounter = 0;
    tempxAxis = [];
    tempyAxis = [];
};

// process x and y axis scale and call svg function
var arrFunction = function (xaxis, yaxis, csv, csvCounter, tempOBJ, csvnamesvg) {
    d3.csv(csv, function (data) {

        var tempX = [], tempY = [];

        var tempx = d3.extent(data, function (d, i) {

            if (i <= dataLen) {
                tempX.push({xaxis: d[xaxis]});
                return parseFloat(d[xaxis]);
            }
        });

        var tempy = d3.extent(data, function (d, j) {

            if (j < dataLen) {
                tempY.push({yaxis: d[yaxis]});
                return parseFloat(d[yaxis]);
            }
        });

        if (csvCounter == 0) {
            tempxAxis.push(tempx[0], tempx[1]);
            tempyAxis.push(tempy[0], tempy[1]);

            if (tempX.length == dataLen)
                csvArray.push(tempX);
            else {
                tempX.splice(dataLen);
                csvArray.push(tempX);
            }

            csvArray.push(tempY);
        }
        else {
            tempxAxis.push(tempx[0], tempx[1]);
            tempyAxis.push(tempy[0], tempy[1]);
            csvArray.push(tempY);
        }

        console.log("csvCounter: ", csvCounter);

        if (csvCounter == tempOBJ.length - 1) {
            console.log("tempxAxis, tempyAxis and csvArray: ", tempxAxis, tempyAxis, csvArray);

            svgDiagram(csvArray, minMax(tempxAxis), minMax(tempyAxis), csvnamesvg, counterRecreate);

            reinitRecreate();
            recreateModel();

            return;
        }
        else {
            csvCounter = csvCounter + 1;
            arrFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tempOBJ, csvnamesvg);
        }
    });
};

var recreateModel = function () {
    var innerRecreateModel = function (proteinModelElem) {
        var query = mediatorSPARQLRecreate(proteinModelElem);
        sendPostRequest(
            endpoint,
            query,
            function (jsonObj) {
                var tmpArray = [];
                for (var i = 0; i < jsonObj.results.bindings.length; i++) {
                    var elem = jsonObj.results.bindings[i].modelEntity.value;
                    elem = elem.slice(0, elem.indexOf(".cellml"));
                    if (tmpArray.indexOf(elem) == -1) {
                        tmpArray.push(elem);
                    }
                }

                console.log("tmpArray: ", tmpArray);

                for (var i = 0; i < tmpArray.length; i++) {
                    csvname.push("data/" + tmpArray[i] + "_recreate" + ".csv");

                    xAxis.push("environment | time (second)");
                    yAxis.push("solute_concentrations | C_m_Na (mmol_per_cm3)");
                }

                console.log("xAxis, yAxis and csvname: ", xAxis, yAxis, csvname);

                if (counterRecreate == proteinModel.length - 1) {
                    return;
                }
                else {

                    var sizeOfCSV = function (csvCounter) {

                        d3.csv(csvname[csvCounter], function (data) {
                            console.log("data: ", data);

                            if (data == null) {
                                xAxis.splice(csvCounter, 1);
                                yAxis.splice(csvCounter, 1);
                                csvname.splice(csvCounter, 1);
                                tmpArray.splice(csvCounter, 1);
                                csvCounter--;
                            }
                            else {
                                dataLen = data.length;
                            }

                            if (csvCounter == tmpArray.length - 1) {
                                csvCounter = 0;
                                arrFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tmpArray, csvname);

                                return;
                            }
                            else {
                                csvCounter = csvCounter + 1;
                                sizeOfCSV(csvCounter);
                            }
                        });
                    };

                    sizeOfCSV(csvCounter); // first call
                }
            },
            true);
    };

    innerRecreateModel(proteinModel[counterRecreate]);
};