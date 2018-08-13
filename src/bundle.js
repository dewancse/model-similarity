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
var similarity = __webpack_require__(4);

"use strict";

var modelSimilarity = (function (global) {

    var modelEntity = [
        {
            model: "weinstein_1995.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P26433",
            score: 0,
            scoreEBI: 0
        },
        // {
        //     model: "chang_fujita_b_1999.cellml",
        //     concentration: [],
        //     flux: [],
        //     protein: "", // http://purl.obolibrary.org/obo/CL_0000066
        //     score: 0,
        //     scoreEBI: 0
        // },
        // {
        //     model: "chang_fujita_1999.cellml",
        //     concentration: [],
        //     flux: [],
        //     protein: "http://purl.obolibrary.org/obo/PR_P59158",
        //     score: 0,
        //     scoreEBI: 0
        // },
        {
            model: "mackenzie_1996.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P31636",
            score: 0,
            scoreEBI: 0
        },
        {
            model: "eskandari_2005.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_Q9ET37",
            score: 0,
            scoreEBI: 0
        }
    ];
    var idCounter = 0;
    var mainUtils = {};
    var similarObj = [];

    var csvArray = [], tempxAxis = [], tempyAxis = [], tcsvArray = [];
    var csvCounter = 0, xAxis = [], yAxis = [], csvname = [], dataLen = 0;

    mainUtils.loadHomeHtml = function () {
        miscellaneous.showLoading("#main-content");
        ajaxUtils.sendGetRequest(
            sparqlUtils.homeHtml,
            function (homeHtmlContent) {
                $("#main-content").html(homeHtmlContent);
            },
            false);
    };

    /*******************************************/
    /*************** Search Model **************/
    /*******************************************/

    mainUtils.loadSearchHtml = function () {
        ajaxUtils.sendGetRequest(
            sparqlUtils.searchHtml,
            function (searchHtmlContent) {
                $("#main-content").html(searchHtmlContent);
            },
            false);
    };

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

                        console.log("Testing modelEntity: ", modelEntity);
                    },
                    true);
            },
            true);
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

            tr.attr("id", concentrationArray[i].model_entity);

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

    var showFluxTable = function (fluxArray) {
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

            tr.attr("id", fluxArray[i].model_entity);

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

        return table;
    };

    var findSimilarObj = function (modelEntityObj) {
        for (var i = 1; i < modelEntityObj.length; i++) { // traverse modelEntity
            for (var j = 0; j < modelEntityObj[0].concentration.length; j++) { // traverse concentration of first entry of modelEntity
                for (var k = 0; k < modelEntityObj[i].concentration.length; k++) { // traverse concentration of remaining modelEntity

                    if ((modelEntityObj[0].concentration[j].chebi.slice(0, modelEntityObj[0].concentration[j].chebi.indexOf(" ")) == modelEntityObj[i].concentration[k].chebi) &&
                        (modelEntityObj[0].concentration[j].fma.slice(0, modelEntityObj[0].concentration[j].fma.indexOf(" ")) == modelEntityObj[i].concentration[k].fma)) {

                        similarObj.push([
                            // modelEntityObj[0].concentration[j],
                            // modelEntityObj[i].concentration[k]]
                            modelEntityObj[0].concentration[j].model_entity,
                            modelEntityObj[i].concentration[k].model_entity]
                        )
                    }
                }
            }
        }

        for (var i = 1; i < modelEntityObj.length; i++) { // traverse modelEntity
            for (var j = 0; j < modelEntityObj[0].flux.length; j++) { // traverse concentration of first entry of modelEntity
                for (var k = 0; k < modelEntityObj[i].flux.length; k++) { // traverse concentration of remaining modelEntity

                    if ((modelEntityObj[0].flux[j].sourceCHEBI.slice(0, modelEntityObj[0].flux[j].sourceCHEBI.indexOf(" ")) == modelEntityObj[i].flux[k].sourceCHEBI) &&
                        (modelEntityObj[0].flux[j].sourceFMA.slice(0, modelEntityObj[0].flux[j].sourceFMA.indexOf(" ")) == modelEntityObj[i].flux[k].sourceFMA) &&
                        (modelEntityObj[0].flux[j].sinkFMA.slice(0, modelEntityObj[0].flux[j].sinkFMA.indexOf(" ")) == modelEntityObj[i].flux[k].sinkFMA) &&
                        (modelEntityObj[0].flux[j].mediatorFMA.slice(0, modelEntityObj[0].flux[j].mediatorFMA.indexOf(" ")) == modelEntityObj[i].flux[k].mediatorFMA)) {

                        similarObj.push([
                            // modelEntityObj[0].concentration[j],
                            // modelEntityObj[i].concentration[k]]
                            modelEntityObj[0].flux[j].model_entity,
                            modelEntityObj[i].flux[k].model_entity]
                        )
                    }
                }
            }
        }

        for (var i = 0; i < similarObj.length; i++) {
            for (var j = i + 1; j < similarObj.length; j++) {

                if (similarObj[i][0] == similarObj[j][0]) {
                    // similarObj[i].push(similarObj[j][1]);

                    similarObj[i].push(similarObj[j][1]);
                    similarObj.splice(j, 1);
                    // i--;
                    j--;
                }
            }
        }
    }

    var showModelSimilarity = function () {

        $("#main-content").html("");

        var head = ["CellML document", "Exact similarity", "EBI similarity"];
        var table = $("<table/>").addClass("table table-hover");

        // Table header
        var thead = $("<thead/>"), tr = $("<tr/>");
        for (var i = 0; i < head.length; i++) {
            tr.append($("<th/>").append(head[i]));
        }

        thead.append(tr);
        table.append(thead);

        findSimilarObj(modelEntity);

        // Table body
        var tbody = $("<tbody/>");
        for (var i = 0; i < modelEntity.length; i++) {
            tr = $("<tr/>"); // row

            var tstrconcentration = showConcentrationTable(modelEntity[i].concentration);
            tstrconcentration = "<table id='fieldsetTable'>" + tstrconcentration[0].innerHTML + "</table>";

            var tstrflux = showFluxTable(modelEntity[i].flux);
            tstrflux = "<table id='fieldsetTable'>" + tstrflux[0].innerHTML + "</table>";

            var samplehtm = '<fieldset class="majorpoints"><legend class="majorpointslegend">' + modelEntity[i].model + '</legend>' +
                '<div class="hiders" style="display: none">' + tstrconcentration + '<br/>' + tstrflux + '</div></fieldset>';

            // $("#main-content").append(samplehtm);
            tr.append($("<td/>").append(samplehtm)); // model

            // tr.append($("<td/>").append(modelEntity[i].model)); // model
            tr.append($("<td/>").append(modelEntity[i].score)); // similarity score

            tr.append($("<td/>").append(modelEntity[i].scoreEBI)); // similarity score EBI

            tbody.append(tr);
        }

        table.append(tbody);
        $("#main-content").append(table);

        // Highlight similar rows Here
        console.log("similarObj: ", similarObj);
        console.log("table: ", table);
        console.log("div.hiders: ", $('div.hiders'));

        // End of highlight similar rows

        $('.majorpoints').click(function () {
            $(this).find('.hiders').toggle();

            console.log("Test1: ", $('table#fieldsetTable tbody tr'));
            console.log("Test2: ", $('table#fieldsetTable tbody tr')[0]);
            console.log("Test3: ", $($('table#fieldsetTable tbody tr')[0]));

            console.log("similarObj: ", similarObj);
            // $($('table#fieldsetTable tbody tr')[0]).css("backgroundColor", "lightgreen");

            var filterFunc = function (element, similarObjArr) {
                for (var i = 0; i < similarObjArr.length; i++) {
                    if (similarObjArr[i] == element) {
                        return true;
                    }
                }

                return false;
            }

            var colorList = ["red", "maroon", "lightsteelblue", "lightsalmon", "lightcoral", "yellow", "orange", "skyblue", "lightgreen"];
            for (var i = 0; i < similarObj.length; i++) {
                var color = colorList.pop();
                for (var j = 0; j < $('table#fieldsetTable tbody tr').length; j++) {
                    if (filterFunc($('table#fieldsetTable tbody tr')[j].id, similarObj[i])) {
                        $($('table#fieldsetTable tbody tr')[j]).css("backgroundColor", color);
                    }
                }
            }
        });
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

    // SELECT a CellML model from a dropdown list
    mainUtils.filter = function () {

        discoverModelSimilarity();

        if (event.srcElement.value != "...select a CellML model") {
            var indexes = $.map(modelEntity, function (obj, index) {
                if (obj.model == event.srcElement.value) {
                    return index;
                }
            });

            var enteredIndex = indexes[0];

            // similarity matrix calculation!
            var index = 0, ProteinSeq = "", requestData, PID = [],
                baseUrl = "https://www.ebi.ac.uk/Tools/services/rest/clustalo";

            var enteredPrID = miscellaneous.splitPRFromProtein(modelEntity, PID, enteredIndex);

            // PID does NOT start with P or Q
            for (var key in PID) {
                // console.log("PID[key]: ", PID[key]);
                if (PID[key].charAt(0) == "Q") continue;

                if (PID[key].charAt(0) != "P") {
                    PID[key] = "P" + PID[key].replace(/^0+/, ""); // Or parseInt("065", 10);
                }
            }

            console.log("PID AFTER: ", PID);

            // https://www.ebi.ac.uk/seqdb/confluence/pages/viewpage.action?pageId=48923608
            // https://www.ebi.ac.uk/seqdb/confluence/display/WEBSERVICES/clustalo_rest
            var WSDbfetchREST = function () {

                var dbfectendpoint = sparqlUtils.cors_api_url + "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/" + PID[index] + "/fasta";

                ajaxUtils.sendGetRequest(
                    dbfectendpoint,
                    function (psequence) {
                        ProteinSeq += psequence;

                        index++;
                        if (index == PID.length) {
                            // console.log("ProteinSeq: ", ProteinSeq);

                            requestData = {
                                "sequence": ProteinSeq,
                                "email": "dsar941@aucklanduni.ac.nz"
                            }

                            var requestUrl = baseUrl + "/run/";

                            ajaxUtils.sendEBIPostRequest(
                                requestUrl,
                                requestData,
                                function (jobId) {
                                    // console.log("jobId: ", jobId); // jobId

                                    var chkJobStatus = function (jobId) {
                                        var jobIdUrl = baseUrl + "/status/" + jobId;
                                        ajaxUtils.sendGetRequest(
                                            jobIdUrl,
                                            function (resultObj) {
                                                console.log("result: ", resultObj); // jobId status

                                                if (resultObj == "RUNNING") {
                                                    setTimeout(function () {
                                                        chkJobStatus(jobId);
                                                    }, 5000);
                                                }

                                                var pimUrl = baseUrl + "/result/" + jobId + "/pim";
                                                ajaxUtils.sendGetRequest(
                                                    pimUrl,
                                                    function (identityMatrix) {
                                                        miscellaneous.similarityMatrixEBI(
                                                            identityMatrix,
                                                            PID,
                                                            enteredPrID,
                                                            modelEntity);

                                                        console.log("identityMatrix: ", identityMatrix);
                                                        console.log("PID: ", PID);
                                                        console.log("enteredPrID: ", enteredPrID);
                                                        console.log("modelEntity: ", modelEntity);

                                                        synonymFromEBIOLSCon(modelEntity[enteredIndex], enteredIndex); // append synonym names from EBI OLS's JSON
                                                    },
                                                    false);
                                            },
                                            false);
                                    }

                                    chkJobStatus(jobId);
                                },
                                false);

                            return;
                        }

                        // callback
                        WSDbfetchREST();
                    },
                    false);
            };

            WSDbfetchREST();
        }
    };

    var synonymFromEBIOLSCon = function (concentrationArr, enteredIndex) {

        var endpointOLS, chebi_uri, fma_uri;
        if (concentrationArr.concentration[idCounter].chebi.indexOf(sparqlUtils.partOfCHEBIUri) != -1) {
            endpointOLS = sparqlUtils.ebiOntoEndpoint + "/chebi/terms?iri=" + concentrationArr.concentration[idCounter].chebi;
        }

        ajaxUtils.sendGetRequest(
            endpointOLS,
            function (jsonObjOLSCHEBI) {

                if (concentrationArr.concentration[idCounter].fma.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                    endpointOLS = sparqlUtils.ebiOntoEndpoint + "/fma/terms?iri=" + concentrationArr.concentration[idCounter].fma;
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

                        if (jsonObjOLSFMA._embedded.terms[0].annotation["preferred name"] != undefined)
                            synonym_FMA = jsonObjOLSFMA._embedded.terms[0].annotation["preferred name"][0];
                        else
                            synonym_FMA = "undefined";

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
            endpointOLS = sparqlUtils.ebiOntoEndpoint + "/chebi/terms?iri=" + fluxArr.flux[idCounter].sourceCHEBI;
        }

        ajaxUtils.sendGetRequest(
            endpointOLS,
            function (jsonObjOLSCHEBI) {

                if (fluxArr.flux[idCounter].sourceFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                    // var indexofColon = fluxArr.flux[idCounter].sourceFMA.indexOf("FMA:");
                    // fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].sourceFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                    endpointOLS = sparqlUtils.ebiOntoEndpoint + "/fma/terms?iri=" + fluxArr.flux[idCounter].sourceFMA;
                }

                ajaxUtils.sendGetRequest(
                    endpointOLS,
                    function (jsonObjOLSSourceFMA) {

                        if (fluxArr.flux[idCounter].sinkFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                            // var indexofColon = fluxArr.flux[idCounter].sinkFMA.indexOf("FMA:");
                            // fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].sinkFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                            endpointOLS = sparqlUtils.ebiOntoEndpoint + "/fma/terms?iri=" + fluxArr.flux[idCounter].sinkFMA;
                        }

                        ajaxUtils.sendGetRequest(
                            endpointOLS,
                            function (jsonObjOLSSinkFMA) {

                                if (fluxArr.flux[idCounter].mediatorFMA.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                                    // var indexofColon = fluxArr.flux[idCounter].mediatorFMA.indexOf("FMA:");
                                    // fma_uri = "http://purl.org/sig/ont/fma/fma" + fluxArr.flux[idCounter].mediatorFMA.slice(indexofColon + 4); // 3 + 1 (skip :)
                                    endpointOLS = sparqlUtils.ebiOntoEndpoint + "/fma/terms?iri=" + fluxArr.flux[idCounter].mediatorFMA;
                                }

                                ajaxUtils.sendGetRequest(
                                    endpointOLS,
                                    function (jsonObjOLSMediatorFMA) {

                                        var tempvar, synonym_CHEBI, synonym_sourceFMA, synonym_sinkFMA,
                                            synonym_mediatorFMA;
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

                                        if (jsonObjOLSSourceFMA._embedded.terms[0].annotation["preferred name"] != undefined)
                                            synonym_sourceFMA = jsonObjOLSSourceFMA._embedded.terms[0].annotation["preferred name"][0];
                                        else
                                            synonym_sourceFMA = "undefined";

                                        if (jsonObjOLSSinkFMA._embedded.terms[0].annotation["preferred name"] != undefined)
                                            synonym_sinkFMA = jsonObjOLSSinkFMA._embedded.terms[0].annotation["preferred name"][0];
                                        else
                                            synonym_sinkFMA = "undefined";

                                        if (jsonObjOLSMediatorFMA._embedded.terms[0].annotation["preferred name"] != undefined)
                                            synonym_mediatorFMA = jsonObjOLSMediatorFMA._embedded.terms[0].annotation["preferred name"][0];
                                        else
                                            synonym_mediatorFMA = "undefined";

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

                                            return;
                                        }

                                        synonymFromEBIOLSFlux(fluxArr, enteredIndex);

                                    }, true);
                            }, true);
                    }, true);
            }, true);
    };

    /*******************************************/
    /********* SED-ML based annotation *********/
    /*******************************************/

    // svg graph
    var svgDiagram = function (csvData, xDomain, yDomain, csvname) {

        console.log("xDomain, yDomain, and csvname: ", xDomain, yDomain, csvname);

        var checkBox = [];

        var svg = d3.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scaleLinear()
            .rangeRound([0, width]);

        var y = d3.scaleLinear()
            .rangeRound([height, 0]);

        var color = d3.scaleOrdinal(d3.schemeCategory10);

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

                    checkBox[c] = new miscellaneous.d3CheckBox();
                    checkBox[c].x(700).y(py).checked(true).clickEvent(update);

                    g.call(checkBox[c]);
                    g.append("text")
                        .style("font", "14px sans-serif")
                        .attr("stroke", color(c))
                        .attr("x", 740)
                        .attr("y", py + 15)
                        .text(csvname[i - 1].slice(csvname[i - 1].indexOf("/") + 1));

                    return color(c);
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

    // Incorporate experimental data and calculate least-squares method
    var expFunction = function (xAxis, yAxis, csvname, csvArray) {

        console.log("xAxis, yAxis, and csvname: ", xAxis, yAxis, csvname, csvArray);

        var csvCounter = 0, minResult = [];

        var csvFunction = function (csvarraydata) {
            d3.csv("data/experimental.csv", function (data) {
                console.log("csvarraydata: ", csvarraydata);
                console.log("data: ", data);
                tcsvArray = data;

                var result = [];
                for (var i = 0; i < data.length; i++) { // column

                    var sum = 0, initial = 1 / (2 * data.length);
                    for (var j = 0; j < data.length; j++) { // row
                        sum = sum + Math.pow((data[j][i] - csvarraydata[j]["yaxis"]), 2);
                    }

                    sum = initial * sum;
                    result.push([sum, i]);
                }

                console.log("result: ", result);

                var min, minIndex;
                minResult.push(d3.min(result, function (d, i) {
                    if (i == 0) {
                        min = d[0];
                        minIndex = i;
                    }
                    else if (d[0] <= min) {
                        min = d[0];
                        minIndex = i;
                    }

                    if (i == result.length - 1)
                        return [min, minIndex];
                }));

                csvCounter++;
                if (csvCounter < csvArray.length - 1) {
                    csvFunction(csvArray[csvCounter + 1]);
                }

                if (csvCounter == csvArray.length - 1) {
                    console.log("minResult: ", minResult);

                    var min2, minIndex2, pRESULT;
                    pRESULT = d3.min(minResult, function (d, i) {
                        if (i == 0) {
                            min2 = d[0];
                            minIndex2 = i;
                        }
                        else if (d[0] <= min2) {
                            min2 = d[0];
                            minIndex2 = i;
                        }

                        if (i == minResult.length - 1)
                            return [min2, minIndex2];
                    });

                    for (var i = 0; i < csvArray.length; i++) {
                        if (i <= pRESULT[1] + 1)
                            continue;

                        csvArray.splice(i, 1);
                        i--;
                    }

                    csvArray = [csvArray[0], csvArray[csvArray.length - 1]];

                    console.log("pRESULT: ", pRESULT);
                    console.log("tcsvArray: ", tcsvArray);

                    var temp = [];
                    for (var i = 0; i < tcsvArray.length; i++) {
                        temp.push({yaxis: tcsvArray[i][pRESULT[1]]});
                    }

                    csvArray.push(temp);
                    console.log("csvArray: ", csvArray);

                    // remove irrelevant index in csvname
                    for (var i = 0; i < csvname.length; i++) {
                        if (i <= pRESULT[1])
                            continue;

                        csvname.splice(i, 1);
                        i--;
                    }

                    csvname = [csvname[csvname.length - 1], "data/experimental.csv"];

                    console.log(csvname);
                    svgDiagram(csvArray, miscellaneous.minMax(tempxAxis), miscellaneous.minMax(tempyAxis), csvname);
                }
            })
        }

        csvFunction(csvArray[csvCounter + 1]);
    }

    // process x and y axis scale and call either svg or experimental function
    var arrFunction = function (xaxis, yaxis, csv, csvCounter, tempOBJ, ploty) {

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

                if (ploty == "experimental") {
                    expFunction(xAxis, yAxis, csvname, csvArray, tempxAxis, tempyAxis);
                }
                else {
                    svgDiagram(csvArray, miscellaneous.minMax(tempxAxis), miscellaneous.minMax(tempyAxis), csvname);
                }

                return;
            }
            else {
                csvCounter = csvCounter + 1;
                arrFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tempOBJ, ploty);
            }
        });
    };

    var reinit = function () {
        csvArray = [];
        tempxAxis = [];
        tempyAxis = [];
        csvCounter = 0;
        xAxis = [];
        yAxis = [];
        csvname = [];
        dataLen = 0;
    };

    // select protocol from dropdown menu
    mainUtils.selectProtocol = function () {
        console.log("option: ", $("#protocol option"));
        for (var i = 0; i < $("#protocol option").length; i++) {
            if ($("#protocol option")[i].selected == true) {
                console.log("selected: ", $("#protocol option")[i].selected);

                $("#svgid").empty();
                reinit();

                // protocol #1
                if ($("#protocol option")[i].innerText == "concentration vs time") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2
                if ($("#protocol option")[i].innerText == "V vs I") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #3A
                if ($("#protocol option")[i].innerText == "concentration/flux vs concentration 3A") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #3B
                if ($("#protocol option")[i].innerText == "concentration/flux vs concentration 3B") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #4A
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 4A") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #4B
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 4B") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2A
                if ($("#protocol option")[i].innerText == "flux vs external pH 2A") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2B
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 2B") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // experimental
                if ($("#protocol option")[i].innerText == "experimental") {
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }
            }
        }
    }

    // process protocols information
    var protocol = function (protocolName) {
        ajaxUtils.sendGetRequest(
            sparqlUtils.sedmlWorkspaceName,
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

                // query for y axis
                var query = sparqlUtils.sparqlOBJ[sparqly];

                ajaxUtils.sendPostRequest(
                    sparqlUtils.endpoint,
                    query,
                    function (jsonObjy) {
                        console.log("jsonObjy: ", jsonObjy);

                        // query for x axis
                        var query = sparqlUtils.sparqlOBJ[sparqlx];

                        ajaxUtils.sendPostRequest(
                            sparqlUtils.endpoint,
                            query,
                            function (jsonObjx) {
                                console.log("jsonObjx: ", jsonObjx);

                                var tempOBJx = [], templistOfModelx = [];
                                var tempOBJy = [], templistOfModely = [];

                                for (var i = 0; i < jsonObjy.results.bindings.length; i++) {
                                    templistOfModely.push(jsonObjy.results.bindings[i].modelEntity.value);
                                }

                                for (var i = 0; i < jsonObjx.results.bindings.length; i++) {
                                    templistOfModelx.push(jsonObjx.results.bindings[i].modelEntity.value);
                                }

                                console.log("templistOfModelx: ", templistOfModelx);
                                console.log("templistOfModely: ", templistOfModely);

                                miscellaneous.tempModelHelper(tempOBJx, templistOfModelx);
                                miscellaneous.tempModelHelper(tempOBJy, templistOfModely);

                                console.log("tempOBJx and tempOBJy: ", tempOBJx, tempOBJy);

                                // condition 1: cross-check and delete/replace
                                if (tempOBJx.length != tempOBJy.length) {
                                    if (tempOBJx.length >= tempOBJy.length) {
                                        for (var i = 0; i < tempOBJx.length; i++) {
                                            if (!miscellaneous.isModelExist(tempOBJx[i].model, tempOBJy)) {
                                                tempOBJx.splice(i, 1);
                                                i = i - 1;
                                            }
                                        }
                                    }
                                    else {
                                        for (var i = 0; i < tempOBJy.length; i++) {
                                            if (!miscellaneous.isModelExist(tempOBJy[i].model, tempOBJx)) {
                                                tempOBJy.splice(i, 1);
                                                i = i - 1;
                                            }
                                        }
                                    }
                                }

                                console.log("tempOBJx and tempOBJy AFTER: ", tempOBJx, tempOBJy);

                                var counter = 0;
                                var cellmlWorkspaceFunction = function (counter) {
                                    var cellmlWorkspaceName = sparqlUtils.cors_api_url + "https://models.physiomeproject.org/workspace/267/rawfile/HEAD/" + tempOBJy[counter].model;
                                    ajaxUtils.sendGetRequest(
                                        cellmlWorkspaceName,
                                        function (cellmlWorkspaceHtml) {
                                            // CellML document
                                            var parserCellML = new DOMParser();
                                            var xmlCellMLDoc = parserCellML.parseFromString(cellmlWorkspaceHtml, "text/xml");
                                            console.log("xmlCellMLDoc: ", xmlCellMLDoc);

                                            // csv
                                            if (ploty == "undefined")
                                                csvname.push("data/" +
                                                    tempOBJy[counter].model.slice(0, tempOBJy[counter].model.indexOf(".cellml")) +
                                                    ".csv");
                                            else if (ploty == "experimental")
                                                csvname.push("data/" +
                                                    tempOBJy[counter].model.slice(0, tempOBJy[counter].model.indexOf("_")) +
                                                    ".csv");
                                            else
                                                csvname.push("data/" +
                                                    tempOBJy[counter].model.slice(0, tempOBJy[counter].model.indexOf(".cellml")) +
                                                    "_" + id + ".csv");

                                            // TODO: special case for 'time'
                                            if (sparqlUtils.opbTime == opbx || sparqlUtils.opbTime == opby) {
                                                // x axis component and variable name
                                                var componentx = time.slice(time.indexOf("='") + 2, time.length - 2);
                                                componentx = componentx.slice(0, componentx.indexOf("']"));
                                                var variablex = time.slice(time.lastIndexOf("='") + 2, time.length - 2);
                                            }
                                            else {
                                                // x axis component and variable name
                                                var element = tempOBJx[counter].model,
                                                    indexOfHash = element.search("#"),
                                                    componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
                                                    indexOfDot = componentVariableName.indexOf("."),
                                                    componentx = componentVariableName.slice(0, indexOfDot),
                                                    variablex = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na
                                            }

                                            if (ploty == "undefined" || ploty == "experimental") {
                                                // y axis component and variable name
                                                var element = tempOBJy[counter].model,
                                                    indexOfHash = element.search("#"),
                                                    componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
                                                    indexOfDot = componentVariableName.indexOf("."),
                                                    componenty = componentVariableName.slice(0, indexOfDot),
                                                    variabley = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na
                                            }
                                            else {
                                                var variabley = ploty;
                                            }

                                            var unitsVar;
                                            for (var i = 0; i < xmlCellMLDoc.getElementsByTagName("variable").length; i++) {
                                                if (xmlCellMLDoc.getElementsByTagName("variable")[i].getAttribute("cmeta:id") == componentx + "." + variablex) {
                                                    unitsVar = xmlCellMLDoc.getElementsByTagName("variable")[i].getAttribute("units");
                                                    xAxis.push(componentx + " | " + variablex + " (" + unitsVar + ")");
                                                }

                                                if (xmlCellMLDoc.getElementsByTagName("variable")[i].getAttribute("cmeta:id") == componenty + "." + variabley) {
                                                    unitsVar = xmlCellMLDoc.getElementsByTagName("variable")[i].getAttribute("units");
                                                    yAxis.push(componenty + " | " + variabley + " (" + unitsVar + ")");
                                                }
                                            }

                                            if (counter == tempOBJy.length - 1) {

                                                if (ploty != "undefined" && ploty != "experimental") {
                                                    for (var i = 0; i < xAxis.length; i++) {
                                                        yAxis.push(variabley);
                                                    }
                                                }

                                                console.log("xAxis, yAxis and csv: ", xAxis, yAxis, csvname);

                                                // checking size of csv files are Equal or Not!
                                                var sizeOfCSV = function (csvCounter) {

                                                    d3.csv(csvname[csvCounter], function (data) {
                                                        dataLen = data.length;

                                                        if (csvCounter == tempOBJy.length - 1) {
                                                            csvCounter = 0;
                                                            arrFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tempOBJy, ploty);

                                                            return;
                                                        }
                                                        else {
                                                            csvCounter = csvCounter + 1;
                                                            sizeOfCSV(csvCounter);
                                                        }
                                                    });
                                                }

                                                sizeOfCSV(csvCounter); // first call
                                            }

                                            counter++;

                                            if (counter <= tempOBJy.length - 1)
                                                cellmlWorkspaceFunction(counter); // call back
                                        },
                                        false);
                                };

                                cellmlWorkspaceFunction(counter); // first call
                            },
                            true);
                    },
                    true);
            },
            false);
    }

    // SEDML based annotation and visualization of protocols
    mainUtils.loadProtocolHtml = function () {
        ajaxUtils.sendGetRequest(
            sparqlUtils.drawSEDMLHtml,
            function (drawSEDMLHtmlContent) {
                $("#main-content").html(drawSEDMLHtmlContent);
            },
            false);
    }

    // similarity graph
    // SEDML based annotation and visualization of protocols
    mainUtils.similarityModelsHtml = function () {
        ajaxUtils.sendGetRequest(
            sparqlUtils.similarityHtml,
            function (similarityHtmlContent) {
                $("#main-content").html(similarityHtmlContent);

                similarityModels();
            },
            false);
    }

    var similarityModels = function () {

        var concentration = [
            {
                chebi: "CHEBI_1234_1",
                fma: "FMA_74550_1",
                model_entity: "weinstein#NHE3.C_ext_H"
            },
            {
                chebi: "CHEBI_1235_1",
                fma: "FMA_74550_2",
                model_entity: "weinstein#NHE3.C_ext_NH4"
            },
            {
                chebi: "CHEBI_1236_1",
                fma: "FMA_74550_3",
                model_entity: "weinstein#NHE3.C_ext_Na"
            },
            {
                chebi: "CHEBI_1234_2",
                fma: "FMA_63680_1",
                model_entity: "weinstein#NHE3.C_int_H"
            },
            {
                chebi: "CHEBI_1235_2",
                fma: "FMA_63680_2",
                model_entity: "weinstein#NHE3.C_int_NH4"
            },
            {
                chebi: "CHEBI_1236_2",
                fma: "FMA_63680_3",
                model_entity: "weinstein#NHE3.C_int_Na"
            }
        ];
        var concentration2 = [
            {
                chebi: "CHEBI_1234_3",
                fma: "FMA_74550_4",
                model_entity: "epithelial#NHE3.C_ext_H"
            },
            {
                chebi: "CHEBI_1237_1",
                fma: "FMA_74550_5",
                model_entity: "epithelial#NHE3.C_ext_Cl"
            },
            {
                chebi: "CHEBI_1238_1",
                fma: "FMA_74550_6",
                model_entity: "epithelial#NHE3.C_ext_K"
            },
            {
                chebi: "CHEBI_1234_4",
                fma: "FMA_63680_4",
                model_entity: "epithelial#NHE3.C_int_H"
            },
            {
                chebi: "CHEBI_1237_2",
                fma: "FMA_63680_5",
                model_entity: "epithelial#NHE3.C_int_Cl"
            },
            {
                chebi: "CHEBI_1238_2",
                fma: "FMA_63680_6",
                model_entity: "epithelial#NHE3.C_int_K"
            }
        ];

        // Remove duplicate links
        var uniqueifySVG = function (es) {
            var retval = [];
            es.forEach(function (e) {
                for (var j in retval.length) {
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

        var model = parseModelName(concentration[0].model_entity);
        var model2 = parseModelName(concentration2[0].model_entity);

        var links = [], links2 = [], links3 = [], name, target;

        for (var i in concentration) {
            for (var j = 0; j < 2; j++) {
                if (j == 0) { // chebi
                    name = "Solute";
                    target = concentration[i].chebi;
                }

                if (j == 1) { // fma
                    name = "Located_in";
                    target = concentration[i].fma;
                }

                links.push({
                    source: concentration[i].model_entity,
                    target: target,
                    name: name
                });
            }
        }

        for (var i = 0, j = i + 1; i < concentration.length - 1; i++, j++) {
            links.push({
                source: concentration[i].model_entity,
                target: concentration[j].model_entity,
                name: "Model_entity"
            });

            if (i == concentration.length - 2) {
                links.push({
                    source: concentration[0].model_entity,
                    target: concentration[concentration.length - 1].model_entity,
                    name: "Model_entity"
                });
            }
        }

        for (var i in concentration2) {
            for (var j = 0; j < 2; j++) {
                if (j == 0) { // chebi
                    name = "Solute";
                    target = concentration2[i].chebi;
                }

                if (j == 1) { // fma
                    name = "Located_in";
                    target = concentration2[i].fma;
                }

                links2.push({
                    source: concentration2[i].model_entity,
                    target: target,
                    name: name
                });
            }
        }

        for (var i = 0, j = i + 1; i < concentration2.length - 1; i++, j++) {
            links2.push({
                source: concentration2[i].model_entity,
                target: concentration2[j].model_entity,
                name: "Model_entity"
            });

            if (i == concentration2.length - 2) {
                links2.push({
                    source: concentration2[0].model_entity,
                    target: concentration2[concentration2.length - 1].model_entity,
                    name: "Model_entity"
                });
            }
        }

        // similarity calculation from concentration and concentration2
        for (var i in concentration) {
            for (var j in concentration2) {
                var indexofColon, chebi, chebi2, fma, fma2;
                indexofColon = concentration[i].chebi.indexOf("_");
                chebi = concentration[i].chebi.slice(0, indexofColon);
                chebi2 = concentration2[j].chebi.slice(0, indexofColon);

                indexofColon = concentration[i].fma.indexOf("_");
                fma = concentration[i].fma.slice(0, indexofColon);
                fma2 = concentration2[j].fma.slice(0, indexofColon);

                if (chebi == chebi2 && fma == fma2) {
                    links3.push({
                        name: "Similarity",
                        index: links3.length,
                        source: concentration[i].model_entity,
                        target: concentration2[j].model_entity
                    });

                    break;
                }
            }
        }

        links = uniqueifySVG(links);
        links2 = uniqueifySVG(links2);

        var nodes = {}, nodes2 = {};

        // Compute distinct nodes from the links.
        // model1 (left)
        links.forEach(function (link) {
            link.source = nodes[link.source] ||
                (nodes[link.source] = {name: link.source});

            link.target = nodes[link.target] ||
                (nodes[link.target] = {name: link.target});
        });

        // model2 (right)
        links2.forEach(function (link) {
            link.source = nodes2[link.source] ||
                (nodes2[link.source] = {name: link.source});

            link.target = nodes2[link.target] ||
                (nodes2[link.target] = {name: link.target});
        });

        // similarity (center) links
        for (var i in links3) {
            links3[i].source = nodes[links3[i].source];
            links3[i].target = nodes2[links3[i].target];
        }

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

        // model1 (left)
        var simulation = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {
                return d.name;
            }))
            .force("charge", d3.forceManyBody().strength(-70)) // -100
            .force("center", d3.forceCenter(width / 4, height / 2)) // width / 3 and height / 2
            .force("link", d3.forceLink().distance(70).strength(0.1)); // 100

        // model2 (right)
        var simulation2 = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {
                return d.name;
            }))
            .force("charge", d3.forceManyBody().strength(-70)) // -100
            .force("center", d3.forceCenter(width / 1.5, height / 2)) // width / 3 and height / 2
            .force("link", d3.forceLink().distance(70).strength(0.1)); // 100

        // similarity (center)
        var simulation3 = d3.forceSimulation()
            .force("link", d3.forceLink().id(function (d) {
                return d.name;
            }))
            .force("charge", d3.forceManyBody().strength(-600)) // -100
            .force("center", d3.forceCenter(width / 3, height / 2)) // width / 3 and height / 2
            .force("link", d3.forceLink().distance(600).strength(0.1)); // 100

        // label edges with different color
        var edgelabels = ["Similarity", "Solute", "Located_in", "Model_entity"];
        var py = 20;

        // add the model1 (left) links
        var link = svg.append("svg:g").selectAll("path")
            .data(links)
            .enter().append("svg:path")
            .attr("class", "pathlink")
            .style("stroke", function (d) {
                for (var i in edgelabels) {

                    if (d.name == "Model_entity") return "#FFFFFF";

                    if (d.name == edgelabels[i]) {
                        svg.append("text")
                            .style("font", "18px sans-serif")
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
            });

        // add the model2 (right) links
        var link2 = svg.append("svg:g").selectAll("path")
            .data(links2)
            .enter().append("svg:path")
            .attr("class", "pathlink")
            .style("stroke", function (d) {
                for (var i in edgelabels) {
                    if (d.name == "Model_entity") return "#FFFFFF";

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
            });

        // add the similarity (center) links
        var link3 = svg.append("svg:g").selectAll("path")
            .data(links3)
            .enter().append("svg:path")
            .attr("class", "pathlink")
            .style("stroke", function (d) {
                for (var i in edgelabels) {
                    if (d.name == edgelabels[i]) {
                        svg.append("text")
                            .style("font", "18px sans-serif")
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
            });

        // model1 (left)
        var node = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(d3.values(nodes))
            .enter().append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // model2 (right)
        var node2 = svg.append("g")
            .attr("class", "nodes")
            .selectAll("circle")
            .data(d3.values(nodes2))
            .enter().append("g")
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended));

        // model1 (left)
        node.append("circle")
            .attr("r", 5)
            .styles({
                "fill": function (d, i) {
                    if (d.name.indexOf(model) != -1) {
                        return "red";
                    }
                },
                "r": function (d, i) {
                    if (d.name.indexOf(model) != -1) {
                        return 7;
                    }
                }
            });

        // model2 (right)
        node2.append("circle")
            .attr("r", 5)
            .styles({
                "fill": function (d, i) {
                    if (d.name.indexOf(model2) != -1) {
                        return "brown";
                    }
                },
                "r": function (d, i) {
                    if (d.name.indexOf(model2) != -1) {
                        return 7;
                    }
                }
            });

        // add the text
        // model1 (left)
        node.append("text")
            .attrs({
                "x": 12,
                "dy": ".35em"
            })
            .text(function (d) {
                return d.name;
            });

        // model2 (right)
        node2.append("text")
            .attrs({
                "x": 12,
                "dy": ".35em"
            })
            .text(function (d) {
                return d.name;
            });

        // model1 (left)
        simulation
            .nodes(d3.values(nodes))
            .on("tick", tick);

        simulation.force("link")
            .links(links);

        // model2 (right)
        simulation2
            .nodes(d3.values(nodes2))
            .on("tick", tick2);

        simulation2.force("link")
            .links(links2);

        // similarity (center)
        simulation3
            .on("tick", tick3);

        simulation3.force("link")
            .links(links3);

        // add the curvy lines
        // model1 (left)
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

        // model2 (right)
        function tick2() {
            // add the curvy lines
            link2.attr("d", function (d) {

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

            node2.attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }

        // similarity
        function tick3() {
            // add the curvy lines
            link3.attr("d", function (d) {

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
        }

        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
            if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
            if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
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

// post function to get similarity matrix
var sendEBIPostRequest = function (requestUrl, query, responseHandler, isJsonResponse) {
    var request = getRequestObject();

    request.onreadystatechange = function () {
        handleResponse(request, responseHandler, isJsonResponse);
    };

    request.open("POST", requestUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.setRequestHeader("Accept", "text/plain");

    var data = "";
    for (var key in query) {
        data += encodeURIComponent(key);
        data += "=";
        data += encodeURIComponent(query[key]);
        data += "&";
    }
    // console.log("data: ", data);
    request.send(data); // for POST only
}

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
exports.sendEBIPostRequest = sendEBIPostRequest;

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

// split PR_ from protein identifier
var splitPRFromProtein = function (modelEntity, PID, enteredIndex) {
    var enteredPrId, proteinID, indexOfPR;
    for (var i = 0; i < modelEntity.length; i++) {
        if (modelEntity[i].protein == "") {
            modelEntity[i].scoreEBI = "epithelial cell";
        }
        else {
            indexOfPR = modelEntity[i].protein.search("PR_");
            proteinID = modelEntity[i].protein.slice(indexOfPR + 3, modelEntity[i].protein.length);

            PID.push(proteinID);
        }

        if (i == enteredIndex)
            enteredPrId = proteinID;
    }

    return enteredPrId;
};

// split PR_ from protein identifier
var splitPR = function (proteinURI) {
    var indexOfPR = proteinURI.search("PR_");
    return proteinURI.slice(indexOfPR + 3, proteinURI.length);
};

// process EBI similarity matrix
var similarityMatrixEBI = function (identityMatrix, PID, enteredPrID, modelEntity) {
    // console.log("Identity Matrix: ", identityMatrix);

    var indexOfColon = identityMatrix.search("1:"), m, n, i, j;

    // console.log("index1stBar: ", identityMatrix.slice(indexOfColon - 1, identityMatrix.length));
    identityMatrix = identityMatrix.slice(indexOfColon - 1, identityMatrix.length);

    // console.log("New Identity Matrix: ", identityMatrix);

    var matrixArray = identityMatrix.match(/[(\w\:)*\d\.]+/gi),
        proteinIndex = [],
        twoDMatrix = [];

    // console.log("matrixArray: ", matrixArray);

    for (i = 0; i < matrixArray.length; i = i + PID.length + 3) // +3 for digit:, PID, and Genes and Species
        matrixArray.splice(i, 1);

    for (i = 0; i < matrixArray.length; i = i + PID.length + 2) // +2 for PID and Genes and Species
        matrixArray.splice(i, 1);

    for (i = 1; i < matrixArray.length; i = i + PID.length + 1) // +1 for PID
        matrixArray.splice(i, 1);

    // console.log("matrixArray: ", matrixArray);

    for (i = 0; i < matrixArray.length; i++) {
        if (matrixArray[i].charAt(0).match(/[A-Za-z]/gi)) {
            proteinIndex.push([matrixArray[i], i]);
        }
    }

    // console.log("proteinIndex: ", proteinIndex);

    // 1D to 2D array
    while (matrixArray.length) {
        matrixArray.splice(0, 1); // remove protein ID
        twoDMatrix.push(matrixArray.splice(0, proteinIndex.length));
    }

    for (i = 0; i < twoDMatrix.length; i++) {
        for (j = 0; j < twoDMatrix[i].length; j++) {
            twoDMatrix[i][j] = parseFloat(twoDMatrix[i][j]);
        }
    }

    // console.log("twoDMatrix: ", twoDMatrix);

    var similarityOBJ = [];
    for (i = 0; i < twoDMatrix.length; i++) {
        for (j = 0; j < twoDMatrix.length; j++) {
            if (i == j || j < i) continue;

            similarityOBJ.push({
                "PID1": proteinIndex[i][0],
                "PID2": proteinIndex[j][0],
                "similarity": twoDMatrix[i][j]
            })
        }
    }

    console.log("similarityOBJ: ", similarityOBJ);
    console.log("enteredPrID: ", enteredPrID);

    // length is empty when 100% matching
    // appended a 0 bit after its protein id and make a comparision
    if (similarityOBJ.length != 0) {
        for (m = 0; m < modelEntity.length; m++) {

            if (modelEntity[m].protein == "") continue;

            if (splitPR(modelEntity[m].protein) == enteredPrID)
                modelEntity[m].scoreEBI = 100;

            for (n = 0; n < similarityOBJ.length; n++) {
                if ((splitPR(modelEntity[m].protein) == similarityOBJ[n].PID1 && enteredPrID == similarityOBJ[n].PID2) ||
                    (splitPR(modelEntity[m].protein) == similarityOBJ[n].PID2 && enteredPrID == similarityOBJ[n].PID1)) {
                    modelEntity[m].scoreEBI = similarityOBJ[n].similarity;
                }
            }
        }
    }
};

function d3CheckBox() {

    var size = 20,
        x = 0,
        y = 0,
        rx = 0,
        ry = 0,
        markStrokeWidth = 2,
        boxStrokeWidth = 2,
        checked = false,
        clickEvent,
        xtext = 0,
        ytext = 0,
        text = "Empty";

    function checkBox(selection) {
        var g = selection.append("g"),
            box = g.append("rect")
                .attr("width", size)
                .attr("height", size)
                .attr("x", x)
                .attr("y", y)
                .attr("rx", rx)
                .attr("ry", ry)
                .styles({
                    "fill-opacity": 0,
                    "stroke-width": boxStrokeWidth,
                    "stroke": "black"
                }),
            txt = g.append("text").attr("x", xtext).attr("y", ytext).text("" + text + "");

        //Data to represent the check mark
        var coordinates = [
            {x: x + (size / 8), y: y + (size / 3)},
            {x: x + (size / 2.2), y: (y + size) - (size / 4)},
            {x: (x + size) - (size / 8), y: (y + (size / 10))}
        ];

        var line = d3.line()
            .x(function (d) {
                return d.x;
            })
            .y(function (d) {
                return d.y;
            });

        var mark = g.append("path")
            .attr("d", line(coordinates))
            .styles({
                "stroke-width": markStrokeWidth,
                "stroke": "black",
                "fill": "none",
                "opacity": (checked) ? 1 : 0
            });

        g.on("click", function () {
            checked = !checked;
            mark.style("opacity", (checked) ? 1 : 0);

            if (clickEvent) {
                clickEvent();
            }

            d3.event.stopPropagation();
        });
    }

    checkBox.size = function (val) {
        size = val;
        return checkBox;
    };

    checkBox.x = function (val) {
        x = val;
        return checkBox;
    };

    checkBox.y = function (val) {
        y = val;
        return checkBox;
    };

    checkBox.rx = function (val) {
        rx = val;
        return checkBox;
    };

    checkBox.ry = function (val) {
        ry = val;
        return checkBox;
    };

    checkBox.markStrokeWidth = function (val) {
        markStrokeWidth = val;
        return checkBox;
    };

    checkBox.boxStrokeWidth = function (val) {
        boxStrokeWidth = val;
        return checkBox;
    };

    checkBox.checked = function (val) {
        if (val === undefined) {
            return checked;
        } else {
            checked = val;
            return checkBox;
        }
    };

    checkBox.clickEvent = function (val) {
        clickEvent = val;
        return checkBox;
    };

    checkBox.xtext = function (val) {
        xtext = val;
        return checkBox;
    };

    checkBox.ytext = function (val) {
        ytext = val;
        return checkBox;
    };

    checkBox.text = function (val) {
        text = val;
        return checkBox;
    };

    return checkBox;
}

var minMax = function (tempArray) {
    var min, max;
    for (var i = 0; i < tempArray.length; i++) {
        if (i == 0)
            min = tempArray[i];
        else if (tempArray[i] <= min)
            min = tempArray[i];

        if (i == 0)
            max = tempArray[i];
        else if (tempArray[i] >= max)
            max = tempArray[i];
    }

    return [min, max];
}

// compare component and varible name of two model entities
var isExistProtocolElem = function (element, element2) {
    // remove duplicate components with same variable and cellml model
    var indexOfHash = element.search("#"),
        cellmlModelName = element.slice(0, indexOfHash), // weinstein_1995.cellml
        componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
        indexOfDot = componentVariableName.indexOf("."),
        variableName = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

    var indexOfHash2 = element2.search("#"),
        cellmlModelName2 = element2.slice(0, indexOfHash2), // weinstein_1995.cellml
        componentVariableName2 = element2.slice(indexOfHash2 + 1), // NHE3.J_NHE3_Na
        indexOfDot2 = componentVariableName2.indexOf("."),
        variableName2 = componentVariableName2.slice(indexOfDot2 + 1); // J_NHE3_Na

    if (cellmlModelName == cellmlModelName2 && variableName == variableName2) {
        return true;
    }

    return false;
};

var tempModelHelper = function (tempOBJ, templistOfModel) {
    var icounter = 0;
    for (var i = 0; i < templistOfModel.length; i++) {
        tempOBJ.push({model: templistOfModel[i], alias: []});
        for (var j = i + 1; j < templistOfModel.length; j++) {
            if (isExistProtocolElem(templistOfModel[i], templistOfModel[j])) {
                icounter++;
                tempOBJ[tempOBJ.length - 1].alias.push(templistOfModel[j]);
            }
        }

        if (icounter > 0) {
            i = i + icounter;
            icounter = 0;
        }
    }

    // return tempOBJ;
}

var isModelExist = function (modelEntity, cellmlModels) {
    var cellmlModelEntityName = modelEntity.slice(0, modelEntity.indexOf("#"));

    console.log(cellmlModelEntityName);

    for (var i = 0; i < cellmlModels.length; i++) {
        var cellmlModelName = cellmlModels[i].model.slice(0, cellmlModels[i].model.indexOf("#"));

        if (cellmlModelEntityName == cellmlModelName)
            return true;
    }

    return false;
}

exports.showLoading = showLoading;
exports.isExist = isExist;
exports.uniqueifySVG = uniqueifySVG;
exports.parseModelName = parseModelName;
exports.similarityMatrixEBI = similarityMatrixEBI;
exports.splitPRFromProtein = splitPRFromProtein;
exports.d3CheckBox = d3CheckBox;
exports.minMax = minMax;
exports.tempModelHelper = tempModelHelper;
exports.isModelExist = isModelExist;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Created by Dewan Sarwar on 14/01/2018.
 */
var cors_api_url = "https://cors-anywhere.herokuapp.com/";
var endpoint = cors_api_url + "https://models.physiomeproject.org/pmr2_virtuoso_search";

var ebiOntoEndpoint = "https://www.ebi.ac.uk/ols/api/ontologies";
var abiOntoEndpoint = "http://ontology.cer.auckland.ac.nz/ols-boot/api/ontologies";

var homeHtml = "./snippets/home-snippet.html";
var searchHtml = "./snippets/search-snippet.html";
var similarityHtml = "./snippets/similarity-snippet.html";
var drawSEDMLHtml = "./snippets/drawSEDML-snippet.html";

var sodium = "http://purl.obolibrary.org/obo/CHEBI_29101";
var potassium = "http://purl.obolibrary.org/obo/CHEBI_29103";
var chloride = "http://purl.obolibrary.org/obo/CHEBI_17996";
var luminalID = "http://purl.obolibrary.org/obo/FMA_74550";
var cytosolID = "http://purl.obolibrary.org/obo/FMA_66836";
var interstitialID = "http://purl.obolibrary.org/obo/FMA_9673";
var apicalID = "http://purl.obolibrary.org/obo/FMA_84666";
var basolateralID = "http://purl.obolibrary.org/obo/FMA_84669";

var partOfCHEBIUri = "http://purl.obolibrary.org/obo/CHEBI";
var partOfFMAUri = "http://purl.obolibrary.org/obo/FMA";

var opbTime = "http://identifiers.org/opb/OPB_01023";

// Definition of protocols
var sedmlWorkspaceName = cors_api_url + "https://models.physiomeproject.org/workspace/267/rawfile/HEAD/weinstein_1995.sedml";

var sparqlOBJ = {
    protocol1Concentration: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
    "PREFIX dcterms: <http://purl.org/dc/terms/>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
    "?model_prop semsim:physicalPropertyOf ?source_entity. " +
    "?source_entity ro:part_of ?source_part_of_entity. " +
    "?source_part_of_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>. " +
    "?source_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
    "}",
    protocol1Time: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_01023>. " +
    "}",
    protocol2Currrent: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00318>. " +
    "?model_prop semsim:physicalPropertyOf ?model_proc. " +
    "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
    "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
    "?med_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
    "}",
    protocol2Potential: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00506>. " +
    "?model_prop semsim:physicalPropertyOf ?entity. " +
    "?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
    "}",
    protocol3Flux: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
    "PREFIX dcterms: <http://purl.org/dc/terms/>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00593>. " +
    "?model_prop semsim:physicalPropertyOf ?model_proc. " +
    "?model_proc semsim:hasSourceParticipant ?model_srcparticipant. " +
    "?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. " +
    "?source_entity ro:part_of ?source_part_of_entity. " +
    "?source_part_of_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>. " +
    "?source_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
    "?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. " +
    "?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. " +
    "?sink_entity ro:part_of ?sink_part_of_entity. " +
    "?sink_part_of_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
    "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
    "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
    "?med_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
    "}",
    protocol4Concentration: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
    "PREFIX dcterms: <http://purl.org/dc/terms/>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
    "?model_prop semsim:physicalPropertyOf ?source_entity. " +
    "?source_entity ro:part_of ?source_part_of_entity. " +
    "?source_part_of_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>. " +
    "?source_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_28938>. " +
    "}",
    protocol2AConcentration: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
    "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
    "PREFIX dcterms: <http://purl.org/dc/terms/>" +
    "SELECT ?modelEntity " +
    "WHERE { " +
    "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
    "?model_prop semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
    "?model_prop semsim:physicalPropertyOf ?source_entity. " +
    "?source_entity ro:part_of ?source_part_of_entity. " +
    "?source_part_of_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>. " +
    "?source_entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_15378>. " +
    "}"
}

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
exports.drawSEDMLHtml = drawSEDMLHtml;
exports.opbTime = opbTime;
exports.sedmlWorkspaceName = sedmlWorkspaceName;
exports.sparqlOBJ = sparqlOBJ;
exports.cors_api_url = cors_api_url;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
* similarity of models
* */

var similarityModels = function () {

    var concentration = [
        {
            chebi: "CHEBI:1234_1",
            fma: "FMA:74550_1",
            model_entity: "weinstein#NHE3.C_ext_H"
        },
        {
            chebi: "CHEBI:1235_1",
            fma: "FMA:74550_2",
            model_entity: "weinstein#NHE3.C_ext_NH4"
        },
        {
            chebi: "CHEBI:1236_1",
            fma: "FMA:74550_3",
            model_entity: "weinstein#NHE3.C_ext_Na"
        },
        {
            chebi: "CHEBI:1234_2",
            fma: "FMA:63680_1",
            model_entity: "weinstein#NHE3.C_int_H"
        },
        {
            chebi: "CHEBI:1235_2",
            fma: "FMA:63680_2",
            model_entity: "weinstein#NHE3.C_int_NH4"
        },
        {
            chebi: "CHEBI:1236_2",
            fma: "FMA:63680_3",
            model_entity: "weinstein#NHE3.C_int_Na"
        }
    ];
    var concentration2 = [
        {
            chebi: "CHEBI:1234_3",
            fma: "FMA:74550_4",
            model_entity: "epithelial#NHE3.C_ext_H"
        },
        {
            chebi: "CHEBI:1237_1",
            fma: "FMA:74550_5",
            model_entity: "epithelial#NHE3.C_ext_Cl"
        },
        {
            chebi: "CHEBI:1238_1",
            fma: "FMA:74550_6",
            model_entity: "epithelial#NHE3.C_ext_K"
        },
        {
            chebi: "CHEBI:1234_4",
            fma: "FMA:63680_4",
            model_entity: "epithelial#NHE3.C_int_H"
        },
        {
            chebi: "CHEBI:1237_2",
            fma: "FMA:63680_5",
            model_entity: "epithelial#NHE3.C_int_Cl"
        },
        {
            chebi: "CHEBI:1238_2",
            fma: "FMA:63680_6",
            model_entity: "epithelial#NHE3.C_int_K"
        }
    ];

    // Remove duplicate links
    var uniqueifySVG = function (es) {
        var retval = [];
        es.forEach(function (e) {
            for (var j in retval.length) {
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

    var model = parseModelName(concentration[0].model_entity);
    var model2 = parseModelName(concentration2[0].model_entity);

    var links = [], links2 = [], links3 = [], name, target;

    for (var i in concentration) {
        for (var j = 0; j < 2; j++) {
            if (j == 0) { // chebi
                name = "Solute";
                target = concentration[i].chebi;
            }

            if (j == 1) { // fma
                name = "Located_in";
                target = concentration[i].fma;
            }

            links.push({
                source: concentration[i].model_entity,
                target: target,
                name: name
            });
        }
    }

    for (var i = 0, j = i + 1; i < concentration.length - 1; i++, j++) {
        links.push({
            source: concentration[i].model_entity,
            target: concentration[j].model_entity,
            name: "Model_entity"
        });

        if (i == concentration.length - 2) {
            links.push({
                source: concentration[0].model_entity,
                target: concentration[concentration.length - 1].model_entity,
                name: "Model_entity"
            });
        }
    }

    for (var i in concentration2) {
        for (var j = 0; j < 2; j++) {
            if (j == 0) { // chebi
                name = "Solute";
                target = concentration2[i].chebi;
            }

            if (j == 1) { // fma
                name = "Located_in";
                target = concentration2[i].fma;
            }

            links2.push({
                source: concentration2[i].model_entity,
                target: target,
                name: name
            });
        }
    }

    for (var i = 0, j = i + 1; i < concentration2.length - 1; i++, j++) {
        links2.push({
            source: concentration2[i].model_entity,
            target: concentration2[j].model_entity,
            name: "Model_entity"
        });

        if (i == concentration2.length - 2) {
            links2.push({
                source: concentration2[0].model_entity,
                target: concentration2[concentration2.length - 1].model_entity,
                name: "Model_entity"
            });
        }
    }

    // similarity calculation from concentration and concentration2
    for (var i in concentration) {
        for (var j in concentration2) {
            var indexofColon, chebi, chebi2, fma, fma2;
            indexofColon = concentration[i].chebi.indexOf("_");
            chebi = concentration[i].chebi.slice(0, indexofColon);
            chebi2 = concentration2[j].chebi.slice(0, indexofColon);

            indexofColon = concentration[i].fma.indexOf("_");
            fma = concentration[i].fma.slice(0, indexofColon);
            fma2 = concentration2[j].fma.slice(0, indexofColon);

            if (chebi == chebi2 && fma == fma2) {
                links3.push({
                    name: "Similarity",
                    index: links3.length,
                    source: concentration[i].model_entity,
                    target: concentration2[j].model_entity
                });

                break;
            }
        }
    }

    links = uniqueifySVG(links);
    links2 = uniqueifySVG(links2);

    var nodes = {}, nodes2 = {};

    // Compute distinct nodes from the links.
    // model1 (left)
    links.forEach(function (link) {
        link.source = nodes[link.source] ||
            (nodes[link.source] = {name: link.source});

        link.target = nodes[link.target] ||
            (nodes[link.target] = {name: link.target});
    });

    // model2 (right)
    links2.forEach(function (link) {
        link.source = nodes2[link.source] ||
            (nodes2[link.source] = {name: link.source});

        link.target = nodes2[link.target] ||
            (nodes2[link.target] = {name: link.target});
    });

    // similarity (center) links
    for (var i in links3) {
        links3[i].source = nodes[links3[i].source];
        links3[i].target = nodes2[links3[i].target];
    }

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

    // model1 (left)
    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {
            return d.name;
        }))
        .force("charge", d3.forceManyBody().strength(-70)) // -100
        .force("center", d3.forceCenter(width / 4, height / 2)) // width / 3 and height / 2
        .force("link", d3.forceLink().distance(70).strength(0.1)); // 100

    // model2 (right)
    var simulation2 = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {
            return d.name;
        }))
        .force("charge", d3.forceManyBody().strength(-70)) // -100
        .force("center", d3.forceCenter(width / 1.5, height / 2)) // width / 3 and height / 2
        .force("link", d3.forceLink().distance(70).strength(0.1)); // 100

    // similarity (center)
    var simulation3 = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) {
            return d.name;
        }))
        .force("charge", d3.forceManyBody().strength(-600)) // -100
        .force("center", d3.forceCenter(width / 3, height / 2)) // width / 3 and height / 2
        .force("link", d3.forceLink().distance(600).strength(0.1)); // 100

    // label edges with different color
    var edgelabels = ["Similarity", "Solute", "Located_in", "Model_entity"];
    var py = 20;

    // add the model1 (left) links
    var link = svg.append("svg:g").selectAll("path")
        .data(links)
        .enter().append("svg:path")
        .attr("class", "pathlink")
        .style("stroke", function (d) {
            for (var i in edgelabels) {

                if (d.name == "Model_entity") return "#FFFFFF";

                if (d.name == edgelabels[i]) {
                    svg.append("text")
                        .style("font", "18px sans-serif")
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
        });

    // add the model2 (right) links
    var link2 = svg.append("svg:g").selectAll("path")
        .data(links2)
        .enter().append("svg:path")
        .attr("class", "pathlink")
        .style("stroke", function (d) {
            for (var i in edgelabels) {
                if (d.name == "Model_entity") return "#FFFFFF";

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
        });

    // add the similarity (center) links
    var link3 = svg.append("svg:g").selectAll("path")
        .data(links3)
        .enter().append("svg:path")
        .attr("class", "pathlink")
        .style("stroke", function (d) {
            for (var i in edgelabels) {
                if (d.name == edgelabels[i]) {
                    svg.append("text")
                        .style("font", "18px sans-serif")
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
        });

    // model1 (left)
    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(d3.values(nodes))
        .enter().append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // model2 (right)
    var node2 = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(d3.values(nodes2))
        .enter().append("g")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // model1 (left)
    node.append("circle")
        .attr("r", 5)
        .styles({
            "fill": function (d, i) {
                if (d.name.indexOf(model) != -1) {
                    return "red";
                }
            },
            "r": function (d, i) {
                if (d.name.indexOf(model) != -1) {
                    return 7;
                }
            }
        });

    // model2 (right)
    node2.append("circle")
        .attr("r", 5)
        .styles({
            "fill": function (d, i) {
                if (d.name.indexOf(model2) != -1) {
                    return "brown";
                }
            },
            "r": function (d, i) {
                if (d.name.indexOf(model2) != -1) {
                    return 7;
                }
            }
        });

    // add the text
    // model1 (left)
    node.append("text")
        .attrs({
            "x": 12,
            "dy": ".35em"
        })
        .text(function (d) {
            return d.name;
        });

    // model2 (right)
    node2.append("text")
        .attrs({
            "x": 12,
            "dy": ".35em"
        })
        .text(function (d) {
            return d.name;
        });

    // model1 (left)
    simulation
        .nodes(d3.values(nodes))
        .on("tick", tick);

    simulation.force("link")
        .links(links);

    // model2 (right)
    simulation2
        .nodes(d3.values(nodes2))
        .on("tick", tick2);

    simulation2.force("link")
        .links(links2);

    // similarity (center)
    simulation3
        .on("tick", tick3);

    simulation3.force("link")
        .links(links3);

    // add the curvy lines
    // model1 (left)
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

    // model2 (right)
    function tick2() {
        // add the curvy lines
        link2.attr("d", function (d) {

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

        node2.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    }

    // similarity
    function tick3() {
        // add the curvy lines
        link3.attr("d", function (d) {

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
    }

    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
        if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
        if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
        d.fx = null;
        d.fy = null;
    }
};

exports.similarityModels = similarityModels;

/***/ })
/******/ ]);