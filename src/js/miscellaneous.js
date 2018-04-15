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

exports.showLoading = showLoading;
exports.isExist = isExist;
exports.uniqueifySVG = uniqueifySVG;
exports.parseModelName = parseModelName;
exports.similarityMatrixEBI = similarityMatrixEBI;
exports.splitPRFromProtein = splitPRFromProtein;