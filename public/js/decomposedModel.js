var csvCounter = 0, xAxis = [], yAxis = [], csvname = [], csvArray = [], dataLen = 0;
var color = d3.scaleOrdinal(d3.schemeCategory10);

// svg graph
var svgdDecomposedDiagram = function (csvData, xDomain, yDomain, csvname, counter) {

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
    svgTag.innerHTML = '<svg id="svgDecomposed' + counter + '" width="960" height="500"></svg></div>';

    var div = document.getElementById("decomposedID");
    div.appendChild(svgTag);

    var svg = d3.select("#svgDecomposed" + counter),
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
        console.log("csvData, csvname: ", csvData, csvname);

        for (var m = 0; m < csvData[i].length; m++) {
            csvData[i][m]["xaxis"] = csvData[0][m]["xaxis"];
        }

        g.append("path")
            .datum(csvData[i])
            .attr("id", c)
            .attr("fill", "none")
            .attr("stroke", function (d) {

                console.log("csvname[i]: ", csvname[i], csvname[i - 1]);

                if (csvname[i - 1] != undefined) {
                    checkBox[c] = new d3CheckBox();
                    checkBox[c].x(700).y(py).checked(true).clickEvent(update);

                    g.call(checkBox[c]);
                    g.append("text")
                        .style("font", "14px sans-serif")
                        .attr("stroke", color(c + counter))
                        .attr("x", 740)
                        .attr("y", py + 15)
                        .text(csvname[i - 1].slice(csvname[i - 1].indexOf("/") + 1));

                    return color(c + counter);
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

// process x and y axis scale and call either svg function
var arrDecomposedFunction = function (xaxis, yaxis, csv, csvCounter, tempOBJ, ploty, csvname, counter) {
    d3.csv(csv, function (data) {

        var tempX = [], tempY = [];

        var tempx = d3.extent(data, function (d, i) {
            tempX.push({xaxis: d[xaxis]});
            return parseFloat(d[xaxis]);
        });

        var tempy = d3.extent(data, function (d, j) {
            tempY.push({yaxis: d[yaxis]});
            return parseFloat(d[yaxis]);
        });

        console.log("tempx, tempy: ", tempx, tempy);

        if (csvCounter == 0) {
            csvArray.push(tempX);
            csvArray.push(tempY);
        }
        else {
            csvArray.push(tempY);
        }

        console.log("csvCounter: ", csvCounter);

        if (csvCounter == tempOBJ.length - 1) {
            console.log("tempx, tempy and csvArray: ", tempx, tempy, csvArray);
            svgdDecomposedDiagram(csvArray, minMax(tempx), minMax(tempy), csvname, counter);

            return;
        }
        else {
            csvCounter = csvCounter + 1;
            arrDecomposedFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tempOBJ, ploty, csvname);
        }
    });
};

var reinitDecomposed = function () {
    xAxis = [];
    yAxis = [];
    csvname = [];
    csvArray = [];
    dataLen = 0;
    csvCounter = 0;
};

var decomposedModel = function (protocolName) {
    var query = "SELECT ?modelEntity ?Protein " +
        "WHERE { ?modelEntity <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein " +
        "}";

    sendPostRequest(
        endpoint,
        query,
        function (jsonObj) {
            var proteinModel = [];
            for (var i = 0; i < jsonObj.results.bindings.length; i++) {
                var elem = jsonObj.results.bindings[i].modelEntity.value;
                elem = elem.slice(0, elem.indexOf(".cellml"));
                if (proteinModel.indexOf(elem) == -1) {
                    proteinModel.push(elem);
                }
            }

            console.log(proteinModel);

            sendGetRequest(
                sedmlWorkspaceName,
                function (sedmlworkspaceHtml) {
                    // SEDML document
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(sedmlworkspaceHtml, "text/xml");
                    console.log("xmlSEDMLDoc: ", xmlDoc);

                    console.log("typeof xmlSEDMLDoc: ", typeof xmlDoc);

                    var id, name, opby, opbx, chebi, fma, sparqly, sparqlx, time, ploty;
                    for (var i = 0; i < xmlDoc.getElementsByTagName("Protocol").length; i++) {
                        if (xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("name") == protocolName) {
                            id = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("id");
                            name = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("name");
                            opby = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("opby");
                            opbx = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("opbx");
                            chebi = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("chebi");
                            fma = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("fma");
                            sparqly = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("sparqly");
                            sparqlx = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("sparqlx");
                            time = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("time");
                            ploty = xmlDoc.getElementsByTagName("Protocol")[i].getAttribute("ploty");

                            break;
                        }
                    }

                    console.log("protocol values: ", id, name, opby, opbx, chebi, fma, sparqly, sparqlx, time);

                    for (var i = 0; i < proteinModel.length; i++) {
                        csvname.push("data/" + proteinModel[i] + "_" + id + ".csv");

                        xAxis.push("solute_concentrations | C_m_Na (mmol_per_cm3)");
                        yAxis.push("mc_sodium_flux | G_mc_Na (flux)");

                        console.log("xAxis, yAxis and csv: ", xAxis, yAxis, csvname);

                        arrDecomposedFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, [proteinModel[i]], "ploty", csvname, i);

                        reinitDecomposed();
                    }
                },
                false);
        },
        true);
}