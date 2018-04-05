/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
var ajaxUtils = require("./../libs/ajax-utils.js");
var miscellaneous = require("./miscellaneous.js");
var sparqlUtils = require("./sparqlUtils.js");

"use strict";

var modelSimilarity = (function (global) {

    var modelEntity = [
        {
            model: "weinstein_1995.cellml",
            concentration: [],
            flux: [],
            score: 0,
            scoreEBI: 0
        },
        {
            model: "chang_fujita_b_1999.cellml",
            concentration: [],
            flux: [],
            score: 0,
            scoreEBI: 0
        },
        {
            model: "chang_fujita_1999.cellml",
            concentration: [],
            flux: [],
            score: 0,
            scoreEBI: 0
        },
        {
            model: "mackenzie_1996.cellml",
            concentration: [],
            flux: [],
            score: 0,
            scoreEBI: 0
        }
    ];
    var idCounter = 0;
    var data = [];
    var mainUtils = {};

    mainUtils.loadHomeHtml = function () {
        miscellaneous.showLoading("#main-content");
        ajaxUtils.sendGetRequest(
            sparqlUtils.homeHtml,
            function (homeHtmlContent) {
                $("#main-content").html(homeHtmlContent);
            },
            false);
    };

    // mainUtils.loadChartHtml = function () {
    //     ajaxUtils.sendGetRequest(
    //         sparqlUtils.chartHtml,
    //         function (chartHtmlContent) {
    //             $("#main-content td").html(chartHtmlContent);
    //         },
    //         false);
    // };

    var discoverModelSimilarity = function () {

        var query = sparqlUtils.concentrationOPB();
        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonObj) {

                console.log("jsonObjCons: ", jsonObj);

                var query = sparqlUtils.fluxOPB();
                ajaxUtils.sendPostRequest(
                    sparqlUtils.endpoint,
                    query,
                    function (jsonObjFlux) {

                        console.log("jsonObjFlux: ", jsonObjFlux);

                        // CHEBI term and anatomical locations for a solute concentration
                        for (var i in modelEntity) {
                            for (var j in jsonObj.results.bindings) {
                                var indexOfHash = jsonObj.results.bindings[j].model_entity.value.search("#"),
                                    cellmlname = jsonObj.results.bindings[j].model_entity.value.slice(0, indexOfHash);

                                if (modelEntity[i].model == cellmlname) {
                                    if (!miscellaneous.isExist(jsonObj.results.bindings[j].model_entity.value, modelEntity[i].concentration)) {
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
                                    if (!miscellaneous.isExist(jsonObjFlux.results.bindings[j].model_entity.value, modelEntity[i].flux)) {
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
                    },
                    true);
            },
            true);
    };

    discoverModelSimilarity();

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
    };

    var showConcentrationTable = function (concentrationArray) {
        var head = ["Model entity", "Solute", "Located_in"];
        var table = $("<table/>").addClass("table table-hover"); //table-condensed table-bordered table-striped

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i in head) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        // Table body
        var tbody = $("<tbody/>");
        for (var i = 0; i < concentrationArray.length; i++) {
            tr = $("<tr/>"); // row

            var indexofColon = concentrationArray[i].chebi.indexOf("CHEBI:"),
                chebi = "<a href=" + concentrationArray[i].chebi + " + target=_blank>" + concentrationArray[i].chebi.slice(indexofColon) + "</a>";

            indexofColon = concentrationArray[i].fma.indexOf("FMA:");
            var fma = "<a href=" + concentrationArray[i].fma + " + target=_blank>" + concentrationArray[i].fma.slice(indexofColon) + "</a>";

            tr.append($("<td/>").append(concentrationArray[i].model_entity)); // model_entity
            tr.append($("<td/>").append(chebi)); // solute
            tr.append($("<td/>").append(fma)); // compartment

            tbody.append(tr);
        }

        table.append(tbody);

        return table;
    };

    var showModelSimilarity = function () {

        $("#main-content").html("");

        var head = ["CellML document", "Similarity score (Exact)", "Visualisation graph", "Similarity score (EBI)", "Overlapping graph"];
        var table = $("<table/>").addClass("table table-hover");

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i = 0; i < head.length; i++) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        // Table body
        var tbody = $("<tbody/>");
        for (var i = 0; i < modelEntity.length; i++) {
            tr = $("<tr/>"); // row

            var tstr = showConcentrationTable(modelEntity[i].concentration);
            var samplehtm = '<fieldset class="majorpoints"><legend class="majorpointslegend">' + modelEntity[i].model + '</legend>' +
                '<div class="hiders" style="display: none">' + tstr[0].innerHTML + '</div></fieldset>';

            // $("#main-content").append(samplehtm);
            tr.append($("<td/>").append(samplehtm)); // model

            // tr.append($("<td/>").append(modelEntity[i].model)); // model
            tr.append($("<td/>").append(modelEntity[i].score)); // similarity score

            // svg visualisation graph
            data.push(modelEntity[i].score);
            tr.append($("<td/>").append(drawChart(data))); // svg graph
            data = []; // reinitialization for next data

            tr.append($("<td/>").append(modelEntity[i].scoreEBI)); // similarity score EBI

            // svg visualisation graph
            var click = "<a href=# target=_blank>click</a>";
            tr.append($("<td/>").append(click)); // similarity graph

            tbody.append(tr);
        }

        table.append(tbody);
        $("#main-content").append(table);

        $('.majorpoints').click(function () {
            $(this).find('.hiders').toggle();
        });

        // miscellaneous.drawChart(data);
    };

    $(document).ready(function () {

        // On first load, show home view
        miscellaneous.showLoading("#main-content");

        // homepage
        ajaxUtils.sendGetRequest(
            sparqlUtils.homeHtml,
            function (homeHtmlContent) {
                $("#main-content").html(homeHtmlContent);
            },
            false);

        // $(".dropdown-toggle").dropdown();
        $('[data-toggle="popover"]').popover();
    });

    $(document).on("keydown", function () {

        if (event.key == "Enter") {
            var indexes = $.map(modelEntity, function (obj, index) {
                if (obj.model == event.srcElement.value) {
                    return index;
                }
            });

            var enteredIndex = indexes[0];
            synonymFromEBIOLSCon(modelEntity[enteredIndex], enteredIndex); // append synonym names from EBI OLS's JSON
        }
    });

    mainUtils.loadSearchHtml = function () {
        ajaxUtils.sendGetRequest(
            sparqlUtils.searchHtml,
            function (searchHtmlContent) {
                $("#main-content").html(searchHtmlContent);
            },
            false);
    };

    var synonymFromEBIOLSCon = function (concentrationArr, enteredIndex) {

        var endpointOLS, chebi_uri, fma_uri;
        if (concentrationArr.concentration[idCounter].chebi.indexOf(sparqlUtils.partOfCHEBIUri) != -1) {
            var indexofColon = concentrationArr.concentration[idCounter].chebi.indexOf("CHEBI:");
            chebi_uri = "http://purl.obolibrary.org/obo/CHEBI_" + concentrationArr.concentration[idCounter].chebi.slice(indexofColon + 6);
            endpointOLS = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + chebi_uri;
        }

        ajaxUtils.sendGetRequest(
            endpointOLS,
            function (jsonObjOLSCHEBI) {

                if (concentrationArr.concentration[idCounter].fma.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                    var indexofColon = concentrationArr.concentration[idCounter].fma.indexOf("FMA:");
                    fma_uri = "http://purl.org/sig/ont/fma/fma" + concentrationArr.concentration[idCounter].fma.slice(indexofColon + 4); // 3 + 1 (skip :)
                    endpointOLS = sparqlUtils.abiOntoEndpoint + "/fma/terms?iri=" + fma_uri;
                }

                ajaxUtils.sendGetRequest(
                    endpointOLS,
                    function (jsonObjOLSFMA) {

                        var tempvar, synonym_CHEBI, synonym_FMA;
                        if (jsonObjOLSCHEBI._embedded.terms[0].annotation["has_related_synonym"] == undefined) {
                            synonym_CHEBI = jsonObjOLSCHEBI._embedded.terms[0].annotation["id"][0].slice(3);
                        }
                        else {
                            tempvar = jsonObjOLSCHEBI._embedded.terms[0].annotation["has_related_synonym"];
                            for (var m = 0; m < tempvar.length; m++) {
                                if (tempvar[m].slice(-1) == "+" || tempvar[m].slice(-1) == "-") {
                                    synonym_CHEBI = tempvar[m];
                                    break;
                                }
                            }
                        }

                        synonym_FMA = jsonObjOLSFMA._embedded.terms[0].annotation["preferred name"][0];

                        modelEntity[enteredIndex].concentration[idCounter].chebi += " (" + synonym_CHEBI + ")";
                        modelEntity[enteredIndex].concentration[idCounter].fma += " (" + synonym_FMA + ")";

                        idCounter++;

                        if (idCounter == concentrationArr.concentration.length) {
                            idCounter = 0;
                            synonymFromEBIOLSFlux(concentrationArr, enteredIndex);
                            return;
                        }

                        synonymFromEBIOLSCon(concentrationArr, enteredIndex);

                    }, true);

            }, true);
    };

    var synonymFromEBIOLSFlux = function (fluxArr, enteredIndex) {

        var endpointOLS, chebi_uri, fma_uri;
        if (fluxArr.flux[idCounter].sourceCHEBI.indexOf(sparqlUtils.partOfCHEBIUri) != -1) {
            var indexofColon = fluxArr.flux[idCounter].sourceCHEBI.indexOf("CHEBI:");
            chebi_uri = "http://purl.obolibrary.org/obo/CHEBI_" + fluxArr.flux[idCounter].sourceCHEBI.slice(indexofColon + 6);
            endpointOLS = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + chebi_uri;
        }

        ajaxUtils.sendGetRequest(
            endpointOLS,
            function (jsonObjOLSCHEBI) {

                if (fluxArr.flux[idCounter].sourceFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                    var indexofColon = fluxArr.flux[idCounter].sourceFMA.indexOf("FMA:");
                    fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].sourceFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                    endpointOLS = sparqlUtils.abiOntoEndpoint + "/fma/terms?iri=" + fma_uri;
                }

                ajaxUtils.sendGetRequest(
                    endpointOLS,
                    function (jsonObjOLSSourceFMA) {

                        if (fluxArr.flux[idCounter].sinkFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                            var indexofColon = fluxArr.flux[idCounter].sinkFMA.indexOf("FMA:");
                            fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].sinkFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                            endpointOLS = sparqlUtils.abiOntoEndpoint + "/fma/terms?iri=" + fma_uri;
                        }

                        ajaxUtils.sendGetRequest(
                            endpointOLS,
                            function (jsonObjOLSSinkFMA) {

                                if (fluxArr.flux[idCounter].mediatorFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                                    var indexofColon = fluxArr.flux[idCounter].mediatorFMA.indexOf("FMA:");
                                    fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].mediatorFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                                    endpointOLS = sparqlUtils.abiOntoEndpoint + "/fma/terms?iri=" + fma_uri;
                                }

                                ajaxUtils.sendGetRequest(
                                    endpointOLS,
                                    function (jsonObjOLSMediatorFMA) {

                                        var tempvar, synonym_CHEBI, synonym_sourceFMA, synonym_sinkFMA, synonym_mediatorFMA;
                                        if (jsonObjOLSCHEBI._embedded.terms[0].annotation["has_related_synonym"] == undefined) {
                                            synonym_CHEBI = jsonObjOLSCHEBI._embedded.terms[0].annotation["id"][0].slice(3);
                                        }
                                        else {
                                            tempvar = jsonObjOLSCHEBI._embedded.terms[0].annotation["has_related_synonym"];
                                            for (var m = 0; m < tempvar.length; m++) {
                                                if (tempvar[m].slice(-1) == "+" || tempvar[m].slice(-1) == "-") {
                                                    synonym_CHEBI = tempvar[m];
                                                    break;
                                                }
                                            }
                                        }

                                        synonym_sourceFMA = jsonObjOLSSourceFMA._embedded.terms[0].annotation["preferred name"][0];
                                        synonym_sinkFMA = jsonObjOLSSinkFMA._embedded.terms[0].annotation["preferred name"][0];
                                        synonym_mediatorFMA = jsonObjOLSMediatorFMA._embedded.terms[0].annotation["preferred name"][0];

                                        modelEntity[enteredIndex].flux[idCounter].sourceCHEBI += " (" + synonym_CHEBI + ")";
                                        modelEntity[enteredIndex].flux[idCounter].sourceFMA += " (" + synonym_sourceFMA + ")";
                                        modelEntity[enteredIndex].flux[idCounter].sinkFMA += " (" + synonym_sinkFMA + ")";
                                        modelEntity[enteredIndex].flux[idCounter].mediatorFMA += " (" + synonym_mediatorFMA + ")";

                                        idCounter++;

                                        if (idCounter == fluxArr.flux.length) {

                                            idCounter = 0;

                                            var concentrationArray = [], fluxArray = [];
                                            for (var i in modelEntity[enteredIndex].concentration) {
                                                concentrationArray.push({
                                                    model_entity: modelEntity[enteredIndex].concentration[i].model_entity,
                                                    chebi: modelEntity[enteredIndex].concentration[i].chebi,
                                                    fma: modelEntity[enteredIndex].concentration[i].fma
                                                });
                                            }

                                            for (var i in modelEntity[enteredIndex].flux) {
                                                fluxArray.push({
                                                    model_entity: modelEntity[enteredIndex].flux[i].model_entity,
                                                    sourceCHEBI: modelEntity[enteredIndex].flux[i].sourceCHEBI,
                                                    sourceFMA: modelEntity[enteredIndex].flux[i].sourceFMA,
                                                    sinkFMA: modelEntity[enteredIndex].flux[i].sinkFMA,
                                                    mediatorFMA: modelEntity[enteredIndex].flux[i].mediatorFMA
                                                });
                                            }

                                            console.log("concentrationArray: ", concentrationArray);
                                            console.log("fluxArray: ", fluxArray);
                                            modelEntity[enteredIndex].score =
                                                ((concentrationArray.length + fluxArray.length) / (concentrationArray.length + fluxArray.length)).toFixed(3); // concentrationArray + fluxArray

                                            for (var i in modelEntity) {
                                                if (i == enteredIndex) continue;

                                                var sum = 0;
                                                for (var j in modelEntity[i].concentration) {
                                                    for (var k in concentrationArray) {

                                                        var indexofColon = concentrationArray[k].chebi.indexOf(" ("),
                                                            chebi = concentrationArray[k].chebi.slice(0, indexofColon);

                                                        indexofColon = concentrationArray[k].fma.indexOf(" (");
                                                        var fma = concentrationArray[k].fma.slice(0, indexofColon);

                                                        if (chebi == modelEntity[i].concentration[j].chebi &&
                                                            fma == modelEntity[i].concentration[j].fma) {
                                                            sum += 1;
                                                        }
                                                    }
                                                }

                                                for (var j2 in modelEntity[i].flux) {
                                                    for (var k2 in fluxArray) {

                                                        var indexofColon, chebi, srcFMA, snkFMA, medFMA;
                                                        indexofColon = fluxArray[k2].sourceCHEBI.indexOf(" (");
                                                        chebi = fluxArray[k2].sourceCHEBI.slice(0, indexofColon);

                                                        indexofColon = fluxArray[k2].sourceFMA.indexOf(" (");
                                                        srcFMA = fluxArray[k2].sourceFMA.slice(0, indexofColon);

                                                        indexofColon = fluxArray[k2].sinkFMA.indexOf(" (");
                                                        snkFMA = fluxArray[k2].sinkFMA.slice(0, indexofColon);

                                                        indexofColon = fluxArray[k2].mediatorFMA.indexOf(" (");
                                                        medFMA = fluxArray[k2].mediatorFMA.slice(0, indexofColon);

                                                        if (chebi == modelEntity[i].flux[j2].sourceCHEBI &&
                                                            srcFMA == modelEntity[i].flux[j2].sourceFMA &&
                                                            snkFMA == modelEntity[i].flux[j2].sinkFMA &&
                                                            medFMA == modelEntity[i].flux[j2].mediatorFMA) {
                                                            sum += 1;
                                                        }
                                                    }
                                                }

                                                console.log("sum: ", sum);
                                                modelEntity[i].score = (sum / (concentrationArray.length + fluxArray.length)).toFixed(3);
                                            }

                                            console.log("modelEntity: ", modelEntity);

                                            showModelSimilarity();

                                            showConcentration(concentrationArray);
                                            showFlux(fluxArray);

                                            return;
                                        }

                                        synonymFromEBIOLSFlux(fluxArr, enteredIndex);

                                    }, true);
                            }, true);
                    }, true);
            }, true);
    };

    var showConcentration = function (concentrationArray) {
        var head = ["Model entity", "Solute", "Located_in"];
        var table = $("<table/>").addClass("table table-hover"); //table-condensed table-bordered table-striped

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i in head) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        // Table body
        var tbody = $("<tbody/>");
        for (var i = 0; i < concentrationArray.length; i++) {
            tr = $("<tr/>"); // row

            var indexofColon = concentrationArray[i].chebi.indexOf("CHEBI:"),
                chebi = "<a href=" + concentrationArray[i].chebi + " + target=_blank>" + concentrationArray[i].chebi.slice(indexofColon) + "</a>";

            indexofColon = concentrationArray[i].fma.indexOf("FMA:");
            var fma = "<a href=" + concentrationArray[i].fma + " + target=_blank>" + concentrationArray[i].fma.slice(indexofColon) + "</a>";

            tr.append($("<td/>").append(concentrationArray[i].model_entity)); // model_entity
            tr.append($("<td/>").append(chebi)); // solute
            tr.append($("<td/>").append(fma)); // compartment

            tbody.append(tr);
        }

        table.append(tbody);
        $("#main-content").append(table);

        // uncomment LATER!!!
        // similarityModels(concentrationArray, modelEntity[1].concentration);

        // expand function
        // miscellaneous.expandFunction();
        //
        // $('.majorpoints').click(function () {
        //     $(this).find('.hiders').toggle();
        // });
    };

    var showFlux = function (fluxArray) {
        var head = ["Model entity", "Solute", "Source FMA", "Sink FMA", "Mediator FMA"];
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
        for (var i = 0; i < fluxArray.length; i++) {
            tr = $("<tr/>"); // row

            var indexofColon, chebi, srcFMA, snkFMA, medFMA;
            indexofColon = fluxArray[i].sourceCHEBI.indexOf("CHEBI:");
            chebi = "<a href=" + fluxArray[i].sourceCHEBI + " + target=_blank>" + fluxArray[i].sourceCHEBI.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].sourceFMA.indexOf("FMA:");
            srcFMA = "<a href=" + fluxArray[i].sourceFMA + " + target=_blank>" + fluxArray[i].sourceFMA.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].sinkFMA.indexOf("FMA:");
            snkFMA = "<a href=" + fluxArray[i].sinkFMA + " + target=_blank>" + fluxArray[i].sinkFMA.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].mediatorFMA.indexOf("FMA:");
            medFMA = "<a href=" + fluxArray[i].mediatorFMA + " + target=_blank>" + fluxArray[i].mediatorFMA.slice(indexofColon) + "</a>";

            tr.append($("<td/>").append(fluxArray[i].model_entity)); // model_entity
            tr.append($("<td/>").append(chebi)); // solute
            tr.append($("<td/>").append(srcFMA)); // source FMA
            tr.append($("<td/>").append(snkFMA)); // sink FMA
            tr.append($("<td/>").append(medFMA)); // mediator FMA

            tbody.append(tr);
        }

        table.append(tbody);
        $("#main-content").append(table);
    };

    var similarityModels = function (concentrationArray, concentrationArray2) {

        console.log("concentrationArray: ", concentrationArray);
        console.log("concentrationArray2: ", concentrationArray2);

        var model = miscellaneous.parseModelName(concentrationArray[0].model_entity),
            model2 = miscellaneous.parseModelName(concentrationArray2[0].model_entity);

        var links = [];

        for (var i = 0; i < concentrationArray.length; i++) {
            for (var j = 0; j < 2; j++) {

                var indexofColon = concentrationArray[i].chebi.indexOf("CHEBI:"),
                    chebi = concentrationArray[i].chebi.slice(indexofColon);

                indexofColon = concentrationArray[i].fma.indexOf("FMA:");
                var fma = concentrationArray[i].fma.slice(indexofColon);

                var name, target;
                if (j == 0) {
                    name = "Solute";
                    target = chebi; // concentrationArray[i].chebi
                }

                if (j == 1) {
                    name = "Located_in";
                    target = fma; // concentrationArray[i].fma;
                }

                var indexofColon = concentrationArray[i].model_entity.indexOf("#"),
                    model_entity = concentrationArray[i].model_entity.slice(indexofColon + 1);

                links.push({
                    source: concentrationArray[i].model_entity, // model_entity,
                    target: target,
                    name: name
                });
            }
        }

        for (var i = 0; i < concentrationArray2.length; i++) {
            for (var j = 0; j < 2; j++) {

                var indexofColon = concentrationArray2[i].chebi.indexOf("CHEBI:"),
                    chebi = concentrationArray2[i].chebi.slice(indexofColon);

                indexofColon = concentrationArray2[i].fma.indexOf("FMA:");
                var fma = concentrationArray2[i].fma.slice(indexofColon);

                var name, target;
                if (j == 0) {
                    name = "Solute";
                    target = chebi; // concentrationArray[i].chebi
                }

                if (j == 1) {
                    name = "Located_in";
                    target = fma; // concentrationArray[i].fma;
                }

                var indexofColon = concentrationArray2[i].model_entity.indexOf("#"),
                    model_entity = concentrationArray2[i].model_entity.slice(indexofColon + 1);

                links.push({
                    source: concentrationArray2[i].model_entity, // model_entity,
                    target: target,
                    name: name
                });
            }
        }

        // similarity calculation from concentrationArray
        for (var i = 0; i < concentrationArray.length; i++) {
            for (var j = 0; j < concentrationArray2.length; j++) {

                var indexofColon, chebi, chebi2, fma, fma2;
                indexofColon = concentrationArray[i].chebi.indexOf(" (");
                chebi = concentrationArray[i].chebi.slice(0, indexofColon);
                chebi2 = concentrationArray2[j].chebi;

                indexofColon = concentrationArray[i].fma.indexOf(" (");
                fma = concentrationArray[i].fma.slice(0, indexofColon);
                fma2 = concentrationArray2[j].fma;

                if (chebi == chebi2 && fma == fma2) {
                    links.push({
                        source: concentrationArray[i].model_entity,
                        target: concentrationArray2[j].model_entity,
                        name: "Similarity"
                    });

                    break;
                }
            }
        }

        links = miscellaneous.uniqueifySVG(links);

        console.log("links: ", links);

        var nodes = {};

        // Compute distinct nodes from the links.
        links.forEach(function (link) {
            link.source = nodes[link.source] ||
                (nodes[link.source] = {name: link.source});

            link.target = nodes[link.target] ||
                (nodes[link.target] = {name: link.target});
        });

        // SVG graph
        var width = 2000, // 1200
            height = 900; // 700

        var svg = d3.select("#svgSimilarityModels").append("svg")
            .attrs({
                "width": width,
                "height": height
            })
            .append("g");

        var color = d3.scaleOrdinal(d3.schemeCategory20);

        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {
                return d.name;
            }))
            .force("charge", d3.forceManyBody().strength(-100)) // -100
            .force("center", d3.forceCenter(width / 4, height / 2)) // width / 3 and height / 2
            .force("link", d3.forceLink().distance(100).strength(0.1)); // 100

        //build the arrow.
        svg.append("svg:defs").selectAll("marker")
            .data(["end"])      // Different link/path types can be defined here
            .enter().append("svg:marker")    // This section adds in the arrows
            .attrs({
                "id": String,
                "viewBox": "0 -5 10 10",
                "refX": 15,
                "refY": -1.5,
                "markerWidth": 4,
                "markerHeight": 4,
                "orient": "auto"
            })
            .append("svg:path")
            .attr("d", "M0,-5L10,0L0,5");

        // label edges with different color
        var edgelabels = ["Similarity", "Solute", "Located_in"];
        var py = 20;

        // add the links and the arrows
        var link = svg.append("svg:g").selectAll("path")
            .data(links)
            .enter().append("svg:path")
            .attr("class", "pathlink")
            .style("stroke", function (d) {
                for (var i = 0; i < edgelabels.length; i++) {
                    if (d.name == edgelabels[i]) {
                        svg.append("text")
                            .style("font", "14px sans-serif")
                            .attr("stroke", color(d.name))
                            .attr("x", 10)
                            .attr("y", py)
                            .text(d.name);

                        //increment to get distinct color
                        color(d.name + 1);
                        py = py + 20;
                        edgelabels[i] = "";
                        break;
                    }
                }

                return color(d.name);
            })
            .attr("marker-end", "url(#end)");

        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(d3.values(nodes))
            .enter().append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        node.append("circle")
            .attr("r", 7)
            .styles({
                "fill": function (d, i) {
                    if (d.name.indexOf(model) != -1) {
                        return "red";
                    }

                    if (d.name.indexOf(model2) != -1) {
                        return "brown";
                    }
                },
                "r": function (d, i) {
                    if (d.name.indexOf(model) != -1) {
                        return 10;
                    }

                    if (d.name.indexOf(model2) != -1) {
                        return 10;
                    }
                }
            });

        // add the text
        node.append("text")
            .attrs({
                "x": 12,
                "dy": ".35em"
            })
            .text(function (d) {
                return d.name;
            });

        simulation
            .nodes(d3.values(nodes))
            .on("tick", tick);

        simulation.force("link")
            .links(links);

        // add the curvy lines
        function tick() {
            // add the curvy lines
            link.attr("d", function (d) {

                // Total difference in x and y from source to target
                var dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y;

                // Length of path from center of source node to center of target node
                var dr = Math.sqrt(dx * dx + dy * dy);

                return "M" +
                    d.source.x + "," +
                    d.source.y + "A" +
                    dr + "," + dr + " 0 0,1 " +
                    d.target.x + "," +
                    d.target.y;
            });

            node.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
    };

    // Expose utility to the global object
    global.$mainUtils = mainUtils;

})(window);