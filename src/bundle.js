/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
var ajaxUtils = __webpack_require__(1);
var miscellaneous = __webpack_require__(2);
var sparqlUtils = __webpack_require__(3);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Returns an HTTP request object
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

// Makes an Ajax POST request to 'requestUrl'
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

// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
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

exports.sendGetRequest = sendGetRequest;
exports.sendPostRequest = sendPostRequest;
exports.getRequestObject = getRequestObject;
exports.handleResponse = handleResponse;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Created by Dewan Sarwar on 5/8/2017.
 */
// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
    $(selector).html("<div class='text-center'><img src='../src/img/ajax-loader.gif'></div>");
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

var uniqueifySVG = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if (retval[j].source === e.source && retval[j].target === e.target)
                return;
        }
        retval.push(e);
    });
    return retval;
};

var parseModelName = function (modelEntity) {
    var indexOfHash = modelEntity.search("#"),
        modelName = modelEntity.slice(0, indexOfHash);

    return modelName;
};

exports.showLoading = showLoading;
exports.isExist = isExist;
exports.uniqueifySVG = uniqueifySVG;
exports.parseModelName = parseModelName;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Created by Dewan Sarwar on 14/01/2018.
 */
var ebiOntoEndpoint = "https://www.ebi.ac.uk/ols/ontologies";
var abiOntoEndpoint = "http://ontology.cer.auckland.ac.nz/ols-boot/api/ontologies";

var homeHtml = "./snippets/home-snippet.html";
var searchHtml = "./snippets/search-snippet.html";
var similarityHtml = "./snippets/similarity-snippet.html";
var chartHtml = "./snippets/chart-snippet.html";

var endpoint = "https://models.physiomeproject.org/pmr2_virtuoso_search";
var sodium = "http://identifiers.org/chebi/CHEBI:29101";
var potassium = "http://identifiers.org/chebi/CHEBI:29103";
var chloride = "http://identifiers.org/chebi/CHEBI:17996";
var luminalID = "http://identifiers.org/fma/FMA:74550";
var cytosolID = "http://identifiers.org/fma/FMA:66836";
var interstitialID = "http://identifiers.org/fma/FMA:9673";
var apicalID = "http://identifiers.org/fma/FMA:84666";
var basolateralID = "http://identifiers.org/fma/FMA:84669";

var partOfCHEBIUri = "http://identifiers.org/chebi/CHEBI";
var partOfFMAUri = "http://identifiers.org/fma/FMA";

var concentrationOPB = function () {
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

    return query;
};

var fluxOPB = function () {
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

    return query;
};

exports.concentrationOPB = concentrationOPB;
exports.fluxOPB = fluxOPB;
exports.apicalID = apicalID;
exports.basolateralID = basolateralID;
exports.partOfCHEBIUri = partOfCHEBIUri;
exports.luminalID = luminalID;
exports.cytosolID = cytosolID;
exports.interstitialID = interstitialID;
exports.partOfFMAUri = partOfFMAUri;
exports.endpoint = endpoint;
exports.ebiOntoEndpoint = ebiOntoEndpoint;
exports.abiOntoEndpoint = abiOntoEndpoint;
exports.sodium = sodium;
exports.potassium = potassium;
exports.chloride = chloride;
exports.homeHtml = homeHtml;
exports.searchHtml = searchHtml;
exports.similarityHtml = similarityHtml;
exports.chartHtml = chartHtml;

/***/ })
/******/ ]);