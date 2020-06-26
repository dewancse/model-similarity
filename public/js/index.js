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
    var csvCounter = 0, xAxis = [], yAxis = [], csvname = [], dataLen = [];

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

            // Temporary fix
            // Pushing PID at the end
            PID.push(enteredPrID);
            PID.splice(0,1);

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

                                                            console.log("before identityMatrix: ", identityMatrix);
                                                            console.log("before PID: ", PID);
                                                            console.log("before enteredPrID: ", enteredPrID);
                                                            console.log("before modelEntity: ", modelEntity);

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

    /**********************************************************/
    /****************** SED-ML based annotation ***************/
    /**********************************************************/
    /*
    * SVG graph
    *
    * @param {} csvData
    * @param {} xDomain
    * @param {} yDomain
    * @param {} csvname
    * */
    let svgDiagram = (csvData, xDomain, yDomain, csvname, protocolText) => {

        console.log("svgDiagramCurrent csvData, xDomain, yDomain, csvname: ", csvData, xDomain, yDomain, csvname);

        // Customize csvname contents for better visualized texts
        let uscoreregex = /_/gi, csvregex = /.csv/gi, dataregex = /data\//gi;
        csvname = csvname.map(item => item.replace(dataregex, ""));
        csvname = csvname.map(item => item.replace(uscoreregex, " "));
        csvname = csvname.map(item => item.replace(csvregex, ""));
        csvname = csvname.map(item => item.charAt(0).toUpperCase() + item.slice(1));

        $("#svgidimage")[0].childNodes[0].remove();

        console.log("xDomain, yDomain, and csvname: ", xDomain, yDomain, csvname);

        let checkBox = [];

        let svg = d3.select("svg"),
            margin = {top: 20, right: 20, bottom: 30, left: 50},
            width = +svg.attr("width") - margin.left - margin.right - 500,
            height = +svg.attr("height") - margin.top - margin.bottom,
            g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        let x = d3.scaleLinear()
            .rangeRound([0, width]);

        let y = d3.scaleLinear()
            .rangeRound([height, 0]);

        let color = d3.scaleOrdinal(d3.schemeCategory10);

        let div = d3.select("#svgidimage").append("div")
            .attr("class", "tooltip")
            .style("opacity", 0);

        let line = d3.line()
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
            .call(d3.axisLeft(y).ticks(5));

        let update = () => {
            checkBox.forEach(
                (element, i) => {
                    if (element.checked() == false) {
                        $("#" + i).css("opacity", 0);
                    } else {
                        $("#" + i).css("opacity", 1);
                    }
                }
            );
        };

        let c = 0, py = 5;
        csvData.forEach(
            (csvElement, i) => {
                console.log("c, py and color(c): ", c, py, color(c));

                if (csvname[i].indexOf("exp") != -1) {
                    // plotting dots (i.e. circles) for experimental data
                    g.append("g")
                        .attr("id", c)
                        // .attr("fill", "none")
                        .attr("fill", function (d) {
                            checkBox[c] = new d3CheckBox();
                            checkBox[c].x(950).y(py).checked(true).clickEvent(update); // 700
                            g.call(checkBox[c]);
                            g.append("text")
                                .style("font", "14px sans-serif")
                                .attr("stroke", color(c))
                                .attr("x", 990) // 740
                                .attr("y", py + 15)
                                .text(csvname[i].slice(csvname[i].indexOf("/") + 1));

                            return color(c);
                        })
                        // .attr("stroke-width", 2)
                        .attr("opacity", 1)
                        .selectAll("circle")
                        .data(csvElement)
                        .enter()
                        .append("circle")
                        .attr("cx", d => x(d.xaxis))
                        .attr("cy", d => y(d.yaxis))
                        .attr("r", 3);
                } else {
                    // plotting simulation results
                    g.append("path")
                        .datum(csvElement)
                        .attr("id", c)
                        .attr("fill", "none")
                        .attr("stroke", function (d) {
                            checkBox[c] = new d3CheckBox();
                            checkBox[c].x(950).y(py).checked(true).clickEvent(update);
                            g.call(checkBox[c]);
                            g.append("text")
                                .style("font", "14px sans-serif")
                                .attr("stroke", color(c))
                                .attr("x", 990)
                                .attr("y", py + 15)
                                .text(csvname[i].slice(csvname[i].indexOf("/") + 1));

                            return color(c);
                        })
                        .attr("stroke-linejoin", "round")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-width", 1.5)
                        .attr("opacity", 1)
                        .attr("d", line);

                    var csvElem = [], lengthOfData;
                    if (csvElement.length < 12)
                        lengthOfData = 2;
                    else if (csvElement.length < 102)
                        lengthOfData = 20;
                    else if (csvElement.length < 1002)
                        lengthOfData = 200;

                    g.selectAll("dot")
                        .data(csvElement)
                        .enter()
                        .append("circle")
                        .attr("cx", d => x(d.xaxis))
                        .attr("cy", d => y(d.yaxis))
                        .attr("r", 4)
                        .style("opacity", 0)
                        .on("mouseover", function (d) {
                            div.transition()
                                .duration(200)
                                .style("opacity", .9);

                            div.html("<p>x-axis: " + d.xaxis + "</p>" + "<p>y-axis: " + d.yaxis + "</p>")
                                .style("left", (d3.event.x) + "px")
                                .style("top", (d3.event.y - 50) + "px");

                        })
                        .on("mouseout", function (d) {
                            div.transition()
                                .duration(500)
                                .style("opacity", 0);
                        });

                }

                console.log("Testing c and py: ", c, py);

                c = c + 1;
                py = py + 20;
            }
        );

        // protocol text
        let yText = protocolText.slice(protocolText.indexOf(": ") + 2, protocolText.indexOf(" vs"));
        let xText = protocolText.slice(protocolText.indexOf("vs ") + 3);

        // text label for the x axis
        svg.append("text")
            .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.top + 30) + ")")
            .style("text-anchor", "middle")
            .text(xText);

        // text label for the y axis
        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0) // 0 - margin.left
            .attr("x", 0 - (height / 2))
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text(yText);
    };

    /*
    * Process x and y axis scale and call either svg or experimental function
    *
    * @param {} axis
    * @param {} yaxis
    * @param {} csv
    * @param {} csvCounter
    * @param {} tempOBJ
    * @param {} ploty
    * */
    let csvFunction = (xaxis, yaxis, csv, csvCounter, sedmlModels, protocolText) => {

        d3.csv(csv, function (data) {

            let tempX = [], tempY = [];

            let tempx = d3.extent(data, (d, i) => {
                tempX.push({xaxis: d[xaxis]});
                return parseFloat(d[xaxis]);
            });

            let tempy = d3.extent(data, (d, j) => {
                tempY.push({yaxis: d[yaxis]});
                return parseFloat(d[yaxis]);
            });

            tempxAxis.push(tempx[0], tempx[1]);
            tempyAxis.push(tempy[0], tempy[1]);

            // assign y axis values to x axis array
            tempY.forEach((element, i) => {
                tempX[i].yaxis = tempY[i].yaxis;
            });

            csvArray.push(tempX);

            console.log("csvCounter: ", csvCounter);

            if (csvCounter == sedmlModels.length - 1) {
                console.log("tempxAxis, tempyAxis and csvArray: ", tempxAxis, tempyAxis, csvArray);

                var data = []
                for (var i = 0; i < csvArray.length; i++) {
                    for (var j = 0; j < csvArray[i].length; j++) {
                        data.push({"xaxis": csvArray[i][j].xaxis, "yaxis": csvArray[i][j].yaxis})
                    }
                }

                var helperCSV = function (jsonobj, csvfile) {
                    let tempX = [], tempY = [];

                    let tempx = d3.extent(jsonobj, (d, i) => {
                        tempX.push({xaxis: d["xaxis"]});
                        return parseFloat(d["xaxis"]);
                    });

                    let tempy = d3.extent(jsonobj, (d, j) => {
                        tempY.push({yaxis: d["yaxis"]});
                        return parseFloat(d["yaxis"]);
                    });

                    tempxAxis.push(tempx[0], tempx[1]);
                    tempyAxis.push(tempy[0], tempy[1]);

                    csvArray.push(jsonobj);
                    csvname.push(csvfile);
                };

                var url = "/.api/mas/polyML";
                sendPostRequest(
                    url,
                    JSON.stringify(data),
                    function (content) {
                        console.log("Polynomial content and typeof: ", content, typeof content);
                        helperCSV(JSON.parse(content), "data/Polynomial_Regression.csv");

                        var url = "/.api/mas/decisionML";
                        sendPostRequest(
                            url,
                            JSON.stringify(data),
                            function (content) {
                                console.log("Decision content and typeof: ", content, typeof content);
                                helperCSV(JSON.parse(content), "data/Decision_Tree_Regression.csv");

                                var url = "/.api/mas/forestML";
                                sendPostRequest(
                                    url,
                                    JSON.stringify(data),
                                    function (content) {
                                        console.log("Forest content and typeof: ", content, typeof content);
                                        helperCSV(JSON.parse(content), "data/Random_Forest_Regression.csv");

                                        svgDiagram(csvArray, minMax(tempxAxis), minMax(tempyAxis), csvname, protocolText);
                                        return;
                                    },
                                    false);
                            },
                            false);
                    },
                    false);
            } else {
                csvCounter = csvCounter + 1;
                csvFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, sedmlModels, protocolText);
            }
        });
    };

    /*
    * Extract units and process relevant parameters to plot a SED-ML graph
    *
    * @param {number} counter
    * @param {array} sedmlModels
    * */
    let cellmlWorkspaceFunction = (counter, sedmlModels, protocolText) => {

        console.log("sedmlModels in cellmlWorkspaceFunction: ", sedmlModels);

        let cellmlWorkspaceName = sedmlModels[counter][8] + "/rawfile/HEAD/SEDML/" + sedmlModels[counter][5];

        sendGetRequest(
            cellmlWorkspaceName,
            function (cellmlWorkspaceHtml) {

                // Two cases: internet connection and PMR SPARQL engine
                // PMRdown(jsonObjx, "#svgidimage");

                // CellML document
                let parserCellML = new DOMParser()
                    , xmlCellMLDoc = parserCellML.parseFromString(cellmlWorkspaceHtml, "text/xml");

                console.log("xmlCellMLDoc: ", xmlCellMLDoc);

                // store csv
                csvname.push("data/" + sedmlModels[counter][7]);

                console.log("xmlCellMLDoc.getElementsByTagName(\"variable\") typeof: ", typeof xmlCellMLDoc.getElementsByTagName("variable"));
                console.log("xmlCellMLDoc.getElementsByTagName(\"variable\"): ", xmlCellMLDoc.getElementsByTagName("variable"));
                let unitsVar, flagX = 0, flagY = 0;
                Object.values(xmlCellMLDoc.getElementsByTagName("variable")).forEach(function (element) {
                    // let cmetaAttribute = element.getAttribute("cmeta:id");
                    let cmetaAttribute = element.getAttribute("name");
                    // if (cmetaAttribute == sedmlModels[counter][0] + "." + sedmlModels[counter][1]) {
                    if (cmetaAttribute == sedmlModels[counter][1] && flagX == 0) {
                        console.log("cmetaAttribute == sedmlModels[counter][0] + \".\" + sedmlModels[counter][1]: ", cmetaAttribute, sedmlModels[counter][0] + "." + sedmlModels[counter][1]);
                        unitsVar = element.getAttribute("units");
                        console.log("unitsVar: ", unitsVar);
                        xAxis.push(sedmlModels[counter][0] + " | " + sedmlModels[counter][1] + " (" + unitsVar + ")");
                        flagX = 1;
                    }

                    // if (cmetaAttribute == sedmlModels[counter][2] + "." + sedmlModels[counter][3]) {
                    if (cmetaAttribute == sedmlModels[counter][3] && flagY == 0) {
                        console.log("cmetaAttribute == sedmlModels[counter][0] + \".\" + sedmlModels[counter][1]: ", cmetaAttribute, sedmlModels[counter][2] + "." + sedmlModels[counter][3]);
                        unitsVar = element.getAttribute("units");
                        console.log("unitsVar: ", unitsVar);
                        yAxis.push(sedmlModels[counter][2] + " | " + sedmlModels[counter][3] + " (" + unitsVar + ")");
                        flagY = 1;
                    }
                });

                if (counter == sedmlModels.length - 1) {
                    console.log("xAxis, yAxis, csv and sedmlModels: ", xAxis, yAxis, csvname, sedmlModels);
                    csvFunction(xAxis[csvCounter], yAxis[csvCounter], csvname[csvCounter], csvCounter, sedmlModels, protocolText); // ploty
                }

                counter++;

                if (counter <= sedmlModels.length - 1)
                    cellmlWorkspaceFunction(counter, sedmlModels, protocolText); // call back
            },
            false);
    };

    var reinit = function () {
        csvArray = [];
        tempxAxis = [];
        tempyAxis = [];
        csvCounter = 0;
        xAxis = [];
        yAxis = [];
        csvname = [];
        dataLen = [];
    };

    /*
    * Process protocols information
    *
    * @param {} protocolName
    * @param {} protocolText
    * */
    let protocol = (protocolName, protocolText, index) => {
        showLoading("#svgidimage");
        console.log("protocol name and text: ", protocolName, protocolText);
        /*
        * CellML and SED-ML models and their associated protocols as well as simulation data in CSV format
        * Indices of the 'sedmlModels' array
        * 0: componentx, 1: variablex, 2: componenty, 3: variabley, 4: protocol, 5: CellML, 6: SED-ML, 7: csv, 8: workspace
        * */
        let sedmlModels = [];

        sendGetRequest(
            myWorkspaceName + "rawfile/HEAD/" + "protocolSEDML.xml",
            function (protocolNameHtml) {
                // SEDML document
                let parser = new DOMParser();
                let xmlDoc = parser.parseFromString(protocolNameHtml, "text/xml");
                console.log("protocolNameHtml: ", xmlDoc);

                let id = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("id")
                    , nameX = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("nameX")
                    , nameY = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("nameY")
                    , opbX = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("opbX")
                    , opbY = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("opbY")
                    , chebiX = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("chebiX")
                    , chebiY = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("chebiY")
                    , fmaX = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaX")
                    , fmaXsrc = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaXsrc")
                    , fmaXsnk = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaXsnk")
                    , fmaY = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaY")
                    , fmaYsrc = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaYsrc")
                    , fmaYsnk = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("fmaYsnk")
                    , sparqlX = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("sparqlX")
                    , sparqlY = xmlDoc.getElementsByTagName("Protocol")[index].getAttribute("sparqlY");

                console.log("Test: ", id, nameX, nameY, opbX, opbY, chebiX, chebiY, fmaX, fmaXsrc, fmaXsnk, fmaY, fmaYsrc, fmaYsnk, sparqlX, sparqlY);

                // sparql x
                // let query = protocolOBJ[sparqlX];
                let query = protocolOBJ[protocolName + "X"];
                sendPostRequest(
                    endpoint,
                    query,
                    function (jsonOBJx) {

                        console.log("jsonOBJx: ", jsonOBJx);

                        // sparql y
                        // let query = protocolOBJ[sparqlY];
                        let query = protocolOBJ[protocolName + "Y"];
                        sendPostRequest(
                            endpoint,
                            query,
                            function (jsonOBJy) {

                                console.log("jsonOBJy: ", jsonOBJy);

                                let workspaceOBJ = [],
                                    modelOBJ = [],
                                    jsonY = jsonOBJy.results.bindings,
                                    jsonX = jsonOBJx.results.bindings;

                                for (let spy = 0; spy < jsonY.length; spy++) {
                                    for (let spx = 0; spx < jsonX.length; spx++) {
                                        if (jsonY[spy].model != undefined) {
                                            let modelV = jsonY[spy].model.value,
                                                modelY = modelV.slice(modelV.indexOf("SEDML/") + 6, modelV.indexOf("#"));
                                            console.log("modelV, modelY: ", modelV, modelY);
                                            // modelV.indexOf(id) != -1 && jsonX[spx].model.value.indexOf(modelY) != -1) {
                                            if (modelV.indexOf(protocolName) != -1 && jsonX[spx].model.value.indexOf(modelY) != -1) {
                                                console.log("test1: ", modelY, jsonX[spx], jsonY[spy]);
                                                modelOBJ.push(modelY);
                                                workspaceOBJ.push(jsonY[spy].w.value);
                                            }
                                        }
                                    }
                                }

                                console.log("modelOBJ, workspaceOBJ: ", modelOBJ, workspaceOBJ);

                                // find SEDML models and associated CSV data wrt to a selected protocol
                                let sedmlNcsvFunc = (w, model, counter, protocolText) => {
                                    w = w.replace("https://models.physiomeproject.org/workspace/", "");
                                    let workspaceName = "/.api/workspace/" + w
                                        , workspace = workspaceName + "/rawfile/HEAD/SEDML/" + model;

                                    console.log("workspace: ", workspace);
                                    sendGetRequest(
                                        workspace,
                                        function (xml) {
                                            let parser = new DOMParser()
                                                , xmlDoc = parser.parseFromString(xml, "text/xml");

                                            console.log("xmlDoc: ", xmlDoc);

                                            // Accessing list of variables in the SEDML model
                                            let listOfVariables = xmlDoc.getElementsByTagName("listOfVariables");
                                            let varList = [];
                                            for (let i = 0; i < listOfVariables.length; i++) {
                                                console.log("listOfVariables[i]: ", listOfVariables[i]);
                                                for (let j = 0; j < listOfVariables[i].childNodes.length; j++) {
                                                    console.log("listOfVariables[i].childNodes[j]: ", listOfVariables[i].childNodes[j]);
                                                    let attrValue = listOfVariables[i].childNodes[j].attributes;
                                                    if (attrValue != undefined) {
                                                        for (let k = 0; k < attrValue.length; k++) {
                                                            if (attrValue[k].name == "target") {
                                                                console.log("** target ** ", attrValue[k].value);
                                                                varList.push(attrValue[k].value);
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            // SEDML models and associated CSV data
                                            // Extract x axis component and variable name from varList[0]
                                            let componentx = varList[0].slice(varList[0].indexOf("='") + 2, varList[0].length - 2);
                                            componentx = componentx.slice(0, componentx.indexOf("']"));
                                            let variablex = varList[0].slice(varList[0].lastIndexOf("='") + 2, varList[0].length - 2);

                                            // Extract y axis component and variable name from varList[1]
                                            let componenty = varList[1].slice(varList[1].indexOf("='") + 2, varList[1].length - 2);
                                            componenty = componenty.slice(0, componenty.indexOf("']"));
                                            let variabley = varList[1].slice(varList[1].lastIndexOf("='") + 2, varList[1].length - 2);

                                            // Accessing list of CellML models in the SEDML model
                                            let listOfModels = xmlDoc.getElementsByTagName("listOfModels");
                                            let modelList = [];
                                            for (let i = 0; i < listOfModels.length; i++) {
                                                console.log("listOfModels[i]: ", listOfModels[i]);
                                                for (let j = 0; j < listOfModels[i].childNodes.length; j++) {
                                                    console.log("listOfModels[i].childNodes[j]: ", listOfModels[i].childNodes[j]);
                                                    let attrValue = listOfModels[i].childNodes[j].attributes;
                                                    if (attrValue != undefined) {
                                                        for (let k = 0; k < attrValue.length; k++) {
                                                            if (attrValue[k].name == "source") {
                                                                console.log("** source ** ", attrValue[k].value);
                                                                modelList.push(attrValue[k].value.replace("../", ""));
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                            console.log("modelList: ", modelList);

                                            let csvData = modelList[0].replace(".cellml", ".csv");
                                            sedmlModels.push([componentx, variablex, componenty, variabley, model, modelList[0], model, csvData, workspaceName]);

                                            if (counter == modelOBJ.length - 1) {

                                                let sedmlModels2 = [];

                                                // list of experimental models
                                                let expModels = [
                                                    "weinstein_1995_2A.csv", "weinstein_1995_2B.csv", "weinstein_1995_3A.csv", "weinstein_1995_3B.csv",
                                                    "weinstein_1995_4A.csv", "weinstein_1995_4B.csv", "weinstein_1995_5A.csv", "weinstein_1995_5B.csv"
                                                ];

                                                sedmlModels.forEach(function (elementSEDML) {
                                                    expModels.forEach(function (elementEXP) {
                                                        if (elementEXP == elementSEDML[7]) {
                                                            let tempArray = [];
                                                            elementSEDML.forEach(function (element) {
                                                                tempArray.push(element);
                                                            });
                                                            sedmlModels2.push(tempArray);
                                                        }
                                                    })
                                                });

                                                for (let i = 0; i < sedmlModels2.length; i++) {
                                                    for (let j = 0; j < sedmlModels2[i].length; j++) {
                                                        if (j == 7) {
                                                            sedmlModels2[i][7] = sedmlModels2[i][7].replace(".csv", "_exp.csv");
                                                        }
                                                    }
                                                }

                                                for (let i = 0; i < sedmlModels2.length; i++) {
                                                    sedmlModels.push(sedmlModels2[i]);
                                                }

                                                console.log("sedmlModels2: ", sedmlModels2);
                                                console.log("sedmlModels: ", sedmlModels);

                                                cellmlWorkspaceFunction(0, sedmlModels, protocolText); // first call
                                                return;
                                            } else {
                                                // call back
                                                counter++;
                                                //let element = jsonObj.results.bindings[counter];
                                                sedmlNcsvFunc(workspaceOBJ[counter], modelOBJ[counter], counter, protocolText);
                                            }
                                        },
                                        false);
                                };

                                console.log("modelOBJ, workspaceOBJ: ", modelOBJ, workspaceOBJ);

                                // first call
                                //let element = jsonObj.results.bindings[0];
                                sedmlNcsvFunc(workspaceOBJ[0], modelOBJ[0], 0, protocolText);
                            },
                            true);
                    },
                    true);
            },
            false);
    };

    /* Select protocol from dropdown menu */
    mainUtils.selectProtocol = () => {
        // iterate over the items under the list of options menu
        Object.values($("#protocol option")).forEach(function (element) {
            // option value
            let value = $("#protocol").val();
            // check that selected element is TRUE as well as NOT "...select a Protocol"
            if (element.selected == true && value != "...select a Protocol") {

                let x, y;
                x = document.getElementById("protocol").selectedIndex;
                y = document.getElementById("protocol").options;

                // empty the svg space
                $("#svgid").empty();
                // reinitialize variables
                reinit();
                // process relevant SEDML protocols and visualize on the web interface
                protocol(value, element.innerText, y[x].index - 1);
                // make the selected item false for next round of selction
                element.selected = false;
            }
        });
    };

    /* SEDML based annotation and visualization of protocols */
    mainUtils.loadProtocolHtml = () => {
        sendGetRequest(
            drawSEDMLHtml,
            function (drawSEDMLHtmlContent) {
                $("#platform-content").html(drawSEDMLHtmlContent);
            },
            false);
    };

    /**********************************************************/
    /****************** SED-ML based Test annotation ***************/
    /**********************************************************/

    /* SEDML based annotation and visualization of protocols */
    mainUtils.loadProtocolTestHtml = () => {
        sendGetRequest(
            drawSEDMLTestHtml,
            function (drawSEDMLTestHtmlContent) {
                $("#platform-content").html(drawSEDMLTestHtmlContent);
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

    mainUtils.loadChartHtmlSEDML = function () {
        // if (sessionStorage.getItem("drawChartContentSEDML")) {
        //     $("#platform-content").html(sessionStorage.getItem("drawChartContentSEDML"));
        // } else {
        sendGetRequest(
            chartHtmlSEDML,
            function (chartHtmlContent) {
                $("#platform-content").html(chartHtmlContent);
                sendGetRequest(chartHtmlSEDML, radarplotSEDML, false);
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