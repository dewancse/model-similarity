/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
var endpoint = "https://models.physiomeproject.org/pmr2_virtuoso_search";

var sodium = "http://identifiers.org/chebi/CHEBI:29101";
var potassium = "http://identifiers.org/chebi/CHEBI:29103";
var chloride = "http://identifiers.org/chebi/CHEBI:17996";
var luminalID = "http://identifiers.org/fma/FMA:74550";
var cytosolID = "http://identifiers.org/fma/FMA:66836";
var interstitialID = "http://identifiers.org/fma/FMA:9673";
var apicalID = "http://identifiers.org/fma/FMA:84666";
var basolateralID = "http://identifiers.org/fma/FMA:84669";

var counter = 0;
var data = [];
var dictionary = [
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "Na+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "Na+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "Na+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "Na+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "Na+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "H+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:15378"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "H+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:15378"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "H+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:15378"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "H+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:15378"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "H+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:15378"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "NH4+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:28938"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "NH4+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:28938"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "NH4+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:28938"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "NH4+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:28938"
    },
    {
        "cellmlmodel": "weinstein_1995",
        "solute": "NH4+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:28938"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "Na+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "Na+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "Na+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "Na+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "Na+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "Na+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "Na+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "Na+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "Na+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "Na+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "glucose", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "glucose", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "glucose", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "glucose", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "mackenzie_1996",
        "solute": "glucose", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "glucose", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "glucose", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "glucose", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "glucose", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "eskandari_2005",
        "solute": "glucose", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17234"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Na+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Na+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Na+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Na+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Na+", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Cl-", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Cl-", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Cl-", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Cl-", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_1999",
        "solute": "Cl-", "location": "Interstitial",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Na+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Na+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Na+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Na+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Na+", "location": "Interstitial",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29101"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Cl-", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Cl-", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Cl-", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Cl-", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "Cl-", "location": "Interstitial",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:17996"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "K+", "location": "Luminal",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29103"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "K+", "location": "Apical",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29103"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "K+", "location": "Cytosol",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29103"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "K+", "location": "Basolateral",
        "status": "0", "uri": "http://identifiers.org/chebi/CHEBI:29103"
    },
    {
        "cellmlmodel": "chang_fujita_b_1999",
        "solute": "K+", "location": "Interstitial",
        "status": "1", "uri": "http://identifiers.org/chebi/CHEBI:29103"
    }
];
var modelEntityObj = [
    {
        "solute": sodium,
        "source": luminalID,
        "sink": cytosolID,
        "mediator": apicalID
    },
    {
        "solute": potassium,
        "source": luminalID,
        "sink": cytosolID,
        "mediator": apicalID
    },
    {
        "solute": chloride,
        "source": luminalID,
        "sink": cytosolID,
        "mediator": apicalID
    },
    {
        "solute": sodium,
        "source": cytosolID,
        "sink": luminalID,
        "mediator": apicalID
    },
    {
        "solute": potassium,
        "source": cytosolID,
        "sink": luminalID,
        "mediator": apicalID
    },
    {
        "solute": chloride,
        "source": cytosolID,
        "sink": luminalID,
        "mediator": apicalID
    },
    {
        "solute": sodium,
        "source": cytosolID,
        "sink": interstitialID,
        "mediator": basolateralID
    },
    {
        "solute": potassium,
        "source": cytosolID,
        "sink": interstitialID,
        "mediator": basolateralID
    },
    {
        "solute": chloride,
        "source": cytosolID,
        "sink": interstitialID,
        "mediator": basolateralID
    },
    {
        "solute": sodium,
        "source": interstitialID,
        "sink": cytosolID,
        "mediator": basolateralID
    },
    {
        "solute": potassium,
        "source": interstitialID,
        "sink": cytosolID,
        "mediator": basolateralID
    },
    {
        "solute": chloride,
        "source": interstitialID,
        "sink": cytosolID,
        "mediator": basolateralID
    }
];

