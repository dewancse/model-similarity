/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
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
        {
            model: "weinstein_1995-human-baso.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P48764",
            score: 0,
            scoreEBI: 0
        },
        // {
        //     model: "weinstein_1995-mouse.cellml",
        //     concentration: [],
        //     flux: [],
        //     protein: "http://purl.obolibrary.org/obo/PR_G3X939",
        //     score: 0,
        //     scoreEBI: 0
        // },
        {
            model: "weinstein_1995-rabbit.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P26432",
            score: 0,
            scoreEBI: 0
        },
        {
            model: "weinstein_1998.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P23562",
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
        {
            model: "chang_fujita_1999.cellml",
            concentration: [],
            flux: [],
            protein: "http://purl.obolibrary.org/obo/PR_P59158",
            score: 0,
            scoreEBI: 0
        },
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

    /*******************************************/
    /*************** Home Page *****************/
    /*******************************************/
    mainUtils.loadHomeHtml = function () {
        showLoading("#main-content");
        sendGetRequest(
            homeHtml,
            function (homeHtmlContent) {
                $("#main-content").html(homeHtmlContent);
            },
            false);
    };

    /*******************************************/
    /*************** Search Model **************/
    /*******************************************/
    mainUtils.loadSearchHtml = function () {
        sendGetRequest(
            searchHtml,
            function (searchHtmlContent) {
                $("#main-content").html(searchHtmlContent);
            },
            false);
    };

    var discoverModelSimilarity = function () {

        var query = concentrationOPBSPARQL2();
        sendPostRequest(
            endpoint,
            query,
            function (jsonObj) {

                console.log("jsonObjCons: ", jsonObj);

                // Two cases: internet connection and PMR SPARQL engine
                PMRdown(jsonObj, "#searchList");

                var query = fluxOPBSPARQL();
                sendPostRequest(
                    endpoint,
                    query,
                    function (jsonObjFlux) {

                        console.log("jsonObjFlux: ", jsonObjFlux);

                        // Two cases: internet connection and PMR SPARQL engine
                        PMRdown(jsonObjFlux, "#searchList");

                        // CHEBI term and anatomical locations for a solute concentration
                        for (var i in modelEntity) {
                            for (var j in jsonObj.results.bindings) {
                                var indexOfHash = jsonObj.results.bindings[j].model_entity.value.search("#"),
                                    cellmlname = jsonObj.results.bindings[j].model_entity.value.slice(0, indexOfHash);

                                if (modelEntity[i].model == cellmlname) {
                                    if (!isExist2(jsonObj.results.bindings[j].model_entity.value, modelEntity[i].concentration)) {
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
                                    if (!isExist2(jsonObjFlux.results.bindings[j].model_entity.value, modelEntity[i].flux)) {
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

                        // replacing luminal ID
                        for (var i = 0; i < modelEntity.length; i++) {
                            // concentration
                            for (var c = 0; c < modelEntity[i].concentration.length; c++) {
                                if (luminalVariants.indexOf(modelEntity[i].concentration[c].fma) != -1)
                                    modelEntity[i].concentration[c].fma = luminalID;
                            }

                            for (var f = 0; f < modelEntity[i].flux.length; f++) {
                                if (luminalVariants.indexOf(modelEntity[i].flux[f].sourceFMA) != -1)
                                    modelEntity[i].flux[f].sourceFMA = luminalID;
                            }
                        }

                    },
                    true);
            },
            true);
    };

    var showConcentrationTable = function (concentrationArray) {

        console.log("showConcentrationTable concentrationArray: ", concentrationArray);

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

            var indexofColon = concentrationArray[i].chebi.indexOf("CHEBI_"),
                chebi = "<a href=" + concentrationArray[i].chebi + " + target=_blank>" + concentrationArray[i].chebi.slice(indexofColon) + "</a>";

            indexofColon = concentrationArray[i].fma.indexOf("FMA_");
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

        console.log("fluxArray: ", fluxArray)

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
            indexofColon = fluxArray[i].sourceCHEBI.indexOf("CHEBI_");
            chebi = "<a href=" + fluxArray[i].sourceCHEBI + " + target=_blank>" + fluxArray[i].sourceCHEBI.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].sourceFMA.indexOf("FMA_");
            srcFMA = "<a href=" + fluxArray[i].sourceFMA + " + target=_blank>" + fluxArray[i].sourceFMA.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].sinkFMA.indexOf("FMA_");
            snkFMA = "<a href=" + fluxArray[i].sinkFMA + " + target=_blank>" + fluxArray[i].sinkFMA.slice(indexofColon) + "</a>";

            indexofColon = fluxArray[i].mediatorFMA.indexOf("FMA_");
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

                    // if ((modelEntityObj[0].concentration[j].chebi.slice(0, modelEntityObj[0].concentration[j].chebi.indexOf(" ")) == modelEntityObj[i].concentration[k].chebi) &&
                    //     (modelEntityObj[0].concentration[j].fma.slice(0, modelEntityObj[0].concentration[j].fma.indexOf(" ")) == modelEntityObj[i].concentration[k].fma)) {
                    if ((modelEntityObj[0].concentration[j].chebi == modelEntityObj[i].concentration[k].chebi) &&
                        (modelEntityObj[0].concentration[j].fma == modelEntityObj[i].concentration[k].fma)) {

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

                    // if ((modelEntityObj[0].flux[j].sourceCHEBI.slice(0, modelEntityObj[0].flux[j].sourceCHEBI.indexOf(" ")) == modelEntityObj[i].flux[k].sourceCHEBI) &&
                    //     (modelEntityObj[0].flux[j].sourceFMA.slice(0, modelEntityObj[0].flux[j].sourceFMA.indexOf(" ")) == modelEntityObj[i].flux[k].sourceFMA) &&
                    //     (modelEntityObj[0].flux[j].sinkFMA.slice(0, modelEntityObj[0].flux[j].sinkFMA.indexOf(" ")) == modelEntityObj[i].flux[k].sinkFMA) &&
                    //     (modelEntityObj[0].flux[j].mediatorFMA.slice(0, modelEntityObj[0].flux[j].mediatorFMA.indexOf(" ")) == modelEntityObj[i].flux[k].mediatorFMA)) {
                    if ((modelEntityObj[0].flux[j].sourceCHEBI == modelEntityObj[i].flux[k].sourceCHEBI) &&
                        (modelEntityObj[0].flux[j].sourceFMA == modelEntityObj[i].flux[k].sourceFMA) &&
                        (modelEntityObj[0].flux[j].sinkFMA == modelEntityObj[i].flux[k].sinkFMA) &&
                        (modelEntityObj[0].flux[j].mediatorFMA == modelEntityObj[i].flux[k].mediatorFMA)) {

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
    };

    var showModelSimilarity = function () {

        // sorting in descending order of the similarity matrix score
        modelEntity.sort(function (a, b) {
            return b.scoreEBI - a.scoreEBI;
        });

        // checking if there is any `NaN`
        for (var i = 0; i < modelEntity.length; i++) {
            if (i == 0 && modelEntity[i].score == "NaN")
                modelEntity[i].score = 1.000;
            else if (i != 0 && modelEntity[i].score == "NaN")
                modelEntity[i].score = 0.000;
        }

        console.log("AFTER SORTING modelEntity: ", modelEntity);

        $("#main-content").html("");

        var head = ["CellML document (click a model to expand)", "Exact similarity", "EBI similarity"];
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
        showLoading("#main-content");

        // homepage
        sendGetRequest(
            homeHtml,
            function (homeHtmlContent) {
                $("#main-content").html(homeHtmlContent);
            },
            false);

        // $(".dropdown-toggle").dropdown();
        $('[data-toggle="popover"]').popover();
    });

    // SELECT a CellML model from a dropdown list
    mainUtils.filter = function () {
        console.log("BEFORE event.srcElement.value: ", event.srcElement.value);

        if (event.srcElement.value != "...select a CellML model") {
            showLoading("#searchList");

            console.log("INSIDE event.srcElement.value: ", event.srcElement.value);

            discoverModelSimilarity();

            var indexes = $.map(modelEntity, function (obj, index) {
                if (obj.model == event.srcElement.value) {
                    return index;
                }
            });

            var enteredIndex = indexes[0];

            console.log("enteredIndex: ", enteredIndex);

            // similarity matrix calculation!
            var index = 0, ProteinSeq = "", requestData, PID = [];
            // var baseUrl = "https://www.ebi.ac.uk/Tools/services/rest/clustalo";
            // var baseUrl = "/.api/ebi/clustalo";

            console.log("enteredIndex, indexes[0]: ", enteredIndex, indexes[0]);
            var enteredPrID = splitPRFromProtein2(modelEntity, PID, enteredIndex);

            console.log("enteredPrID: ", enteredPrID);

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

                // var dbfectendpoint = "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/" + PID[index] + "/fasta";
                var dbfectendpoint = dbfetchUniProtKB + PID[index] + "/fasta";

                sendGetRequest(
                    dbfectendpoint,
                    function (psequence) {

                        // EBI database fetch (Dbfetch)
                        Dbfetchdown(psequence, "#searchList");

                        ProteinSeq += psequence;

                        index++;
                        if (index == PID.length) {
                            // console.log("ProteinSeq: ", ProteinSeq);

                            requestData = {
                                "sequence": ProteinSeq,
                                "email": "dsar941@aucklanduni.ac.nz"
                            }

                            var requestUrl = baseUrl + "/run/";

                            sendEBIPostRequest(
                                requestUrl,
                                requestData,
                                function (jobId) {
                                    console.log("jobId: ", jobId); // jobId

                                    // EBI Clustal Omega
                                    Clustaldown(jobId, "#searchList");

                                    var chkJobStatus = function (jobId) {
                                        var jobIdUrl = baseUrl + "/status/" + jobId;
                                        sendGetRequest(
                                            jobIdUrl,
                                            function (resultObj) {
                                                console.log("result: ", resultObj); // jobId status

                                                // EBI Clustal Omega
                                                Clustaldown(resultObj, "#searchList");

                                                if (resultObj == "RUNNING") {
                                                    setTimeout(function () {
                                                        chkJobStatus(jobId);
                                                    }, 5000);
                                                } else if (resultObj == "FINISHED") {
                                                    var pimUrl = baseUrl + "/result/" + jobId + "/pim";
                                                    sendGetRequest(
                                                        pimUrl,
                                                        function (identityMatrix) {

                                                            Clustaldown(identityMatrix, "#searchList");

                                                            similarityMatrixEBI2(identityMatrix, PID, enteredPrID, modelEntity);

                                                            console.log("identityMatrix: ", identityMatrix);
                                                            console.log("PID: ", PID);
                                                            console.log("enteredPrID: ", enteredPrID);
                                                            console.log("modelEntity: ", modelEntity);

                                                            // Exact similarity
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
                                                                        var chebi = concentrationArray[k].chebi;
                                                                        var fma = concentrationArray[k].fma;

                                                                        if (chebi == modelEntity[i].concentration[j].chebi &&
                                                                            fma == modelEntity[i].concentration[j].fma) {
                                                                            sum += 1;
                                                                        }
                                                                    }
                                                                }

                                                                for (var j2 in modelEntity[i].flux) {
                                                                    for (var k2 in fluxArray) {
                                                                        var chebi = fluxArray[k2].sourceCHEBI;
                                                                        var srcFMA = fluxArray[k2].sourceFMA;
                                                                        var snkFMA = fluxArray[k2].sinkFMA;
                                                                        var medFMA = fluxArray[k2].mediatorFMA;

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
                                                        },
                                                        false);
                                                }
                                            },
                                            false);
                                    };

                                    chkJobStatus(jobId);

                                    return;
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

    /*******************************************/
    /************ Similarity Graph *************/
    /*******************************************/
    mainUtils.similarityModelsHtml = function () {
        sendGetRequest(
            similarityHtml,
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

    /*******************************************/
    /********* SED-ML based annotation *********/
    /*******************************************/
    // svg graph
    var svgDiagram = function (csvData, xDomain, yDomain, csvname) {

        $("#svgidimage")[0].childNodes[0].remove();

        // make equal length of arrays in csvData
        for (var i = 1; i < csvData.length; i++) {
            var length = csvData[0].length;
            if (csvData[i].length != length) {
                csvData[i] = csvData[i].slice(0, length);
            }
        }

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
                } else {
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
                    } else if (d[0] <= min) {
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
                        } else if (d[0] <= min2) {
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
                    svgDiagram(csvArray, minMax(tempxAxis), minMax(tempyAxis), csvname);
                }
            })
        }

        csvFunction(csvArray[csvCounter + 1]);
    };

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
            } else {
                tempxAxis.push(tempx[0], tempx[1]);
                tempyAxis.push(tempy[0], tempy[1]);
                csvArray.push(tempY);
            }

            console.log("csvCounter: ", csvCounter);

            if (csvCounter == tempOBJ.length - 1) {

                console.log("tempxAxis, tempyAxis and csvArray: ", tempxAxis, tempyAxis, csvArray);

                if (ploty == "experimental") {
                    expFunction(xAxis, yAxis, csvname, csvArray, tempxAxis, tempyAxis);
                } else {
                    svgDiagram(csvArray, minMax(tempxAxis), minMax(tempyAxis), csvname);
                }

                return;
            } else {
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

    // process protocols information
    var protocol = function (protocolName) {
        showLoading("#svgidimage");
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

                console.log("id: ", id);
                console.log("name: ", name);
                console.log("opby: ", opby);
                console.log("opbx: ", opbx);
                console.log("chebi: ", chebi);
                console.log("fma: ", fma);
                console.log("sparqly: ", sparqly);
                console.log("sparqlx: ", sparqlx);
                console.log("time: ", time);

                // query for y axis
                var query = sparqlOBJ[sparqly];

                sendPostRequest(
                    endpoint,
                    query,
                    function (jsonObjy) {
                        console.log("jsonObjy: ", jsonObjy);

                        // Two cases: internet connection and PMR SPARQL engine
                        PMRdown(jsonObjy, "#svgidimage");

                        // query for x axis
                        var query = sparqlOBJ[sparqlx];

                        sendPostRequest(
                            endpoint,
                            query,
                            function (jsonObjx) {
                                console.log("jsonObjx: ", jsonObjx);

                                // Two cases: internet connection and PMR SPARQL engine
                                PMRdown(jsonObjx, "#svgidimage");

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

                                tempModelHelper(tempOBJx, templistOfModelx);
                                tempModelHelper(tempOBJy, templistOfModely);

                                console.log("tempOBJx and tempOBJy: ", tempOBJx, tempOBJy);

                                if (tempOBJx.length != tempOBJy.length) {

                                    // condition 1: cross-check and delete/replace
                                    if (tempOBJx.length > tempOBJy.length) {
                                        for (var i = 0; i < tempOBJx.length; i++) {
                                            if (!isModelExist(tempOBJx[i].model, tempOBJy)) {
                                                tempOBJx.splice(i, 1);
                                                i = i - 1;
                                            }
                                        }
                                    } else {
                                        for (var i = 0; i < tempOBJy.length; i++) {
                                            if (!isModelExist(tempOBJy[i].model, tempOBJx)) {
                                                tempOBJy.splice(i, 1);
                                                i = i - 1;
                                            }
                                        }
                                    }

                                    // condition 2: remove additional cellml models
                                    if (tempOBJx.length > tempOBJy.length) {
                                        for (var i = 0; i < tempOBJx.length; i++) {
                                            var cellmlmodel = tempOBJx[i].model.slice(0, tempOBJx[i].model.indexOf("#"));
                                            for (var j = i + 1; j < tempOBJx.length; j++) {
                                                var cellmlmodel2 = tempOBJx[j].model.slice(0, tempOBJx[j].model.indexOf("#"));
                                                if (cellmlmodel == cellmlmodel2) {
                                                    tempOBJx.splice(j, 1);
                                                    j--;
                                                }
                                            }
                                        }
                                    } else {
                                        for (var i = 0; i < tempOBJy.length; i++) {
                                            var cellmlmodel = tempOBJy[i].model.slice(0, tempOBJy[i].model.indexOf("#"));
                                            for (var j = i + 1; j < tempOBJy.length; j++) {
                                                var cellmlmodel2 = tempOBJy[j].model.slice(0, tempOBJy[j].model.indexOf("#"));
                                                if (cellmlmodel == cellmlmodel2) {
                                                    tempOBJy.splice(j, 1);
                                                    j--;
                                                }
                                            }
                                        }
                                    }
                                }

                                console.log("tempOBJx and tempOBJy AFTER: ", tempOBJx, tempOBJy);

                                var counter = 0;
                                var cellmlWorkspaceFunction = function (counter) {
                                    var cellmlWorkspaceName = myWorkspaceName + "rawfile/HEAD/" + tempOBJy[counter].model;
                                    sendGetRequest(
                                        cellmlWorkspaceName,
                                        function (cellmlWorkspaceHtml) {

                                            // Two cases: internet connection and PMR SPARQL engine
                                            PMRdown(jsonObjx, "#svgidimage");

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
                                                    tempOBJy[counter].model.slice(0, tempOBJy[counter].model.indexOf(".cellml")) +
                                                    "_exp" + ".csv");
                                            else
                                                csvname.push("data/" +
                                                    tempOBJy[counter].model.slice(0, tempOBJy[counter].model.indexOf(".cellml")) +
                                                    "_" + id + ".csv");

                                            // TODO: special case for 'time'
                                            if (opbTime == opbx || opbTime == opby) {
                                                // x axis component and variable name
                                                var componentx = time.slice(time.indexOf("='") + 2, time.length - 2);
                                                componentx = componentx.slice(0, componentx.indexOf("']"));
                                                var variablex = time.slice(time.lastIndexOf("='") + 2, time.length - 2);
                                            } else {
                                                // x axis component and variable name
                                                var element = tempOBJx[counter].model,
                                                    indexOfHash = element.search("#"),
                                                    componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
                                                    indexOfDot = componentVariableName.indexOf("."),
                                                    componentx = componentVariableName.slice(0, indexOfDot),
                                                    variablex = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na
                                            }

                                            // y axis component and variable name
                                            var element = tempOBJy[counter].model,
                                                indexOfHash = element.search("#"),
                                                componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
                                                indexOfDot = componentVariableName.indexOf("."),
                                                componenty = componentVariableName.slice(0, indexOfDot),
                                                variabley = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

                                            console.log("componentx, variablex: ", componentx, variablex);
                                            console.log("componenty, variabley: ", componenty, variabley);

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

                                                console.log("xAxis, yAxis and csv: ", xAxis, yAxis, csvname);

                                                // checking size of csv files are Equal or Not!
                                                var sizeOfCSV = function (csvCounter) {

                                                    d3.csv(csvname[csvCounter], function (data) {
                                                        console.log("data: ", data);

                                                        if (data == null) {
                                                            xAxis.splice(csvCounter, 1);
                                                            yAxis.splice(csvCounter, 1);
                                                            csvname.splice(csvCounter, 1);
                                                            tempOBJx.splice(csvCounter, 1);
                                                            tempOBJy.splice(csvCounter, 1);
                                                            csvCounter--;
                                                        } else {
                                                            dataLen = data.length;
                                                        }

                                                        if (csvCounter == tempOBJy.length - 1) {
                                                            csvCounter = 0;
                                                            arrFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, tempOBJy, ploty);

                                                            return;
                                                        } else {
                                                            csvCounter = csvCounter + 1;
                                                            sizeOfCSV(csvCounter);
                                                        }
                                                    });
                                                };

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
    };

    // select protocol from dropdown menu
    mainUtils.selectProtocol = function () {
        console.log("option: ", $("#protocol option"));
        for (var i = 0; i < $("#protocol option").length; i++) {
            if ($("#protocol option")[i].selected == true) {
                console.log("selected: ", $("#protocol option")[i].selected);

                // protocol #1
                if ($("#protocol option")[i].innerText == "concentration vs time") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2
                if ($("#protocol option")[i].innerText == "V vs I") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #3A
                if ($("#protocol option")[i].innerText == "concentration/flux vs concentration 3A") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #3B
                if ($("#protocol option")[i].innerText == "concentration/flux vs concentration 3B") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #4A
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 4A") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #4B
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 4B") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2A
                if ($("#protocol option")[i].innerText == "flux vs external pH 2A") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #2B
                if ($("#protocol option")[i].innerText == "1/flux vs concentration 2B") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #5A
                if ($("#protocol option")[i].innerText == "flux vs concentration 5A") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // protocol #5B
                if ($("#protocol option")[i].innerText == "flux vs concentration 5B") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }

                // experimental
                if ($("#protocol option")[i].innerText == "experimental") {
                    $("#svgid").empty();
                    reinit();
                    protocol($("#protocol option")[i].innerText);
                    $("#protocol option")[i].selected = false;
                }
            }
        }
    };

    // SEDML based annotation and visualization of protocols
    mainUtils.loadProtocolHtml = function () {
        sendGetRequest(
            drawSEDMLHtml,
            function (drawSEDMLHtmlContent) {
                $("#platform-content").html(drawSEDMLHtmlContent);
            },
            false);
    };

    /*******************************************/
    /*************** Platform ******************/
    /*******************************************/
    mainUtils.loadPlatformHtml = function () {
        sendGetRequest(
            platformHtml,
            function (platformHtmlContent) {
                $("#main-content").html(platformHtmlContent);
                mainUtils.loadEpithelialHtml();
            },
            false);
    };

    /*******************************************/
    /********* Epithelial Platform *************/
    /*******************************************/
    mainUtils.loadEpithelialHtml = function () {
        sendGetRequest(
            epithelialHtml,
            function (epithelialHtmlContent) {
                $("#platform-content").html(epithelialHtmlContent);
                sendGetRequest(epithelialHtml, epithelialPlatform, false);
            },
            false);
    };

    /*******************************************/
    /*************** Radar Plot ****************/
    /*******************************************/
    mainUtils.loadChartHtml = function () {
        // if (sessionStorage.getItem("drawChartContent")) {
        //     $("#platform-content").html(sessionStorage.getItem("drawChartContent"));
        // } else {
        sendGetRequest(
            chartHtml,
            function (chartHtmlContent) {
                $("#platform-content").html(chartHtmlContent);
                sendGetRequest(chartHtml, radarplot, false);
            },
            false);
        //}
    };

    /*******************************************/
    /************ Decomposed Model *************/
    /*******************************************/
    mainUtils.selectDecomposedProtocol = function () {
        console.log("option: ", $("#protocolDecomposed option"));
        for (var i = 0; i < $("#protocolDecomposed option").length; i++) {
            if ($("#protocolDecomposed option")[i].selected == true) {
                console.log("selected: ", $("#protocolDecomposed option")[i].selected);

                // protocol #5A
                if ($("#protocolDecomposed option")[i].innerText == "flux vs concentration 5A") {
                    $("#decomposedID").empty();
                    reinit();
                    reinitDecomposed();
                    reinitRecreate();
                    checkboxCounter = 0;
                    checkBox = [];
                    decomposedModel($("#protocolDecomposed option")[i].innerText);
                    $("#protocolDecomposed option")[i].selected = false;
                }

                // protocol #5B
                if ($("#protocolDecomposed option")[i].innerText == "flux vs concentration 5B") {
                    $("#decomposedID").empty();
                    reinit();
                    reinitDecomposed();
                    reinitRecreate();
                    checkboxCounter = 0;
                    checkBox = [];
                    decomposedModel($("#protocolDecomposed option")[i].innerText);
                    $("#protocolDecomposed option")[i].selected = false;
                }
            }
        }
    };

    mainUtils.loadDecomposedHtml = function () {
        reinit();
        reinitRecreate();
        reinitDecomposed();

        sendGetRequest(
            drawDecomposedSEDMLHtml,
            function (drawDecomposedSEDMLHtmlContent) {
                $("#platform-content").html(drawDecomposedSEDMLHtmlContent);
            },
            false);
    };

    /*******************************************/
    /************** Recreate Model *************/
    /*******************************************/
    mainUtils.loadRecreateHtml = function () {
        reinit();
        reinitRecreate();
        reinitDecomposed();

        counterRecreate = 0;
        checkboxCounter = 0;
        checkBox = [];

        sendGetRequest(
            recreateHtml,
            function (recreateHtmlContent) {
                $("#platform-content").html(recreateHtmlContent);
                sendGetRequest(recreateHtml, recreateModel, false);
            },
            false);
    };

    // Expose utility to the global object
    global.$mainUtils = mainUtils;

})(window);