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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Created by Dewan Sarwar on 14/01/2018.
 */
var endpoint = "https://models.physiomeproject.org/pmr2_virtuoso_search";
// var nginx_proxy = "/.api/pmr/sparql",
//     endpoint = nginx_proxy;


var abiOntoEndpoint = "http://ontology.cer.auckland.ac.nz/ols-boot/api/ontologies";
// var abiOntoEndpoint = "/.api/ols/ontologies";

var ebiOntoEndpoint = "https://www.ebi.ac.uk/ols/api/ontologies";

var organ = [
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7203",
                "value": "kidney"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_84666",
                "value": "apical plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70973",
                "value": "epithelial cell of proximal tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70981",
                "value": "epithelial cell of Distal tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17693",
                "value": "proximal convoluted tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17721",
                "value": "distal convoluted tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_66836",
                "value": "portion of cytosol"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_84669",
                "value": "basolateralMembrane plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17716",
                "value": "proximal straight tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17717",
                "value": "ascending limb of loop of Henle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17705",
                "value": "descending limb of loop of Henle"
            },
            {
                "key": "http://identifiers.org/go/GO:0072061",
                "value": "inner medullary collecting duct development"
            },
            {
                "key": "http://identifiers.org/ma/MA:0002595",
                "value": "renal medullary capillary"
            },
            {
                "key": "http://identifiers.org/uberon/UBERON:0004726",
                "value": "vasa recta"
            },
            {
                "key": "http://identifiers.org/uberon/UBERON:0009091",
                "value": "vasa recta ascending limb"
            },
            {
                "key": "http://identifiers.org/uberon/UBERON:0004775",
                "value": "outer renal medulla vasa recta"
            },
            {
                "key": "http://identifiers.org/uberon/UBERON:0004776",
                "value": "inner renal medulla vasa recta"
            }
        ],

        "value": "Kidney"
    }
];

var dictionary = [
    {
        "key1": "flux", "key2": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>", "chebi": ""
    },
    {
        "key1": "flux", "key2": "sodium",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>"
    },
    {
        "key1": "flux", "key2": "hydrogen",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>"
    },
    {
        "key1": "flux", "key2": "ammonium",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_28938>"
    },
    {
        "key1": "flux", "key2": "chloride",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>"
    },
    {
        "key1": "flux", "key2": "potassium",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>"
    },
    {
        "key1": "flux", "key2": "bicarbonate",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17544>"
    },
    {
        "key1": "flux", "key2": "glucose",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17234>"
    },
    {
        "key1": "concentration", "key2": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>", "chebi": ""
    },
    {
        "key1": "concentration", "key2": "sodium",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>"
    },
    {
        "key1": "concentration", "key2": "hydrogen",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>"
    },
    {
        "key1": "concentration", "key2": "ammonium",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_28938>"
    },
    {
        "key1": "concentration", "key2": "chloride",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>"
    },
    {
        "key1": "concentration", "key2": "potassium",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>"
    },
    {
        "key1": "concentration", "key2": "bicarbonate",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17544>"
    },
    {
        "key1": "concentration", "key2": "glucose",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17234>"
    }
];

var viewHtml = "./snippets/view-snippet.html";
var modelHtml = "./snippets/model-snippet.html";
var usecaseHtml = "./snippets/usecase-snippet.html";
var homeHtml = "./snippets/home-snippet.html";
var searchHtml = "./snippets/search-snippet.html";
var similarityHtml = "./snippets/similarity-snippet.html";
var drawSEDMLHtml = "./snippets/drawSEDML-snippet.html";
var epithelialHtml = "./snippets/epithelial-snippet.html";
var chartHtml = "./snippets/chart-snippet.html";
var platformHtml = "./snippets/platform-snippet.html";

var sodium = "http://purl.obolibrary.org/obo/CHEBI_29101";
var potassium = "http://purl.obolibrary.org/obo/CHEBI_29103";
var chloride = "http://purl.obolibrary.org/obo/CHEBI_17996";

var opbTime = "http://identifiers.org/opb/OPB_01023";

var epithelialcellID = "http://purl.obolibrary.org/obo/CL_0000066";
var apicalID = "http://purl.obolibrary.org/obo/FMA_84666";
var basolateralID = "http://purl.obolibrary.org/obo/FMA_84669";
var partOfProteinUri = "http://purl.obolibrary.org/obo/PR";
var partOfCellUri = "http://purl.obolibrary.org/obo/CL";
var partOfGOUri = "http://purl.obolibrary.org/obo/GO";
var partOfCHEBIUri = "http://purl.obolibrary.org/obo/CHEBI";
var fluxOPB = "http://identifiers.org/opb/OPB_00593";
var concentrationOPB = "http://identifiers.org/opb/OPB_00340";

var paracellularID = "http://purl.obolibrary.org/obo/FMA_67394";
var luminalID = "http://purl.obolibrary.org/obo/FMA_74550";
var cytosolID = "http://purl.obolibrary.org/obo/FMA_66836";
var interstitialID = "http://purl.obolibrary.org/obo/FMA_9673";
var Nachannel = "http://purl.obolibrary.org/obo/PR_000014527";
var Clchannel = "http://purl.obolibrary.org/obo/PR_Q06393";
var Kchannel = "http://purl.obolibrary.org/obo/PR_P15387";
var partOfFMAUri = "http://purl.obolibrary.org/obo/FMA";

var naENaC = "http://purl.obolibrary.org/obo/PR_P37089";
var clChannel = "http://purl.obolibrary.org/obo/PR_P35524";
var kChannel = "http://purl.obolibrary.org/obo/PR_000001916";
var bloodCapillary = "http://purl.obolibrary.org/obo/FMA_263901";
var capillaryID = "http://purl.obolibrary.org/obo/FMA_63194";
var nkcc1 = "http://purl.obolibrary.org/obo/PR_P55012";

// var myWorkspaceName = cors_api_url + "https://models.physiomeproject.org/workspace/267";
var myWorkspaceName = "https://models.physiomeproject.org/workspace/267";
var uriSEDML = "https://sed-ml.github.io/index.html";

// Definition of protocols
var sedmlWorkspaceName = "https://models.physiomeproject.org/workspace/267/rawfile/HEAD/weinstein_1995.sedml";

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

var concentrationOPBSPARQL2 = function () {
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

var fluxOPBSPARQL = function () {
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

var makecotransporterSPARQL = function (membrane1, membrane2) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
        "SELECT ?med_entity_uri ?med_entity_uriCl " +
        "WHERE { GRAPH ?Workspace { " +
        "<" + membrane1 + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?model_proc. " +
        "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
        "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri." +
        "<" + membrane2 + "> semsim:isComputationalComponentFor ?model_propCl. " +
        "?model_propCl semsim:physicalPropertyOf ?model_procCl. " +
        "?model_procCl semsim:hasMediatorParticipant ?model_medparticipantCl. " +
        "?model_medparticipantCl semsim:hasPhysicalEntityReference ?med_entityCl. " +
        "?med_entityCl semsim:hasPhysicalDefinition ?med_entity_uriCl." +
        "FILTER (?med_entity_uri = ?med_entity_uriCl) . " +
        "}}";

    return query;
};

var maketritransporterSPARQL = function (membrane1, membrane2, membrane3) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
        "SELECT ?med_entity_uri ?med_entity_uriCl ?med_entity_uriK " +
        "WHERE { GRAPH ?Workspace { " +
        "<" + membrane1 + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?model_proc. " +
        "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
        "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri. " +
        "<" + membrane2 + "> semsim:isComputationalComponentFor ?model_propCl. " +
        "?model_propCl semsim:physicalPropertyOf ?model_procCl. " +
        "?model_procCl semsim:hasMediatorParticipant ?model_medparticipantCl. " +
        "?model_medparticipantCl semsim:hasPhysicalEntityReference ?med_entityCl. " +
        "?med_entityCl semsim:hasPhysicalDefinition ?med_entity_uriCl. " +
        "<" + membrane3 + "> semsim:isComputationalComponentFor ?model_propK. " +
        "?model_propK semsim:physicalPropertyOf ?model_procK. " +
        "?model_procK semsim:hasMediatorParticipant ?model_medparticipantK. " +
        "?model_medparticipantK semsim:hasPhysicalEntityReference ?med_entityK. " +
        "?med_entityK semsim:hasPhysicalDefinition ?med_entity_uriK. " +
        "FILTER (?med_entity_uri = ?med_entity_uriCl && ?med_entity_uri = ?med_entity_uriK). " +
        "}}";

    return query;
}

var mediatorSPARQL = function (modelEntity) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "SELECT ?mediator " +
        "WHERE { " +
        "<" + modelEntity + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?model_proc. " +
        "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
        "?med_entity semsim:hasPhysicalDefinition ?mediator. " +
        "}";

    return query;
}

var srcDescMediatorOfFluxesSPARQL = function (cellmlModelEntity, model) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
        "SELECT ?source_fma ?sink_fma ?med_entity_uri ?solute_chebi ?protein " +
        "WHERE { " +
        "<" + cellmlModelEntity + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?model_proc. " +
        "?model_proc semsim:hasSourceParticipant ?model_srcparticipant. " +
        "?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. " +
        "?source_entity ro:part_of ?source_part_of_entity. " +
        "?source_part_of_entity semsim:hasPhysicalDefinition ?source_fma. " +
        "?source_entity semsim:hasPhysicalDefinition ?solute_chebi. " +
        "?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. " +
        "?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. " +
        "?sink_entity ro:part_of ?sink_part_of_entity. " +
        "?sink_part_of_entity semsim:hasPhysicalDefinition ?sink_fma." +
        "?model_proc semsim:hasMediatorParticipant ?model_medparticipant." +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity." +
        "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri." +
        "<" + model + ">  <http://www.obofoundry.org/ro/ro.owl#modelOf> ?protein. " +
        "}";

    return query;
};

var opbSPARQL = function (cellmlModelEntity) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "SELECT ?opb WHERE { " +
        "<" + cellmlModelEntity + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:hasPhysicalDefinition ?opb. " +
        "}";

    return query;
};

var concentrationOPBSPARQL = function (cellmlModelEntity, model) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
        "SELECT ?concentration_fma ?solute_chebi ?protein " +
        "WHERE { " +
        "<" + cellmlModelEntity + "> semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?source_entity. " +
        "?source_entity ro:part_of ?source_part_of_entity. " +
        "?source_part_of_entity semsim:hasPhysicalDefinition ?concentration_fma." +
        "?source_entity semsim:hasPhysicalDefinition ?solute_chebi. " +
        "<" + model + ">  <http://www.obofoundry.org/ro/ro.owl#modelOf> ?protein. " +
        "}";

    return query;
};

var discoveryWithFlux = function (uriOPB) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX dcterms: <http://purl.org/dc/terms/>" +
        "SELECT ?Model_entity ?Biological_meaning " +
        "WHERE { " +
        "?property semsim:hasPhysicalDefinition " + uriOPB + ". " +
        "?Model_entity semsim:isComputationalComponentFor ?property. " +
        "?Model_entity dcterms:description ?Biological_meaning." +
        "}";

    return query;
};

var discoveryWithFluxOfSolute = function (uriCHEBI) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX dcterms: <http://purl.org/dc/terms/>" +
        "SELECT DISTINCT ?g ?Model_entity ?Biological_meaning " +
        "WHERE { GRAPH ?g { " +
        "?entity semsim:hasPhysicalDefinition " + uriCHEBI + ". " +
        "?source semsim:hasPhysicalEntityReference ?entity. " +
        "?process semsim:hasSourceParticipant ?source. " +
        "?property semsim:physicalPropertyOf ?process. " +
        "?Model_entity semsim:isComputationalComponentFor ?property. " +
        "?Model_entity dcterms:description ?Biological_meaning." +
        "}}";

    return query;
};

var discoveryWithConcentrationOfSolute = function (uriCHEBI) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "PREFIX dcterms: <http://purl.org/dc/terms/>" +
        "SELECT ?Model_entity ?Biological_meaning " +
        "WHERE { " +
        "?entity semsim:hasPhysicalDefinition " + uriCHEBI + ". " +
        "?property semsim:physicalPropertyOf ?entity. " +
        "?Model_entity semsim:isComputationalComponentFor ?property. " +
        "?Model_entity dcterms:description ?Biological_meaning." +
        "}";

    return query;
};

var loadViewHtmlSPARQL = function (cellmlModel) {
    var query = "SELECT ?Workspace ?Model_entity ?Title ?Author ?Abstract ?Keyword ?Protein ?Compartment " +
        "?Located_in ?DOI WHERE { GRAPH ?Workspace { " +
        "<" + cellmlModel + "> <http://purl.org/dc/terms/title> ?Title . " +
        "?Model_entity <http://purl.org/dc/terms/title> ?Title . " +
        "OPTIONAL { <" + cellmlModel + "> <http://www.w3.org/2001/vcard-rdf/3.0#FN> ?Author } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://purl.org/dc/terms/abstract> ?Abstract } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://purl.org/dc/terms/keyword> ?Keyword } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#compartmentOf> ?Compartment } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#located_in> ?Located_in } . " +
        "OPTIONAL { <" + cellmlModel + "> <http://biomodels.net/model-qualifiers/isDescribedBy> ?DOI } . " +
        "}}";

    return query;
};

var circleIDmyWelcomeWindowSPARQL = function (circleID, cellmlModel) {
    var query;
    if (circleID[1] == "" && circleID[2] == "") {
        query = "SELECT ?Protein ?Biological_meaning " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "}}";
    }
    else if (circleID[1] != "" && circleID[2] == "") { // (circleID[1] != "")
        query = "SELECT ?Protein ?Biological_meaning ?Biological_meaning2 " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "<" + circleID[1] + "> <http://purl.org/dc/terms/description> ?Biological_meaning2 . " +
            "}}"
    }
    else if (circleID[1] != "" && circleID[2] != "") { // (circleID[1] != "")
        query = "SELECT ?Protein ?Biological_meaning ?Biological_meaning2 ?Biological_meaning3 " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "<" + circleID[1] + "> <http://purl.org/dc/terms/description> ?Biological_meaning2 . " +
            "<" + circleID[2] + "> <http://purl.org/dc/terms/description> ?Biological_meaning3 . " +
            "}}"
    }
    return query;
};

var relatedMembraneSPARQL = function (fstCHEBI, sndCHEBI, membrane) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "SELECT ?Model_entity ?Model_entity2 " +
        "WHERE { GRAPH ?g { " +
        "?entity semsim:hasPhysicalDefinition <" + fstCHEBI + ">. " +
        "?source semsim:hasPhysicalEntityReference ?entity. " +
        "?process semsim:hasSourceParticipant ?source. " +
        "?property semsim:physicalPropertyOf ?process. " +
        "?Model_entity semsim:isComputationalComponentFor ?property." +
        "?process semsim:hasMediatorParticipant ?model_medparticipant." +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity." +
        "?med_entity semsim:hasPhysicalDefinition <" + membrane + ">." +
        "?entity2 semsim:hasPhysicalDefinition <" + sndCHEBI + ">. " +
        "?source2 semsim:hasPhysicalEntityReference ?entity2. " +
        "?process2 semsim:hasSourceParticipant ?source2. " +
        "?property2 semsim:physicalPropertyOf ?process2. " +
        "?Model_entity2 semsim:isComputationalComponentFor ?property2." +
        "?process2 semsim:hasMediatorParticipant ?model_medparticipant2." +
        "?model_medparticipant2 semsim:hasPhysicalEntityReference ?med_entity2." +
        "?med_entity2 semsim:hasPhysicalDefinition <" + membrane + ">." +
        "}}";

    return query;
};

var relatedMembraneModelSPARQL = function (model_entity, model_entity2, model_entity3) {
    var query;
    if (model_entity2 == "" && model_entity3 == "") {
        console.log("relatedMembraneModel: model_entity");
        query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
            "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
            "SELECT ?source_fma ?sink_fma ?med_entity_uri ?solute_chebi ?solute_chebi2 ?solute_chebi3 " +
            "WHERE { " +
            "<" + model_entity + "> semsim:isComputationalComponentFor ?model_prop. " +
            "?model_prop semsim:physicalPropertyOf ?model_proc. " +
            "?model_proc semsim:hasSourceParticipant ?model_srcparticipant. " +
            "?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. " +
            "?source_entity ro:part_of ?source_part_of_entity. " +
            "?source_part_of_entity semsim:hasPhysicalDefinition ?source_fma. " +
            "?source_entity semsim:hasPhysicalDefinition ?solute_chebi. " +
            "?source_entity semsim:hasPhysicalDefinition ?solute_chebi2. " + // change this later
            "?source_entity semsim:hasPhysicalDefinition ?solute_chebi3. " + // change this later
            "?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. " +
            "?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. " +
            "?sink_entity ro:part_of ?sink_part_of_entity. " +
            "?sink_part_of_entity semsim:hasPhysicalDefinition ?sink_fma." +
            "?model_proc semsim:hasMediatorParticipant ?model_medparticipant." +
            "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity." +
            "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri." +
            "}";
    }
    else if (model_entity3 == "") {
        console.log("relatedMembraneModel: ELSE model_entity and model_entity2");
        query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
            "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
            "SELECT ?source_fma ?sink_fma ?med_entity_uri ?solute_chebi ?source_fma2 ?sink_fma2 ?med_entity_uri2 ?solute_chebi2 ?solute_chebi3 " +
            "WHERE { " +
            "<" + model_entity + "> semsim:isComputationalComponentFor ?model_prop. " +
            "?model_prop semsim:physicalPropertyOf ?model_proc. " +
            "?model_proc semsim:hasSourceParticipant ?model_srcparticipant. " +
            "?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. " +
            "?source_entity ro:part_of ?source_part_of_entity. " +
            "?source_part_of_entity semsim:hasPhysicalDefinition ?source_fma. " +
            "?source_entity semsim:hasPhysicalDefinition ?solute_chebi. " +
            "?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. " +
            "?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. " +
            "?sink_entity ro:part_of ?sink_part_of_entity. " +
            "?sink_part_of_entity semsim:hasPhysicalDefinition ?sink_fma." +
            "?model_proc semsim:hasMediatorParticipant ?model_medparticipant." +
            "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity." +
            "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri." +
            "<" + model_entity2 + "> semsim:isComputationalComponentFor ?model_prop2. " +
            "?model_prop2 semsim:physicalPropertyOf ?model_proc2. " +
            "?model_proc2 semsim:hasSourceParticipant ?model_srcparticipant2. " +
            "?model_srcparticipant2 semsim:hasPhysicalEntityReference ?source_entity2. " +
            "?source_entity2 ro:part_of ?source_part_of_entity2. " +
            "?source_part_of_entity2 semsim:hasPhysicalDefinition ?source_fma2. " +
            "?source_entity2 semsim:hasPhysicalDefinition ?solute_chebi2. " +
            "?source_entity2 semsim:hasPhysicalDefinition ?solute_chebi3. " + // change this later
            "?model_proc2 semsim:hasSinkParticipant ?model_sinkparticipant2. " +
            "?model_sinkparticipant2 semsim:hasPhysicalEntityReference ?sink_entity2. " +
            "?sink_entity2 ro:part_of ?sink_part_of_entity2. " +
            "?sink_part_of_entity2 semsim:hasPhysicalDefinition ?sink_fma2." +
            "?model_proc2 semsim:hasMediatorParticipant ?model_medparticipant2." +
            "?model_medparticipant2 semsim:hasPhysicalEntityReference ?med_entity2." +
            "?med_entity2 semsim:hasPhysicalDefinition ?med_entity_uri2." +
            "}";
    }
    else {
        console.log("relatedMembraneModel: ELSE model_entity and model_entity2 and model_entity3");
        query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
            "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
            "SELECT ?source_fma ?sink_fma ?med_entity_uri ?solute_chebi ?source_fma2 ?sink_fma2 ?med_entity_uri2 ?solute_chebi2 ?source_fma3 ?sink_fma3 ?med_entity_uri3 ?solute_chebi3 " +
            "WHERE { " +
            "<" + model_entity + "> semsim:isComputationalComponentFor ?model_prop. " +
            "?model_prop semsim:physicalPropertyOf ?model_proc. " +
            "?model_proc semsim:hasSourceParticipant ?model_srcparticipant. " +
            "?model_srcparticipant semsim:hasPhysicalEntityReference ?source_entity. " +
            "?source_entity ro:part_of ?source_part_of_entity. " +
            "?source_part_of_entity semsim:hasPhysicalDefinition ?source_fma. " +
            "?source_entity semsim:hasPhysicalDefinition ?solute_chebi. " +
            "?model_proc semsim:hasSinkParticipant ?model_sinkparticipant. " +
            "?model_sinkparticipant semsim:hasPhysicalEntityReference ?sink_entity. " +
            "?sink_entity ro:part_of ?sink_part_of_entity. " +
            "?sink_part_of_entity semsim:hasPhysicalDefinition ?sink_fma." +
            "?model_proc semsim:hasMediatorParticipant ?model_medparticipant." +
            "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity." +
            "?med_entity semsim:hasPhysicalDefinition ?med_entity_uri." +
            "<" + model_entity2 + "> semsim:isComputationalComponentFor ?model_prop2. " +
            "?model_prop2 semsim:physicalPropertyOf ?model_proc2. " +
            "?model_proc2 semsim:hasSourceParticipant ?model_srcparticipant2. " +
            "?model_srcparticipant2 semsim:hasPhysicalEntityReference ?source_entity2. " +
            "?source_entity2 ro:part_of ?source_part_of_entity2. " +
            "?source_part_of_entity2 semsim:hasPhysicalDefinition ?source_fma2. " +
            "?source_entity2 semsim:hasPhysicalDefinition ?solute_chebi2. " +
            "?model_proc2 semsim:hasSinkParticipant ?model_sinkparticipant2. " +
            "?model_sinkparticipant2 semsim:hasPhysicalEntityReference ?sink_entity2. " +
            "?sink_entity2 ro:part_of ?sink_part_of_entity2. " +
            "?sink_part_of_entity2 semsim:hasPhysicalDefinition ?sink_fma2." +
            "?model_proc2 semsim:hasMediatorParticipant ?model_medparticipant2." +
            "?model_medparticipant2 semsim:hasPhysicalEntityReference ?med_entity2." +
            "?med_entity2 semsim:hasPhysicalDefinition ?med_entity_uri2." +
            "<" + model_entity3 + "> semsim:isComputationalComponentFor ?model_prop3. " +
            "?model_prop3 semsim:physicalPropertyOf ?model_proc3. " +
            "?model_proc3 semsim:hasSourceParticipant ?model_srcparticipant3. " +
            "?model_srcparticipant3 semsim:hasPhysicalEntityReference ?source_entity3. " +
            "?source_entity3 ro:part_of ?source_part_of_entity3. " +
            "?source_part_of_entity3 semsim:hasPhysicalDefinition ?source_fma3. " +
            "?source_entity3 semsim:hasPhysicalDefinition ?solute_chebi3. " +
            "?model_proc3 semsim:hasSinkParticipant ?model_sinkparticipant3. " +
            "?model_sinkparticipant3 semsim:hasPhysicalEntityReference ?sink_entity3. " +
            "?sink_entity3 ro:part_of ?sink_part_of_entity3. " +
            "?sink_part_of_entity3 semsim:hasPhysicalDefinition ?sink_fma3." +
            "?model_proc3 semsim:hasMediatorParticipant ?model_medparticipant3." +
            "?model_medparticipant3 semsim:hasPhysicalEntityReference ?med_entity3." +
            "?med_entity3 semsim:hasPhysicalDefinition ?med_entity_uri3." +
            "}";
    }

    return query;
};

var modalWindowToAddModelsSPARQL = function (located_in) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "SELECT ?modelEntity ?biological " +
        "WHERE { GRAPH ?g { " +
        "?entity semsim:hasPhysicalDefinition <" + located_in + ">." +
        "?mediator semsim:hasPhysicalEntityReference ?entity." +
        "?process semsim:hasMediatorParticipant ?mediator." +
        "?property semsim:physicalPropertyOf ?process." +
        "?modelEntity semsim:isComputationalComponentFor ?property." +
        "?modelEntity <http://purl.org/dc/terms/description> ?biological. " +
        "}}";

    return query;
};

