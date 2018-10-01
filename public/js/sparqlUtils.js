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