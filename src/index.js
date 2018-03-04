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
        "weinstein_1995.cellml#weinstein_1995",
        "mackenzie_1996.cellml#mackenzie_1996",
        "chang_fujita_b_1999.cellml#chang_fujita_b_1999",
        "eskandari_2005.cellml#eskandari_2005",
        "chang_fujita_1999.cellml#chang_fujita_1999",
        "moss_2009.cellml#moss_2009",
        "thomas_2000.cellml#thomas_2000"
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

    var discoverModelSimilarity = function (modelEntityObjElem) {

        var query = 'PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> ' +
            'PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> ' +
            'SELECT ?model_entity ' +
            'WHERE { ' +
            '?model_entity semsim:isComputationalComponentFor ?model_prop. ' +
            '?model_prop semsim:physicalPropertyOf ?model_proc. ' +
            '?model_proc semsim:hasSourceParticipant ?model_srcparticipant. ' +
            '?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. ' +
            '?source_entity ro:part_of ?source_part_of_entity. ' +
            '?source_part_of_entity semsim:hasPhysicalDefinition <' + modelEntityObjElem.source + '>. ' +
            '?source_entity semsim:hasPhysicalDefinition <' + modelEntityObjElem.solute + '>. ' +
            '?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. ' +
            '?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. ' +
            '?sink_entity ro:part_of ?sink_part_of_entity. ' +
            '?sink_part_of_entity semsim:hasPhysicalDefinition <' + modelEntityObjElem.sink + '>. ' +
            '?model_proc semsim:hasMediatorParticipant ?model_medparticipant. ' +
            '?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. ' +
            '?med_entity semsim:hasPhysicalDefinition <' + modelEntityObjElem.mediator + '>. ' +
            '}';

        sendPostRequest(
            endpoint,
            query,
            function (jsonObjModel) {

                console.log("source, sink, mediator, solute: ",
                    modelEntityObj[counter].source,
                    modelEntityObj[counter].sink,
                    modelEntityObj[counter].mediator,
                    modelEntityObj[counter].solute);

                for (var i = 0; i < jsonObjModel.results.bindings.length; i++) {
                    console.log("model_entity: ", jsonObjModel.results.bindings[i].model_entity.value);
                }

                ++counter;
                if (counter == modelEntityObj.length) {
                    // showModelSimilarity(modelEntityObj);
                    return;
                }

                discoverModelSimilarity(modelEntityObj[counter]); // call back
            },
            true);
    };

    discoverModelSimilarity(modelEntityObj[counter]); // first call

    var showModelSimilarity = function (modelEntityObj) {

        var head = ["CellML document", "Similarity score", "Graph"];

        var table = $("<table/>").addClass("table table-hover table-condensed"); //table-bordered table-striped

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i in head) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        // Table body
        var tbody = $("<tbody/>");
        for (var c = 0; c < modelEntityObj.length; c++) {
            tr = $("<tr/>"); // row
            var sum = 0;
            $.each(modelEntityObj[c].location.results.bindings, function (i, location) {
                $.each(modelEntityObj[c].compartment.results.bindings, function (j, compartment) {
                    $.each(modelEntityObj[c].chebi.results.bindings, function (k, solutechebi) {
                        if (location.Located_in.value == luminalID || compartment.Compartment.value == luminalID) {
                            if (solutechebi.solute_chebi.value == sodium) sum += 1;
                            if (solutechebi.solute_chebi.value == chloride) sum += 6;
                            if (solutechebi.solute_chebi.value == potassium) sum += 11;
                        }
                        else if (location.Located_in.value == apicalID || compartment.Compartment.value == apicalID) {
                            if (solutechebi.solute_chebi.value == sodium) sum += 2;
                            if (solutechebi.solute_chebi.value == chloride) sum += 7;
                            if (solutechebi.solute_chebi.value == potassium) sum += 12;
                        }
                        else if (location.Located_in.value == cytosolID || compartment.Compartment.value == cytosolID) {
                            if (solutechebi.solute_chebi.value == sodium) sum += 3;
                            if (solutechebi.solute_chebi.value == chloride) sum += 8;
                            if (solutechebi.solute_chebi.value == potassium) sum += 13;
                        }
                        else if (location.Located_in.value == basolateralID || compartment.Compartment.value == basolateralID) {
                            if (solutechebi.solute_chebi.value == sodium) sum += 4;
                            if (solutechebi.solute_chebi.value == chloride) sum += 9;
                            if (solutechebi.solute_chebi.value == potassium) sum += 14;
                        }
                        else if (location.Located_in.value == interstitialID || compartment.Compartment.value == interstitialID) {
                            if (solutechebi.solute_chebi.value == sodium) sum += 5;
                            if (solutechebi.solute_chebi.value == chloride) sum += 10;
                            if (solutechebi.solute_chebi.value == potassium) sum += 15;
                        }
                    });
                });
            });

            // CellML document
            tr.append($("<td/>").append(modelEntityObj[c].cellmlmodel));

            // Similarity score
            tr.append($("<td/>").append(sum));
            tbody.append(tr);

            // data for SVG diagram
            data.push(sum);
        }

        table.append(tbody);
        $("#main-content").append(table);

        // drawChart(data);
    };
}();