var processCombinedMembrane = function (apicalMembrane, basolateralMembrane, capillaryMembrane, membrane, combinedMembrane) {

    var tempapical = [],
        tempBasolateral = [],
        tempCapillary = [],
        paracellularMembrane = [];

    // Extract apical fluxes
    for (var i in apicalMembrane) {
        tempapical.push({
            srctext: apicalMembrane[i].variable_text,
            srcfma: apicalMembrane[i].source_fma,
            snkfma: apicalMembrane[i].sink_fma
        });

        tempapical.push({
            srctext: apicalMembrane[i].variable_text2,
            srcfma: apicalMembrane[i].source_fma2,
            snkfma: apicalMembrane[i].sink_fma2
        });

        tempapical.push({
            srctext: apicalMembrane[i].variable_text3,
            srcfma: apicalMembrane[i].source_fma3,
            snkfma: apicalMembrane[i].sink_fma3
        });
    }

    // Extract basolateral fluxes
    for (var i in basolateralMembrane) {
        tempBasolateral.push({
            srctext: basolateralMembrane[i].variable_text,
            srcfma: basolateralMembrane[i].source_fma,
            snkfma: basolateralMembrane[i].sink_fma
        });

        tempBasolateral.push({
            srctext: basolateralMembrane[i].variable_text2,
            srcfma: basolateralMembrane[i].source_fma2,
            snkfma: basolateralMembrane[i].sink_fma2
        });

        tempBasolateral.push({
            srctext: basolateralMembrane[i].variable_text3,
            srcfma: basolateralMembrane[i].source_fma3,
            snkfma: basolateralMembrane[i].sink_fma3
        });
    }

    // Extract capillary fluxes
    for (var i in capillaryMembrane) {
        tempCapillary.push({
            srctext: capillaryMembrane[i].variable_text,
            srcfma: capillaryMembrane[i].source_fma,
            snkfma: capillaryMembrane[i].sink_fma
        });

        tempCapillary.push({
            srctext: capillaryMembrane[i].variable_text2,
            srcfma: capillaryMembrane[i].source_fma2,
            snkfma: capillaryMembrane[i].sink_fma2
        });

        tempCapillary.push({
            srctext: capillaryMembrane[i].variable_text3,
            srcfma: capillaryMembrane[i].source_fma3,
            snkfma: capillaryMembrane[i].sink_fma3
        });
    }

    // remove apical fluxes from membrane array
    for (var i in tempapical) {
        for (var j in membrane) {
            if (tempapical[i].srctext == membrane[j].variable_text &&
                tempapical[i].srcfma == membrane[j].source_fma &&
                tempapical[i].snkfma == membrane[j].sink_fma) {

                membrane.splice(j, 1);
            }
        }
    }

    // remove basolateral fluxes from membrane array
    for (var i in tempBasolateral) {
        for (var j in membrane) {
            if (tempBasolateral[i].srctext == membrane[j].variable_text &&
                tempBasolateral[i].srcfma == membrane[j].source_fma &&
                tempBasolateral[i].snkfma == membrane[j].sink_fma) {

                membrane.splice(j, 1);
            }
        }
    }

    // remove capillary fluxes from membrane array
    for (var i in tempCapillary) {
        for (var j in membrane) {
            if (tempCapillary[i].srctext == membrane[j].variable_text &&
                tempCapillary[i].srcfma == membrane[j].source_fma &&
                tempCapillary[i].snkfma == membrane[j].sink_fma) {

                membrane.splice(j, 1);
            }
        }
    }

    // abp - apical, basolateral and paracellular membrane
    var abpmembraneObject = function (abpmembrane, type, membrane) {
        abpmembrane.push(
            {
                solute_chebi: membrane.solute_chebi,
                solute_text: membrane.solute_text,
                variable_text: membrane.variable_text,
                source_fma: membrane.source_fma,
                sink_fma: membrane.sink_fma,
                solute_chebi2: type,
                solute_text2: type,
                variable_text2: type,
                source_fma2: type,
                sink_fma2: type,
                solute_chebi3: type,
                solute_text3: type,
                variable_text3: type,
                source_fma3: type,
                sink_fma3: type,
                model_entity: membrane.model_entity,
                model_entity2: "",
                model_entity3: "",
                med_fma: membrane.med_fma,
                med_pr: membrane.med_pr,
                med_pr_text: membrane.med_pr_text,
                med_pr_text_syn: membrane.med_pr_text_syn,
                protein_name: membrane.protein_name
            });

        membrane.solute_chebi2 = type;
        membrane.solute_text2 = type;
        membrane.variable_text2 = type;
        membrane.source_fma2 = type;
        membrane.sink_fma2 = type;
        membrane.solute_chebi3 = type;
        membrane.solute_text3 = type;
        membrane.variable_text3 = type;
        membrane.source_fma3 = type;
        membrane.sink_fma3 = type;
    }

    // Nachannel, Clchannel, Kchannel
    for (var i in membrane) {
        if (membrane[i].med_fma == apicalID && (membrane[i].med_pr == Nachannel ||
            membrane[i].med_pr == Clchannel || membrane[i].med_pr == Kchannel ||
            membrane[i].med_pr == naENaC || membrane[i].med_pr == clChannel || membrane[i].med_pr == kChannel)) {
            abpmembraneObject(apicalMembrane, "channel", membrane[i]);
        }

        if (membrane[i].med_fma == basolateralID && (membrane[i].med_pr == Nachannel ||
            membrane[i].med_pr == Clchannel || membrane[i].med_pr == Kchannel ||
            membrane[i].med_pr == naENaC || membrane[i].med_pr == clChannel || membrane[i].med_pr == kChannel)) {
            abpmembraneObject(basolateralMembrane, "channel", membrane[i]);
        }

        if (membrane[i].med_fma == capillaryID && (membrane[i].med_pr == Nachannel ||
            membrane[i].med_pr == Clchannel || membrane[i].med_pr == Kchannel ||
            membrane[i].med_pr == naENaC || membrane[i].med_pr == clChannel || membrane[i].med_pr == kChannel)) {
            abpmembraneObject(capillaryMembrane, "channel", membrane[i]);
        }

        if (membrane[i].source_fma == luminalID && membrane[i].sink_fma == interstitialID) {
            abpmembraneObject(paracellularMembrane, "diffusiveflux", membrane[i]);
        }
    }

    // flux
    var apicalbasoMembraneObj;
    for (var i in membrane) {
        if (membrane[i].variable_text2 != "channel" && membrane[i].variable_text2 != "diffusiveflux") {

            if (membrane[i].med_fma == apicalID)
                apicalbasoMembraneObj = apicalMembrane;
            else if (membrane[i].med_fma == basolateralID)
                apicalbasoMembraneObj = basolateralMembrane;
            else if (membrane[i].med_fma == capillaryID)
                apicalbasoMembraneObj = capillaryMembrane;

            apicalbasoMembraneObj.push({
                solute_chebi: membrane[i].solute_chebi,
                solute_text: membrane[i].solute_text,
                variable_text: membrane[i].variable_text,
                source_fma: membrane[i].source_fma,
                sink_fma: membrane[i].sink_fma,
                solute_chebi2: "",
                solute_text2: "",
                variable_text2: "flux",
                source_fma2: "",
                sink_fma2: "",
                solute_chebi3: "",
                solute_text3: "",
                variable_text3: "flux",
                source_fma3: "",
                sink_fma3: "",
                model_entity: membrane[i].model_entity,
                model_entity2: "",
                model_entity3: "",
                med_fma: membrane[i].med_fma,
                med_pr: membrane[i].med_pr,
                med_pr_text: membrane[i].med_pr_text,
                med_pr_text_syn: membrane[i].med_pr_text_syn,
                protein_name: membrane[i].protein_name
            });
        }
    }

    for (var i in apicalMembrane)
        combinedMembrane.push(apicalMembrane[i]);
    for (var i in basolateralMembrane)
        combinedMembrane.push(basolateralMembrane[i]);
    for (var i in capillaryMembrane)
        combinedMembrane.push(capillaryMembrane[i]);
    for (var i in paracellularMembrane)
        combinedMembrane.push(paracellularMembrane[i]);

    return combinedMembrane;
};

exports.makecotransporterSPARQL = makecotransporterSPARQL;
exports.srcDescMediatorOfFluxesSPARQL = srcDescMediatorOfFluxesSPARQL;
exports.opbSPARQL = opbSPARQL;
exports.discoveryWithFlux = discoveryWithFlux;
exports.discoveryWithFluxOfSolute = discoveryWithFluxOfSolute;
exports.discoveryWithConcentrationOfSolute = discoveryWithConcentrationOfSolute;
exports.loadViewHtmlSPARQL = loadViewHtmlSPARQL;
exports.circleIDmyWelcomeWindowSPARQL = circleIDmyWelcomeWindowSPARQL;
exports.relatedMembraneSPARQL = relatedMembraneSPARQL;
exports.dictionary = dictionary;
exports.organ = organ;
exports.homeHtml = homeHtml;
exports.viewHtml = viewHtml;
exports.modelHtml = modelHtml;
exports.searchHtml = searchHtml;
exports.usecaseHtml = usecaseHtml;
exports.similarityHtml = similarityHtml;
exports.drawSEDMLHtml = drawSEDMLHtml;
exports.epithelialHtml = epithelialHtml;
exports.platformHtml = platformHtml;
exports.chartHtml = chartHtml;
exports.apicalID = apicalID;
exports.basolateralID = basolateralID;
exports.partOfProteinUri = partOfProteinUri;
exports.partOfCellUri = partOfCellUri;
exports.partOfGOUri = partOfGOUri;
exports.partOfCHEBIUri = partOfCHEBIUri;
exports.fluxOPB = fluxOPB;
exports.concentrationOPB = concentrationOPB;
exports.paracellularID = paracellularID;
exports.luminalID = luminalID;
exports.cytosolID = cytosolID;
exports.interstitialID = interstitialID;
exports.Nachannel = Nachannel;
exports.Clchannel = Clchannel;
exports.Kchannel = Kchannel;
exports.naENaC = naENaC;
exports.clChannel = clChannel;
exports.kChannel = kChannel;
exports.partOfFMAUri = partOfFMAUri;
exports.myWorkspaceName = myWorkspaceName;
exports.uriSEDML = uriSEDML;
exports.endpoint = endpoint;
exports.ebiOntoEndpoint = ebiOntoEndpoint;
exports.relatedMembraneModelSPARQL = relatedMembraneModelSPARQL;
exports.modalWindowToAddModelsSPARQL = modalWindowToAddModelsSPARQL;
exports.concentrationOPBSPARQL = concentrationOPBSPARQL;
exports.abiOntoEndpoint = abiOntoEndpoint;
exports.epithelialcellID = epithelialcellID;
exports.mediatorSPARQL = mediatorSPARQL;
exports.bloodCapillary = bloodCapillary;
exports.capillaryID = capillaryID;
exports.nkcc1 = nkcc1;
exports.maketritransporterSPARQL = maketritransporterSPARQL;
exports.processCombinedMembrane = processCombinedMembrane;
exports.sodium = sodium;
exports.potassium = potassium;
exports.chloride = chloride;
exports.opbTime = opbTime;
exports.sedmlWorkspaceName = sedmlWorkspaceName;
exports.sparqlOBJ = sparqlOBJ;
exports.concentrationOPBSPARQL2 = concentrationOPBSPARQL2;
exports.fluxOPBSPARQL = fluxOPBSPARQL;

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
    $(selector).html("<div class='text-center'><img src='../img/ajax-loader.gif'></div>");
};

// remove duplicate model entity and biological meaning
var uniqueifyCombinedMembrane = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if ((retval[j].model_entity === e.model_entity) && (retval[j].model_entity2 === e.model_entity2) && (retval[j].model_entity3 === e.model_entity3))
                return;
        }
        retval.push(e);
    });
    return retval;
};

// parse text from the epithelial name
var parserFmaNameText = function (fma) {
    var indexOfHash = fma.name.search("#"),
        srctext = fma.name.slice(indexOfHash + 1),
        indexOfdot = srctext.indexOf(".");

    return srctext.slice(indexOfdot + 1);
};

// extract species, gene, and protein names
var parseModelName = function (modelEntity) {
    return modelEntity.slice(0, modelEntity.search("#"));
};

// remove duplicate relatedModel
var uniqueify = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if (retval[j] === e)
                return;
        }
        retval.push(e);
    });
    return retval;
};

// remove duplicate model2DArray
var uniqueifymodel2DArray = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if (retval[j][1] === e[1])
                return;
        }
        retval.push(e);
    });
    return retval;
};

// separate cellml model and variable name from a model entity
var modelVariableName = function (element) {
    // remove duplicate components with same variable
    var indexOfHash = element.search("#"),
        cellmlModelName = element.slice(0, indexOfHash), // weinstein_1995.cellml
        componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
        indexOfDot = componentVariableName.indexOf("."),
        variableName = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

    return [cellmlModelName, variableName];
};

// remove duplicate entity (cellml model and variable name)
var uniqueifyjsonModel = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            var temp1 = modelVariableName(retval[j].Model_entity.value),
                temp2 = modelVariableName(e.Model_entity.value);
            if (temp1[0] == temp2[0] && temp1[1] == temp2[1])
                return;
        }
        retval.push(e);
    });
    return retval;
};

// Remove duplicate fma
var uniqueifyEpithelial = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if (retval[j].name === e.name && retval[j].fma === e.fma)
                return;
        }
        retval.push(e);
    });
    return retval;
};

// Remove duplicate links
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

// Remove duplicate links
var uniqueifyjsonFlux = function (es) {
    var retval = [];
    es.forEach(function (e) {
        for (var j = 0; j < retval.length; j++) {
            if (retval[j].source_fma.value === e.source_fma.value &&
                retval[j].sink_fma.value === e.sink_fma.value)
                return;
        }

        if (e.source_fma.value != e.sink_fma.value)
            retval.push(e);
    });
    return retval;
};

// Create anchor tag
var createAnchor = function (value) {
    var aText = $("<a/>");
    aText.attr("href", value);
    aText.attr("target", "_blank");
    aText.html(value);
    return aText;
};

// Find duplicate items
var searchFn = function (searchItem, arrayOfItems) {
    var newArray = arrayOfItems.filter(function (item) {
        return item === searchItem;
    });

    return newArray.length;
};

// TODO: temp solution, fix this in svg
var getTextWidth = function (text, fontSize, fontFace) {
    var a = document.createElement("canvas"); // $("<canvas/>");
    var b = a.getContext("2d");
    b.font = fontSize + "px " + fontFace;
    return b.measureText(text).width;
};

// Utility to calculate number of iterations
var iteration = function (length) {
    var sum = 0;
    for (var i = 0; i < length; i++) {
        sum = sum + (length - i - 1);
    }

    return sum;
};

var isExist = function (element, templistOfModel) {
    // remove duplicate components with same variable and cellml model
    var indexOfHash = element.search("#"),
        cellmlModelName = element.slice(0, indexOfHash), // weinstein_1995.cellml
        componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
        indexOfDot = componentVariableName.indexOf("."),
        variableName = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

    for (var i = 0; i < templistOfModel.length; i++) {
        var indexOfHash2 = templistOfModel[i].search("#"),
            cellmlModelName2 = templistOfModel[i].slice(0, indexOfHash2), // weinstein_1995.cellml
            componentVariableName2 = templistOfModel[i].slice(indexOfHash2 + 1), // NHE3.J_NHE3_Na
            indexOfDot2 = componentVariableName2.indexOf("."),
            variableName2 = componentVariableName2.slice(indexOfDot2 + 1); // J_NHE3_Na

        if (cellmlModelName == cellmlModelName2 && variableName == variableName2) {
            return true;
        }
    }

    return false;
};