var modelSimilarity = function () {

    var modelEntity = [
        {
            model: "weinstein_1995.cellml",
            concentration: [],
            flux: [],
            score: 0

        },
        {
            model: "mackenzie_1996.cellml",
            concentration: [],
            flux: [],
            score: 0

        },
        {
            model: "chang_fujita_b_1999.cellml",
            concentration: [],
            flux: [],
            score: 0

        },
        {
            model: "chang_fujita_1999.cellml",
            concentration: [],
            flux: [],
            score: 0

        }
    ];

    function getRequestObject() {
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
    };

    var sendPostRequest = function (requestUrl, query, responseHandler, isJsonResponse) {
        var request = getRequestObject();

        request.onreadystatechange = function () {
            handleResponse(request, responseHandler, isJsonResponse);
        };

        request.open("POST", requestUrl, true);

        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Accept", "application/sparql-results+json");

        request.send(query); // for POST only
    };

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
    };

    var isExist = function (model, modelEntityList) {
        // remove duplicate components with same variable and cellml model
        var indexOfHash = model.search("#"),
            cellmlModelName = model.slice(0, indexOfHash), // weinstein_1995.cellml
            componentVariableName = model.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
            indexOfDot = componentVariableName.indexOf("."),
            variableName = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

        for (var i = 0; i < modelEntityList.length; i++) {
            var indexOfHash2 = modelEntityList[i].model_entity.search("#"),
                cellmlModelName2 = modelEntityList[i].model_entity.slice(0, indexOfHash2), // weinstein_1995.cellml
                componentVariableName2 = modelEntityList[i].model_entity.slice(indexOfHash2 + 1), // NHE3.J_NHE3_Na
                indexOfDot2 = componentVariableName2.indexOf("."),
                variableName2 = componentVariableName2.slice(indexOfDot2 + 1); // J_NHE3_Na

            if (cellmlModelName == cellmlModelName2 && variableName == variableName2) {
                return true;
            }
        }

        return false;
    };

    var discoverModelSimilarity = function () {

        var query = 'PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> ' +
            'PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> ' +
            'SELECT DISTINCT ?g ?model_entity ?chebi ?fma ' +
            'WHERE { GRAPH ?g { ' +
            '?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. ' +
            '?model_entity semsim:isComputationalComponentFor ?property. ' +
            '?property semsim:physicalPropertyOf ?entity. ' +
            '?entity semsim:hasPhysicalDefinition ?chebi. ' +
            '?entity ro:part_of ?entity2. ' +
            '?entity2 semsim:hasPhysicalDefinition ?fma. ' +
            '}}';

        sendPostRequest(
            endpoint,
            query,
            function (jsonObj) {

                console.log("jsonObj: ", jsonObj);

                var query = 'PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> ' +
                    'PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> ' +
                    'SELECT DISTINCT ?g ?model_entity ?sourceCHEBI ?sourceFMA ?sinkFMA ?mediatorFMA ' +
                    'WHERE { GRAPH ?g { ' +
                    '?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00593>. ' +
                    '?model_entity semsim:isComputationalComponentFor ?property. ' +
                    '?property semsim:physicalPropertyOf ?process. ' +
                    '?process semsim:hasSourceParticipant ?source. ' +
                    '?process semsim:hasSinkParticipant ?sink. ' +
                    '?process semsim:hasMediatorParticipant ?mediator. ' +
                    '?source semsim:hasPhysicalEntityReference ?entitySRC. ' +
                    '?entitySRC semsim:hasPhysicalDefinition ?sourceCHEBI. ' +
                    '?source semsim:hasPhysicalEntityReference ?entitySRC. ' +
                    '?entitySRC ro:part_of ?entity11. ' +
                    '?entity11 semsim:hasPhysicalDefinition ?sourceFMA. ' +
                    '?sink semsim:hasPhysicalEntityReference ?entityDST. ' +
                    '?entityDST ro:part_of ?entity22. ' +
                    '?entity22 semsim:hasPhysicalDefinition ?sinkFMA. ' +
                    '?mediator semsim:hasPhysicalEntityReference ?entityMED. ' +
                    '?entityMED semsim:hasPhysicalDefinition ?mediatorFMA. ' +
                    '}}';

                sendPostRequest(
                    endpoint,
                    query,
                    function (jsonObjFlux) {

                        console.log("jsonObjFlux: ", jsonObjFlux);

                        // CHEBI term and anatomical locations for a solute concentration
                        for (var i in modelEntity) {
                            for (var j in jsonObj.results.bindings) {
                                var indexOfHash = jsonObj.results.bindings[j].model_entity.value.search("#"),
                                    cellmlname = jsonObj.results.bindings[j].model_entity.value.slice(0, indexOfHash);

                                if (modelEntity[i].model == cellmlname) {
                                    if (!isExist(jsonObj.results.bindings[j].model_entity.value, modelEntity[i].concentration)) {
                                        modelEntity[i].concentration.push({
                                            model_entity: jsonObj.results.bindings[j].model_entity.value,
                                            chebi: jsonObj.results.bindings[j].chebi.value,
                                            fma: jsonObj.results.bindings[j].fma.value
                                        });
                                    }
                                }
                            }
                        }

                        // CHEBI term and anatomical locations of sources, sinks and mediators
                        for (var i in modelEntity) {
                            for (var j in jsonObjFlux.results.bindings) {
                                var indexOfHash = jsonObjFlux.results.bindings[j].model_entity.value.search("#"),
                                    cellmlname = jsonObjFlux.results.bindings[j].model_entity.value.slice(0, indexOfHash);

                                if (modelEntity[i].model == cellmlname) {
                                    // Exceptional: J_Na (TODOs)
                                    if (!isExist(jsonObjFlux.results.bindings[j].model_entity.value, modelEntity[i].flux)) {
                                        modelEntity[i].flux.push({
                                            model_entity: jsonObjFlux.results.bindings[j].model_entity.value,
                                            sourceCHEBI: jsonObjFlux.results.bindings[j].sourceCHEBI.value,
                                            sourceFMA: jsonObjFlux.results.bindings[j].sourceFMA.value,
                                            sinkFMA: jsonObjFlux.results.bindings[j].sinkFMA.value,
                                            mediatorFMA: jsonObjFlux.results.bindings[j].mediatorFMA.value
                                        });
                                    }
                                }
                            }
                        }

                        console.log("modelEntity: ", modelEntity);
                    },
                    true);
            },
            true);
    };

    discoverModelSimilarity();

    var showModelSimilarity = function () {

        $("#main-content").html("");

        // var head = ["CellML document", "Score", "Graph"];
        var head = [];
        var table = $("<table/>").addClass("table table-hover");

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i in head) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        // Table body
        var tbody = $("<tbody/>");
        for (var c = 0; c < modelEntity.length; c++) {
            tr = $("<tr/>"); // row

            // CellML document
            tr.append($("<td/>").append(modelEntity[c].model));

            // Score
            tr.append($("<td/>").append(modelEntity[c].score));
            tbody.append(tr);

            // data for SVG diagram
            data.push(modelEntity[c].score);
        }

        table.append(tbody);
        $("#main-content").append(table);

        drawChart(data);
    };

    var drawChart = function (data) {

        var width = 420,
            barHeight = 20;

        var x = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([0, width]);

        var chart = d3.select(".chart")
            .attr("width", width)
            .attr("height", barHeight * data.length);

        var bar = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", function (d, i) {
                return "translate(0," + i * barHeight + ")";
            });

        bar.append("rect")
            .attr("width", x)
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", function (d) {
                return x(d) - 3;
            })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") // .35em
            .text(function (d) {
                return d;
            });
    }

    $(document).on("keydown", function () {
        if (event.key == "Enter") {

            // d3.select("svg").remove();

            console.log("event key and value: ", event.key, event.srcElement.value);

            // function isModel(cellmlModel) {
            //     return cellmlModel.model === event.srcElement.value;
            // }
            //
            // var enteredModel = modelEntity.find(isModel);
            // enteredModel.score = enteredModel.concentration.length + enteredModel.flux.length;

            var indexes = $.map(modelEntity, function (obj, index) {
                if (obj.model == event.srcElement.value) {
                    return index;
                }
            });

            var enteredIndex = indexes[0];
            // console.log("enteredIndex, enteredModel: ", enteredIndex, enteredModel);
            console.log("enteredIndex: ", enteredIndex);
            console.log("modelEntity: ", modelEntity);

            var tempArr = [];
            for (var i in modelEntity[enteredIndex].concentration) {
                tempArr.push([modelEntity[enteredIndex].concentration[i].chebi, modelEntity[enteredIndex].concentration[i].fma]);
            }
            console.log("Testing tempArr: ", tempArr);
            modelEntity[enteredIndex].score = (tempArr.length / tempArr.length).toFixed(3); // entered score

            for (var i in modelEntity) {
                if (i == enteredIndex) continue;

                var sum = 0;
                for (var j in modelEntity[i].concentration) {
                    for (var k in tempArr) {
                        if (tempArr[k][0] == modelEntity[i].concentration[j].chebi &&
                            tempArr[k][1] == modelEntity[i].concentration[j].fma) {
                            sum += 1;
                        }
                    }
                }

                modelEntity[i].score = (sum / tempArr.length).toFixed(3);
            }

            console.log("Testing modelEntity: ", modelEntity);

            showModelSimilarity();
        }
    });
}();