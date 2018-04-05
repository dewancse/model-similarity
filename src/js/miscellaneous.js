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