var isExist2 = function (model, modelEntityList) {
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

var isExistModel2DArray = function (element, model2DArray) {
    // remove duplicate components with same variable
    var indexOfHash = element.search("#"),
        cellmlModelName = element.slice(0, indexOfHash), // weinstein_1995.cellml
        componentVariableName = element.slice(indexOfHash + 1), // NHE3.J_NHE3_Na
        indexOfDot = componentVariableName.indexOf("."),
        variableName = componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na

    for (var i = 0; i < model2DArray.length; i++) {
        var indexOfHash2 = model2DArray[i][1].search("#"),
            cellmlModelName2 = model2DArray[i][1].slice(0, indexOfHash2), // weinstein_1995.cellml
            componentVariableName2 = model2DArray[i][1].slice(indexOfHash2 + 1), // NHE3.J_NHE3_Na
            indexOfDot2 = componentVariableName2.indexOf("."),
            variableName2 = componentVariableName2.slice(indexOfDot2 + 1); // J_NHE3_Na

        if (cellmlModelName == cellmlModelName2 && variableName == variableName2) {
            return true;
        }
    }

    return false;
};

// split PR_ from protein identifier
var splitPRFromProtein = function (tempMemModelID) {
    var indexOfPR;
    if (tempMemModelID[13] == "") {
        indexOfPR = tempMemModelID[22].search("PR_");
        return tempMemModelID[22].slice(indexOfPR + 3, tempMemModelID[22].length);
    }
    else {
        indexOfPR = tempMemModelID[13].search("PR_");
        return tempMemModelID[13].slice(indexOfPR + 3, tempMemModelID[13].length);
    }
};

// split PR_ from protein identifier
var splitPRFromProtein2 = function (modelEntity, PID, enteredIndex) {
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

// split PR_ from protein identifier
var proteinOrMedPrID = function (membraneModelID, PID) {
    for (var i = 0; i < membraneModelID.length; i++) {
        if (membraneModelID[i][13] == "") {
            var indexOfPR = membraneModelID[i][22].search("PR_"),
                medProteinID = membraneModelID[i][22].slice(indexOfPR + 3, membraneModelID[i][22].length);

            PID.push(medProteinID); // Mediator PROTEIN id
        }
        else {
            var indexOfPR = membraneModelID[i][13].search("PR_"),
                medProteinID = membraneModelID[i][13].slice(indexOfPR + 3, membraneModelID[i][13].length);

            PID.push(medProteinID); // Mediator PROTEIN id
        }
    }
};

var searchInCombinedMembrane = function (model1, model2, model3, combinedMembrane) {

    console.log("searchInCombinedMembrane combinedMembrane: ", combinedMembrane);

    for (var i = 0; i < combinedMembrane.length; i++) {
        if ((combinedMembrane[i].model_entity == model1 && combinedMembrane[i].model_entity2 == model2 && combinedMembrane[i].model_entity3 == model3) ||
            (combinedMembrane[i].model_entity == model2 && combinedMembrane[i].model_entity2 == model1 && combinedMembrane[i].model_entity3 == model3) ||
            (combinedMembrane[i].model_entity == model1 && combinedMembrane[i].model_entity2 == "" && combinedMembrane[i].model_entity3 == model3) ||
            (combinedMembrane[i].model_entity == model2 && combinedMembrane[i].model_entity2 == "" && combinedMembrane[i].model_entity3 == model3))
            return true;
    }

    return false;
};

// process EBI similarity matrix
var similarityMatrixEBI = function (identityMatrix, PID, draggedMedPrID, membraneModelObj) {
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

    // length is empty when 100% matching
    // appended a 0 bit after its protein id and make a comparision
    if (similarityOBJ.length != 0) {
        for (m = 0; m < membraneModelObj.length; m++) {
            for (n = 0; n < similarityOBJ.length; n++) {
                if ((membraneModelObj[m].pid == similarityOBJ[n].PID1 &&
                    draggedMedPrID == similarityOBJ[n].PID2) ||
                    (membraneModelObj[m].pid == similarityOBJ[n].PID2 &&
                        draggedMedPrID == similarityOBJ[n].PID1)) {
                    membraneModelObj[m].similar = similarityOBJ[n].similarity;
                }
            }
        }

        // Descending sorting
        membraneModelObj.sort(function (a, b) {
            return b.similar - a.similar;
        });
    }

    // console.log("AFTER membraneModelObj: ", membraneModelObj);

    return similarityOBJ;
};

// process EBI similarity matrix
var similarityMatrixEBI2 = function (identityMatrix, PID, enteredPrID, modelEntity) {
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

exports.parseModelName = parseModelName;
exports.parserFmaNameText = parserFmaNameText;
exports.uniqueify = uniqueify;
exports.uniqueifyEpithelial = uniqueifyEpithelial;
exports.uniqueifySVG = uniqueifySVG;
exports.uniqueifyjsonFlux = uniqueifyjsonFlux;
exports.createAnchor = createAnchor;
exports.searchFn = searchFn;
exports.getTextWidth = getTextWidth;
exports.iteration = iteration;
exports.showLoading = showLoading;
exports.uniqueifymodel2DArray = uniqueifymodel2DArray;
exports.uniqueifyjsonModel = uniqueifyjsonModel;
exports.isExist = isExist;
exports.isExist2 = isExist2;
exports.isExistModel2DArray = isExistModel2DArray;
exports.uniqueifyCombinedMembrane = uniqueifyCombinedMembrane;
exports.splitPRFromProtein = splitPRFromProtein;
exports.splitPRFromProtein2 = splitPRFromProtein2;
exports.splitPR = splitPR;
exports.proteinOrMedPrID = proteinOrMedPrID;
exports.searchInCombinedMembrane = searchInCombinedMembrane;
exports.similarityMatrixEBI = similarityMatrixEBI;
exports.similarityMatrixEBI2 = similarityMatrixEBI2;
exports.d3CheckBox = d3CheckBox;
exports.minMax = minMax;
exports.isExistProtocolElem = isExistProtocolElem;
exports.tempModelHelper = tempModelHelper;
exports.isModelExist = isModelExist;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Model Similarity Measurements
 * Created by dsar941 on 6/2/2018.
 */
var ajaxUtils = __webpack_require__(1);
var miscellaneous = __webpack_require__(2);
var sparqlUtils = __webpack_require__(0);
var similarity = __webpack_require__(4);
var epithelialplatform = __webpack_require__(5);

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

    /*******************************************/
    /*************** Home Page *****************/
    /*******************************************/
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

        var query = sparqlUtils.concentrationOPBSPARQL2();
        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonObj) {

                console.log("jsonObjCons: ", jsonObj);

                var query = sparqlUtils.fluxOPBSPARQL();
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
                                    if (!miscellaneous.isExist2(jsonObj.results.bindings[j].model_entity.value, modelEntity[i].concentration)) {
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
                                    if (!miscellaneous.isExist2(jsonObjFlux.results.bindings[j].model_entity.value, modelEntity[i].flux)) {
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

            var enteredPrID = miscellaneous.splitPRFromProtein2(modelEntity, PID, enteredIndex);

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

                var dbfectendpoint = "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/" + PID[index] + "/fasta";

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
                                                        miscellaneous.similarityMatrixEBI2(
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
                                    var cellmlWorkspaceName = "https://models.physiomeproject.org/workspace/267/rawfile/HEAD/" + tempOBJy[counter].model;
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
                $("#platform-content").html(drawSEDMLHtmlContent);
            },
            false);
    }

    /*******************************************/
    /************ Similarity Graph *************/
    /*******************************************/
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

    /*******************************************/
    /*************** Platform ******************/
    /*******************************************/
    mainUtils.loadPlatformHtml = function () {
        ajaxUtils.sendGetRequest(
            sparqlUtils.platformHtml,
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
        ajaxUtils.sendGetRequest(
            sparqlUtils.epithelialHtml,
            function (epithelialHtmlContent) {
                $("#platform-content").html(epithelialHtmlContent);
                ajaxUtils.sendGetRequest(sparqlUtils.epithelialHtml, epithelialplatform.epithelialPlatform, false);
            },
            false);
    };

    /*******************************************/
    /********* Radar Plot *************/
    /*******************************************/
    mainUtils.loadChartHtml = function () {
        if (sessionStorage.getItem("drawChartContent")) {
            $("#platform-content").html(sessionStorage.getItem("drawChartContent"));
        }
        else {
            ajaxUtils.sendGetRequest(
                sparqlUtils.chartHtml,
                function (chartHtmlContent) {
                    $("#platform-content").html(chartHtmlContent);
                    ajaxUtils.sendGetRequest(sparqlUtils.chartHtml, epithelialplatform.radarplot, false);
                },
                false);
        }
    };

    // Expose utility to the global object
    global.$mainUtils = mainUtils;

})(window);

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

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by dsar941 on 5/11/2017.
 */
var ajaxUtils = __webpack_require__(1);
var solutesBouncing = __webpack_require__(6);
var svgPlatform = __webpack_require__(7);
var sparqlUtils = __webpack_require__(0);
var miscellaneous = __webpack_require__(2);

var combinedMembrane = [
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P55018",
        med_pr_text: "solute carrier family 12 member 3 (rat)",
        med_pr_text_syn: "TSC",
        model_entity: "chang_fujita_b_1999.cellml#total_transepithelial_sodium_flux.J_mc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "Cl-",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma3: "",
        variable_text: "J_mc_Na",
        variable_text2: "J_mc_Cl",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q63633",
        med_pr_text: "solute carrier family 12 member 5 (rat)",
        med_pr_text_syn: "Q63633",
        model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
        model_entity2: "chang_fujita_b_1999.cellml#total_transepithelial_potassium_flux.J_mc_K",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi3: "",
        solute_text: "Cl-",
        solute_text2: "K+",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma3: "",
        variable_text: "J_mc_Cl",
        variable_text2: "J_mc_K",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P37089",
        med_pr_text: "amiloride-sensitive sodium channel subunit alpha (rat)",
        med_pr_text_syn: "RENAC",
        model_entity: "chang_fujita_b_1999.cellml#mc_sodium_flux.G_mc_Na",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Na+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Na",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#mc_chloride_flux.G_mc_Cl",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#mc_potassium_flux.G_mc_K",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P06685",
        med_pr_text: "sodium/potassium-transporting ATPase subunit alpha-1 (rat)",
        med_pr_text_syn: "P06685",
        model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_sc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#sc_potassium_flux.J_sc_K",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "K+",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma3: "",
        variable_text: "J_sc_Na",
        variable_text2: "J_sc_K",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#sc_chloride_flux.G_sc_Cl",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#sc_potassium_flux.G_sc_K",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q9Z0S6",
        med_pr_text: "claudin-10 (mouse)",
        med_pr_text_syn: "CLDN10A",
        model_entity: "chang_fujita_b_1999.cellml#ms_sodium_flux.G_ms_Na",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "Na+",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_Na",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_O35054",
        med_pr_text: "claudin-4 (mouse)",
        med_pr_text_syn: "CPETR1",
        model_entity: "chang_fujita_b_1999.cellml#ms_chloride_flux.G_ms_Cl",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "Cl-",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_Cl",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_F1LZ52",
        med_pr_text: "kelch-like protein 3 (rat)",
        med_pr_text_syn: "F1LZ52",
        model_entity: "chang_fujita_b_1999.cellml#ms_potassium_flux.G_ms_K",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "K+",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_K",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    }
];
var membrane = [
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P37089",
        med_pr_text: "amiloride-sensitive sodium channel subunit alpha (rat)",
        med_pr_text_syn: "RENAC",
        model_entity: "chang_fujita_b_1999.cellml#mc_sodium_flux.G_mc_Na",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Na+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Na",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q9Z0S6",
        med_pr_text: "claudin-10 (mouse)",
        med_pr_text_syn: "CLDN10A",
        model_entity: "chang_fujita_b_1999.cellml#ms_sodium_flux.G_ms_Na",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "Na+",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_Na",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_O35054",
        med_pr_text: "claudin-4 (mouse)",
        med_pr_text_syn: "CPETR1",
        model_entity: "chang_fujita_b_1999.cellml#ms_chloride_flux.G_ms_Cl",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "Cl-",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_Cl",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#sc_chloride_flux.G_sc_Cl",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#mc_chloride_flux.G_mc_Cl",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#mc_potassium_flux.G_mc_K",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
        med_pr: "http://purl.obolibrary.org/obo/PR_F1LZ52",
        med_pr_text: "kelch-like protein 3 (rat)",
        med_pr_text_syn: "F1LZ52",
        model_entity: "chang_fujita_b_1999.cellml#ms_potassium_flux.G_ms_K",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "diffusiveflux",
        sink_fma3: "diffusiveflux",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "diffusiveflux",
        solute_chebi3: "diffusiveflux",
        solute_text: "K+",
        solute_text2: "diffusiveflux",
        solute_text3: "diffusiveflux",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "diffusiveflux",
        source_fma3: "diffusiveflux",
        variable_text: "G_ms_K",
        variable_text2: "diffusiveflux",
        variable_text3: "diffusiveflux"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#sc_potassium_flux.G_sc_K",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    }
];
var concentration_fma = [];
var apicalMembrane = [
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P55018",
        med_pr_text: "solute carrier family 12 member 3 (rat)",
        med_pr_text_syn: "TSC",
        model_entity: "chang_fujita_b_1999.cellml#total_transepithelial_sodium_flux.J_mc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "Cl-",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma3: "",
        variable_text: "J_mc_Na",
        variable_text2: "J_mc_Cl",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P55018",
        med_pr_text: "solute carrier family 12 member 3 (rat)",
        med_pr_text_syn: "TSC",
        model_entity: "chang_fujita_b_1999.cellml#total_transepithelial_sodium_flux.J_mc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "Cl-",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma3: "",
        variable_text: "J_mc_Na",
        variable_text2: "J_mc_Cl",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q63633",
        med_pr_text: "solute carrier family 12 member 5 (rat)",
        med_pr_text_syn: "Q63633",
        model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
        model_entity2: "chang_fujita_b_1999.cellml#total_transepithelial_potassium_flux.J_mc_K",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi3: "",
        solute_text: "Cl-",
        solute_text2: "K+",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma3: "",
        variable_text: "J_mc_Cl",
        variable_text2: "J_mc_K",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P37089",
        med_pr_text: "amiloride-sensitive sodium channel subunit alpha (rat)",
        med_pr_text_syn: "RENAC",
        model_entity: "chang_fujita_b_1999.cellml#mc_sodium_flux.G_mc_Na",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Na+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Na",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#mc_chloride_flux.G_mc_Cl",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#mc_potassium_flux.G_mc_K",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_mc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    }
];
var basolateralMembrane = [
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P06685",
        med_pr_text: "sodium/potassium-transporting ATPase subunit alpha-1 (rat)",
        med_pr_text_syn: "P06685",
        model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_sc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#sc_potassium_flux.J_sc_K",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "K+",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma3: "",
        variable_text: "J_sc_Na",
        variable_text2: "J_sc_K",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P06685",
        med_pr_text: "sodium/potassium-transporting ATPase subunit alpha-1 (rat)",
        med_pr_text_syn: "P06685",
        model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_sc_Na",
        model_entity2: "chang_fujita_b_1999.cellml#sc_potassium_flux.J_sc_K",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma3: "",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
        solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi3: "",
        solute_text: "Na+",
        solute_text2: "K+",
        solute_text3: "",
        source_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        source_fma2: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma3: "",
        variable_text: "J_sc_Na",
        variable_text2: "J_sc_K",
        variable_text3: ""
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
        med_pr_text: "chloride channel protein ClC-Ka (rat)",
        med_pr_text_syn: "CLCNK1",
        model_entity: "chang_fujita_b_1999.cellml#sc_chloride_flux.G_sc_Cl",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "Cl-",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_Cl",
        variable_text2: "channel",
        variable_text3: "channel"
    },
    {
        med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
        med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
        med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
        med_pr_text_syn: "P15387",
        model_entity: "chang_fujita_b_1999.cellml#sc_potassium_flux.G_sc_K",
        model_entity2: "",
        model_entity3: "",
        protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
        sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
        sink_fma2: "channel",
        sink_fma3: "channel",
        solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
        solute_chebi2: "channel",
        solute_chebi3: "channel",
        solute_text: "K+",
        solute_text2: "channel",
        solute_text3: "channel",
        source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
        source_fma2: "channel",
        source_fma3: "channel",
        variable_text: "G_sc_K",
        variable_text2: "channel",
        variable_text3: "channel"
    }
];
var capillaryMembrane = [];

var epithelialPlatform = function () {

    var relatedModel = [], membraneModelObj = [], alternativeModelObj = [], relatedModelObj = [],
        modelEntityObj = [], membraneModelID = [], proteinName, proteinText, cellmlModel, biological_meaning,
        biological_meaning2, biological_meaning3, speciesName, geneName, idProtein = 0, idAltProtein = 0,
        idMembrane = 0,
        locationOfModel, typeOfModel, cthis, icircleGlobal, organIndex, model_entity, model_entity2, model_entity3,
        relatedModelEntity = [], cotransporterList = [], counter = 0;

    var dx = [], dy = [], dxcircletext = [], dycircletext = [], dxtext = [], dytext = [],
        dxtext2 = [], dytext2 = [], dx1line = [], dy1line = [], dx2line = [], dy2line = [],
        dx1line2 = [], dy1line2 = [], dx2line2 = [], dy2line2 = [], line = [], mindex, id = 0,
        dx1line3 = [], dy1line3 = [], dx2line3 = [], dy2line3 = [], dxtext3 = [], dytext3 = [];

    var i, j, msaveIDflag = false;

    console.log("epithelialPlatform membrane: ", membrane);
    console.log("epithelialPlatform concentration_fma: ", concentration_fma);
    console.log("epithelialPlatform apicalMembrane: ", apicalMembrane);
    console.log("epithelialPlatform basolateralMembrane: ", basolateralMembrane);
    console.log("epithelialPlatform capillaryMembrane: ", capillaryMembrane);

    console.log("epithelialPlatform combinedMembrane: ", combinedMembrane);

    var g = $("#svgVisualize"),
        wth = 2000, // 1200
        hth = 900,
        width = 300,
        height = 400;

    var w = 800,
        h = height + 500; // Init 400 + 500 = 900

    // change epithelial cell height
    var prevHeight = height, lengthOfApicalMem = 0, lengthOfBasoMem = 0;

    for (var i = 0; i < combinedMembrane.length; i++) {
        if (combinedMembrane[i].med_fma == sparqlUtils.apicalID)
            lengthOfApicalMem++;
        else if (combinedMembrane[i].med_fma == sparqlUtils.basolateralID)
            lengthOfBasoMem++;
    }

    // console.log("lengthOfApicalMem, lengthOfBasoMem: ", lengthOfApicalMem, lengthOfBasoMem);

    if (lengthOfApicalMem > lengthOfBasoMem && lengthOfApicalMem > 4)
        height += 50 * (lengthOfApicalMem - 4);

    if (lengthOfBasoMem > lengthOfApicalMem && lengthOfBasoMem > 4)
        height += 50 * (lengthOfBasoMem - 4);

    if (prevHeight != height) {
        h += (height - prevHeight);
        hth += (height - prevHeight);
    }

    // console.log("Prev and Height: ", prevHeight, height, h, hth);

    var svg = d3.select("#svgVisualize").append("svg")
        .attr("width", wth)
        .attr("height", hth);

    var newg = svg.append("g")
        .attr("id", "newgid")
        .data([{x: w / 3, y: height / 3}]);

    // draw svg platform
    var markerWidth = 4, markerHeight = 4;
    svgPlatform.svgPlatform(svg, newg, height, width, w, h, markerWidth, markerHeight);

    var solutes = [];

    for (i = 0; i < concentration_fma.length; i++) {

        // luminal(1), cytosol(2), interstitial(3), blood capillary(4), paracellular(5), paracellular2(6)
        console.log("rect: ", $("rect"));
        for (var j = 1; j <= 6; j++) {
            if (concentration_fma[i].fma == $("rect")[j].id) {
                break;
            }
        }

        // compartments
        if (concentration_fma[i].fma == $("rect")[j].id) {
            var xrect = $("rect")[j].x.baseVal.value;
            var yrect = $("rect")[j].y.baseVal.value;
            var xwidth = $("rect")[j].width.baseVal.value;
            var yheight = $("rect")[j].height.baseVal.value;

            var indexOfHash = concentration_fma[i].name.search("#");
            var value = concentration_fma[i].name.slice(indexOfHash + 1);
            var indexOfdot = value.indexOf(".");
            value = value.slice(indexOfdot + 1);

            solutes.push(
                {
                    compartment: $("rect")[j].id,
                    xrect: xrect,
                    yrect: yrect,
                    width: xwidth,
                    height: yheight,
                    value: value
                });
        }
    }

    // solutes bouncing on the platform
    solutesBouncing.solutesBouncing(newg, solutes);

    // line apical and basolateral
    var x = $("rect")[0].x.baseVal.value;
    var y = $("rect")[0].y.baseVal.value;

    var lineapical = newg.append("line")
        .attr("id", sparqlUtils.apicalID)
        .attr("x1", function (d) {
            return d.x;
        })
        .attr("y1", function (d) {
            return d.y + 10;
        })
        .attr("x2", function (d) {
            return d.x;
        })
        .attr("y2", function (d) {
            return d.y + height - 10;
        })
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "green")
                .attr("x", 960)
                .attr("y", 20)
                .text("Apical Membrane");

            return "green";
        })
        .attr("stroke-width", 25)
        .attr("opacity", 0.5);

    var linebasolateral = newg.append("line")
        .attr("id", sparqlUtils.basolateralID)
        .attr("x1", function (d) {
            return d.x + width;
        })
        .attr("y1", function (d) {
            return d.y + 10;
        })
        .attr("x2", function (d) {
            return d.x + width;
        })
        .attr("y2", function (d) {
            return d.y + height - 10;
        })
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "orange")
                .attr("x", 960)
                .attr("y", 45)
                .text("Basolateral Membrane");

            return "orange";
        })
        .attr("stroke-width", 25)
        .attr("opacity", 0.5);

    var linecapillary = newg.append("line")
        .attr("id", sparqlUtils.capillaryID)
        .attr("x1", w + 10 + 20)
        .attr("y1", function (d) {
            return d.y + 10;
        })
        .attr("x2", w + 10 + 20)
        .attr("y2", function (d) {
            return d.y + height - 10;
        })
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "darkred")
                .attr("x", 960)
                .attr("y", 195)
                .text("Capillary Membrane")
                .attr("opacity", 0.5);

            return "darkred";
        })
        .attr("stroke-width", 25)
        .attr("opacity", 0.5);

    // Circle and line arrow from lumen to cytosol
    var xrect = $("rect")[0].x.baseVal.value,
        yrect = $("rect")[0].y.baseVal.value;

    // Paracellular membrane
    var xprect = $("rect")[5].x.baseVal.value,
        yprect = $("rect")[5].y.baseVal.value,
        xpvalue = xprect + 10,
        ypvalue = yprect + 25,
        ypdistance = 35;

    var radius = 20,
        lineLen = 50, polygonlineLen = 60, pcellLen = 100,

        xvalue = xrect - lineLen / 2, // x coordinate before epithelial rectangle
        yvalue = yrect + 10 + 50, // initial distance 50
        cxvalue = xrect, cyvalue = yrect + 10 + 50, // initial distance 50
        ydistance = 70,

        yvalueb = yrect + 10 + 50, // initial distance 50 for basoalteral
        cyvalueb = yrect + 10 + 50, // initial distance 50

        yvaluec = yrect + 10 + 50, // initial distance 50 for capillary
        cyvaluec = yrect + 10 + 50, // initial distance 50

        circlewithlineg = [], circlewithtext = [],
        linewithlineg = [], linewithlineg2 = [], linewithlineg3 = [],
        linewithtextg = [], linewithtextg2 = [], linewithtextg3 = [], polygon = [];

    // TODO: does not work for bi-directional arrow, Fix this
    // SVG checkbox with drag on-off
    var checkboxsvg = newg.append("g");

    var checkBox = [], checkedchk = [],
        ydistancechk = 50, yinitialchk = 215, ytextinitialchk = 230;

    var update = function () {

        console.log("update: ", combinedMembrane);

        for (i = 0; i < combinedMembrane.length; i++) {
            checkedchk[i] = checkBox[i].checked();
            if (checkedchk[i] == true) {
                circlewithlineg[i].call(d3.drag().on("drag", dragcircle).on("end", dropcircle));
            }
            else {
                circlewithlineg[i].call(d3.drag().on("end", dragcircleunchecked));
            }
        }
    };

    var combinedMemChk = function (index) {

        console.log("combinedMemChk combinedMembrane and index: ", combinedMembrane, index);

        for (i = index; i < combinedMembrane.length; i++) {
            checkBox[i] = new miscellaneous.d3CheckBox();
        }

        for (i = index; i < combinedMembrane.length; i++) {
            // var textvaluechk = combinedMembrane[i].variable_text + " " + combinedMembrane[i].variable_text2;
            var textvaluechk = combinedMembrane[i].med_pr_text,
                indexOfParen = textvaluechk.indexOf("(");
            textvaluechk = textvaluechk.slice(0, indexOfParen - 1) + " (" + combinedMembrane[i].med_pr_text_syn + ")";

            checkBox[i].x(960).y(yinitialchk).checked(false).clickEvent(update);
            checkBox[i].xtext(1000).ytext(ytextinitialchk).text("" + textvaluechk + "");

            checkboxsvg.call(checkBox[i]);

            yinitialchk += ydistancechk;
            ytextinitialchk += ydistancechk;
        }
    };

    // INITIAL call
    combinedMemChk(0);

    // tooltip
    // var div = d3.select("#svgVisualize").append("div")
    //     .attr("class", "tooltip")
    //     .style("opacity", 0);

    // closing tooltip
    $(document).on("mousedown", function (event) {
        // console.log("mousedown: ", event.which);

        // 1 => left click, 2 => middle click, 3 => right click
        if (event.which == 2)
            div.style("display", "none");
    });

    // add models without dragging
    $(document).on("click", function (event) {

        console.log("click FUNCTION!");

        var totalCheckboxes = $("#myModal input:checkbox").length,
            numberOfChecked = $("#myModal input:checkbox:checked").length,
            numberOfNotChecked = totalCheckboxes - numberOfChecked;

        console.log("click event -> totalCheckboxes, numberOfChecked, numberNotChecked: ",
            totalCheckboxes, numberOfChecked, numberOfNotChecked);

        $("#myModal input[type='checkbox']").prop("checked", function (i, val) {
            if (val == false) {
                $(this).prop({disabled: true});
            }
            return val;
        });

        if (totalCheckboxes == numberOfNotChecked) {
            $("#myModal input[type='checkbox']").prop({
                disabled: false
            });
        }

        console.log("click function -> combinedMembrane: ", combinedMembrane);

        console.log("click function -> linewithlineg, circlewithlineg: ", linewithlineg, circlewithlineg);
        console.log("click function -> dx, dy: ", dx, dy);

        // Change marker direction and text position
        if (event.target.localName == "line" && event.target.nodeName == "line") {
            console.log("event.target.id: ", event.target.id);
            if (event.target.id == sparqlUtils.apicalID || event.target.id == sparqlUtils.basolateralID)
                modalWindowToAddModels(event.target.id);
        }
    });

    var tooltipFunc = function (div, id, left, top) {
        div.style("display", "inline");
        div.transition()
            .duration(200)
            .style("opacity", 1);

        // var id = d3.select(this)._groups[0][0].id,
        var indexOfComma = id.indexOf(","),
            tempworkspace = "https://models.physiomeproject.org/workspace/267" + "/" +
                "rawfile" + "/" + "HEAD" + "/" + id.slice(0, indexOfComma);

        div.html(
            "<b>CellML </b> " +
            "<a href=" + tempworkspace + " + target=_blank>" +
            "<img border=0 alt=CellML src=img/cellml.png width=30 height=20></a>" +
            "<br/>" +
            "<b>SEDML </b> " +
            "<a href=" + sparqlUtils.uriSEDML + " + target=_blank>" +
            "<img border=0 alt=SEDML src=img/SEDML.png width=30 height=20></a>" +
            "<br/>" +
            "<b>Click middle mouse to close</b>")
            .style("left", left + 240 + "px") // 540
            .style("top", top + 90 + "px");
    }

    // apical, basolateral and paracellular membrane
    var combinedMemFunc = function (index, msaveIDflag) {

        console.log("combinedMemFunc: combinedMembrane -> ", combinedMembrane);
        console.log("combinedMemFunc: circlewithlineg -> ", circlewithlineg);

        for (i = index; i < combinedMembrane.length; i++) {
            model_entity = combinedMembrane[i].model_entity;

            if (combinedMembrane[i].model_entity2 != undefined)
                model_entity2 = combinedMembrane[i].model_entity2;
            else model_entity2 = "";

            if (combinedMembrane[i].model_entity3 != undefined)
                model_entity3 = combinedMembrane[i].model_entity3;
            else model_entity3 = "";

            var mediator_fma = combinedMembrane[i].med_fma,
                mediator_pr = combinedMembrane[i].med_pr,
                mediator_pr_text = combinedMembrane[i].med_pr_text,
                mediator_pr_text_syn = combinedMembrane[i].med_pr_text_syn,
                protein_name = combinedMembrane[i].protein_name,

                solute_chebi = combinedMembrane[i].solute_chebi,
                solute_chebi2 = combinedMembrane[i].solute_chebi2,
                solute_chebi3 = combinedMembrane[i].solute_chebi3,
                solute_text = combinedMembrane[i].solute_text,
                solute_text2 = combinedMembrane[i].solute_text2,
                solute_text3 = combinedMembrane[i].solute_text3,

                textvalue = combinedMembrane[i].variable_text,
                textvalue2 = combinedMembrane[i].variable_text2,
                textvalue3 = combinedMembrane[i].variable_text3,
                src_fma = combinedMembrane[i].source_fma,
                src_fma2 = combinedMembrane[i].source_fma2,
                src_fma3 = combinedMembrane[i].source_fma3,
                snk_fma = combinedMembrane[i].sink_fma,
                snk_fma2 = combinedMembrane[i].sink_fma2,
                snk_fma3 = combinedMembrane[i].sink_fma3,
                textWidth = miscellaneous.getTextWidth(textvalue, 12),
                tempID;

            if (msaveIDflag == true)
                tempID = icircleGlobal;
            else
                tempID = circlewithlineg.length;

            console.log("combinedMemFunc -> index, icircleGlobal and circlewithlineg: ", index, icircleGlobal, circlewithlineg);

            /*  Apical Membrane */
            if (mediator_fma == sparqlUtils.apicalID) {
                // case 1
                if ((src_fma == sparqlUtils.luminalID && snk_fma == sparqlUtils.cytosolID) &&
                    ((src_fma2 == "" && snk_fma2 == "") || (src_fma2 == sparqlUtils.luminalID && snk_fma2 == sparqlUtils.cytosolID))) {

                    console.log("case 1 sparqlUtils.luminalID ==> sparqlUtils.cytosolID: ", yvalue, cyvalue);

                    var lineg = newg.append("g").data([{x: xvalue, y: yvalue}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue + lineLen + 10, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue, y: yvalue + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10, y: yvalue + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue, y: cyvalue}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "lightgreen")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue, y: yvalue + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10, y: yvalue + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;

                    console.log("case 1 2 sparqlUtils.luminalID ==> sparqlUtils.cytosolID: ", yvalue, cyvalue);
                }

                // case 2
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.luminalID) &&
                    ((src_fma2 == "" && snk_fma2 == "") || (src_fma2 == sparqlUtils.cytosolID && snk_fma2 == sparqlUtils.luminalID))) {
                    var lineg = newg.append("g").data([{x: xvalue, y: yvalue}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue - 30, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue, y: yvalue + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - textWidth - 10, y: yvalue + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue, y: cyvalue}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "lightgreen")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue, y: yvalue + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - textWidth - 10, y: yvalue + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;
                }

                // case 3
                if ((src_fma == sparqlUtils.luminalID && snk_fma == sparqlUtils.cytosolID) && (src_fma2 == sparqlUtils.cytosolID && snk_fma2 == sparqlUtils.luminalID)) {
                    var lineg = newg.append("g").data([{x: xvalue, y: yvalue}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue + lineLen + 10, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue, y: yvalue + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - textWidth - 10, y: yvalue + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue, y: cyvalue}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "lightgreen")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue, y: yvalue + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - textWidth - 10, y: yvalue + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;
                }

                // case 4
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.luminalID) && (src_fma2 == sparqlUtils.luminalID && snk_fma2 == sparqlUtils.cytosolID)) {
                    var lineg = newg.append("g").data([{x: xvalue, y: yvalue}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue - 30, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue, y: yvalue + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10, y: yvalue + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue, y: cyvalue}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "lightgreen")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue, y: yvalue + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10, y: yvalue + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;
                }

                // case 5
                if ((src_fma == sparqlUtils.luminalID && snk_fma == sparqlUtils.cytosolID) && (textvalue2 == "channel")) {
                    console.log("case 5 sparqlUtils.cytosolID ==> sparqlUtils.luminalID and channel: ", yvalue, cyvalue);

                    var polygong = newg.append("g").data([{x: xvalue - 5, y: yvalue}]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{x: xvalue + polygonlineLen + 10, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5) + "," + (yvalue - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvalue - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // text inside polygon
                    var polygontext = polygong.append("g").data([{x: xvalue + 12, y: yvalue + 4}]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    // increment y-axis of line and circle
                    // circle"s radius 20
                    // polygon - probably radius distance from middle point is 10
                    // yvalue += ydistance - 20;
                    // cyvalue += ydistance - 20;

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    yvalue += ydistance;
                    cyvalue += ydistance;

                    console.log("case 5 2 sparqlUtils.cytosolID ==> sparqlUtils.luminalID and channel: ", yvalue, cyvalue);
                }

                // case 6
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.luminalID) && (textvalue2 == "channel")) {

                    console.log("case 6 sparqlUtils.cytosolID ==> sparqlUtils.luminalID and channel: ", yvalue, cyvalue);

                    var polygong = newg.append("g").data([{x: xvalue - 5, y: yvalue}]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{x: xvalue - 30, y: yvalue + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5) + "," + (yvalue - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.apicalID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvalue - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // text inside polygon
                    var polygontext = polygong.append("g").data([{x: xvalue + 12, y: yvalue + 4}]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;

                    console.log("case 6 2 sparqlUtils.cytosolID ==> sparqlUtils.luminalID and channel: ", yvalue, cyvalue);
                }
            }

            /*  Basolateral Membrane */
            if (mediator_fma == sparqlUtils.basolateralID) {
                // case 1
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.interstitialID) &&
                    (((src_fma2 == "" && snk_fma2 == "") && (src_fma3 == "" && snk_fma3 == "")) || (src_fma2 == sparqlUtils.cytosolID && snk_fma2 == sparqlUtils.interstitialID))) {

                    console.log("case 1 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID: ", yvalueb, cyvalueb);

                    var lineg = newg.append("g").data([{x: xvalue + width, y: yvalueb}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue + lineLen + 10 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10 + width, y: yvalueb + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue + width, y: cyvalueb}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "orange")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10 + width, y: yvalueb + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;

                    console.log("case 1 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID: ", yvalueb, cyvalueb);
                }

                // case 2
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.cytosolID) &&
                    ((src_fma2 == "" && snk_fma2 == "") || (src_fma2 == sparqlUtils.interstitialID && snk_fma2 == sparqlUtils.cytosolID))) {

                    // line 1
                    var lineg = newg.append("g").data([{x: xvalue + width, y: yvalueb}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue - 30 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // line 3
                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - textWidth - 10 + width, y: yvalueb + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    // circle
                    var linegcircle = lineg.append("g").data([{x: cxvalue + width, y: cyvalueb}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "orange")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                            s
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    // line 2
                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - textWidth - 10 + width, y: yvalueb + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;
                }

                // case 3
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.interstitialID) && (src_fma2 == sparqlUtils.interstitialID && snk_fma2 == sparqlUtils.cytosolID)) {
                    var lineg = newg.append("g").data([{x: xvalue + width, y: yvalueb}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue + lineLen + 10 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - 30 + width, y: yvalueb + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue + width, y: cyvalueb}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "orange")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - 30 + width, y: yvalueb + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;
                }

                // case 4
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.cytosolID) && (src_fma2 == sparqlUtils.cytosolID && snk_fma2 == sparqlUtils.interstitialID)) {
                    var lineg = newg.append("g").data([{x: xvalue + width, y: yvalueb}]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{x: xvalue - 30 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius}]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10 + width, y: yvalueb + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{x: cxvalue + width, y: cyvalueb}]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "orange")
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{x: xvalue + width, y: yvalueb + radius * 2}]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10 + width, y: yvalueb + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;
                }

                // case 5
                if ((src_fma == sparqlUtils.cytosolID && snk_fma == sparqlUtils.interstitialID) && (textvalue2 == "channel")) {

                    console.log("case 5 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvalueb, cyvalueb);

                    var polygong = newg.append("g").data([{x: xvalue - 5 + width, y: yvalueb}]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{x: xvalue + lineLen + 10 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5 + width) + "," + (yvalueb - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5 + width;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvalueb - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    var polygontext = polygong.append("g").data([{x: xvalue + 12 + width, y: yvalueb + 4}]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;

                    console.log("case 5 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvalueb, cyvalueb);
                }

                // case 6
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.cytosolID) && (textvalue2 == "channel")) {

                    console.log("case 6 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvalueb, cyvalueb);

                    var polygong = newg.append("g").data([{x: xvalue - 5 + width, y: yvalueb}]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{x: xvalue - 30 + width, y: yvalueb + 5}]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5 + width) + "," + (yvalueb - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.basolateralID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5 + width;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvalueb - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    var polygontext = polygong.append("g").data([{x: xvalue + 12 + width, y: yvalueb + 4}]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;

                    console.log("case 6 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvalueb, cyvalueb);
                }
            }

            /*  Capillary Membrane */
            if (mediator_fma == sparqlUtils.capillaryID) {
                // case 1
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.bloodCapillary) &&
                    ((src_fma2 == "" && snk_fma2 == "") || (src_fma2 == sparqlUtils.interstitialID && snk_fma2 == sparqlUtils.bloodCapillary))) {

                    console.log("case 1 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID: ", yvalueb, cyvalueb);

                    var lineg = newg.append("g").data([{
                        x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{
                        x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius
                        }]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{
                        x: cxvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: cyvaluec
                    }]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "darkred")
                        .attr("opacity", 0.6)
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "white")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2
                        }]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;

                    console.log("case 1 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID: ", yvaluec, cyvaluec);
                }

                // case 2
                if ((src_fma == sparqlUtils.bloodCapillary && snk_fma == sparqlUtils.interstitialID) &&
                    ((src_fma2 == "" && snk_fma2 == "") || (src_fma2 == sparqlUtils.bloodCapillary && snk_fma2 == sparqlUtils.interstitialID))) {
                    var lineg = newg.append("g").data([{
                        x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{
                        x: xvalue - 30 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius
                        }]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - textWidth - 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{
                        x: cxvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: cyvaluec
                    }]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "darkred")
                        .attr("opacity", 0.6)
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "white")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2
                        }]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - textWidth - 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;
                }

                // case 3
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.bloodCapillary) && (src_fma2 == sparqlUtils.bloodCapillary && snk_fma2 == sparqlUtils.interstitialID)) {
                    var lineg = newg.append("g").data([{
                        x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{
                        x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius
                        }]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue - 30 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{
                        x: cxvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: cyvaluec
                    }]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "darkred")
                        .attr("opacity", 0.6)
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "white")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2
                        }]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-start", "url(#start)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue - 30 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;
                }

                // case 4
                if ((src_fma == sparqlUtils.bloodCapillary && snk_fma == sparqlUtils.interstitialID) && (src_fma2 == sparqlUtils.interstitialID && snk_fma2 == sparqlUtils.bloodCapillary)) {
                    var lineg = newg.append("g").data([{
                        x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = lineg.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + lineLen;
                            return d.x + lineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = lineg.append("g").data([{
                        x: xvalue - 30 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    if (textvalue3 == "flux") {
                        linewithlineg3[i] = "";
                        linewithtextg3[i] = "";
                        dx1line3[i] = "";
                        dy1line3[i] = "";
                        dx2line3[i] = "";
                        dy2line3[i] = "";
                        dxtext3[i] = "";
                        dytext3[i] = "";
                    }

                    if (mediator_pr == sparqlUtils.nkcc1) {
                        var lineg3 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius
                        }]);
                        linewithlineg3[i] = lineg3.append("line")
                            .attr("id", "linewithlineg3" + tempID)
                            .attr("x1", function (d) {
                                dx1line3[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line3[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line3[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line3[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext3 = lineg3.append("g").data([{
                            x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius + markerHeight
                        }]);
                        linewithtextg3[i] = linegtext3.append("text")
                            .attr("id", "linewithtextg3" + tempID)
                            .attr("x", function (d) {
                                dxtext3[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext3[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text3);
                    }

                    var linegcircle = lineg.append("g").data([{
                        x: cxvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: cyvaluec
                    }]);
                    circlewithlineg[i] = linegcircle.append("circle")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = d.x;
                            return d.x;
                        })
                        .attr("cy", function (d) {
                            dy[i] = d.y + radius;
                            return d.y + radius;
                        })
                        .attr("r", radius)
                        .attr("fill", "darkred")
                        .attr("opacity", 0.6)
                        .attr("stroke-width", 20)
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    // protein name inside this circle
                    circlewithtext[i] = linegcircle.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x - 15;
                            return d.x - 15;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y + 23;
                            return d.y + 23;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "white")
                        .attr("fontWeight", "bold")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    if (textvalue2 == "flux") {
                        linewithlineg2[i] = "";
                        linewithtextg2[i] = "";
                        dx1line2[i] = "";
                        dy1line2[i] = "";
                        dx2line2[i] = "";
                        dy2line2[i] = "";
                        dxtext2[i] = "";
                        dytext2[i] = "";
                    }

                    if (textvalue2 != "flux") {
                        var lineg2 = lineg.append("g").data([{
                            x: xvalue + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2
                        }]);
                        linewithlineg2[i] = lineg2.append("line")
                            .attr("id", "linewithlineg2" + tempID)
                            .attr("x1", function (d) {
                                dx1line2[i] = d.x;
                                return d.x;
                            })
                            .attr("y1", function (d) {
                                dy1line2[i] = d.y;
                                return d.y;
                            })
                            .attr("x2", function (d) {
                                dx2line2[i] = d.x + lineLen;
                                return d.x + lineLen;
                            })
                            .attr("y2", function (d) {
                                dy2line2[i] = d.y;
                                return d.y;
                            })
                            .attr("stroke", "black")
                            .attr("stroke-width", 2)
                            .attr("marker-end", "url(#end)")
                            .attr("cursor", "pointer");

                        var linegtext2 = lineg2.append("g").data([{
                            x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                            y: yvaluec + radius * 2 + markerHeight
                        }]);
                        linewithtextg2[i] = linegtext2.append("text")
                            .attr("id", "linewithtextg2" + tempID)
                            .attr("x", function (d) {
                                dxtext2[i] = d.x;
                                return d.x;
                            })
                            .attr("y", function (d) {
                                dytext2[i] = d.y;
                                return d.y;
                            })
                            .attr("font-family", "Times New Roman")
                            .attr("font-size", "12px")
                            .attr("font-weight", "bold")
                            .attr("fill", "red")
                            .attr("cursor", "pointer")
                            .text(solute_text2);
                    }

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;
                }

                // case 5
                if ((src_fma == sparqlUtils.interstitialID && snk_fma == sparqlUtils.bloodCapillary) && (textvalue2 == "channel")) {

                    console.log("case 5 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvaluec, cyvaluec);

                    var polygong = newg.append("g").data([{
                        x: xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-end", "url(#end)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{
                        x: xvalue + lineLen + 10 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20) + "," + (yvaluec - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvaluec - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    var polygontext = polygong.append("g").data([{
                        x: xvalue + 12 + width + (w - (w / 3 + width + 30)) + 40 + 15,
                        y: yvaluec + 4
                    }]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;

                    console.log("case 5 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvaluec, cyvaluec);
                }

                // case 6
                if ((src_fma == sparqlUtils.bloodCapillary && snk_fma == sparqlUtils.interstitialID) && (textvalue2 == "channel")) {

                    console.log("case 6 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvaluec, cyvaluec);

                    var polygong = newg.append("g").data([{
                        x: xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec
                    }]);
                    linewithlineg[i] = polygong.append("line")
                        .attr("id", "linewithlineg" + tempID)
                        .attr("x1", function (d) {
                            dx1line[i] = d.x;
                            return d.x;
                        })
                        .attr("y1", function (d) {
                            dy1line[i] = d.y;
                            return d.y;
                        })
                        .attr("x2", function (d) {
                            dx2line[i] = d.x + polygonlineLen;
                            return d.x + polygonlineLen;
                        })
                        .attr("y2", function (d) {
                            dy2line[i] = d.y;
                            return d.y;
                        })
                        .attr("stroke", "black")
                        .attr("stroke-width", 2)
                        .attr("marker-start", "url(#start)")
                        .attr("cursor", "pointer");

                    var linegtext = polygong.append("g").data([{
                        x: xvalue - 30 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 5
                    }]);
                    linewithtextg[i] = linegtext.append("text")
                        .attr("id", "linewithtextg" + tempID)
                        .attr("x", function (d) {
                            dxtext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dytext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-family", "Times New Roman")
                        .attr("font-size", "12px")
                        .attr("font-weight", "bold")
                        .attr("fill", "red")
                        .attr("cursor", "pointer")
                        .text(solute_text);

                    // Polygon
                    circlewithlineg[i] = polygong.append("g").append("polygon")
                        .attr("transform", "translate(" + (xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20) + "," + (yvaluec - 30) + ")")
                        .attr("id", function (d) {
                            return [
                                model_entity, model_entity2, model_entity3,
                                textvalue, textvalue2, textvalue3,
                                src_fma, snk_fma, src_fma2, snk_fma2, src_fma3, snk_fma3,
                                mediator_fma, mediator_pr,
                                solute_chebi, solute_chebi2, solute_chebi3, solute_text, solute_text2, solute_text3,
                                mediator_pr_text, mediator_pr_text_syn, protein_name
                            ];
                        })
                        .attr("index", tempID)
                        .attr("membrane", sparqlUtils.capillaryID)
                        .attr("cx", function (d) {
                            dx[i] = xvalue - 5 + width + (w - (w / 3 + width + 30)) + 40 + 20;
                            return dx[i];
                        })
                        .attr("cy", function (d) {
                            dy[i] = yvaluec - 30;
                            return dy[i];
                        })
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30")
                        .attr("fill", "yellow")
                        .attr("stroke", "black")
                        .attr("stroke-linecap", "round")
                        .attr("stroke-linejoin", "round")
                        .attr("cursor", "move")
                        .on("mouseover", function () {
                            tooltipFunc(div, d3.select(this)._groups[0][0].id, d3.mouse(this)[0], d3.mouse(this)[1]);
                        });

                    var polygontext = polygong.append("g").data([{
                        x: xvalue + 12 + width + (w - (w / 3 + width + 30)) + 40 + 20,
                        y: yvaluec + 4
                    }]);
                    circlewithtext[i] = polygontext.append("text")
                        .attr("id", "circlewithtext" + tempID)
                        .attr("x", function (d) {
                            dxcircletext[i] = d.x;
                            return d.x;
                        })
                        .attr("y", function (d) {
                            dycircletext[i] = d.y;
                            return d.y;
                        })
                        .attr("font-size", "10px")
                        .attr("fill", "red")
                        .attr("cursor", "move")
                        .text(mediator_pr_text_syn);

                    linewithlineg2[i] = "";
                    linewithtextg2[i] = "";
                    dx1line2[i] = "";
                    dy1line2[i] = "";
                    dx2line2[i] = "";
                    dy2line2[i] = "";
                    dxtext2[i] = "";
                    dytext2[i] = "";

                    linewithlineg3[i] = "";
                    linewithtextg3[i] = "";
                    dx1line3[i] = "";
                    dy1line3[i] = "";
                    dx2line3[i] = "";
                    dy2line3[i] = "";
                    dxtext3[i] = "";
                    dytext3[i] = "";

                    if (msaveIDflag == true) {
                        msaveIDflag = false;
                        break;
                    }

                    // increment y-axis of line and circle
                    yvaluec += ydistance;
                    cyvaluec += ydistance;

                    console.log("case 6 2 sparqlUtils.cytosolID ==> sparqlUtils.interstitialID and channel: ", yvaluec, cyvaluec);
                }
            }

            /*  Paracellular Membrane */
            if (textvalue2 == "diffusiveflux") {
                var lineg = newg.append("g").data([{x: xpvalue, y: ypvalue + 5}]);
                linewithtextg[i] = lineg.append("text")
                    .attr("id", "linewithtextg" + tempID)
                    .attr("index", tempID)
                    .attr("membrane", sparqlUtils.paracellularID)
                    .attr("x", function (d) {
                        dxtext[i] = d.x;
                        return d.x;
                    })
                    .attr("y", function (d) {
                        dytext[i] = d.y;
                        return d.y;
                    })
                    .attr("font-family", "Times New Roman")
                    .attr("font-size", "12px")
                    .attr("font-weight", "bold")
                    .attr("fill", "red")
                    .attr("cursor", "move")
                    .text(solute_text);

                var linetextg = lineg.append("g").data([{x: xpvalue + 25, y: ypvalue}]);
                linewithlineg[i] = linetextg.append("line")
                    .attr("id", "linewithlineg" + tempID)
                    .attr("index", tempID)
                    .attr("x1", function (d) {
                        dx1line[i] = d.x;
                        return d.x;
                    })
                    .attr("y1", function (d) {
                        dy1line[i] = d.y;
                        return d.y;
                    })
                    .attr("x2", function (d) {
                        dx2line[i] = d.x + pcellLen;
                        return d.x + pcellLen;
                    })
                    .attr("y2", function (d) {
                        dy2line[i] = d.y;
                        return d.y;
                    })
                    .attr("stroke", "black")
                    .attr("stroke-width", 2)
                    .attr("marker-end", "url(#end)")
                    .attr("cursor", "move");

                dxcircletext[i] = "";
                dycircletext[i] = "";
                circlewithlineg[i] = "";
                linewithlineg2[i] = "";
                linewithtextg2[i] = "";
                dx1line2[i] = "";
                dy1line2[i] = "";
                dx2line2[i] = "";
                dy2line2[i] = "";
                dx[i] = "";
                dy[i] = "";
                dxtext2[i] = "";
                dytext2[i] = "";

                linewithlineg3[i] = "";
                linewithtextg3[i] = "";
                dx1line3[i] = "";
                dy1line3[i] = "";
                dx2line3[i] = "";
                dy2line3[i] = "";
                dxtext3[i] = "";
                dytext3[i] = "";

                ypvalue += ypdistance;
            }
        }
    };

    // INITIAL call
    combinedMemFunc(0, msaveIDflag);

    var lineb_id, circle_id, cx, cy, lt, gt;

    var dragcircle = function () {

        // div.style("display", "none");

        icircleGlobal = $(this).attr("index");
        cthis = this;

        var dx = d3.event.dx;
        var dy = d3.event.dy;

        if ($(this).prop("tagName") == "circle") {
            d3.select(this)
                .attr("cx", parseFloat($(this).prop("cx").baseVal.value) + dx)
                .attr("cy", parseFloat($(this).prop("cy").baseVal.value) + dy);
        }

        if ($(this).prop("tagName") == "text") {
            circlewithlineg[icircleGlobal] // text (probably for paracellular flux)
                .attr("x", parseFloat(d3.select("#" + "linewithtextg" + icircleGlobal).attr("x")) + dx)
                .attr("y", parseFloat(d3.select("#" + "linewithtextg" + icircleGlobal).attr("y")) + dy);
        }

        if ($(this).prop("tagName") == "polygon") {
            var xNew = [], yNew = [], points = "";
            var pointsLen = d3.select(this)._groups[0][0].points.length;

            for (var i = 0; i < pointsLen; i++) {
                xNew[i] = parseFloat(d3.select(this)._groups[0][0].points[i].x) + dx;
                yNew[i] = parseFloat(d3.select(this)._groups[0][0].points[i].y) + dy;

                points = points.concat("" + xNew[i] + "").concat(",").concat("" + yNew[i] + "");

                if (i != pointsLen - 1)
                    points = points.concat(" ");
            }

            d3.select(this).attr("points", points);
        }

        if (circlewithtext[icircleGlobal] != undefined) {
            if (circlewithtext[icircleGlobal] != "") {
                // text inside circle
                circlewithtext[icircleGlobal]
                    .attr("x", parseFloat(d3.select("#" + "circlewithtext" + icircleGlobal).attr("x")) + dx)
                    .attr("y", parseFloat(d3.select("#" + "circlewithtext" + icircleGlobal).attr("y")) + dy);
            }
        }

        if (linewithlineg[icircleGlobal] != undefined) {
            if (linewithlineg[icircleGlobal] != "") {
                // line 1
                linewithlineg[icircleGlobal]
                    .attr("x1", parseFloat(d3.select("#" + "linewithlineg" + icircleGlobal).attr("x1")) + dx)
                    .attr("y1", parseFloat(d3.select("#" + "linewithlineg" + icircleGlobal).attr("y1")) + dy)
                    .attr("x2", parseFloat(d3.select("#" + "linewithlineg" + icircleGlobal).attr("x2")) + dx)
                    .attr("y2", parseFloat(d3.select("#" + "linewithlineg" + icircleGlobal).attr("y2")) + dy);
            }
        }

        if (linewithtextg[icircleGlobal] != undefined) {
            if (linewithtextg[icircleGlobal] != "") {
                // text 1
                linewithtextg[icircleGlobal]
                    .attr("x", parseFloat(d3.select("#" + "linewithtextg" + icircleGlobal).attr("x")) + dx)
                    .attr("y", parseFloat(d3.select("#" + "linewithtextg" + icircleGlobal).attr("y")) + dy);
            }
        }

        if (linewithlineg2[icircleGlobal] != undefined) {
            if (linewithlineg2[icircleGlobal] != "") {
                // line 2
                linewithlineg2[icircleGlobal]
                    .attr("x1", parseFloat(d3.select("#" + "linewithlineg2" + icircleGlobal).attr("x1")) + dx)
                    .attr("y1", parseFloat(d3.select("#" + "linewithlineg2" + icircleGlobal).attr("y1")) + dy)
                    .attr("x2", parseFloat(d3.select("#" + "linewithlineg2" + icircleGlobal).attr("x2")) + dx)
                    .attr("y2", parseFloat(d3.select("#" + "linewithlineg2" + icircleGlobal).attr("y2")) + dy);
            }
        }

        if (linewithtextg2[icircleGlobal] != undefined) {
            if (linewithtextg2[icircleGlobal] != "") {
                // text 2
                linewithtextg2[icircleGlobal]
                    .attr("x", parseFloat(d3.select("#" + "linewithtextg2" + icircleGlobal).attr("x")) + dx)
                    .attr("y", parseFloat(d3.select("#" + "linewithtextg2" + icircleGlobal).attr("y")) + dy);
            }
        }

        if (linewithlineg3[icircleGlobal] != undefined) {
            if (linewithlineg3[icircleGlobal] != "") {
                // line 3
                linewithlineg3[icircleGlobal]
                    .attr("x1", parseFloat(d3.select("#" + "linewithlineg3" + icircleGlobal).attr("x1")) + dx)
                    .attr("y1", parseFloat(d3.select("#" + "linewithlineg3" + icircleGlobal).attr("y1")) + dy)
                    .attr("x2", parseFloat(d3.select("#" + "linewithlineg3" + icircleGlobal).attr("x2")) + dx)
                    .attr("y2", parseFloat(d3.select("#" + "linewithlineg3" + icircleGlobal).attr("y2")) + dy);
            }
        }

        if (linewithtextg3[icircleGlobal] != undefined) {
            if (linewithtextg3[icircleGlobal] != "") {
                // text 3
                linewithtextg3[icircleGlobal]
                    .attr("x", parseFloat(d3.select("#" + "linewithtextg3" + icircleGlobal).attr("x")) + dx)
                    .attr("y", parseFloat(d3.select("#" + "linewithtextg3" + icircleGlobal).attr("y")) + dy);
            }
        }

        var membrane = $(cthis).attr("membrane");

        for (var i = 0; i < $("line").length; i++) {
            if ($("line")[i].id == membrane && i == 0) {
                mindex = 1;
                break;
            }
            if ($("line")[i].id == membrane && i == 1) {
                mindex = 0;
                break;
            }
        }

        // detect basolateralMembrane - 0 apical, 1 basolateralMembrane
        var lineb_x = $($("line")[mindex]).prop("x1").baseVal.value;

        if ($(this).prop("tagName") == "circle") {
            cx = $(this).prop("cx").baseVal.value;
            cy = $(this).prop("cy").baseVal.value;
        }

        if ($(this).prop("tagName") == "polygon") {
            cx = event.x;
            cy = event.y;
        }

        // paracellular
        if ($(this).prop("tagName") == "text") { // OR if ($(this).attr("membrane") == sparqlUtils.paracellularID) {}
            cx = $(this).attr("x");
            cy = $(this).attr("y");
        }

        lineb_id = $($("line")[mindex]).prop("id");
        circle_id = $(this).prop("id").split(",");

        // determine position on apical or basolateral membrane
        if ($(this).prop("tagName") == "circle") {
            lt = lineb_x - radius / 2;
            gt = lineb_x + radius / 2;
        }
        else if ($(this).prop("tagName") == "polygon") {
            lt = lineb_x + polygonlineLen + 40; //  + 60
            gt = lineb_x + polygonlineLen * 2; //  + 60
        }

        if ((cx >= lt && cx <= gt) && (lineb_id != circle_id)) {
            $($("line")[mindex]).css("stroke", "yellow");
        }
        else {
            if (mindex == 1)
                $($("line")[mindex]).css("stroke", "orange");

            else
                $($("line")[mindex]).css("stroke", "green");
        }
    };

    // remaining part of dropcircle function
    var dropcircleExtended = function (membrane) {

        console.log("dropcircleExtended combinedMembrane: ", combinedMembrane);
        console.log("dropcircleExtended membrane: ", membrane);

        var query;

        query = "SELECT ?located_in " +
            "WHERE { GRAPH ?g { <" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#located_in> ?located_in . " +
            "}}";

        // location of that cellml model
        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonLocatedin) {

                // console.log("jsonLocatedin: ", jsonLocatedin);

                var jsonLocatedinCounter = 0;
                // Type of model - kidney, lungs, etc
                for (i = 0; i < jsonLocatedin.results.bindings.length; i++) {
                    for (j = 0; j < sparqlUtils.organ.length; j++) {
                        for (var k = 0; k < sparqlUtils.organ[j].key.length; k++) {
                            if (jsonLocatedin.results.bindings[i].located_in.value == sparqlUtils.organ[j].key[k].key)
                                jsonLocatedinCounter++;

                            if (jsonLocatedinCounter == jsonLocatedin.results.bindings.length) {
                                typeOfModel = sparqlUtils.organ[j].value;
                                organIndex = j;
                                break;
                            }
                        }
                        if (jsonLocatedinCounter == jsonLocatedin.results.bindings.length)
                            break;
                    }
                    if (jsonLocatedinCounter == jsonLocatedin.results.bindings.length)
                        break;
                }

                locationOfModel = "";
                jsonLocatedinCounter = 0;
                // location of the above type of model
                for (i = 0; i < jsonLocatedin.results.bindings.length; i++) {
                    for (j = 0; j < sparqlUtils.organ[organIndex].key.length; j++) {
                        if (jsonLocatedin.results.bindings[i].located_in.value == sparqlUtils.organ[organIndex].key[j].key) {
                            locationOfModel += sparqlUtils.organ[organIndex].key[j].value;

                            if (i == jsonLocatedin.results.bindings.length - 1)
                                locationOfModel += ".";
                            else
                                locationOfModel += ", ";

                            jsonLocatedinCounter++;
                        }
                        if (jsonLocatedinCounter == jsonLocatedin.results.bindings.length)
                            break;
                    }
                    if (jsonLocatedinCounter == jsonLocatedin.results.bindings.length)
                        break;
                }

                // related cellml model, i.e. kidney, lungs, etc
                query = "SELECT ?cellmlmodel ?located_in " +
                    "WHERE { GRAPH ?g { ?cellmlmodel <http://www.obofoundry.org/ro/ro.owl#located_in> ?located_in. " +
                    "}}";

                ajaxUtils.sendPostRequest(
                    sparqlUtils.endpoint,
                    query,
                    function (jsonRelatedModel) {

                        for (i = 0; i < jsonRelatedModel.results.bindings.length; i++) {
                            for (j = 0; j < sparqlUtils.organ[organIndex].key.length; j++) {
                                if (jsonRelatedModel.results.bindings[i].located_in.value == sparqlUtils.organ[organIndex].key[j].key) {
                                    // parsing
                                    var tempModel = jsonRelatedModel.results.bindings[i].cellmlmodel.value;
                                    var indexOfHash = tempModel.search("#");
                                    tempModel = tempModel.slice(0, indexOfHash);

                                    relatedModel.push(tempModel);

                                    break;
                                }
                            }
                        }

                        relatedModel = miscellaneous.uniqueify(relatedModel);

                        // kidney, lungs, heart, etc
                        // console.log("relatedModel: ", relatedModel);

                        var alternativeCellmlArray = [], tempcellmlModel,
                            indexOfHash = cellmlModel.search("#");
                        tempcellmlModel = cellmlModel.slice(0, indexOfHash);
                        for (i = 0; i < relatedModel.length; i++) {
                            if (relatedModel[i] != tempcellmlModel) {
                                alternativeCellmlArray.push(relatedModel[i]);
                            }
                        }

                        // console.log("relatedModel: ", relatedModel);

                        relatedCellmlModel(relatedModel, alternativeCellmlArray, membrane);

                    }, true);
            }, true);
    };

    var dropcircle = function () {

        console.log("dropcircle!");

        // div.style("display", "none");

        if ((cx >= lt && cx <= gt) && (lineb_id != circle_id)) {

            if ((cx >= lt && cx <= gt) && (lineb_id != circle_id)) {

                $($("line")[mindex]).css("stroke", "yellow");

                var m = new welcomeModal({
                    id: "myWelcomeModal",
                    header: "Are you sure you want to move?",
                    footer: "My footer",
                    footerCloseButton: "No",
                    footerSaveButton: "Yes"
                });

                $("#myWelcomeModal").modal({backdrop: "static", keyboard: false});
                m.show();

                console.log("BEFORE function welcomeModal (options): ", combinedMembrane);

                function welcomeModal(options) {
                    var $this = this;

                    options = options ? options : {};
                    $this.options = {};
                    $this.options.header = options.header !== undefined ? options.header : false;
                    $this.options.footer = options.footer !== undefined ? options.footer : false;
                    $this.options.closeButton = options.closeButton !== undefined ? options.closeButton : true;
                    $this.options.footerCloseButton = options.footerCloseButton !== undefined ? options.footerCloseButton : false;
                    $this.options.footerSaveButton = options.footerSaveButton !== undefined ? options.footerSaveButton : false;
                    $this.options.id = options.id !== undefined ? options.id : "myWelcomeModal";

                    /**
                     * Append modal window html to body
                     */
                    $this.createModal = function () {
                        $('body').append('<div id="' + $this.options.id + '" class="modal fade"></div>');
                        $($this.selector).append('<div class="modal-dialog custom-modal"><div class="modal-content"></div></div>');
                        var win = $('.modal-content', $this.selector);

                        if ($this.options.header) {
                            win.append('<div class="modal-header"><h4 class="modal-title" lang="de"></h4></div>');

                            if ($this.options.closeButton) {
                                win.find('.modal-header').prepend('<button type="button" ' +
                                    'class="close" data-dismiss="modal">&times;</button>');
                            }
                        }

                        if ($this.options.footer) {
                            win.append('<div class="modal-footer"></div>');

                            if ($this.options.footerCloseButton) {
                                win.find('.modal-footer').append('<a data-dismiss="modal" id="closeID" href="#" ' +
                                    'class="btn btn-default" lang="de">' + $this.options.footerCloseButton + '</a>');
                            }

                            if ($this.options.footerSaveButton) {
                                win.find('.modal-footer').append('<a data-dismiss="modal" id="saveID" href="#" ' +
                                    'class="btn btn-default" lang="de">' + $this.options.footerSaveButton + '</a>');
                            }
                        }

                        // No button clicked!!
                        $("#closeID").click(function (event) {
                            console.log("No clicked!");
                            console.log("first close button clicked!");

                            moveBack();
                            membraneColorBack();

                            // reinitialization
                            reinitVariable();
                            return;
                        });

                        // Yes button clicked!!
                        $("#saveID").click(function (event) {

                            console.log("BEFORE Yes clicked: ", combinedMembrane);

                            console.log("Yes clicked!");
                            console.log("first save button clicked!");

                            var m = new Modal({
                                id: "myModal",
                                header: "Recommender System",
                                footer: "My footer",
                                footerCloseButton: "Close",
                                footerSaveButton: "Save"
                            });

                            $("#myModal").modal({backdrop: "static", keyboard: false});
                            m.getBody().html("<div id=modalBody></div>");
                            m.show();

                            miscellaneous.showLoading("#modalBody");

                            var circleID = $(cthis).prop("id").split(",");
                            console.log("circleID in myWelcomeModal: ", circleID);

                            // parsing
                            cellmlModel = circleID[0];
                            var indexOfHash = cellmlModel.search("#"), query;
                            cellmlModel = cellmlModel.slice(0, indexOfHash);

                            cellmlModel = cellmlModel + "#" + cellmlModel.slice(0, cellmlModel.indexOf("."));

                            console.log("cellmlModel: ", cellmlModel);
                            query = sparqlUtils.circleIDmyWelcomeWindowSPARQL(circleID, cellmlModel);

                            console.log("query: ", query);

                            // protein name
                            ajaxUtils.sendPostRequest(
                                sparqlUtils.endpoint,
                                query,
                                function (jsonModel) {

                                    console.log("jsonModel: ", jsonModel);

                                    if (jsonModel.results.bindings.length == 0)
                                        proteinName = undefined;
                                    else
                                        proteinName = jsonModel.results.bindings[0].Protein.value;

                                    var endpointprOLS;
                                    if (proteinName != undefined) {
                                        if (proteinName == sparqlUtils.epithelialcellID)
                                            endpointprOLS = sparqlUtils.abiOntoEndpoint + "/cl/terms?iri=" + proteinName;
                                        else if (proteinName.indexOf(sparqlUtils.partOfGOUri) != -1) {
                                            endpointprOLS = sparqlUtils.abiOntoEndpoint + "/go/terms?iri=" + proteinName;
                                        }
                                        else
                                            endpointprOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + proteinName;
                                    }
                                    else
                                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/pr";

                                    ajaxUtils.sendGetRequest(
                                        endpointprOLS,
                                        function (jsonPr) {

                                            var endpointgeneOLS;
                                            if (jsonPr._embedded == undefined || jsonPr._embedded.terms[0]._links.has_gene_template == undefined)
                                                endpointgeneOLS = sparqlUtils.abiOntoEndpoint + "/pr";
                                            else
                                                endpointgeneOLS = jsonPr._embedded.terms[0]._links.has_gene_template.href;

                                            ajaxUtils.sendGetRequest(
                                                endpointgeneOLS,
                                                function (jsonGene) {

                                                    var endpointspeciesOLS;
                                                    if (jsonPr._embedded == undefined || jsonPr._embedded.terms[0]._links.only_in_taxon == undefined)
                                                        endpointspeciesOLS = sparqlUtils.abiOntoEndpoint + "/pr";
                                                    else
                                                        endpointspeciesOLS = jsonPr._embedded.terms[0]._links.only_in_taxon.href;

                                                    ajaxUtils.sendGetRequest(
                                                        endpointspeciesOLS,
                                                        function (jsonSpecies) {

                                                            if (jsonPr._embedded == undefined)
                                                                proteinText = "Numerical model"; // Or undefined
                                                            else {
                                                                proteinText = jsonPr._embedded.terms[0].label;
                                                                proteinText = proteinText.slice(0, proteinText.indexOf("(") - 1);
                                                            }

                                                            if (jsonModel.results.bindings.length == 0)
                                                                biological_meaning = "";
                                                            else {
                                                                biological_meaning = jsonModel.results.bindings[0].Biological_meaning.value;

                                                                if (circleID[1] == "" && circleID[2] == "")
                                                                    biological_meaning2 = "";
                                                                else
                                                                    biological_meaning2 = jsonModel.results.bindings[0].Biological_meaning2.value;

                                                                if (circleID[2] == "")
                                                                    biological_meaning3 = "";
                                                                else
                                                                    biological_meaning3 = jsonModel.results.bindings[0].Biological_meaning3.value;
                                                            }

                                                            if (jsonSpecies._embedded == undefined)
                                                                speciesName = "Numerical model"; // Or undefined
                                                            else
                                                                speciesName = jsonSpecies._embedded.terms[0].label;

                                                            if (jsonGene._embedded == undefined)
                                                                geneName = "Numerical model"; // Or undefined
                                                            else {
                                                                geneName = jsonGene._embedded.terms[0].label;
                                                                geneName = geneName.slice(0, geneName.indexOf("(") - 1);
                                                            }

                                                            console.log("BEFORE dropcircleExtended combinedMembrane: ", combinedMembrane);
                                                            console.log("BEFORE dropcircleExtended circleID: ", circleID);
                                                            dropcircleExtended(circleID[12]);

                                                        }, true);
                                                }, true);
                                        }, true);
                                }, true);

                            jQuery(window).trigger("resize");

                            console.log("END OF WELCOME SAVE -> combinedMembrane: ", combinedMembrane);
                            // reinitialization
                            // reinitVariable();
                            // return;
                        });
                    };

                    /**
                     * Set header text. It makes sense only if the options.header is logical true.
                     * @param {String} html New header text.
                     */
                    $this.setHeader = function (html) {
                        $this.window.find(".modal-title").html(html);
                    };

                    /**
                     * Show modal window
                     */
                    $this.show = function () {
                        $this.window.modal("show");
                    };

                    $this.selector = "#" + $this.options.id;
                    if (!$($this.selector).length) {
                        $this.createModal();
                    }

                    $this.window = $($this.selector);
                    $this.setHeader($this.options.header);
                }
            }
            else {
                moveBack();

                if (mindex == 1)
                    linebasolateral.transition().delay(1000).duration(1000).style("stroke", "orange");
                else
                    lineapical.transition().delay(1000).duration(1000).style("stroke", "green");
            }
        }
        else {
            moveBack();

            if (mindex == 1)
                $($("line")[mindex]).css("stroke", "orange");
            else
                $($("line")[mindex]).css("stroke", "green");
        }

        console.log("END of dropcircle combinedMembrane: ", combinedMembrane);
    };

    var dragcircleunchecked = function () {
        d3.select(this).classed("dragging", false);
    };

    // related kidney, lungs, etc model
    var relatedCellmlModel = function (relatedModel, alternativeCellmlArray, membrane) {

        var modelname, indexOfcellml, query;
        if (relatedModel[idProtein] == undefined) {
            modelname = undefined;
        }
        else {
            indexOfcellml = relatedModel[idProtein].search(".cellml");
            modelname = relatedModel[idProtein] + "#" + relatedModel[idProtein].slice(0, indexOfcellml);
        }

        // console.log("modelname in relatedCellmlModel: ", modelname);

        query = "SELECT ?Protein ?workspaceName " +
            "WHERE { GRAPH ?workspaceName { <" + modelname + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "}}";

        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonProtein) {

                var endpointprOLS;
                if (jsonProtein.results.bindings.length == 0)
                    endpointprOLS = sparqlUtils.abiOntoEndpoint + "/pr";
                else {
                    var pr_uri = jsonProtein.results.bindings[0].Protein.value;
                    if (pr_uri == sparqlUtils.epithelialcellID)
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/cl/terms?iri=" + pr_uri;
                    else if (pr_uri.indexOf(sparqlUtils.partOfGOUri) != -1) {
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/go/terms?iri=" + pr_uri;
                    }
                    else
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + pr_uri;
                }

                ajaxUtils.sendGetRequest(
                    endpointprOLS,
                    function (jsonPr) {

                        if (jsonProtein.results.bindings.length != 0) {

                            relatedModelObj.push({
                                protein: jsonProtein.results.bindings[0].Protein.value,
                                prname: jsonPr._embedded.terms[0].label,
                                workspaceName: jsonProtein.results.bindings[0].workspaceName.value,
                                modelEntity: relatedModel[idProtein] // relatedModel which have #protein
                            });
                        }

                        if (idProtein == relatedModel.length - 1) {

                            console.log("relatedCellmlModel combinedMembrane: ", combinedMembrane);

                            alternativeCellmlModel(alternativeCellmlArray, membrane);
                            return;
                        }

                        idProtein++;

                        relatedCellmlModel(relatedModel, alternativeCellmlArray, membrane);
                    },
                    true);
            },
            true);
    };

    // alternative model of a dragged transporter, e.g. rat NHE3, mouse NHE3
    var alternativeCellmlModel = function (alternativeCellmlArray, membrane) {

        var modelname, indexOfcellml, query, endpointOLS;
        if (alternativeCellmlArray[idAltProtein] == undefined) {
            modelname = undefined;
        }
        else {
            indexOfcellml = alternativeCellmlArray[idAltProtein].search(".cellml");
            modelname = alternativeCellmlArray[idAltProtein] + "#" +
                alternativeCellmlArray[idAltProtein].slice(0, indexOfcellml);
        }
        // console.log("modelname in alternativeCellmlModel: ", modelname);

        query = "SELECT ?Protein ?workspaceName " +
            "WHERE { GRAPH ?workspaceName { <" + modelname + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "}}";

        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonAltProtein) {

                if (jsonAltProtein.results.bindings.length == 0)
                    endpointOLS = sparqlUtils.abiOntoEndpoint + "/pr";
                else {
                    var pr_uri = jsonAltProtein.results.bindings[0].Protein.value;
                    if (pr_uri == sparqlUtils.epithelialcellID)
                        endpointOLS = sparqlUtils.abiOntoEndpoint + "/cl/terms?iri=" + pr_uri;
                    else if (pr_uri.indexOf(sparqlUtils.partOfGOUri) != -1) {
                        endpointOLS = sparqlUtils.abiOntoEndpoint + "/go/terms?iri=" + pr_uri;
                    }
                    else
                        endpointOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + pr_uri;
                }

                ajaxUtils.sendGetRequest(
                    endpointOLS,
                    function (jsonOLSObj) {

                        if (jsonAltProtein.results.bindings.length != 0) {

                            if (jsonAltProtein.results.bindings[0].Protein.value == proteinName) { // comment this

                                alternativeModelObj.push({
                                    protein: jsonAltProtein.results.bindings[0].Protein.value,
                                    prname: jsonOLSObj._embedded.terms[0].label,
                                    modelEntity: modelname,
                                    workspaceName: jsonAltProtein.results.bindings[0].workspaceName.value
                                });
                            }
                        }

                        idAltProtein++;

                        if (idAltProtein == alternativeCellmlArray.length - 1) {

                            // If apical Then basolateral and vice versa
                            var membraneName;
                            if (membrane == sparqlUtils.apicalID) {
                                membrane = sparqlUtils.basolateralID;
                                membraneName = "Basolateral membrane";

                                console.log("membrane TESTING: ", membrane);
                            }
                            else if (membrane == sparqlUtils.basolateralID) {
                                membrane = sparqlUtils.apicalID;
                                membraneName = "Apical membrane";

                                console.log("membrane TESTING: ", membrane);
                            }

                            console.log("alternativeCellmlArray combinedMembrane: ", combinedMembrane);
                            console.log("membrane: ", membrane);

                            relatedMembrane(membrane, membraneName, 1);
                            return;
                        }

                        alternativeCellmlModel(alternativeCellmlArray, membrane);
                    },
                    true);
            }, true);
    };

    var makecotransporter = function (membrane1, membrane2, fluxList, membraneName, flag) {

        var query = sparqlUtils.makecotransporterSPARQL(membrane1, membrane2);
        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonObj) {

                // console.log("jsonObj in makecotransporter: ", jsonObj);
                var tempProtein = [], tempFMA = [];
                for (var m = 0; m < jsonObj.results.bindings.length; m++) {
                    var tmpPro = jsonObj.results.bindings[m].med_entity_uri.value;
                    var tmpFMA = jsonObj.results.bindings[m].med_entity_uri.value;

                    if (tmpPro.indexOf("http://purl.obolibrary.org/obo/PR_") != -1) {
                        tempProtein.push(jsonObj.results.bindings[m].med_entity_uri.value);
                    }

                    if (tmpFMA.indexOf("http://identifiers.org/fma/FMA:") != -1) {
                        tempFMA.push(jsonObj.results.bindings[m].med_entity_uri.value);
                    }
                }

                // remove duplicate protein ID
                // TODO: probably no need to do this!
                tempProtein = tempProtein.filter(function (item, pos) {
                    return tempProtein.indexOf(item) == pos;
                });
                tempFMA = tempFMA.filter(function (item, pos) {
                    return tempFMA.indexOf(item) == pos;
                });

                // console.log("tempProtein, and fma: ", tempProtein, tempFMA);

                for (var i in tempProtein) {
                    // cotransporter
                    if (tempProtein.length != 0 && tempFMA.length != 0) {
                        cotransporterList.push({
                            "membrane1": membrane1,
                            "membrane2": membrane2,
                            "membrane3": ""
                        });
                    }
                }

                counter++;

                if (counter == miscellaneous.iteration(fluxList.length)) {

                    // delete cotransporter indices from fluxList
                    for (var i in cotransporterList) {
                        for (var j in fluxList) {
                            if (cotransporterList[i].membrane1 == fluxList[j] ||
                                cotransporterList[i].membrane2 == fluxList[j]) {

                                fluxList.splice(j, 1);
                            }
                        }
                    }

                    // make cotransproter in modelEntityObj
                    for (var i in cotransporterList) {
                        modelEntityObj.push({
                            "model_entity": cotransporterList[i].membrane1,
                            "model_entity2": cotransporterList[i].membrane2,
                            "model_entity3": cotransporterList[i].membrane3
                        });
                    }

                    // make flux in modelEntityObj
                    for (var i in fluxList) {
                        modelEntityObj.push({
                            "model_entity": fluxList[i],
                            "model_entity2": "",
                            "model_entity3": ""
                        });
                    }

                    console.log("makecotransporter: fluxList -> ", fluxList);
                    console.log("makecotransporter: cotransporterList -> ", cotransporterList);
                    console.log("makecotransporter: modelEntityObj -> ", modelEntityObj);

                    console.log("makecotransporter: combinedMembrane -> ", combinedMembrane);


                    relatedMembraneModel(membraneName, cotransporterList, flag);
                }
            },
            true);
    };

    var maketritransporter = function (membrane1, membrane2, membrane3, fluxList, membraneName, flag) {

        var query = sparqlUtils.maketritransporterSPARQL(membrane1, membrane2, membrane3);
        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonObj) {

                // console.log("jsonObj in makecotransporter: ", jsonObj);
                var tempProtein = [], tempFMA = [];
                for (var m = 0; m < jsonObj.results.bindings.length; m++) {
                    var tmpPro = jsonObj.results.bindings[m].med_entity_uri.value;
                    var tmpFMA = jsonObj.results.bindings[m].med_entity_uri.value;

                    if (tmpPro.indexOf("http://purl.obolibrary.org/obo/PR_") != -1) {
                        tempProtein.push(jsonObj.results.bindings[m].med_entity_uri.value);
                    }

                    if (tmpFMA.indexOf("http://identifiers.org/fma/FMA:") != -1) {
                        tempFMA.push(jsonObj.results.bindings[m].med_entity_uri.value);
                    }
                }

                // remove duplicate protein ID
                // TODO: probably no need to do this!
                tempProtein = tempProtein.filter(function (item, pos) {
                    return tempProtein.indexOf(item) == pos;
                });
                tempFMA = tempFMA.filter(function (item, pos) {
                    return tempFMA.indexOf(item) == pos;
                });

                // console.log("tempProtein, and fma: ", tempProtein, tempFMA);

                for (var i in tempProtein) {
                    // cotransporter
                    if (tempProtein.length != 0 && tempFMA.length != 0) {
                        cotransporterList.push({
                            "membrane1": membrane1,
                            "membrane2": membrane2,
                            "membrane3": membrane3
                        });
                    }
                }

                counter++;

                if (counter == miscellaneous.iteration(fluxList.length)) {

                    // delete cotransporter indices from fluxList
                    for (var i in cotransporterList) {
                        for (var j in fluxList) {
                            if (cotransporterList[i].membrane1 == fluxList[j] ||
                                cotransporterList[i].membrane2 == fluxList[j] ||
                                cotransporterList[i].membrane3 == fluxList[j]) {

                                fluxList.splice(j, 1);
                            }
                        }
                    }

                    // make cotransproter in modelEntityObj
                    for (var i in cotransporterList) {
                        modelEntityObj.push({
                            "model_entity": cotransporterList[i].membrane1,
                            "model_entity2": cotransporterList[i].membrane2,
                            "model_entity3": cotransporterList[i].membrane3
                        });
                    }

                    // make flux in modelEntityObj
                    for (var i in fluxList) {
                        modelEntityObj.push({
                            "model_entity": fluxList[i],
                            "model_entity2": "",
                            "model_entity3": ""
                        });
                    }

                    console.log("maketritransporter: fluxList -> ", fluxList);
                    console.log("maketritransporter: cotransporterList -> ", cotransporterList);
                    console.log("maketritransporter: modelEntityObj -> ", modelEntityObj);

                    console.log("maketritransporter: combinedMembrane -> ", combinedMembrane);

                    if (fluxList.length == 0) {
                        relatedMembraneModel(membraneName, cotransporterList, flag);
                    }
                }
            },
            true);
    };

    // apical or basolateral membrane in PMR
    var relatedMembrane = function (membrane, membraneName, flag) {

        console.log("relatedMembrane: ", membrane, membraneName);
        console.log("relatedMembrane -> combinedMembrane: ", combinedMembrane);

        var circleID = $(cthis).prop("id").split(",");
        console.log("relatedMembrane circleID: ", circleID);

        // A flux may look for a cotransporter and vice-versa
        var fstCHEBI, sndCHEBI;
        fstCHEBI = circleID[14];
        if (circleID[15] == "" || circleID[15] == "channel" || circleID[15] == "diffusiveflux")
            sndCHEBI = fstCHEBI;
        else sndCHEBI = circleID[15];

        var query = sparqlUtils.relatedMembraneSPARQL(fstCHEBI, sndCHEBI, membrane);

        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonRelatedMembrane) {

                console.log("jsonRelatedMembrane: ", jsonRelatedMembrane);

                var fluxList = [], cotransporterList = [];
                for (var i = 0; i < jsonRelatedMembrane.results.bindings.length; i++) {

                    // allow only related apical or basolateral membrane from my workspace
                    if (jsonRelatedMembrane.results.bindings[i].g.value != sparqlUtils.myWorkspaceName)
                        continue;

                    fluxList.push(jsonRelatedMembrane.results.bindings[i].Model_entity.value);

                    if (circleID[11] != "" || circleID[11] != "channel" || circleID[11] != "diffusiveflux") {
                        fluxList.push(jsonRelatedMembrane.results.bindings[i].Model_entity2.value);
                    }
                }

                var tempfluxList = [];
                for (var i = 0; i < fluxList.length; i++) {
                    if (!miscellaneous.isExist(fluxList[i], tempfluxList)) {
                        tempfluxList.push(fluxList[i]);
                    }
                }

                fluxList = tempfluxList;
                if (fluxList.length <= 1) {
                    console.log("fluxList.length <= 1");
                    modelEntityObj.push({
                        "model_entity": fluxList[0],
                        "model_entity2": "",
                        "model_entity3": ""
                    });

                    console.log("relatedMembrane: fluxList -> ", fluxList);
                    console.log("relatedMembrane: cotransporterList -> ", cotransporterList);
                    console.log("relatedMembrane: modelEntityObj -> ", modelEntityObj);

                    relatedMembraneModel(membraneName, cotransporterList, flag);
                }
                else if (fluxList.length <= 2) {
                    console.log("fluxList.length <= 2");

                    for (var i = 0; i < fluxList.length; i++) {
                        for (var j = i + 1; j < fluxList.length; j++) {
                            makecotransporter(fluxList[i], fluxList[j], fluxList, membraneName, flag);
                        }
                    }
                }
                else if (fluxList.length >= 3) {

                    console.log("fluxList.length >= 3");

                    var arr = [];
                    for (var i = 0; i < fluxList.length; i++) {
                        if (fluxList[i].med_pr == sparqlUtils.nkcc1) {
                            arr.push(fluxList[i]);

                            fluxList.splice(i, 1);
                            i--;
                        }
                    }

                    if (arr.length == 3) {
                        maketritransporter(arr[0], arr[1], arr[2], fluxList, membraneName, flag);
                    }
                    else {
                        for (var i = 0; i < arr.length; i++) {
                            fluxList.push(arr.pop());
                            i--;
                        }
                    }

                    // make co-transporter
                    for (var i = 0; i < fluxList.length; i++) {
                        for (var j = i + 1; j < fluxList.length; j++) {
                            makecotransporter(fluxList[i], fluxList[j], fluxList, membraneName, flag);
                        }
                    }
                }
            },
            true);
    };

    var source_fma = [], sink_fma = [], med_fma = [], med_pr = [], solute_chebi = [];
    var source_fma2 = [], sink_fma2 = [], solute_chebi2 = [];
    var source_fma3 = [], sink_fma3 = [], solute_chebi3 = [];

    var relatedMembraneModel = function (membraneName, cotransporterList, flag) {

        console.log("flag in relatedMembraneModel: ", flag);

        var tempmembraneModel, indexOfHash, indexOfcellml, modelname, query;
        if (modelEntityObj.length == 0 || modelEntityObj[idMembrane].model_entity == undefined)
            tempmembraneModel = undefined;
        else {
            indexOfHash = modelEntityObj[idMembrane].model_entity.search("#");
            tempmembraneModel = modelEntityObj[idMembrane].model_entity.slice(0, indexOfHash);

            indexOfcellml = tempmembraneModel.search(".cellml");
            modelname = tempmembraneModel.slice(0, indexOfcellml);

            tempmembraneModel = tempmembraneModel + "#" + modelname;
        }

        console.log("relatedMembraneModel: tempmembraneModel ->", tempmembraneModel);
        console.log("relatedMembraneModel: modelEntityObj -> ", modelEntityObj);

        query = "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>" +
            "PREFIX dcterms: <http://purl.org/dc/terms/>" +
            "SELECT ?Protein WHERE { <" + tempmembraneModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "}";

        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonRelatedMembraneModel) {

                console.log("relatedMembraneModel: jsonRelatedMembraneModel -> ", jsonRelatedMembraneModel);

                var endpointprOLS;
                if (jsonRelatedMembraneModel.results.bindings.length == 0) {

                    console.log("jsonRelatedMembraneModel.results.bindings.length == 0: combinedMembrane -> ", combinedMembrane);

                    showModalWindow(membraneName, flag);
                    return;
                } else {
                    var pr_uri = jsonRelatedMembraneModel.results.bindings[0].Protein.value;
                    if (pr_uri == sparqlUtils.epithelialcellID)
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/cl/terms?iri=" + pr_uri;
                    else if (pr_uri.indexOf(sparqlUtils.partOfGOUri) != -1) {
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/go/terms?iri=" + pr_uri;
                    }
                    else
                        endpointprOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + pr_uri;
                }

                ajaxUtils.sendGetRequest(
                    endpointprOLS,
                    function (jsonPr) {

                        var query = sparqlUtils.relatedMembraneModelSPARQL(modelEntityObj[idMembrane].model_entity, modelEntityObj[idMembrane].model_entity2, modelEntityObj[idMembrane].model_entity3);

                        // console.log("query: ", query);

                        ajaxUtils.sendPostRequest(
                            sparqlUtils.endpoint,
                            query,
                            function (jsonObjFlux) {
                                // console.log("relatedMembraneModel: jsonObjFlux -> ", jsonObjFlux);

                                var endpointOLS;
                                if (jsonObjFlux.results.bindings[0].solute_chebi == undefined) {
                                    endpointOLS = undefined;
                                }
                                else {
                                    var chebi_uri = jsonObjFlux.results.bindings[0].solute_chebi.value;
                                    var endpointOLS = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + chebi_uri;
                                }

                                ajaxUtils.sendGetRequest(
                                    endpointOLS,
                                    function (jsonObjOLSChebi) {

                                        var endpointOLS2;
                                        if (jsonObjFlux.results.bindings[0].solute_chebi2 == undefined) {
                                            endpointOLS2 = undefined;
                                        }
                                        else {
                                            var chebi_uri2 = jsonObjFlux.results.bindings[0].solute_chebi2.value;
                                            var endpointOLS2 = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + chebi_uri2;
                                        }

                                        ajaxUtils.sendGetRequest(
                                            endpointOLS2,
                                            function (jsonObjOLSChebi2) {

                                                var endpointOLS3;
                                                if (jsonObjFlux.results.bindings[0].solute_chebi3 == undefined) {
                                                    endpointOLS3 = undefined;
                                                }
                                                else {
                                                    var chebi_uri3 = jsonObjFlux.results.bindings[0].solute_chebi3.value;
                                                    var endpointOLS3 = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + chebi_uri3;
                                                }

                                                ajaxUtils.sendGetRequest(
                                                    endpointOLS3,
                                                    function (jsonObjOLSChebi3) {

                                                        for (var i = 0; i < jsonObjFlux.results.bindings.length; i++) {
                                                            // solute chebi
                                                            var temparr = jsonObjOLSChebi._embedded.terms[0].annotation["has_related_synonym"],
                                                                solute_chebi_name;
                                                            for (var m = 0; m < temparr.length; m++) {
                                                                if (temparr[m].slice(-1) == "+" || temparr[m].slice(-1) == "-" || temparr[m] == "Glc") {
                                                                    solute_chebi_name = temparr[m];
                                                                    break;
                                                                }
                                                            }

                                                            if (jsonObjFlux.results.bindings[i].solute_chebi == undefined)
                                                                solute_chebi.push("");
                                                            else
                                                                solute_chebi.push({
                                                                    name: solute_chebi_name,
                                                                    uri: jsonObjFlux.results.bindings[i].solute_chebi.value
                                                                });

                                                            // solute chebi 2
                                                            var temparr2 = jsonObjOLSChebi2._embedded.terms[0].annotation["has_related_synonym"],
                                                                solute_chebi_name2;
                                                            for (var m = 0; m < temparr2.length; m++) {
                                                                if (temparr2[m].slice(-1) == "+" || temparr2[m].slice(-1) == "-") {
                                                                    solute_chebi_name2 = temparr2[m];
                                                                    break;
                                                                }
                                                            }

                                                            if (jsonObjFlux.results.bindings[i].solute_chebi2 == undefined)
                                                                solute_chebi2.push("");
                                                            else
                                                                solute_chebi2.push({
                                                                    name: solute_chebi_name2,
                                                                    uri: jsonObjFlux.results.bindings[i].solute_chebi2.value
                                                                });

                                                            // solute chebi 3
                                                            var temparr3 = jsonObjOLSChebi3._embedded.terms[0].annotation["has_related_synonym"],
                                                                solute_chebi_name3;
                                                            for (var m = 0; m < temparr3.length; m++) {
                                                                if (temparr3[m].slice(-1) == "+" || temparr3[m].slice(-1) == "-") {
                                                                    solute_chebi_name3 = temparr3[m];
                                                                    break;
                                                                }
                                                            }

                                                            if (jsonObjFlux.results.bindings[i].solute_chebi3 == undefined)
                                                                solute_chebi3.push("");
                                                            else
                                                                solute_chebi3.push({
                                                                    name: solute_chebi_name3,
                                                                    uri: jsonObjFlux.results.bindings[i].solute_chebi3.value
                                                                });

                                                            // source fma
                                                            if (jsonObjFlux.results.bindings[i].source_fma == undefined)
                                                                source_fma.push("");
                                                            else
                                                                source_fma.push({fma: jsonObjFlux.results.bindings[i].source_fma.value});

                                                            // source fma 2
                                                            if (jsonObjFlux.results.bindings[i].source_fma2 == undefined)
                                                                source_fma2.push("");
                                                            else
                                                                source_fma2.push({fma2: jsonObjFlux.results.bindings[i].source_fma2.value});

                                                            // source fma 3
                                                            if (jsonObjFlux.results.bindings[i].source_fma3 == undefined)
                                                                source_fma3.push("");
                                                            else
                                                                source_fma3.push({fma3: jsonObjFlux.results.bindings[i].source_fma3.value});

                                                            // sink fma
                                                            if (jsonObjFlux.results.bindings[i].sink_fma == undefined)
                                                                sink_fma.push("");
                                                            else
                                                                sink_fma.push({fma: jsonObjFlux.results.bindings[i].sink_fma.value});

                                                            // sink fma 2
                                                            if (jsonObjFlux.results.bindings[i].sink_fma2 == undefined)
                                                                sink_fma2.push("");
                                                            else
                                                                sink_fma2.push({fma2: jsonObjFlux.results.bindings[i].sink_fma2.value});

                                                            // sink fma 3
                                                            if (jsonObjFlux.results.bindings[i].sink_fma3 == undefined)
                                                                sink_fma3.push("");
                                                            else
                                                                sink_fma3.push({fma3: jsonObjFlux.results.bindings[i].sink_fma3.value});

                                                            // med pr and fma
                                                            if (jsonObjFlux.results.bindings[i].med_entity_uri == undefined) {
                                                                med_pr.push("");
                                                                med_fma.push("");
                                                            }
                                                            else {
                                                                var temp = jsonObjFlux.results.bindings[i].med_entity_uri.value;
                                                                if (temp.indexOf(sparqlUtils.partOfProteinUri) != -1 || temp.indexOf(sparqlUtils.partOfGOUri) != -1 || temp.indexOf(sparqlUtils.partOfCHEBIUri) != -1) {
                                                                    med_pr.push({
                                                                        // name of med_pr from OLS
                                                                        // TODO: J_sc_K two PR and one FMA URI!!
                                                                        med_pr: jsonObjFlux.results.bindings[i].med_entity_uri.value
                                                                    });
                                                                }
                                                                else {
                                                                    if (temp.indexOf(sparqlUtils.partOfFMAUri) != -1) {
                                                                        med_fma.push({med_fma: jsonObjFlux.results.bindings[i].med_entity_uri.value});
                                                                    }
                                                                }
                                                            }
                                                        }

                                                        // remove duplicate fma
                                                        solute_chebi = miscellaneous.uniqueifyEpithelial(solute_chebi);
                                                        solute_chebi2 = miscellaneous.uniqueifyEpithelial(solute_chebi2);
                                                        solute_chebi3 = miscellaneous.uniqueifyEpithelial(solute_chebi3);
                                                        source_fma = miscellaneous.uniqueifyEpithelial(source_fma);
                                                        sink_fma = miscellaneous.uniqueifyEpithelial(sink_fma);
                                                        source_fma2 = miscellaneous.uniqueifyEpithelial(source_fma2);
                                                        sink_fma2 = miscellaneous.uniqueifyEpithelial(sink_fma2);
                                                        source_fma3 = miscellaneous.uniqueifyEpithelial(source_fma3);
                                                        sink_fma3 = miscellaneous.uniqueifyEpithelial(sink_fma3);
                                                        med_pr = miscellaneous.uniqueifyEpithelial(med_pr);
                                                        med_fma = miscellaneous.uniqueifyEpithelial(med_fma);

                                                        if (jsonRelatedMembraneModel.results.bindings.length != 0) {

                                                            console.log("jsonRelatedMembraneModel: ", jsonRelatedMembraneModel);

                                                            var tempVal, PID;
                                                            if (med_pr.length == 0) {
                                                                tempVal = jsonRelatedMembraneModel.results.bindings[0].Protein.value;
                                                                PID = tempVal.slice(tempVal.search("PR_") + 3, tempVal.length);
                                                            }
                                                            else {
                                                                tempVal = med_pr[0].med_pr;
                                                                PID = tempVal.slice(tempVal.search("PR_") + 3, tempVal.length);

                                                                // If PID start with 0 digit
                                                                if (PID.charAt(0) != "P") {
                                                                    if (PID.charAt(0) != "Q") {
                                                                        PID = "P" + PID.replace(/^0+/, ""); // Or parseInt("065", 10)
                                                                    }
                                                                }
                                                            }

                                                            console.log("PID: ", PID);

                                                            membraneModelObj.push({
                                                                protein: jsonRelatedMembraneModel.results.bindings[0].Protein.value,
                                                                pid: PID, // med PID
                                                                prname: jsonPr._embedded.terms[0].label,
                                                                medfma: med_fma[0].med_fma, //combinedMembrane[0].med_fma,
                                                                medpr: tempVal,
                                                                similar: 0 // initial percent
                                                            });

                                                            console.log("membraneModelObj: ", membraneModelObj);

                                                            var sourcefma, sinkfma, variabletext, solutechebi,
                                                                solutetext,
                                                                modelentity2, sourcefma2, sinkfma2, variabletext2,
                                                                solutechebi2, solutetext2,
                                                                modelentity3, sourcefma3, sinkfma3, variabletext3,
                                                                solutechebi3, solutetext3,
                                                                medfma, medpr, indexOfdot, indexOfHash;

                                                            if (modelEntityObj[idMembrane].model_entity2 == "" && modelEntityObj[idMembrane].model_entity3 == "") {

                                                                indexOfHash = modelEntityObj[idMembrane].model_entity.search("#");
                                                                variabletext = modelEntityObj[idMembrane].model_entity.slice(indexOfHash + 1);
                                                                indexOfdot = variabletext.indexOf(".");

                                                                variabletext = variabletext.slice(indexOfdot + 1);

                                                                var tempjsonObjFlux = miscellaneous.uniqueifyjsonFlux(jsonObjFlux.results.bindings);

                                                                // console.log("tempjsonObjFlux: ", tempjsonObjFlux);

                                                                if (tempjsonObjFlux.length == 1) {
                                                                    var vartext2, vartext3;
                                                                    if (med_pr.length != 0) {
                                                                        if (med_pr[0].med_pr == sparqlUtils.Nachannel || med_pr[0].med_pr == sparqlUtils.Kchannel ||
                                                                            med_pr[0].med_pr == sparqlUtils.Clchannel) {
                                                                            vartext2 = "channel";
                                                                            vartext3 = "channel";
                                                                        }
                                                                        else if (tempjsonObjFlux[0].source_fma.value == sparqlUtils.luminalID &&
                                                                            tempjsonObjFlux[0].sink_fma.value == sparqlUtils.interstitialID) {
                                                                            vartext2 = "diffusiveflux";
                                                                            vartext3 = "diffusiveflux";
                                                                        }
                                                                        else {
                                                                            vartext2 = "flux"; // flux
                                                                            vartext3 = "flux"; // flux
                                                                        }
                                                                    }

                                                                    // TODO: ??
                                                                    if (med_pr.length == 0) {
                                                                        vartext2 = "flux"; // "no mediator"
                                                                        vartext3 = "flux"; // "no mediator"
                                                                    }

                                                                    // console.log("vartext2, med_pr: ", vartext2, med_pr);

                                                                    sourcefma = tempjsonObjFlux[0].source_fma.value;
                                                                    sinkfma = tempjsonObjFlux[0].sink_fma.value;
                                                                    solutechebi = solute_chebi[0].uri;
                                                                    solutetext = solute_chebi[0].name;
                                                                    medfma = med_fma[0].med_fma;

                                                                    if (med_pr.length != 0) {
                                                                        medpr = med_pr[0].med_pr; // TODO: J_Sc_Na has 2 PR and 1 FMA URIs!! Fix this!!
                                                                    }
                                                                    else {
                                                                        medpr = "";
                                                                    }

                                                                    modelentity2 = "";
                                                                    modelentity3 = "";
                                                                    if (vartext2 == "channel" || vartext2 == "diffusiveflux") {
                                                                        sourcefma2 = vartext2;
                                                                        sinkfma2 = vartext2;
                                                                        variabletext2 = vartext2; // flux/channel/diffusiveflux
                                                                        solutechebi2 = vartext2;
                                                                        solutetext2 = vartext2;
                                                                        sourcefma3 = vartext3;
                                                                        sinkfma3 = vartext3;
                                                                        variabletext3 = vartext3; // flux/channel/diffusiveflux
                                                                        solutechebi3 = vartext3;
                                                                        solutetext3 = vartext3;
                                                                    }
                                                                    else {
                                                                        sourcefma2 = "";
                                                                        sinkfma2 = "";
                                                                        variabletext2 = vartext2; // flux/channel/diffusiveflux
                                                                        solutechebi2 = "";
                                                                        solutetext2 = "";
                                                                        sourcefma3 = "";
                                                                        sinkfma3 = "";
                                                                        variabletext3 = vartext3; // flux/channel/diffusiveflux
                                                                        solutechebi3 = "";
                                                                        solutetext3 = "";
                                                                    }
                                                                }
                                                                else {
                                                                    // same solute - J_Na in mackenzie model
                                                                    if (tempjsonObjFlux.length == 2 && modelEntityObj[idMembrane].model_entity2 == "" && modelEntityObj[idMembrane].model_entity3 == "") {
                                                                        modelentity2 = modelEntityObj[idMembrane].model_entity;
                                                                        sourcefma = tempjsonObjFlux[0].source_fma.value;
                                                                        sinkfma = tempjsonObjFlux[0].sink_fma.value;
                                                                        sourcefma2 = tempjsonObjFlux[1].source_fma.value;
                                                                        sinkfma2 = tempjsonObjFlux[1].sink_fma.value;
                                                                        medfma = med_fma[0].med_fma;

                                                                        modelentity3 = "";
                                                                        sourcefma3 = "";
                                                                        sinkfma3 = "";

                                                                        if (med_pr.length != 0) {
                                                                            medpr = med_pr[0].med_pr;
                                                                        }
                                                                        else {
                                                                            medpr = "";
                                                                        }

                                                                        variabletext2 = variabletext;
                                                                        solutechebi = solute_chebi[0].uri;
                                                                        solutetext = solute_chebi[0].name;
                                                                        solutechebi2 = solutechebi;
                                                                        solutetext2 = solutetext;

                                                                        variabletext3 = "";
                                                                        solutechebi3 = "";
                                                                        solutetext3 = "";
                                                                    }
                                                                    // same solute - J_Na in nkcc1 model if all are same, i.e. same solute tritransporter
                                                                    else if (tempjsonObjFlux.length == 3 && modelEntityObj[idMembrane].model_entity2 == "" && modelEntityObj[idMembrane].model_entity3 == "") {
                                                                        modelentity2 = modelEntityObj[idMembrane].model_entity;
                                                                        sourcefma = tempjsonObjFlux[0].source_fma.value;
                                                                        sinkfma = tempjsonObjFlux[0].sink_fma.value;
                                                                        sourcefma2 = tempjsonObjFlux[1].source_fma.value;
                                                                        sinkfma2 = tempjsonObjFlux[1].sink_fma.value;
                                                                        medfma = med_fma[0].med_fma;

                                                                        modelentity3 = modelEntityObj[idMembrane].model_entity;
                                                                        sourcefma3 = tempjsonObjFlux[2].source_fma.value;
                                                                        sinkfma3 = tempjsonObjFlux[2].sink_fma.value;

                                                                        if (med_pr.length != 0) {
                                                                            medpr = med_pr[0].med_pr;
                                                                        }
                                                                        else {
                                                                            medpr = "";
                                                                        }

                                                                        variabletext2 = variabletext;
                                                                        solutechebi = solute_chebi[0].uri;
                                                                        solutetext = solute_chebi[0].name;
                                                                        solutechebi2 = solutechebi;
                                                                        solutetext2 = solutetext;

                                                                        variabletext3 = variabletext;
                                                                        solutechebi3 = solutechebi;
                                                                        solutetext3 = solutetext;
                                                                    }
                                                                }
                                                            }
                                                            else {
                                                                indexOfHash = modelEntityObj[idMembrane].model_entity.search("#");
                                                                variabletext = modelEntityObj[idMembrane].model_entity.slice(indexOfHash + 1);
                                                                indexOfdot = variabletext.indexOf(".");
                                                                variabletext = variabletext.slice(indexOfdot + 1);

                                                                indexOfHash = modelEntityObj[idMembrane].model_entity2.search("#");
                                                                variabletext2 = modelEntityObj[idMembrane].model_entity2.slice(indexOfHash + 1);
                                                                indexOfdot = variabletext2.indexOf(".");
                                                                variabletext2 = variabletext2.slice(indexOfdot + 1);

                                                                indexOfHash = modelEntityObj[idMembrane].model_entity3.search("#");
                                                                variabletext3 = modelEntityObj[idMembrane].model_entity3.slice(indexOfHash + 1);
                                                                indexOfdot = variabletext3.indexOf(".");
                                                                variabletext3 = variabletext3.slice(indexOfdot + 1);

                                                                modelentity2 = modelEntityObj[idMembrane].model_entity2;
                                                                modelentity3 = modelEntityObj[idMembrane].model_entity3;
                                                                sourcefma = source_fma[0].fma;
                                                                sinkfma = sink_fma[0].fma;
                                                                sourcefma2 = source_fma2[0].fma2;
                                                                sinkfma2 = sink_fma2[0].fma2;
                                                                sourcefma3 = source_fma3[0].fma3;
                                                                sinkfma3 = sink_fma3[0].fma3;
                                                                solutechebi = solute_chebi[0].uri;
                                                                solutetext = solute_chebi[0].name;
                                                                solutechebi2 = solute_chebi2[0].uri;
                                                                solutetext2 = solute_chebi2[0].name;
                                                                solutechebi3 = solute_chebi3[0].uri;
                                                                solutetext3 = solute_chebi3[0].name;
                                                                medfma = med_fma[0].med_fma;
                                                                medpr = med_pr[0].med_pr;
                                                            }
                                                        }

                                                        // console.log("medpr, protein.value: ", medpr, jsonRelatedMembraneModel, jsonRelatedMembraneModel.results.bindings[0].Protein.value);

                                                        var medURI, endpointOLS;
                                                        if (medpr == undefined || medpr == "") {
                                                            medURI = jsonRelatedMembraneModel.results.bindings[0].Protein.value;
                                                        }
                                                        else
                                                            medURI = medpr;

                                                        console.log("medURI: ", medURI);

                                                        if (medURI.indexOf(sparqlUtils.partOfCHEBIUri) != -1) {
                                                            endpointOLS = sparqlUtils.abiOntoEndpoint + "/chebi/terms?iri=" + medURI;
                                                        }
                                                        else if (medURI.indexOf(sparqlUtils.partOfGOUri) != -1) {
                                                            endpointOLS = sparqlUtils.abiOntoEndpoint + "/go/terms?iri=" + medURI;
                                                        }
                                                        else
                                                            endpointOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + medURI;

                                                        ajaxUtils.sendGetRequest(
                                                            endpointOLS,
                                                            function (jsonObjOLSMedPr) {

                                                                var tempvar, med_pr_text_syn;
                                                                if (jsonObjOLSMedPr._embedded.terms[0].annotation["has_related_synonym"] == undefined) {
                                                                    med_pr_text_syn = jsonObjOLSMedPr._embedded.terms[0].annotation["id"][0].slice(3);
                                                                }
                                                                else {
                                                                    tempvar = jsonObjOLSMedPr._embedded.terms[0].annotation["has_related_synonym"];
                                                                    med_pr_text_syn = tempvar[0].toUpperCase();
                                                                }

                                                                membraneModelID.push([
                                                                    modelEntityObj[idMembrane].model_entity, // model_entity
                                                                    modelentity2, // model_entity2
                                                                    modelentity3, // model_entity3
                                                                    variabletext, // variable_text
                                                                    variabletext2, // variable_text2
                                                                    variabletext2, // variable_text3
                                                                    sourcefma,
                                                                    sinkfma,
                                                                    sourcefma2,
                                                                    sinkfma2,
                                                                    sourcefma3,
                                                                    sinkfma3,
                                                                    medfma, // jsonObjFlux.results.bindings[0].med_entity_uri.value, // med_fma
                                                                    medpr, // med_pr, e.g. mediator in a cotransporter protein
                                                                    solutechebi, // solute_chebi
                                                                    solutechebi2, // solute_chebi2
                                                                    solutechebi3, // solute_chebi3
                                                                    solutetext, //solute_text
                                                                    solutetext2, //solute_text2
                                                                    solutetext3, //solute_text3
                                                                    jsonObjOLSMedPr._embedded.terms[0].label, //med_pr_text,
                                                                    med_pr_text_syn, //med_pr_text_syn
                                                                    jsonRelatedMembraneModel.results.bindings[0].Protein.value // protein_name
                                                                ]);

                                                                solute_chebi = [];
                                                                solute_chebi2 = [];
                                                                solute_chebi3 = [];
                                                                source_fma = [];
                                                                sink_fma = [];
                                                                source_fma2 = [];
                                                                sink_fma2 = [];
                                                                source_fma3 = [];
                                                                sink_fma3 = [];
                                                                med_pr = [];
                                                                med_fma = [];

                                                                console.log("relatedMembraneModel: idMembrane -> ", idMembrane);
                                                                console.log("relatedMembraneModel: modelEntityObj -> ", modelEntityObj);
                                                                console.log("relatedMembraneModel: membraneModelID -> ", membraneModelID);

                                                                if (modelEntityObj[idMembrane].model_entity != undefined)
                                                                    idMembrane++;

                                                                if (idMembrane == modelEntityObj.length) {
                                                                    console.log("relatedMembraneModel -> combinedMembrane: ", combinedMembrane);

                                                                    showModalWindow(membraneName, flag);
                                                                    return;
                                                                }

                                                                relatedMembraneModel(membraneName, cotransporterList, flag);

                                                            }, true);
                                                    }, true);
                                            }, true);
                                    }, true);
                            }, true);
                    }, true);
            }, true);
    };

    var showModalWindow = function (membraneName, flag) {

        console.log("flag in showModalWindow: ", flag);
        console.log("showModalWindow -> combinedMembrane: ", combinedMembrane);

        // add models without dragging
        if (flag == 2) {
            var relatedOrganModels2 = "<p id=addModelsID>";
            for (var i = 0; i < membraneModelID.length; i++) {

                console.log("add models without dragging");
                console.log("flag in showModalWindow: ", flag);
                console.log("combinedMembrane: ", combinedMembrane);
                console.log("membraneModelID: ", membraneModelID);

                // Do not display already visualized models on the apical or basolateral membrane
                if (miscellaneous.searchInCombinedMembrane(membraneModelID[i][0], membraneModelID[i][1], membraneModelID[i][2], combinedMembrane))
                    continue;

                var workspaceuri = sparqlUtils.myWorkspaceName + "/" + "rawfile" + "/" + "HEAD" + "/" + membraneModelID[i][0];

                var variableName;
                if (membraneModelID[i][1] != "") {
                    var indexOfHash = membraneModelID[i][1].search("#"),
                        componentVariableName = membraneModelID[i][1].slice(indexOfHash + 1), // NHE3.J_NHE3_Na
                        indexOfDot = componentVariableName.indexOf(".");

                    variableName = "and " + componentVariableName.slice(indexOfDot + 1); // J_NHE3_Na
                }
                else variableName = "";

                var label = document.createElement('label');
                label.innerHTML = '<input id="' + membraneModelID[i] + '" ' + // membraneModelID[i][0]
                    'type="checkbox" value="' + membraneModelID[i][0] + '">' + // "' + membraneModelID[i][0] + " " + variableName + '"
                    '<a href="' + workspaceuri + '" target="_blank" ' +
                    'data-toggle="tooltip" data-placement="right" ' +
                    'title="Protein name: ' + membraneModelID[i][20] + '\n' +
                    'Protein uri: ' + membraneModelID[i][22] + '\n' +
                    'Mediator name: ' + membraneModelID[i][20] + '\n' +
                    'Mediator uri: ' + membraneModelID[i][13] + '\n' +
                    'Model entity: ' + membraneModelID[i][0] + '\n' +
                    'Model entity2: ' + membraneModelID[i][1] + '"' +
                    '>' + membraneModelID[i][0] + " " + variableName + '</a></label>'; // membraneModelID[i][0]

                relatedOrganModels2 += label.innerHTML + "<br>";
            }

            if (relatedOrganModels2 == "<p id=addModelsID>") {
                relatedOrganModels2 += "Not Exist" + "<br>";
            }

            $("#modalBody").empty();

            var msg = "<br><p><b>" + membraneName + " model in PMR<b><\p>";

            $("#modalBody")
                .append(msg)
                .append(relatedOrganModels2);

            console.log("outside modelbody2!");

            return;
        }
        else if (flag == 1) {
            idMembrane = 0;

            var circleID = $(cthis).prop("id").split(",");

            var msg2 = "<p><b>" + proteinText + "</b> is a <b>" + typeOfModel + "</b> model. It is located in " +
                "<b>" + locationOfModel + "</b><\p>";

            var workspaceuri = sparqlUtils.myWorkspaceName + "/" + "rawfile" + "/" + "HEAD" + "/" + circleID[0];

            var model = "<b>Model: </b><a href=" + workspaceuri + " + target=_blank " +
                "data-toggle=tooltip data-placement=right " +
                "title=" + proteinText + ">" + circleID[0] + "</a>";

            var biological = "<p><b>Biological Meaning: </b>" + biological_meaning + "</p>";

            if (biological_meaning2 != "")
                biological += "<p>" + biological_meaning2 + "</p>";

            if (biological_meaning3 != "")
                biological += "<p>" + biological_meaning3 + "</p>";

            var species = "<p><b>Species: </b>" + speciesName + "</p>";
            var gene = "<p><b>Gene: </b>" + geneName + "</p>";
            var protein = "<p data-toggle=tooltip data-placement=right title=" + proteinName + ">" +
                "<b>Protein: </b>" + proteinText + "</p>";

            // Related apical or basolateral model
            var index = 0, ProteinSeq = "", requestData, PID = [];
            var baseUrl = "https://www.ebi.ac.uk/Tools/services/rest/clustalo";
            // var baseUrl = "/.api/ebi/clustalo";

            console.log("membraneModelID: ", membraneModelID);

            miscellaneous.proteinOrMedPrID(membraneModelID, PID);
            console.log("PID BEFORE: ", PID);

            var draggedMedPrID = miscellaneous.splitPRFromProtein(circleID);
            PID.push(draggedMedPrID);

            console.log("PID BEFORE Filter: ", PID);

            // remove duplicate protein ID
            PID = PID.filter(function (item, pos) {
                return PID.indexOf(item) == pos;
            });

            console.log("PID AFTER Filter: ", PID);

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

                var dbfectendpoint = "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/" + PID[index] + "/fasta";
                // var dbfectendpoint = "/.api/ebi/uniprotkb/" + PID[index] + "/fasta";

                ajaxUtils.sendGetRequest(
                    dbfectendpoint,
                    function (psequence) {
                        ProteinSeq += psequence;

                        // PID is empty
                        if (PID.length == 1) { // in fact, PID.length == 0, to enable the above dbfectendpoint query

                            var indexOfBar = psequence.search(/\|/gi),
                                indexOfBar2 = psequence.slice(indexOfBar + 1, psequence.length).search(/\|/gi),
                                t1 = psequence.slice(0, indexOfBar + indexOfBar2 + 1),
                                t2 = psequence.slice(indexOfBar + indexOfBar2 + 1);

                            psequence = t1 + "0" + t2;
                            ProteinSeq += psequence;

                            console.log("ProteinSeq when empty: ", ProteinSeq, PID);
                        }

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

                                                        var similarityOBJ = miscellaneous.similarityMatrixEBI(
                                                            identityMatrix, PID, draggedMedPrID, membraneModelObj);

                                                        var tempList = [];
                                                        for (var i = 0; i < membraneModelObj.length; i++) {
                                                            for (var j = 0; j < membraneModelID.length; j++) {

                                                                var tempID = miscellaneous.splitPRFromProtein(membraneModelID[j]);
                                                                if (tempID.charAt(0) != "P") {
                                                                    if (tempID.charAt(0) != "Q") {
                                                                        tempID = "P" + tempID.replace(/^0+/, "");
                                                                    }
                                                                }

                                                                if (membraneModelObj[i].pid == tempID) {
                                                                    tempList.push(membraneModelID[j]);
                                                                    break;
                                                                }
                                                            }
                                                        }

                                                        for (var i = 0; i < tempList.length; i++) {
                                                            membraneModelID[i] = tempList[i];
                                                        }

                                                        // console.log("tempList: ", tempList);
                                                        console.log("AFTER membraneModelID: ", membraneModelID);
                                                        console.log("membraneModelObj: ", membraneModelObj);
                                                        console.log("else if (flag == 1) combinedMembrane: ", combinedMembrane);

                                                        // apical or basolateral membrane
                                                        var membraneModel = "<p id=membraneModelsID><b>" + membraneName + " model</b>";
                                                        for (var i = 0; i < membraneModelObj.length; i++) {

                                                            // Do not display visualized models
                                                            if (miscellaneous.searchInCombinedMembrane(membraneModelID[i][0], membraneModelID[i][1], membraneModelID[i][2], combinedMembrane))
                                                                continue;

                                                            var workspaceuri = sparqlUtils.myWorkspaceName + "/" + "rawfile" + "/" + "HEAD" + "/" + membraneModelID[i][0];

                                                            var label = document.createElement("label");
                                                            label.innerHTML = '<br><input id="' + membraneModelID[i] + '" ' +
                                                                'type="checkbox" value="' + membraneModelID[i][0] + '">' + // membraneModelObj[i].prname
                                                                '<a href="' + workspaceuri + '" target="_blank" ' +
                                                                'data-toggle="tooltip" data-placement="right" ' +
                                                                'title="Protein name: ' + membraneModelObj[i].prname + '\n' +
                                                                'Protein uri: ' + membraneModelObj[i].protein + '\n' +
                                                                'Mediator name: ' + membraneModelID[i][20] + '\n' +
                                                                'Mediator uri: ' + membraneModelObj[i].medpr + '\n' +
                                                                'Similarity value: ' + membraneModelObj[i].similar + '\n' +
                                                                'Model entity: ' + membraneModelID[i][0] + '\n' +
                                                                'Model entity2: ' + membraneModelID[i][1] + '"' +
                                                                '>' + membraneModelID[i][20] + '</a></label>'; // membraneModelObj[i].prname

                                                            membraneModel += label.innerHTML;
                                                        }

                                                        if (membraneModel == "<p id=membraneModelsID><b>" + membraneName + " model</b>") {
                                                            membraneModel += "<br>Not Exist" + "<br>";
                                                        }

                                                        // membraneModel += "</p>";
                                                        // console.log("alternativeModelObj: ", alternativeModelObj);

                                                        // alternative model
                                                        var alternativeModel = "<p id=alternativeModelID><b>Alternative model of " + proteinText + "</b>";
                                                        if (alternativeModelObj.length == 0) {
                                                            alternativeModel += "<br>Not Exist" + "<br>";
                                                        }
                                                        else {
                                                            for (var i = 0; i < alternativeModelObj.length; i++) {
                                                                var workspaceuri = alternativeModelObj[i].workspaceName +
                                                                    "/" + "rawfile" + "/" + "HEAD" + "/" + alternativeModelObj[i].modelEntity;

                                                                // TODO: SPARQL query to get flux of solutes similar to modalWindowToAddModels
                                                                var label = document.createElement("label");
                                                                label.innerHTML = '<br><input id="' + alternativeModelObj[i].modelEntity + '" ' +
                                                                    'type="checkbox" value="' + alternativeModelObj[i].modelEntity + '">' +
                                                                    '<a href="' + workspaceuri + '" target="_blank" ' +
                                                                    'data-toggle="tooltip" data-placement="right" ' +
                                                                    'title="Protein name: ' + alternativeModelObj[i].prname + '\n' +
                                                                    'Protein uri: ' + alternativeModelObj[i].protein + '\n' +
                                                                    'Model entity: ' + alternativeModelObj[i].modelEntity + '"' +
                                                                    '>' + alternativeModelObj[i].prname + '</a></label>';

                                                                alternativeModel += label.innerHTML;
                                                            }
                                                        }

                                                        // alternativeModel += "</p>";
                                                        // console.log("relatedModelObj: ", relatedModelObj);

                                                        // related organ models (kidney, lungs, etc) in PMR
                                                        var relatedOrganModel = "<p id=relatedOrganModelID><b>" + typeOfModel + " model in PMR</b>";
                                                        if (relatedModelObj.length == 1) { // includes own protein name
                                                            relatedOrganModel += "<br>Not Exist" + "<br>";
                                                        }
                                                        else {
                                                            for (var i = 0; i < relatedModelObj.length; i++) {

                                                                if (proteinName == relatedModelObj[i].protein)
                                                                    continue;

                                                                var workspaceuri = relatedModelObj[i].workspaceName +
                                                                    "/" + "rawfile" + "/" + "HEAD" + "/" + relatedModelObj[i].modelEntity;

                                                                var label = document.createElement("label");
                                                                label.innerHTML = '<br><a href="' + workspaceuri + '" target="_blank" ' +
                                                                    'data-toggle="tooltip" data-placement="right" ' +
                                                                    'title="Protein name: ' + relatedModelObj[i].prname + '\n' +
                                                                    'Protein uri: ' + relatedModelObj[i].protein + '\n' +
                                                                    'Model entity: ' + relatedModelObj[i].modelEntity + '"' +
                                                                    '>' + relatedModelObj[i].prname + '</a></label>';

                                                                relatedOrganModel += label.innerHTML;
                                                            }
                                                        }

                                                        // relatedModelObj += "</p>";

                                                        $("#modalBody").empty();

                                                        $("#modalBody")
                                                            .append(msg2)
                                                            .append(model)
                                                            .append(biological)
                                                            .append(species)
                                                            .append(gene)
                                                            .append(protein);

                                                        var msg3 = "<br><p><b>Recommendations/suggestions based on existing models in PMR<b><\p>";

                                                        $("#modalBody")
                                                            .append(msg3)
                                                            .append(membraneModel)
                                                            .append(alternativeModel)
                                                            .append(relatedOrganModel);

                                                        console.log("outside modelbody!");

                                                        return;
                                                    },
                                                    false);
                                            },
                                            false);
                                    }

                                    chkJobStatus(jobId);
                                    console.log("AFTER chkJobStatus(jobId)!");

                                    return;
                                },
                                false);

                            return;
                        }

                        // callback
                        WSDbfetchREST();
                        console.log("AFTER WSDbfetchREST!");
                    },
                    false);
            };

            WSDbfetchREST();
            console.log("AFTER WSDbfetchREST!");

            return;
        }
    };

    // circles, polygons and arrows move back if close clicked
    var moveBack = function () {

        console.log("circlewithlineg: ", circlewithlineg);
        console.log("icircleGlobal: ", icircleGlobal);

        if (linewithlineg[icircleGlobal] != undefined) {
            linewithlineg[icircleGlobal]
                .transition()
                .delay(1000)
                .duration(1000)
                .attr("x1", dx1line[icircleGlobal])
                .attr("y1", dy1line[icircleGlobal])
                .attr("x2", dx2line[icircleGlobal])
                .attr("y2", dy2line[icircleGlobal]);
        }

        if (linewithtextg[icircleGlobal] != undefined) {
            linewithtextg[icircleGlobal]
                .transition()
                .delay(1000)
                .duration(1000)
                .attr("x", dxtext[icircleGlobal])
                .attr("y", dytext[icircleGlobal]);
        }
        if (circlewithlineg[icircleGlobal] != undefined) {
            if (circlewithlineg[icircleGlobal]._groups[0][0].tagName == "polygon") {
                circlewithlineg[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("transform", "translate(" + dx[icircleGlobal] + "," + dy[icircleGlobal] + ")")
                    .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30");
            }

            if (circlewithlineg[icircleGlobal]._groups[0][0].tagName == "circle") {
                circlewithlineg[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("cx", dx[icircleGlobal])
                    .attr("cy", dy[icircleGlobal]);
            }
        }

        // text inside circle
        if (circlewithtext[icircleGlobal] != undefined) {
            circlewithtext[icircleGlobal]
                .transition()
                .delay(1000)
                .duration(1000)
                .attr("x", dxcircletext[icircleGlobal]) // - 15)
                .attr("y", dycircletext[icircleGlobal]); // + 23);
        }

        if (linewithlineg2[icircleGlobal] != undefined) {
            if (linewithlineg2[icircleGlobal] != "") {
                linewithlineg2[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("x1", dx1line2[icircleGlobal])
                    .attr("y1", dy1line2[icircleGlobal])
                    .attr("x2", dx2line2[icircleGlobal])
                    .attr("y2", dy2line2[icircleGlobal]);
            }
        }

        if (linewithtextg2[icircleGlobal] != undefined) {
            if (linewithtextg2[icircleGlobal] != "") {
                linewithtextg2[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("x", dxtext2[icircleGlobal])
                    .attr("y", dytext2[icircleGlobal]);
            }
        }

        if (linewithlineg3[icircleGlobal] != undefined) {
            if (linewithlineg3[icircleGlobal] != "") {
                linewithlineg3[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("x1", dx1line3[icircleGlobal])
                    .attr("y1", dy1line3[icircleGlobal])
                    .attr("x2", dx2line3[icircleGlobal])
                    .attr("y2", dy2line3[icircleGlobal]);
            }
        }

        if (linewithtextg3[icircleGlobal] != undefined) {
            if (linewithtextg3[icircleGlobal] != "") {
                linewithtextg3[icircleGlobal]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("x", dxtext3[icircleGlobal])
                    .attr("y", dytext3[icircleGlobal]);
            }
        }

        reflectCheckbox(icircleGlobal);
    };

    // retain color of membranes
    var membraneColorBack = function () {
        for (var i = 0; i < $("line").length; i++) {
            if ($("line")[i].id == $(cthis).attr("membrane") && i == 0) {
                linebasolateral
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .style("stroke", "orange");

                yvalueb += ydistance;
                break;
            }
            if ($("line")[i].id == $(this).attr("membrane") && i == 1) {
                lineapical
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .style("stroke", "green");

                yvalue += ydistance;
                break;
            }
        }
    };

    // rearrange circles, polygons, and arrows for a change
    var circleRearrange = function () {
        // initial values for apical
        var cyinitial = 213.3333282470703,
            dy1lineinitial = 193.3333282470703,
            dy1lineinitial2 = 233.3333282470703,
            dytextinitial = 198.3333282470703,
            dytextinitial2 = 237.3333282470703;
        for (i = 0; i < circlewithlineg.length; i++) {
            if (circlewithlineg[i].attr("membrane") == sparqlUtils.apicalID) {
                console.log("circleRearrange on apical membrane!");

                // line 1
                dy1line[i] = dy1lineinitial;
                dy2line[i] = dy1lineinitial;
                linewithlineg[i]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("y1", dy1line[i])
                    .attr("y2", dy2line[i]);

                // text 1
                dytext[i] = dytextinitial;
                linewithtextg[i]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("y", dytext[i]);

                if (linewithlineg2[i] != undefined) {

                    console.log("circleRearrange on apical membrane 2!");

                    if (linewithlineg2[i] != "") {
                        // line 2
                        dy1line2[i] = dy1lineinitial2;
                        dy2line2[i] = dy1lineinitial2;
                        linewithlineg2[i]
                            .transition()
                            .delay(1000)
                            .duration(1000)
                            .attr("y1", dy1line2[i])
                            .attr("y2", dy2line2[i]);

                        // text 2
                        dytext2[i] = dytextinitial2;
                        linewithtextg2[i]
                            .transition()
                            .delay(1000)
                            .duration(1000)
                            .attr("y", dytext2[i])
                    }
                }

                if (circlewithlineg[i]._groups[0][0].tagName == "circle") {
                    dy[i] = cyinitial;
                    circlewithlineg[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("cy", dy[i]);

                    dycircletext[i] = dy[i];
                    circlewithtext[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("y", dycircletext[i])
                }

                if (circlewithlineg[i]._groups[0][0].tagName == "polygon") {
                    dy[i] = cyinitial;
                    circlewithlineg[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("transform", "translate(" + dx[i] + "," + (dy[i] - 50) + ")")
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30");

                    // circle text
                    dycircletext[i] = dy[i] - 15;
                    circlewithtext[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("y", dycircletext[i])
                }

                cyinitial += ydistance;
                dy1lineinitial += ydistance;
                dy1lineinitial2 += ydistance;
                dytextinitial += ydistance;
                dytextinitial2 += ydistance;
            }
        }

        // initial values for basolateral
        var cyinitialb = 213.3333282470703,
            dy1lineinitialb = 193.3333282470703,
            dy1lineinitialb2 = 233.3333282470703,
            dytextinitialb = 198.3333282470703,
            dytextinitialb2 = 237.3333282470703;
        for (i = 0; i < circlewithlineg.length; i++) {
            if (circlewithlineg[i].attr("membrane") == sparqlUtils.basolateralID) {
                console.log("circleRearrange on basolateral membrane!");

                // line 1
                dy1line[i] = dy1lineinitialb;
                dy2line[i] = dy1lineinitialb;
                linewithlineg[i]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("y1", dy1line[i])
                    .attr("y2", dy2line[i]);

                // text 1
                dytext[i] = dytextinitialb;
                linewithtextg[i]
                    .transition()
                    .delay(1000)
                    .duration(1000)
                    .attr("y", dytext[i]);

                if (linewithlineg2[i] != undefined) {

                    console.log("circleRearrange on basolateral membrane 2!");

                    if (linewithlineg2[i] != "") {
                        // line 2
                        dy1line2[i] = dy1lineinitialb2;
                        dy2line2[i] = dy1lineinitialb2;
                        linewithlineg2[i]
                            .transition()
                            .delay(1000)
                            .duration(1000)
                            .attr("y1", dy1line2[i])
                            .attr("y2", dy2line2[i]);

                        // text 2
                        dytext2[i] = dytextinitialb2;
                        linewithtextg2[i]
                            .transition()
                            .delay(1000)
                            .duration(1000)
                            .attr("y", dytext2[i])
                    }
                }

                if (circlewithlineg[i]._groups[0][0].tagName == "circle") {
                    dy[i] = cyinitialb;
                    circlewithlineg[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("cy", dy[i]);

                    // circle text
                    dycircletext[i] = dy[i];
                    circlewithtext[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("y", dycircletext[i])
                }

                if (circlewithlineg[i]._groups[0][0].tagName == "polygon") {
                    dy[i] = cyinitialb;
                    circlewithlineg[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("transform", "translate(" + dx[i] + "," + (dy[i] - 50) + ")")
                        .attr("points", "10,20 50,20 45,30 50,40 10,40 15,30");

                    // circle text
                    dycircletext[i] = dy[i] - 15;
                    circlewithtext[i]
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .attr("y", dycircletext[i])
                }

                // decrement y-axis of line and circle
                cyinitialb += ydistance;
                dy1lineinitialb += ydistance;
                dy1lineinitialb2 += ydistance;
                dytextinitialb += ydistance;
                dytextinitialb2 += ydistance;
            }
        }
    };

    // reinitialize variable for next miscellaneous.iteration
    var reinitVariable = function () {
        idProtein = 0;
        idAltProtein = 0;
        idMembrane = 0;
        counter = 0;

        membraneModelObj = [];
        alternativeModelObj = [];
        relatedModelObj = [];

        relatedModel = [];
        modelEntityObj = [];
        membraneModelID = [];

        relatedModelEntity = [];
        cotransporterList = [];
    };

    var reflectCheckbox = function (icircleGlobal) {
        checkboxsvg.call(checkBox[icircleGlobal])._groups[0][0].textContent = combinedMembrane[icircleGlobal].med_pr_text;
        console.log("checkboxsvg in reflectCheckbox: ", checkboxsvg._groups[0][0].textContent);

        ydistancechk = 50;
        yinitialchk = 215;
        ytextinitialchk = 230;

        for (var i = 0; i < combinedMembrane.length; i++) {
            var textvaluechk = combinedMembrane[i].med_pr_text;
            var indexOfParen = textvaluechk.indexOf("(");
            textvaluechk = textvaluechk.slice(0, indexOfParen - 1) + " (" + combinedMembrane[i].med_pr_text_syn + ")";

            checkBox[i].x(960).y(yinitialchk).checked(false).clickEvent(update);
            checkBox[i].xtext(1000).ytext(ytextinitialchk).text("" + textvaluechk + "");

            checkboxsvg.call(checkBox[i]);

            yinitialchk += ydistancechk;
            ytextinitialchk += ydistancechk;
        }
    };

    var Modal = function (options) {

        console.log("Modal function");

        var $this = this;

        options = options ? options : {};
        $this.options = {};
        $this.options.header = options.header !== undefined ? options.header : false;
        $this.options.footer = options.footer !== undefined ? options.footer : false;
        $this.options.closeButton = options.closeButton !== undefined ? options.closeButton : true;
        $this.options.footerCloseButton = options.footerCloseButton !== undefined ? options.footerCloseButton : false;
        $this.options.footerSaveButton = options.footerSaveButton !== undefined ? options.footerSaveButton : false;
        $this.options.id = options.id !== undefined ? options.id : "myModal";

        /**
         * Append modal window html to body
         */
        $this.createModal = function () {
            $('body').append('<div id="' + $this.options.id + '" class="modal fade"></div>');
            $($this.selector).append('<div class="modal-dialog custom-modal"><div class="modal-content"></div></div>');
            var win = $('.modal-content', $this.selector);

            var someText = "A recommender system or a recommendation system (sometimes replacing " +
                "\nsystem with a synonym such as platform or engine) is a subclass of information " +
                "\nfiltering system that seeks to predict the rating or preference that a user " +
                "\nwould give to an item.";

            var headerHtml = '<div class="modal-header">' +
                '<h4 class="modal-title" data-toggle="tooltip" data-placement="right" title="' + someText + '" lang="de">' +
                '</h4></div>';

            if ($this.options.header) {
                // win.append('<div class="modal-header"><h4 class="modal-title" lang="de"></h4></div>');
                win.append(headerHtml);

                if ($this.options.closeButton) {
                    win.find('.modal-header').prepend('<button type="button" ' +
                        'class="close" data-dismiss="modal">&times;</button>');
                }
            }

            win.append('<div class="modal-body"></div>');
            if ($this.options.footer) {
                win.append('<div class="modal-footer"></div>');

                if ($this.options.footerCloseButton) {
                    win.find('.modal-footer').append('<a data-dismiss="modal" id="mcloseID" href="#" ' +
                        'class="btn btn-default" lang="de">' + $this.options.footerCloseButton + '</a>');
                }

                if ($this.options.footerSaveButton) {
                    win.find('.modal-footer').append('<a data-dismiss="modal" id="msaveID" href="#" ' +
                        'class="btn btn-default" lang="de">' + $this.options.footerSaveButton + '</a>');
                }
            }

            // close button clicked!!
            $("#mcloseID").click(function (event) {

                console.log("second close button clicked!!");

                moveBack();
                membraneColorBack();

                if (mindex == 1)
                    linebasolateral.transition().delay(1000).duration(1000).style("stroke", "orange");
                else
                    lineapical.transition().delay(1000).duration(1000).style("stroke", "green");

                reinitVariable();
                return;
            })

            // save button clicked!!
            $("#msaveID").click(function (event) {

                console.log("#msaveID: ", combinedMembrane);
                console.log("second save button clicked!");

                // add models without dragging
                for (i = 0; i < $("#addModelsID input").length; i++) {
                    if ($("#addModelsID input")[i].checked) {

                        console.log("add models without dragging!!");

                        var cTHIS = $("#addModelsID input")[i].id;
                        console.log("cTHIS AFTER: ", cTHIS);

                        var circleID = cTHIS.split(",");
                        console.log("circleID in addModelsID input: ", circleID);

                        combinedMembrane.push({
                            model_entity: circleID[0], // cellml model entity (e.g. weinstein_1995.cellml#NHE3.J_NHE3_Na)
                            model_entity2: circleID[1], // cellml model entity => cotransporter or empty otherwise
                            model_entity3: circleID[2],
                            variable_text: circleID[3], // cellml variable name (e.g. J_NHE_Na)
                            variable_text2: circleID[4], // cellml variable name
                            variable_text3: circleID[5],
                            source_fma: circleID[6], // source FMA uri
                            sink_fma: circleID[7], // sink FMA uri
                            source_fma2: circleID[8], // source FMA uri => cotransporter or empty otherwise
                            sink_fma2: circleID[9], // sink FMA uri => cotransporter or empty otherwise
                            source_fma3: circleID[10],
                            sink_fma3: circleID[11],
                            med_fma: circleID[12], // mediator FMA uri
                            med_pr: circleID[13], // mediator protein uri
                            solute_chebi: circleID[14], // solute CHEBI uri
                            solute_chebi2: circleID[15], // solute CHEBI uri
                            solute_chebi3: circleID[16],
                            solute_text: circleID[17], // solute text using the CHEBI uri from OLS
                            solute_text2: circleID[18], // solute text using the CHEBI uri from OLS
                            solute_text3: circleID[19],
                            med_pr_text: circleID[20], // mediator protein text using the mediator protein uri from OLS
                            med_pr_text_syn: circleID[21], // synonym of a mediator protein text (e.g. NHE3, SGLT1) using the mediator protein uri from OLS
                            protein_name: circleID[22] // protein name
                        });
                        // combinedMembrane = miscellaneous.uniqueifyCombinedMembrane(combinedMembrane);

                        console.log("combinedMembrane in addModelsID input: ", combinedMembrane);

                        combinedMemChk(combinedMembrane.length - 1);
                        combinedMemFunc(combinedMembrane.length - 1, msaveIDflag);

                        reinitVariable();
                        return;
                    }
                }

                // apical or basolateral membrane models
                for (i = 0; i < $("#membraneModelsID input").length; i++) {
                    if ($("#membraneModelsID input")[i].checked) {

                        console.log("Apical or Basolateral membrane!!");

                        // paracellular
                        if ($(cthis).attr("membrane") == sparqlUtils.paracellularID) {
                            $(cthis).attr("idParacellular", $("#membraneModelsID input")[i].id);
                        }
                        else {
                            $(cthis).attr("id", $("#membraneModelsID input")[i].id);
                        }

                        $(cthis).attr("id", $("#membraneModelsID input")[i].id);
                        console.log("cthis AFTER: ", cthis);

                        console.log("$(#membraneModelsID input): ", combinedMembrane);
                    }
                }

                // alternative models
                for (i = 0; i < $("#alternativeModelID input").length; i++) {
                    if ($("#alternativeModelID input")[i].checked) {

                        console.log("Alternative model!!");

                        $(cthis).attr("id", $("#alternativeModelID input")[i].id);
                        console.log("cthis AFTER: ", cthis);
                    }
                }

                // related organ models in PMR
                for (i = 0; i < $("#relatedOrganModelID input").length; i++) {
                    if ($("#relatedOrganModelID input")[i].checked) {

                        console.log("Related organ model!!");

                        $(cthis).attr("id", $("#relatedOrganModelID input")[i].id);
                        console.log("cthis AFTER: ", cthis);
                    }
                }

                membraneColorBack();

                var circleID = $(cthis).prop("id").split(",");
                console.log("circleID at the end: ", circleID);

                var totalCheckboxes = $("input:checkbox").length,
                    numberOfChecked = $("input:checkbox:checked").length,
                    numberOfNotChecked = totalCheckboxes - numberOfChecked;

                console.log("totalCheckboxes, numberOfChecked, numberNotChecked: ", totalCheckboxes, numberOfChecked, numberOfNotChecked);
                console.log("$(#msaveID).click(function (event): combinedMembrane", combinedMembrane);

                if (totalCheckboxes == numberOfNotChecked) {
                    console.log("if (totalCheckboxes == numberOfNotChecked");
                    console.log("totalCheckboxes, numberNotChecked: ", totalCheckboxes, numberOfNotChecked);
                    console.log("circleID checkboxes: ", circleID[6], circleID[7], circleID[12]);

                    console.log("icircleGlobal: ", icircleGlobal);

                    // mediator FMA uri
                    if (combinedMembrane[icircleGlobal].med_fma == sparqlUtils.apicalID) {
                        circleID[12] = sparqlUtils.basolateralID;
                        combinedMembrane[icircleGlobal].med_fma = sparqlUtils.basolateralID;

                        // source and sink FMA uri
                        if (combinedMembrane[icircleGlobal].source_fma == sparqlUtils.luminalID && combinedMembrane[icircleGlobal].sink_fma == sparqlUtils.cytosolID) {
                            circleID[6] = sparqlUtils.cytosolID;
                            combinedMembrane[icircleGlobal].source_fma = sparqlUtils.cytosolID;
                            circleID[7] = sparqlUtils.interstitialID;
                            combinedMembrane[icircleGlobal].sink_fma = sparqlUtils.interstitialID;
                        }

                        if (combinedMembrane[icircleGlobal].source_fma == sparqlUtils.cytosolID && combinedMembrane[icircleGlobal].sink_fma == sparqlUtils.luminalID) {
                            circleID[6] = sparqlUtils.interstitialID;
                            combinedMembrane[icircleGlobal].source_fma = sparqlUtils.interstitialID;
                            circleID[7] = sparqlUtils.cytosolID;
                            combinedMembrane[icircleGlobal].sink_fma = sparqlUtils.cytosolID;
                        }

                        // source2 and sink2 FMA uri
                        if (combinedMembrane[icircleGlobal].source_fma2 != "" && combinedMembrane[icircleGlobal].sink_fma2 != "") {
                            if (combinedMembrane[icircleGlobal].source_fma2 == sparqlUtils.luminalID && combinedMembrane[icircleGlobal].sink_fma2 == sparqlUtils.cytosolID) {
                                circleID[8] = sparqlUtils.cytosolID;
                                combinedMembrane[icircleGlobal].source_fma2 = sparqlUtils.cytosolID;
                                circleID[9] = sparqlUtils.interstitialID;
                                combinedMembrane[icircleGlobal].sink_fma2 = sparqlUtils.interstitialID;
                            }

                            if (combinedMembrane[icircleGlobal].source_fma2 == sparqlUtils.cytosolID && combinedMembrane[icircleGlobal].sink_fma2 == sparqlUtils.luminalID) {
                                circleID[8] = sparqlUtils.interstitialID;
                                combinedMembrane[icircleGlobal].source_fma2 = sparqlUtils.interstitialID;
                                circleID[9] = sparqlUtils.cytosolID;
                                combinedMembrane[icircleGlobal].sink_fma2 = sparqlUtils.cytosolID;
                            }
                        }
                    }
                    else {
                        circleID[12] = sparqlUtils.apicalID;
                        combinedMembrane[icircleGlobal].med_fma = sparqlUtils.apicalID;

                        // source and sink FMA uri
                        if (combinedMembrane[icircleGlobal].source_fma == sparqlUtils.cytosolID && combinedMembrane[icircleGlobal].sink_fma == sparqlUtils.interstitialID) {
                            circleID[6] = sparqlUtils.luminalID;
                            combinedMembrane[icircleGlobal].source_fma = sparqlUtils.luminalID;
                            circleID[7] = sparqlUtils.cytosolID;
                            combinedMembrane[icircleGlobal].sink_fma = sparqlUtils.cytosolID;
                        }

                        if (combinedMembrane[icircleGlobal].source_fma == sparqlUtils.interstitialID && combinedMembrane[icircleGlobal].sink_fma == sparqlUtils.cytosolID) {
                            circleID[6] = sparqlUtils.cytosolID;
                            combinedMembrane[icircleGlobal].source_fma = sparqlUtils.cytosolID;
                            circleID[7] = sparqlUtils.luminalID;
                            combinedMembrane[icircleGlobal].sink_fma = sparqlUtils.luminalID;
                        }

                        // source2 and sink2 FMA uri
                        if (circleID[8] != "" && circleID[9] != "") {
                            if (combinedMembrane[icircleGlobal].source_fma2 == sparqlUtils.cytosolID && combinedMembrane[icircleGlobal].sink_fma2 == sparqlUtils.interstitialID) {
                                circleID[8] = sparqlUtils.luminalID;
                                combinedMembrane[icircleGlobal].source_fma2 = sparqlUtils.luminalID;
                                circleID[9] = sparqlUtils.cytosolID;
                                combinedMembrane[icircleGlobal].sink_fma2 = sparqlUtils.cytosolID;
                            }

                            if (combinedMembrane[icircleGlobal].source_fma2 == sparqlUtils.interstitialID && combinedMembrane[icircleGlobal].sink_fma2 == sparqlUtils.cytosolID) {
                                circleID[8] = sparqlUtils.cytosolID;
                                combinedMembrane[icircleGlobal].source_fma2 = sparqlUtils.cytosolID;
                                circleID[9] = sparqlUtils.luminalID;
                                combinedMembrane[icircleGlobal].sink_fma2 = sparqlUtils.luminalID;
                            }
                        }
                    }
                }
                else {

                    console.log("ELSE totalCheckboxes == numberOfNotChecked");

                    // update combinedMembrane, this will be sent to GMS to assemble and reproduce a new cellml model
                    combinedMembrane[icircleGlobal].model_entity = circleID[0]; // cellml model entity (e.g. weinstein_1995.cellml#NHE3.J_NHE3_Na)
                    combinedMembrane[icircleGlobal].model_entity2 = circleID[1]; // cellml model entity => cotransporter or empty otherwise
                    combinedMembrane[icircleGlobal].model_entity3 = circleID[2];
                    combinedMembrane[icircleGlobal].variable_text = circleID[3]; // cellml variable name (e.g. J_NHE_Na)
                    combinedMembrane[icircleGlobal].variable_text2 = circleID[4]; // cellml variable name
                    combinedMembrane[icircleGlobal].variable_text3 = circleID[5];
                    combinedMembrane[icircleGlobal].source_fma = circleID[6]; // source FMA uri
                    combinedMembrane[icircleGlobal].sink_fma = circleID[7]; // sink FMA uri
                    combinedMembrane[icircleGlobal].source_fma2 = circleID[8]; // source FMA uri => cotransporter or empty otherwise
                    combinedMembrane[icircleGlobal].sink_fma2 = circleID[9]; // sink FMA uri => cotransporter or empty otherwise
                    combinedMembrane[icircleGlobal].source_fma3 = circleID[10];
                    combinedMembrane[icircleGlobal].sink_fma3 = circleID[11];
                    combinedMembrane[icircleGlobal].med_fma = circleID[12]; // mediator FMA uri
                    combinedMembrane[icircleGlobal].med_pr = circleID[13]; // mediator protein uri
                    combinedMembrane[icircleGlobal].solute_chebi = circleID[14]; // solute CHEBI uri
                    combinedMembrane[icircleGlobal].solute_chebi2 = circleID[15]; // solute CHEBI uri
                    combinedMembrane[icircleGlobal].solute_chebi3 = circleID[16];
                    combinedMembrane[icircleGlobal].solute_text = circleID[17]; // solute text using the CHEBI uri from OLS
                    combinedMembrane[icircleGlobal].solute_text2 = circleID[18]; // solute text using the CHEBI uri from OLS
                    combinedMembrane[icircleGlobal].solute_text3 = circleID[19];
                    combinedMembrane[icircleGlobal].med_pr_text = circleID[20]; // mediator protein text using the mediator protein uri from OLS
                    combinedMembrane[icircleGlobal].med_pr_text_syn = circleID[21]; // synonym of a mediator protein text (e.g. NHE3, SGLT1) using the mediator protein uri from OLS
                    combinedMembrane[icircleGlobal].protein_name = circleID[22]; // protein name
                }

                console.log("circleID at the end 2: ", circleID);
                console.log("icircleGlobal: ", icircleGlobal);
                console.log("combinedMembrane: ", combinedMembrane);
                console.log("circlewithlineg: ", circlewithlineg);
                console.log("$('#newgid').prop('childNodes'): ", $('#newgid').prop('childNodes'));
                for (var i = 0; i < $('#newgid').prop('childNodes').length; i++) {

                    if ($('#newgid').prop('childNodes')[i].firstChild == undefined)
                        continue;

                    console.log("$('#newgid').prop('childNodes')[i].firstChild.id: ",
                        $('#newgid').prop('childNodes')[i].firstChild.id);

                    if ($('#newgid').prop('childNodes')[i].firstChild.id == "linewithlineg" + icircleGlobal) {
                        console.log("index of i: ", i);

                        $('#newgid').prop('childNodes')[i].remove();
                        // break;
                    }
                }

                // circle placement and rearrangement
                if ($(cthis).attr("membrane") == sparqlUtils.apicalID) {
                    linebasolateral
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .style("stroke", "orange");

                    msaveIDflag = true;
                    combinedMemFunc(icircleGlobal, msaveIDflag);

                    // decrement y-axis of line and circle
                    yvalue -= ydistance;
                    cyvalue -= ydistance;

                    // increment y-axis of line and circle
                    yvalueb += ydistance;
                    cyvalueb += ydistance;

                    circleRearrange();
                }
                else {
                    lineapical
                        .transition()
                        .delay(1000)
                        .duration(1000)
                        .style("stroke", "green");

                    msaveIDflag = true;
                    combinedMemFunc(icircleGlobal, msaveIDflag);

                    // decrement y-axis of line and circle
                    yvalueb -= ydistance;
                    cyvalueb -= ydistance;

                    // increment y-axis of line and circle
                    yvalue += ydistance;
                    cyvalue += ydistance;

                    circleRearrange();
                }

                // reflect changes in respective checkbox
                reflectCheckbox(icircleGlobal);

                console.log("circleID at the end 3: ", circleID);
                console.log("combinedMembrane at the end 3: ", combinedMembrane);

                // reinitialization
                reinitVariable();
                return;
            });
        };

        /**
         * Set header text. It makes sense only if the options.header is logical true.
         * @param {String} html New header text.
         */
        $this.setHeader = function (html) {
            $this.window.find(".modal-title").html(html);
        };

        /**
         * Set body HTML.
         * @param {String} html New body HTML
         */
        $this.setBody = function (html) {
            $this.window.find(".modal-body").html(html);
        };

        /**
         * Set footer HTML.
         * @param {String} html New footer HTML
         */
        $this.setFooter = function (html) {
            $this.window.find(".modal-footer").html(html);
        };

        /**
         * Return window body element.
         * @returns {jQuery} The body element
         */
        $this.getBody = function () {
            return $this.window.find(".modal-body");
        };

        /**
         * Show modal window
         */
        $this.show = function () {
            $this.window.modal("show");
        };

        /**
         * Hide modal window
         */
        $this.hide = function () {
            $this.window.modal("hide");
        };

        /**
         * Toggle modal window
         */
        $this.toggle = function () {
            $this.window.modal("toggle");
        };

        $this.selector = "#" + $this.options.id;
        if (!$($this.selector).length) {
            $this.createModal();
        }

        $this.window = $($this.selector);
        $this.setHeader($this.options.header);
    };

    // display modal window after clicking either apical or basolateral membrane
    function modalWindowToAddModels(located_in) {

        console.log("modalWindowToAddModels located_in: ", located_in);

        var membraneName;
        if (located_in == sparqlUtils.apicalID)
            membraneName = "Apical";
        else
            membraneName = "Basolateral";

        var m = new Modal({
            id: "myModal",
            header: "Recommender system",
            footer: "My footer",
            footerCloseButton: "Close",
            footerSaveButton: "Save"
        });

        $("#myModal").modal({backdrop: "static", keyboard: false});
        m.getBody().html("<div id=modalBody></div>");
        m.show();

        miscellaneous.showLoading("#modalBody");

        var query = sparqlUtils.modalWindowToAddModelsSPARQL(located_in);

        ajaxUtils.sendPostRequest(
            sparqlUtils.endpoint,
            query,
            function (jsonRelatedModelEntity) {

                console.log("modalWindowToAddModels jsonRelatedModelEntity: ", jsonRelatedModelEntity, combinedMembrane);
                for (var i = 0; i < jsonRelatedModelEntity.results.bindings.length; i++) {
                    if (!miscellaneous.isExist(jsonRelatedModelEntity.results.bindings[i].modelEntity.value, relatedModelEntity)) {
                        relatedModelEntity.push(jsonRelatedModelEntity.results.bindings[i].modelEntity.value);
                    }
                }

                console.log("modalWindowToAddModels relatedModelEntity: ", relatedModelEntity); // fluxList

                if (relatedModelEntity.length <= 1) {
                    // console.log("fluxList.length <= 1");
                    // make flux in modelEntityObj
                    modelEntityObj.push({
                        "model_entity": relatedModelEntity[0],
                        "model_entity2": ""
                    });

                    console.log("addModels fluxList: ", relatedModelEntity);
                    console.log("addModels cotransporterList: ", cotransporterList);
                    console.log("addModels modelEntityObj: ", modelEntityObj);

                    // 2 for addModels, i.e., add models window without dragging
                    relatedMembraneModel(membraneName, cotransporterList, 2);
                }
                else {
                    for (var i = 0; i < relatedModelEntity.length; i++) {
                        for (var j = i + 1; j < relatedModelEntity.length; j++) {
                            makecotransporter(relatedModelEntity[i], relatedModelEntity[j], relatedModelEntity, membraneName, 2);
                        }
                    }
                }
            }, true);

        jQuery(window).trigger("resize");
    }
};

var radarplot = function () {
    var w = 500,
        h = 500;

    // var colorscale = d3.scale.category10(); // v3
    var colorscale = d3.scaleOrdinal(d3.schemeCategory20); // v4

    var combinedMembrane = [
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
            med_pr: "http://purl.obolibrary.org/obo/PR_P59158", // PR_P55018 (RAT), PR_P59158 (Mouse) and PR_P55017 (human)
            med_pr_text: "solute carrier family 12 member 3 (mouse)",
            med_pr_text_syn: "TSC",
            model_entity: "chang_fujita_b_1999.cellml#total_transepithelial_sodium_flux.J_mc_Na",
            model_entity2: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma3: "",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
            solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_17996",
            solute_chebi3: "",
            solute_text: "Na+",
            solute_text2: "Cl-",
            solute_text3: "",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma3: "",
            variable_text: "J_mc_Na",
            variable_text2: "J_mc_Cl",
            variable_text3: ""
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
            med_pr: "http://purl.obolibrary.org/obo/PR_Q63633",
            med_pr_text: "solute carrier family 12 member 5 (rat)",
            med_pr_text_syn: "Q63633",
            model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_mc_Cl",
            model_entity2: "chang_fujita_b_1999.cellml#total_transepithelial_potassium_flux.J_mc_K",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma3: "",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
            solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
            solute_chebi3: "",
            solute_text: "Cl-",
            solute_text2: "K+",
            solute_text3: "",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma3: "",
            variable_text: "J_mc_Cl",
            variable_text2: "J_mc_K",
            variable_text3: ""
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
            med_pr: "http://purl.obolibrary.org/obo/PR_P37089",
            med_pr_text: "amiloride-sensitive sodium channel subunit alpha (rat)",
            med_pr_text_syn: "RENAC",
            model_entity: "chang_fujita_b_1999.cellml#mc_sodium_flux.G_mc_Na",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "channel",
            sink_fma3: "channel",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
            solute_chebi2: "channel",
            solute_chebi3: "channel",
            solute_text: "Na+",
            solute_text2: "channel",
            solute_text3: "channel",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "channel",
            source_fma3: "channel",
            variable_text: "G_mc_Na",
            variable_text2: "channel",
            variable_text3: "channel"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
            med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
            med_pr_text: "chloride channel protein ClC-Ka (rat)",
            med_pr_text_syn: "CLCNK1",
            model_entity: "chang_fujita_b_1999.cellml#mc_chloride_flux.G_mc_Cl",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "channel",
            sink_fma3: "channel",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
            solute_chebi2: "channel",
            solute_chebi3: "channel",
            solute_text: "Cl-",
            solute_text2: "channel",
            solute_text3: "channel",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "channel",
            source_fma3: "channel",
            variable_text: "G_mc_Cl",
            variable_text2: "channel",
            variable_text3: "channel"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84666",
            med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
            med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
            med_pr_text_syn: "P15387",
            model_entity: "chang_fujita_b_1999.cellml#mc_potassium_flux.G_mc_K",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "channel",
            sink_fma3: "channel",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
            solute_chebi2: "channel",
            solute_chebi3: "channel",
            solute_text: "K+",
            solute_text2: "channel",
            solute_text3: "channel",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "channel",
            source_fma3: "channel",
            variable_text: "G_mc_K",
            variable_text2: "channel",
            variable_text3: "channel"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
            med_pr: "http://purl.obolibrary.org/obo/PR_P06685",
            med_pr_text: "sodium/potassium-transporting ATPase subunit alpha-1 (rat)",
            med_pr_text_syn: "P06685",
            model_entity: "chang_fujita_b_1999.cellml#solute_concentrations.J_sc_Na",
            model_entity2: "chang_fujita_b_1999.cellml#sc_potassium_flux.J_sc_K",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            sink_fma2: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma3: "",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
            solute_chebi2: "http://purl.obolibrary.org/obo/CHEBI_29103",
            solute_chebi3: "",
            solute_text: "Na+",
            solute_text2: "K+",
            solute_text3: "",
            source_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            source_fma2: "http://purl.obolibrary.org/obo/FMA_9673",
            source_fma3: "",
            variable_text: "J_sc_Na",
            variable_text2: "J_sc_K",
            variable_text3: ""
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
            med_pr: "http://purl.obolibrary.org/obo/PR_Q06393",
            med_pr_text: "chloride channel protein ClC-Ka (rat)",
            med_pr_text_syn: "CLCNK1",
            model_entity: "chang_fujita_b_1999.cellml#sc_chloride_flux.G_sc_Cl",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "channel",
            sink_fma3: "channel",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
            solute_chebi2: "channel",
            solute_chebi3: "channel",
            solute_text: "Cl-",
            solute_text2: "channel",
            solute_text3: "channel",
            source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            source_fma2: "channel",
            source_fma3: "channel",
            variable_text: "G_sc_Cl",
            variable_text2: "channel",
            variable_text3: "channel"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_84669",
            med_pr: "http://purl.obolibrary.org/obo/PR_P15387",
            med_pr_text: "potassium voltage-gated channel subfamily B member 1 (rat)",
            med_pr_text_syn: "P15387",
            model_entity: "chang_fujita_b_1999.cellml#sc_potassium_flux.G_sc_K",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_66836",
            sink_fma2: "channel",
            sink_fma3: "channel",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
            solute_chebi2: "channel",
            solute_chebi3: "channel",
            solute_text: "K+",
            solute_text2: "channel",
            solute_text3: "channel",
            source_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            source_fma2: "channel",
            source_fma3: "channel",
            variable_text: "G_sc_K",
            variable_text2: "channel",
            variable_text3: "channel"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
            med_pr: "http://purl.obolibrary.org/obo/PR_Q9Z0S6",
            med_pr_text: "claudin-10 (mouse)",
            med_pr_text_syn: "CLDN10A",
            model_entity: "chang_fujita_b_1999.cellml#ms_sodium_flux.G_ms_Na",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            sink_fma2: "diffusiveflux",
            sink_fma3: "diffusiveflux",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29101",
            solute_chebi2: "diffusiveflux",
            solute_chebi3: "diffusiveflux",
            solute_text: "Na+",
            solute_text2: "diffusiveflux",
            solute_text3: "diffusiveflux",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "diffusiveflux",
            source_fma3: "diffusiveflux",
            variable_text: "G_ms_Na",
            variable_text2: "diffusiveflux",
            variable_text3: "diffusiveflux"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
            med_pr: "http://purl.obolibrary.org/obo/PR_O35054",
            med_pr_text: "claudin-4 (mouse)",
            med_pr_text_syn: "CPETR1",
            model_entity: "chang_fujita_b_1999.cellml#ms_chloride_flux.G_ms_Cl",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            sink_fma2: "diffusiveflux",
            sink_fma3: "diffusiveflux",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_17996",
            solute_chebi2: "diffusiveflux",
            solute_chebi3: "diffusiveflux",
            solute_text: "Cl-",
            solute_text2: "diffusiveflux",
            solute_text3: "diffusiveflux",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "diffusiveflux",
            source_fma3: "diffusiveflux",
            variable_text: "G_ms_Cl",
            variable_text2: "diffusiveflux",
            variable_text3: "diffusiveflux"
        },
        {
            med_fma: "http://purl.obolibrary.org/obo/FMA_67394",
            med_pr: "http://purl.obolibrary.org/obo/PR_F1LZ52",
            med_pr_text: "kelch-like protein 3 (rat)",
            med_pr_text_syn: "F1LZ52",
            model_entity: "chang_fujita_b_1999.cellml#ms_potassium_flux.G_ms_K",
            model_entity2: "",
            model_entity3: "",
            protein_name: "http://purl.obolibrary.org/obo/CL_0000066",
            sink_fma: "http://purl.obolibrary.org/obo/FMA_9673",
            sink_fma2: "diffusiveflux",
            sink_fma3: "diffusiveflux",
            solute_chebi: "http://purl.obolibrary.org/obo/CHEBI_29103",
            solute_chebi2: "diffusiveflux",
            solute_chebi3: "diffusiveflux",
            solute_text: "K+",
            solute_text2: "diffusiveflux",
            solute_text3: "diffusiveflux",
            source_fma: "http://purl.obolibrary.org/obo/FMA_74550",
            source_fma2: "diffusiveflux",
            source_fma3: "diffusiveflux",
            variable_text: "G_ms_K",
            variable_text2: "diffusiveflux",
            variable_text3: "diffusiveflux"
        }
    ];

    // query for model entities and proteins
    var query = "SELECT ?modelname ?protein " +
        "WHERE { GRAPH ?workspaceName { ?modelname <http://www.obofoundry.org/ro/ro.owl#modelOf> ?protein . " +
        "}}";

    ajaxUtils.sendPostRequest(
        sparqlUtils.endpoint,
        query,
        function (jsonObj) {
            console.log("jsonObj: ", jsonObj);

            //Legend titles
            var LegendOptions = [], LegendOptionsProtein = [];
            for (var i = 0; i < jsonObj.results.bindings.length; i++) {
                var temp = jsonObj.results.bindings[i].modelname.value;
                LegendOptions.push(temp.slice(0, temp.indexOf("#")));
                LegendOptionsProtein.push(jsonObj.results.bindings[i].protein.value);
            }

            console.log("LegendOptions: ", LegendOptions);
            console.log("LegendOptionsProtein: ", LegendOptionsProtein);

            // Legend Model Entities
            var modelEntity = [];
            for (var i = 0; i < LegendOptions.length; i++) {
                modelEntity.push(
                    {
                        model: LegendOptions[i],
                        concentration: [],
                        flux: [],
                        protein: []
                    }
                );

                // Insert protein IDs
                if (!LegendOptionsProtein[i].indexOf("http://purl.obolibrary.org/obo/PR_"))
                    modelEntity[i].protein.push(
                        {
                            id: LegendOptionsProtein[i]
                        }
                    );
            }

            // query for model entities and mediator proteins
            var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
                "SELECT ?modelEntity ?mediator " +
                "WHERE { " +
                "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
                "?model_prop semsim:physicalPropertyOf ?model_proc. " +
                "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
                "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
                "?med_entity semsim:hasPhysicalDefinition ?mediator. " +
                "}";

            ajaxUtils.sendPostRequest(
                sparqlUtils.endpoint,
                query,
                function (jsonObjPr) {

                    // Insert mediator proteins in modelEntity
                    for (var i = 0; i < modelEntity.length; i++) {
                        for (var j = 0; j < jsonObjPr.results.bindings.length; j++) {
                            var tModelEntity = jsonObjPr.results.bindings[j].modelEntity.value;
                            var tMediator = jsonObjPr.results.bindings[j].mediator.value;
                            if (modelEntity[i].model == tModelEntity.slice(0, tModelEntity.indexOf("#")) &&
                                !tMediator.indexOf("http://purl.obolibrary.org/obo/PR_")) {
                                modelEntity[i].protein.push(
                                    {
                                        id: tMediator
                                    }
                                );
                            }
                        }
                    }

                    // Filter proteins
                    for (var i = 0; i < modelEntity.length; i++) {
                        for (var j = 0; j < modelEntity[i].protein.length; j++) {
                            for (var k = j + 1; k < modelEntity[i].protein.length; k++) {
                                if (modelEntity[i].protein[j].id == modelEntity[i].protein[k].id) {
                                    modelEntity[i].protein.splice(k, 1);
                                    k--;
                                }
                            }
                        }
                    }

                    var drawFunction = function () {
                        console.log("Legend modelEntity: ", modelEntity);

                        // helper function to compare proteins wrt to the assembled model
                        // med_pr and med_pr_text_syn properties in combinedMembrane
                        var calculateSimilarity = function (modelEntityPrArray, combinedMembraneMed) {
                            for (var i = 0; i < modelEntityPrArray.length; i++) {
                                if ((modelEntityPrArray[i].id == combinedMembraneMed.med_pr) &&
                                    (modelEntityPrArray[i].syn == combinedMembraneMed.med_pr_text_syn)) {
                                    return 1;
                                }
                                else if ((modelEntityPrArray[i].id != combinedMembraneMed.med_pr) &&
                                    (modelEntityPrArray[i].syn == combinedMembraneMed.med_pr_text_syn)) {
                                    return [modelEntityPrArray[i].id, combinedMembraneMed.med_pr];
                                }
                            }
                            return 0;
                        }

                        var calculateProteinNameSimilarity = function (modelEntityPrArray, combinedMembraneMed) {
                            for (var i = 0; i < modelEntityPrArray.length; i++) {
                                if ((modelEntityPrArray[i].id != combinedMembraneMed.med_pr) &&
                                    (modelEntityPrArray[i].syn == combinedMembraneMed.med_pr_text_syn)) {
                                    return modelEntityPrArray[i].proteinName;
                                }
                            }
                            return combinedMembraneMed.med_pr_text;
                        }

                        // Data
                        var d = [];
                        for (var i = 0; i < modelEntity.length; i++) {
                            d[i] = [];
                            for (var j = 0; j < combinedMembrane.length; j++) {
                                d[i].push(
                                    {
                                        axis: combinedMembrane[j].med_pr_text_syn,
                                        assembledProteinName: combinedMembrane[j].med_pr_text,
                                        proteinName: calculateProteinNameSimilarity(modelEntity[i].protein, combinedMembrane[j]),
                                        value: calculateSimilarity(modelEntity[i].protein, combinedMembrane[j]),
                                        dvalue: d[i]
                                    }
                                );
                            }
                        }

                        // draw function 2
                        var draw2Function = function () {
                            console.log("d: ", d);

                            //Options for the Radar chart, other than default
                            var mycfg = {
                                w: w,
                                h: h,
                                maxValue: 1,
                                levels: 11,
                                ExtraWidthX: 300
                            }

                            //Remove zero values from d and corresponding indexes in
                            // LegendOptions, LegendOptionsProtein and modelEntity
                            for (var i = 0; i < d.length; i++) {
                                var counter = 0;
                                for (var j = 0; j < d[i].length; j++) {
                                    if (d[i][j].value == 0) {
                                        counter++;
                                    }
                                }

                                if (counter == d[i].length) {
                                    d.splice(i, 1);
                                    LegendOptions.splice(i, 1);
                                    LegendOptionsProtein.splice(i, 1);
                                    modelEntity.splice(i, 1);
                                    i--;
                                }
                            }

                            //Call function to draw the Radar chart
                            //Will expect that data is in %'s
                            RadarChart.draw("#chart", d, mycfg);

                            ////////////////////////////////////////////
                            /////////// Initiate legend ////////////////
                            ////////////////////////////////////////////
                            var svg = d3.select('#chart')
                                .selectAll('svg')
                                .append('svg')
                                .attr("width", w + 300)
                                .attr("height", h);

                            //Create the title for the legend
                            var text = svg.append("text")
                                .attr("class", "title")
                                .attr('transform', 'translate(90,0)')
                                .attr("x", w - 70)
                                .attr("y", 10)
                                .attr("font-size", "12px")
                                .attr("fill", "#404040")
                                .text("Which models match wrt the assembled model");

                            //Initiate Legend
                            var legend = svg.append("g")
                                .attr("class", "legend")
                                .attr("height", 100)
                                .attr("width", 200)
                                .attr('transform', 'translate(90,20)');

                            //Create colour squares
                            legend.selectAll('rect')
                                .data(LegendOptions)
                                .enter()
                                .append("rect")
                                .attr("x", w - 65)
                                .attr("y", function (d, i) {
                                    return i * 20;
                                })
                                .attr("width", 10)
                                .attr("height", 10)
                                .style("fill", function (d, i) {
                                    return colorscale(i);
                                });

                            //Create text next to squares
                            legend.selectAll('text')
                                .data(LegendOptions)
                                .enter()
                                .append("text")
                                .attr("x", w - 52)
                                .attr("y", function (d, i) {
                                    return i * 20 + 9;
                                })
                                .attr("font-size", "11px")
                                .attr("fill", "#737373")
                                .text(function (d) {
                                    return d;
                                });

                            // Set visualized chart in local storage
                            sessionStorage.setItem("drawChartContent", $("#platform-content").html());
                        }

                        // EBI OLS
                        var outerCounter = 0;
                        var webServiceFunction = function (dPr) {
                            var innerCounter = 0;
                            var innerWebServiceFunction = function (dPrInner) {
                                var WSDbfetchREST = function (PID, fstPr, sndPr, index, ProteinSeq, requestData, baseUrl) {

                                    var dbfectendpoint = "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/" + PID[index] + "/fasta";
                                    // var dbfectendpoint = "/.api/ebi/uniprotkb/" + PID[index] + "/fasta";

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

                                                                            // console.log("tempList: ", tempList);
                                                                            console.log("identityMatrix: ", identityMatrix);

                                                                            var indexOfColon = identityMatrix.search("1:"),
                                                                                m, n, i, j;

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

                                                                            console.log("matrixArray: ", matrixArray);

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

                                                                            console.log("twoDMatrix: ", twoDMatrix);
                                                                            console.log("twoDMatrix[0][1]: ", (twoDMatrix[0][1] / 100));

                                                                            // assign computed value from similarity matrix
                                                                            d[outerCounter][innerCounter].value = twoDMatrix[0][1] / 100;

                                                                            innerCounter++;

                                                                            if (innerCounter == d[outerCounter].length) {
                                                                                outerCounter++;
                                                                                if (outerCounter == d.length) {
                                                                                    draw2Function();
                                                                                }
                                                                                else {
                                                                                    webServiceFunction(d[outerCounter]);
                                                                                }
                                                                            }
                                                                            else {
                                                                                innerWebServiceFunction(d[outerCounter][innerCounter]);
                                                                            }
                                                                        },
                                                                        false);
                                                                },
                                                                false);
                                                        }

                                                        chkJobStatus(jobId);
                                                        console.log("AFTER chkJobStatus(jobId)!");

                                                        return;
                                                    },
                                                    false);

                                                return;
                                            }

                                            // callback
                                            WSDbfetchREST(PID, fstPr, sndPr, index, ProteinSeq, requestData, baseUrl);
                                            console.log("AFTER WSDbfetchREST!");
                                        },
                                        false);
                                };

                                if (typeof dPrInner.value == "object") {
                                    var index = 0, ProteinSeq = "", requestData, PID = [];
                                    var baseUrl = "https://www.ebi.ac.uk/Tools/services/rest/clustalo";
                                    // var baseUrl = "/.api/ebi/clustalo";

                                    var fstPr = dPrInner.value[0];
                                    var sndPr = dPrInner.value[1];
                                    fstPr = fstPr.slice(fstPr.search("PR_") + 3, fstPr.length);
                                    sndPr = sndPr.slice(sndPr.search("PR_") + 3, sndPr.length);

                                    PID.push(fstPr);
                                    PID.push(sndPr);

                                    console.log("PID Before: ", PID);

                                    // PID does NOT start with P or Q
                                    for (var key in PID) {
                                        // console.log("PID[key]: ", PID[key]);
                                        if (PID[key].charAt(0) == "Q") continue;

                                        if (PID[key].charAt(0) != "P") {
                                            PID[key] = "P" + PID[key].replace(/^0+/, ""); // Or parseInt("065", 10);
                                        }
                                    }

                                    console.log("PID AFTER: ", PID);

                                    WSDbfetchREST(PID, fstPr, sndPr, index, ProteinSeq, requestData, baseUrl);
                                }
                                else {
                                    innerCounter++;

                                    if (innerCounter == d[outerCounter].length) {
                                        outerCounter++;
                                        if (outerCounter == d.length) {
                                            draw2Function();
                                        }
                                        else {
                                            webServiceFunction(d[outerCounter]);
                                        }
                                    }
                                    else {
                                        innerWebServiceFunction(d[outerCounter][innerCounter]);
                                    }
                                }
                            }

                            innerWebServiceFunction(d[outerCounter][innerCounter])
                        }

                        webServiceFunction(d[outerCounter]);
                    }

                    var outerCounter = 0;
                    var mediatorFunction = function (modelEntityProteinArray) {
                        var innerCounter = 0;
                        var innermediatorFunction = function (modelEntityInnerProteinArray) {
                            var endpointOLS = sparqlUtils.abiOntoEndpoint + "/pr/terms?iri=" + modelEntityInnerProteinArray.id;

                            ajaxUtils.sendGetRequest(
                                endpointOLS,
                                function (jsonObjOLSMedPr) {
                                    var med_pr_text_syn;
                                    proteinName = jsonObjOLSMedPr._embedded.terms[0].label
                                    if (jsonObjOLSMedPr._embedded.terms[0].annotation["has_related_synonym"] == undefined) {
                                        med_pr_text_syn = jsonObjOLSMedPr._embedded.terms[0].annotation["id"][0].slice(3);
                                    }
                                    else {
                                        var tempvar = jsonObjOLSMedPr._embedded.terms[0].annotation["has_related_synonym"];
                                        med_pr_text_syn = tempvar[0].toUpperCase();
                                    }

                                    modelEntity[outerCounter].protein[innerCounter].syn = med_pr_text_syn;
                                    modelEntity[outerCounter].protein[innerCounter].proteinName = proteinName;

                                    innerCounter++;

                                    if (innerCounter == modelEntity[outerCounter].protein.length) {
                                        outerCounter++;
                                        mediatorFunction(modelEntity[outerCounter]);
                                    }
                                    else {
                                        innermediatorFunction(modelEntity[outerCounter].protein[innerCounter]); // callback
                                    }
                                },
                                true);
                        }

                        if (outerCounter == modelEntity.length) {
                            drawFunction();
                        }
                        else {
                            innermediatorFunction(modelEntity[outerCounter].protein[innerCounter]); //First call
                        }
                    }

                    mediatorFunction(modelEntity[outerCounter].protein); // First call
                },
                true);
        },
        true
    );
};

