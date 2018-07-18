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