exports.epithelialPlatform = epithelialPlatform;
exports.radarplot = radarplot;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Created by dsar941 on 5/11/2017.
 */
var solutesBouncing = function (newg, solutes) {

    console.log("solutes: ", solutes);
    console.log("solutes.compartment: ", solutes.compartment);

    var nodes = [],
        m = 10,
        maxSpeed = 1,
        color = d3.scaleOrdinal(d3.schemeCategory20).domain(d3.range(m));

    for (var i = 0; i < solutes.length; i++) {

        var colour;
        if (solutes[i].compartment == "http://identifiers.org/fma/FMA:263901")
            colour = "white";
        else colour = color(Math.floor(Math.random() * m)); // assuming initial text length is 100

        nodes.push({
            text: solutes[i].value,
            // fma: solutes[i].fma,
            color: colour,
            x: Math.random() * ((solutes[i].xrect + solutes[i].width) - (solutes[i].xrect + 100)) + (solutes[i].xrect),
            y: Math.random() * ((solutes[i].yrect + solutes[i].height) - solutes[i].yrect) + solutes[i].yrect,
            speedX: Math.random() * maxSpeed,
            speedY: Math.random() * maxSpeed,
            xrect: solutes[i].xrect,
            yrect: solutes[i].yrect,
            width: solutes[i].width,
            height: solutes[i].height
        });
    }

    var simulation = d3.forceSimulation()
        .force("charge", d3.forceManyBody().strength(0))
        .force("gravity", d3.forceManyBody().strength(0));

    var text = newg.append("g").selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("x", function (d) {
            return d.x;
        })
        .attr("y", function (d) {
            return d.y;
        })
        .style("fill", function (d) {
            return d.color;
        })
        .text(function (d) {
            return d.text;
        });

    simulation
        .nodes(nodes)
        .on("tick", tick);

    function tick() {
        simulation.alpha(0.1);
        text
            .each(gravity())
            .attr("x", function (d) {
                return d.x;
            })
            .attr("y", function (d) {
                return d.y;
            });
    }

    function gravity() {
        return function (d) {
            var textLength = $(this).prop("textLength").baseVal.value;

            if (d.x <= d.xrect) d.speedX = Math.abs(d.speedX);
            if (d.x + textLength >= d.xrect + d.width) d.speedX = -1 * Math.abs(d.speedX);

            if (d.y - (6.5 * 2.5) <= d.yrect) d.speedY = -1 * Math.abs(d.speedY); // assuming each char is 6.5 unit
            if (d.y + 6.5 >= d.yrect + d.height) d.speedY = Math.abs(d.speedY); // number of char is 2.5

            d.x = d.x + (d.speedX);
            d.y = d.y + (-1 * d.speedY);
        };
    }
};

exports.solutesBouncing = solutesBouncing;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by Dewan Sarwar on 14/01/2018.
 */
var sparqlUtils = __webpack_require__(0);

var svgPlatform = function (svg, newg, height, width, w, h, markerWidth, markerHeight) {
    var newgdefs = svg.append("g");
    newgdefs.append("defs")
        .append("pattern")
        .attr("id", "basicPattern")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 4)
        .attr("height", 4)
        .append("circle")
        .attr("cx", "0")
        .attr("cy", "0")
        .attr("r", "1.5")
        .attr("stroke", "#6495ED")
        .attr("stroke-width", 1.5);

    var dragrect = newg.append("rect")
        .attr("x", function (d) {
            return d.x;
        })
        .attr("y", function (d) {
            return d.y;
        })
        .attr("width", width)
        .attr("height", height)
        .attr("rx", 10)
        .attr("ry", 20)
        .attr("fill", "white")
        .attr("stroke", "url(#basicPattern)")
        .attr("stroke-width", 25);

    // Extracellular rectangle
    var extracellular = newg.append("rect")
        .attr("id", sparqlUtils.luminalID)
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", w / 3 - 30)
        .attr("height", h)
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "purple")
                .attr("opacity", 0.5)
                .attr("x", 960)
                .attr("y", 70)
                .text("Luminal Compartment");

            return "purple";
        })
        .attr("stroke-width", 1)
        .attr("fill", "white");

    // Intracellular rectangle
    var intracellular = newg.append("rect")
        .attr("id", sparqlUtils.cytosolID)
        .attr("x", w / 3 + 30)
        .attr("y", height / 3 + 20)
        .attr("width", width - 60)
        .attr("height", height - 40)
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "blue")
                .attr("opacity", 0.5)
                .attr("x", 960)
                .attr("y", 95)
                .text("Cytosol Compartment");

            return "blue";
        })
        .attr("stroke-width", 1)
        .attr("fill", "white");

    // Interstitial fluid rectangle
    var interstitial = newg.append("rect")
        .attr("id", sparqlUtils.interstitialID)
        .attr("x", w / 3 + width + 30)
        .attr("y", 0)
        .attr("width", w - (w / 3 + width + 30))
        .attr("height", h)
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "teal")
                .attr("opacity", 0.5)
                .attr("x", 960)
                .attr("y", 120)
                .text("Interstitial Fluid");

            return "teal";
        })
        .attr("stroke-width", 1)
        .attr("fill", "white");

    // Blood capillary rectangle
    var bloodcapillary = newg.append("rect")
        .attr("id", sparqlUtils.bloodCapillary)
        .attr("x", w + 20 + 40)
        .attr("y", 0)
        .attr("width", 70)
        .attr("height", h)
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "red")
                .attr("x", 960)
                .attr("y", 145)
                .text("Blood Capillary");

            return "red";
        })
        .attr("stroke-width", 1)
        .attr("fill", "white");

    // Paracellular rectangle
    var paracellular = newg.append("rect")
        .attr("id", sparqlUtils.paracellularID)
        .attr("x", w / 3 - 10)
        .attr("y", height / 3 + height + 30)
        .attr("width", width + 20)
        .attr("height", height / 3)
        .attr("stroke", function (d) {
            svg.append("text")
                .style("font", "16px sans-serif")
                .attr("stroke", "violet")
                .attr("opacity", 0.5)
                .attr("x", 960)
                .attr("y", 170)
                .text("Paracellular Pathway");

            return "violet";
        })
        .attr("stroke-width", 1)
        .attr("fill", "white");

    // Paracellular rectangle
    var paracellular2 = newg.append("rect")
        .attr("id", sparqlUtils.paracellularID)
        .attr("x", w / 3 - 10)
        .attr("y", 0)
        .attr("width", width + 20)
        .attr("height", height / 3 - 30)
        .attr("stroke", "violet")
        .attr("stroke-width", 1)
        .attr("fill", "white");

    var px = 265, py = height / 3 + height + height / 3 + 60; // 720
    // Neighbour epithelial cell
    newg.append("polygon")
        .attr("transform", "translate(" + px + ", " + py + ")")
        .attr("points", "0,0 0,100 0,0 300,0 300,100 300,0")
        .attr("fill", "white")
        .attr("stroke", "url(#basicPattern)")
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .attr("stroke-width", 25);

    // build the start arrow.
    svg.append("svg:defs")
        .selectAll("marker")
        .data(["start"])      // Different link/path types can be defined here
        .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 1)
        .attr("refY", -0.25)
        .attr("markerWidth", markerWidth)
        .attr("markerHeight", markerHeight)
        .attr("orient", "180")
        .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

    // build the starttop arrow.
    svg.append("svg:defs")
        .selectAll("marker")
        .data(["starttop"])      // Different link/path types can be defined here
        .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 1)
        .attr("refY", -0.25)
        .attr("markerWidth", markerWidth)
        .attr("markerHeight", markerHeight)
        .attr("orient", "270")
        .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");

    // build the end arrow.
    svg.append("svg:defs").selectAll("marker")
        .data(["end"])      // Different link/path types can be defined here
        .enter().append("svg:marker")    // This section adds in the arrows
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 1)
        .attr("refY", -0.25)
        .attr("markerWidth", markerWidth)
        .attr("markerHeight", markerHeight)
        .attr("orient", "auto")
        .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");
};

exports.svgPlatform = svgPlatform;

/***/ })
/******/ ]);