/**
 * Created by Dewan Sarwar on 5/8/2017.
 */
// var endpoint = "https://models.physiomeproject.org/pmr2_virtuoso_search";
var endpoint = "/.api/pmr/sparql";

var abiOntoEndpointInternal = "http://ontology.cer.auckland.ac.nz/ols-boot/api/ontologies";

// var abiOntoEndpoint = "http://ontology.cer.auckland.ac.nz/ols-boot/api/ontologies";
// var abiOntoEndpoint = "/.api/ols/ontologies";
var abiOntoEndpoint = "/.api/ebi/ols/ontologies"; // TODO: remove this line and use the above line..now using because ABI OLS is down!

// var ebiOntoEndpoint = "https://www.ebi.ac.uk/ols/api/ontologies";
var ebiOntoEndpoint = "/.api/ebi/ols/ontologies";

// var baseUrl = "https://www.ebi.ac.uk/Tools/services/rest/clustalo";
var baseUrl = "/.api/ebi/clustalo";

// var dbfetchUniProtKB = "https://www.ebi.ac.uk/Tools/dbfetch/dbfetch/uniprotkb/";
var dbfetchUniProtKB = "/.api/ebi/uniprotkb/";

// var myWorkspaceName = "https://models.physiomeproject.org/workspace/267";
var myWorkspaceName = "/.api/workspace/267/";
var uriSEDML = "https://sed-ml.github.io/index.html";

// Definition of protocols
var sedmlWorkspaceName = myWorkspaceName + "rawfile/HEAD/weinstein_1995.sedml";

// dictionary to identify type of organ models (kidney, lung, heart, etc)
// based on anatomical locations deposited in the Physiome Model Repository
var organ = [
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_84669",
                "value": "Basolateral plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70973",
                "value": "Epithelial cell of proximal tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17693",
                "value": "Proximal convoluted tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_84666",
                "value": "Apical plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_66836",
                "value": "Portion of cytosol"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_280587",
                "value": "Portion of renal filtrate"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9673",
                "value": "Tissue fluid"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_15628",
                "value": "Collecting duct of renal tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_86560",
                "value": "Intercalated cell of collecting duct of renal tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17716",
                "value": "Proximal straight tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7203",
                "value": "Kidney"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17717",
                "value": "Ascending limb of loop of Henle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17705",
                "value": "Descending limb of loop of Henle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/GO_0072061",
                "value": "inner medullary collecting duct development"
            },
            {
                "key": "http://purl.obolibrary.org/obo/MA_0002595",
                "value": "renal medullary capillary"
            },
            {
                "key": "http://purl.obolibrary.org/obo/UBERON_0004726",
                "value": "vasa recta"
            },
            {
                "key": "http://purl.obolibrary.org/obo/UBERON_0009091",
                "value": "vasa recta ascending limb"
            },
            {
                "key": "http://purl.obolibrary.org/obo/UBERON_0004775",
                "value": "outer renal medulla vasa recta"
            },
            {
                "key": "http://purl.obolibrary.org/obo/UBERON_0004776",
                "value": "inner renal medulla vasa recta"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17721",
                "value": "Distal convoluted tubule"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70981",
                "value": "Epithelial cell of distal tubule"
            }
        ],
        "value": "Kidney"
    },
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_14067",
                "value": "Cardiac myocyte"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_66836",
                "value": "Portion of cytosol"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9672",
                "value": "Intercellular matrix"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_63841",
                "value": "Plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_72444",
                "value": "Cytoplasmic organelle matrix"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9462",
                "value": "Myocardium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_67895",
                "value": "Sarcomere"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_67225",
                "value": "Sarcoplasmic reticulum"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_80352",
                "value": "Wall of smooth endoplasmic reticulum"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_62387",
                "value": "Junctional sarcoplasmic reticulum of cardiac muscle cell"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_62338",
                "value": "Troponin"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_62343",
                "value": "Calmodulin"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9892",
                "value": "Surface of fibrous pericardium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9670",
                "value": "Portion of blood"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70827",
                "value": "Set of pulmonary veins"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_87209",
                "value": "Distal zone of aorta"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_279896",
                "value": "Set of all pulmonary arterioles"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_14156",
                "value": "Wall of aorta"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_74653",
                "value": "Wall of arteriole"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_45626",
                "value": "Systemic venous system"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_11350",
                "value": "Pericardial cavity"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7088",
                "value": "Heart"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7098",
                "value": "Right ventricle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_279851",
                "value": "Set of proximal epicardial branches of coronary arteries"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_14121",
                "value": "Pulmonary capillary"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_279902",
                "value": "Set of epicardial tributaries of all cardiac veins"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_45842",
                "value": "Pulmonary arterial tree organ"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_45623",
                "value": "Systemic arterial system"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17555",
                "value": "Interstitial space"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_280556",
                "value": "Portion of body fluid"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_279921",
                "value": "Set of all epicardial branches of all coronary arteries"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_17530",
                "value": "Surface of lung"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9740",
                "value": "Pleural cavity"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7101",
                "value": "Left ventricle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_279935",
                "value": "Set of all systemic capillaries"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7096",
                "value": "Right atrium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_256135",
                "value": "Body"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_321896",
                "value": "Vena cava"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9531",
                "value": "Wall of left atrium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_7097",
                "value": "Left atrium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9533",
                "value": "Wall of right ventricle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9457",
                "value": "Wall of right atrium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9556",
                "value": "Wall of left ventricle"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9869",
                "value": "Pericardium"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_83108",
                "value": "Regular atrial cardiac myocyte"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_70022",
                "value": "Extracellular space"
            }
        ],
        "value": "Cardiac"
    },
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_74793",
                "value": "Epithelial cell of trachea"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_9672",
                "value": "Intercellular matrix"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_84666",
                "value": "Apical plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_66836",
                "value": "Portion of cytosol"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_63842",
                "value": "Endoplasmic reticulum"
            }
        ],
        "value": "Lung"
    },
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_67328",
                "value": "Muscle cell"
            }
        ],
        "value": "Musculoskeletal"
    },
    {
        "key": [
            {
                "key": "http://purl.obolibrary.org/obo/FMA_5914",
                "value": "Nerve fiber"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_63841",
                "value": "Plasma membrane"
            },
            {
                "key": "http://purl.obolibrary.org/obo/FMA_18644",
                "value": "Oocyte"
            }
        ],
        "value": "Miscellaneous"
    }
];

// dictionary to identify type of model (kidney, lung, heart, etc)
// based on protein identifier deposited in the Physiome Model Repository
var ProteinToOrganDict = [
    {
        "key": "// http://purl.obolibrary.org/obo/CL_0000746",
        "value": "Cardiac"
    },
    // {
    //     "key": "http://purl.obolibrary.org/obo/CL_0002642",
    //     "value": "Cardiac"
    // },
    {
        "key": "http://purl.obolibrary.org/obo/UBERON_0004535",
        "value": "Cardiac"
    },
    {
        "key": "http://purl.obolibrary.org/obo/CL_0000066",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/CL_0000187",
        "value": "Musculoskeletal"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_Q9JI66",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_Q64541",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/CL_0000082",
        "value": "Lung"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P59158",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P15920",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P26434",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P23562",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_Q9Z1B3",
        "value": "Cardiac"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P11170",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/CL_0002131",
        "value": "Cardiac"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_Q9ET37",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P31636",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P63316",
        "value": "Cardiac"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_Q64578",
        "value": "Cardiac"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P48764",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_G3X939",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P26432",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P26433",
        "value": "Kidney"
    },
    {
        "key": "http://purl.obolibrary.org/obo/PR_P28482",
        "value": "Miscellaneous"
    },
    {
        "key": "http://purl.obolibrary.org/obo/CL_0000786",
        "value": "Miscellaneous"
    }
];

// dictionary to interpret searched terms (flux of sodium, concentration of
// hydrogen, flux, concentration, etc) into OPB and CHEBI ontology URIs
var dictionary = [
    {
        "key1": "flux", "key2": "", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>", "chebi": "", "fma": ""
    },
    {
        "key1": "flux", "key2": "sodium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": ""
    },
    {
        "key1": "flux", "key2": "sodium", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "sodium", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "sodium", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "sodium", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "hydrogen", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": ""
    },
    {
        "key1": "flux", "key2": "hydrogen", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "hydrogen", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "hydrogen", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "hydrogen", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "chloride", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": ""
    },
    {
        "key1": "flux", "key2": "chloride", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "chloride", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "chloride", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "chloride", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "potassium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": ""
    },
    {
        "key1": "flux", "key2": "potassium", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "potassium", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "flux", "key2": "potassium", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "flux", "key2": "potassium", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "concentration", "key2": "", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>", "chebi": "", "fma": ""
    },
    {
        "key1": "concentration", "key2": "sodium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": ""
    },
    {
        "key1": "concentration", "key2": "sodium", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration", "key2": "sodium", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration", "key2": "sodium", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "sodium", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "hydrogen", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": ""
    },
    {
        "key1": "concentration", "key2": "hydrogen", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration", "key2": "hydrogen", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration", "key2": "hydrogen", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "hydrogen", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "chloride", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": ""
    },
    {
        "key1": "concentration", "key2": "chloride", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration", "key2": "chloride", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration", "key2": "chloride", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "chloride", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "potassium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": ""
    },
    {
        "key1": "concentration", "key2": "potassium", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration", "key2": "potassium", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration", "key2": "potassium", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration", "key2": "potassium", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>", "chebi": "", "fma": ""
    },
    {
        "key1": "chemical concentration flow rate", "key2": "sodium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": ""
    },
    {
        "key1": "chemical concentration flow rate", "key2": "sodium", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "sodium", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "sodium", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "sodium", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "hydrogen", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": ""
    },
    {
        "key1": "chemical concentration flow rate", "key2": "hydrogen", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "hydrogen", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "hydrogen", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "hydrogen", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "chloride", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": ""
    },
    {
        "key1": "chemical concentration flow rate", "key2": "chloride", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "chloride", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "chloride", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "chloride", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "potassium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": ""
    },
    {
        "key1": "chemical concentration flow rate", "key2": "potassium", "key3": "apical plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "potassium", "key3": "apical membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84666>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "potassium", "key3": "basolateral plasma membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "chemical concentration flow rate", "key2": "potassium", "key3": "basolateral membrane",
        "opb": "<http://identifiers.org/opb/OPB_00593>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_84669>"
    },
    {
        "key1": "concentration of chemical", "key2": "", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>", "chebi": "", "fma": ""
    },
    {
        "key1": "concentration of chemical", "key2": "sodium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": ""
    },
    {
        "key1": "concentration of chemical", "key2": "sodium", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration of chemical", "key2": "sodium", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration of chemical", "key2": "sodium", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "sodium", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29101>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "hydrogen", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": ""
    },
    {
        "key1": "concentration of chemical", "key2": "hydrogen", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration of chemical", "key2": "hydrogen", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration of chemical", "key2": "hydrogen", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "hydrogen", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_15378>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "chloride", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": ""
    },
    {
        "key1": "concentration of chemical", "key2": "chloride", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration of chemical", "key2": "chloride", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration of chemical", "key2": "chloride", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "chloride", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_17996>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "potassium", "key3": "",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": ""
    },
    {
        "key1": "concentration of chemical", "key2": "potassium", "key3": "luminal",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_74550>"
    },
    {
        "key1": "concentration of chemical", "key2": "potassium", "key3": "cytosol",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_66836>"
    },
    {
        "key1": "concentration of chemical", "key2": "potassium", "key3": "tissue fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    },
    {
        "key1": "concentration of chemical", "key2": "potassium", "key3": "interstitial fluid",
        "opb": "<http://identifiers.org/opb/OPB_00340>",
        "chebi": "<http://purl.obolibrary.org/obo/CHEBI_29103>",
        "fma": "<http://purl.obolibrary.org/obo/FMA_9673>"
    }
];

// SEDML models and associated data in CSV
var listOfSEDML = [
    "eskandari_2005_data.csv",
    "mackenzie_1996_data.csv",
    "protocol1_eskandari_2005.sedml",
    "protocol1_mackenzie_1996.sedml",
    "protocol1_weinstein_1995.sedml",
    "protocol2_eskandari_2005.sedml",
    "protocol2_mackenzie_1996.sedml",
    "protocol3_weinstein_1995.sedml",
    "weinstein_1995_data.csv"
];

// epithelial cell identifiers used in the biological annotation in PMR
var epithelialcellID = [
    "http://purl.obolibrary.org/obo/CL_0000066",
    "http://purl.obolibrary.org/obo/CL_0000786",
    // "http://purl.obolibrary.org/obo/CL_0002642",
    "http://purl.obolibrary.org/obo/CL_0000746",
    "http://purl.obolibrary.org/obo/CL_0002131",
    "http://purl.obolibrary.org/obo/CL_0000082",
    "http://purl.obolibrary.org/obo/UBERON_0004535",
    "http://purl.obolibrary.org/obo/CL_0000187"
];

// TODO: replace luminal variants with FMA_74550 (luminal)
var luminalVariants = [
    "http://purl.obolibrary.org/obo/FMA_280787", // portion of renal filtrate in proximal convoluted tubule
    "http://purl.obolibrary.org/obo/FMA_280791", // portion of renal filtrate in distal convoluted tubule
    "http://purl.obolibrary.org/obo/FMA_280587", // portion of renal filtrate
    "http://purl.obolibrary.org/obo/FMA_70022", // Extracellular space
    "http://purl.obolibrary.org/obo/FMA_85358" // region of mucosa
];

// TODO: replace luminal variants with FMA_74550 (luminal)
var luminalIDs = [
    "http://purl.obolibrary.org/obo/FMA_280787", // portion of renal filtrate in proximal convoluted tubule
    "http://purl.obolibrary.org/obo/FMA_280791", // portion of renal filtrate in distal convoluted tubule
    "http://purl.obolibrary.org/obo/FMA_280587", // portion of renal filtrate
    "http://purl.obolibrary.org/obo/FMA_70022", // Extracellular space
    "http://purl.obolibrary.org/obo/FMA_85358", // region of mucosa
    "http://purl.obolibrary.org/obo/FMA_74550"
];

// TODO: remove semgen annotated models as they are not compatible to our modelling platform
// var abiModels = [
//     "Ostby_2009_NBC.cellml", "Strieter_1992_NaK.cellml", "Weinstein_2000.cellml", "bindschadler_sneyd_2001.cellml",
//     "blood_capillary_flux.cellml", "chang_fujita_1999.cellml", "chang_fujita_2001_H_ATPase.cellml", "chang_fujita_2001_Na_H_exchanger.cellml",
//     "chang_fujita_2001_anion_exchanger.cellml", "chang_fujita_b_1999.cellml", "chang_fujita_b_2_1999.cellml", "chang_fujita_b_3_1999.cellml",
//     "eskandari_2005.cellml", "mackenzie_1996-mouse-baso.cellml", "mackenzie_1996.cellml", "moss_2009.cellml", "sneyd_1995.cellml", "thomas_2000.cellml",
//     "warren_2010.cellml", "weinstein_1995-human-baso-v2.cellml", "weinstein_1995-human-baso.cellml", "weinstein_1995-mouse.cellml",
//     "weinstein_1995-rabbit.cellml", "weinstein_1995.cellml", "weinstein_1998.cellml", "wilkins_sneyd_1998.cellml"
// ];

var abiModels = [
    "Ostby_2009_NBC.cellml", "Strieter_1992_NaK.cellml", "Weinstein_2000.cellml", "bindschadler_sneyd_2001.cellml",
    "blood_capillary_flux.cellml", "chang_fujita_1999.cellml", "chang_fujita_2001_H_ATPase.cellml", "chang_fujita_2001_Na_H_exchanger.cellml",
    "chang_fujita_2001_anion_exchanger.cellml", "chang_fujita_b_1999.cellml", "eskandari_2005.cellml", "mackenzie_1996.cellml",
    "moss_2009.cellml", "sneyd_1995.cellml", "thomas_2000.cellml", "warren_2010.cellml", "weinstein_1995-human-baso.cellml",
    "weinstein_1995-mouse.cellml", "weinstein_1995-rabbit.cellml", "weinstein_1995.cellml", "weinstein_1998.cellml", "wilkins_sneyd_1998.cellml"
];

var viewHtml = "./snippets/view-snippet.html";
var modelHtml = "./snippets/model-snippet.html";
var usecaseHtml = "./snippets/usecase-snippet.html";
var homeHtml = "./snippets/home-snippet.html";
var searchHtml = "./snippets/search-snippet.html";
var similarityHtml = "./snippets/similarity-snippet.html";
var drawSEDMLHtml = "./snippets/drawSEDML-snippet.html";
var drawDecomposedSEDMLHtml = "./snippets/drawDecomposedSEDML-snippet.html";
var epithelialHtml = "./snippets/epithelial-snippet.html";
var chartHtml = "./snippets/chart-snippet.html";
var chartHtmlSEDML = "./snippets/chart-snippet-sedml.html";
var platformHtml = "./snippets/platform-snippet.html";
var recreateHtml = "./snippets/recreate-snippet.html";

var sodium = "http://purl.obolibrary.org/obo/CHEBI_29101";
var potassium = "http://purl.obolibrary.org/obo/CHEBI_29103";
var chloride = "http://purl.obolibrary.org/obo/CHEBI_17996";

var opbTime = "http://identifiers.org/opb/OPB_01023";

var apicalID = "http://purl.obolibrary.org/obo/FMA_84666";
var basolateralID = "http://purl.obolibrary.org/obo/FMA_84669";
var partOfProteinUri = "http://purl.obolibrary.org/obo/PR";
var partOfCellUri = "http://purl.obolibrary.org/obo/CL";
var partOfGOUri = "http://purl.obolibrary.org/obo/GO";
var partOfCHEBIUri = "http://purl.obolibrary.org/obo/CHEBI";
var partOfUBERONUri = "http://purl.obolibrary.org/obo/UBERON";
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

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
    $(selector).html("<div class='text-center'><img src='../img/ajax-loader.gif'></div>");
};

// Two cases: internet connection and PMR SPARQL engine
var PMRdown = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Please check your internet connection. Or our server might fail to connect to the PMR server.</strong></div>");
        return;
    }
};

// Two cases: internet connection and BioPortal
var BioPortaldown = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Please check your internet connection. Or BioPortal might be temporarily down. Please try again later.</strong></div>");
        return;
    }
};

// Auckland OLS
var OLSdown = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Please check your internet connection. Or our Auckland OLS server might be temporarily down.</strong></div>");
        return;
    }
};

// Protein Not Found in Auckland OLS
var ProteinNotInOLS = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Please check your internet connection. Or this protein is not found in Auckland OLS.</strong></div>");
        return;
    }
};

// EBI Clustal Omega
var Clustaldown = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Problem at the EBI clustal omega server.</strong></div>");
        return;
    }
};

// EBI database fetch (Dbfetch)
var Dbfetchdown = function (jsonobject, selector) {
    if (jsonobject.status != undefined && jsonobject.statusText != undefined) {
        $(selector).html("<div class='alert alert-danger'><strong>HTTP Error " + jsonobject.status + " - " + jsonobject.statusText + ". " +
            "Problem at the EBI database fetch server.</strong></div>");
        return;
    }
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
    } else {
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
        } else {
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
        } else {
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
// var similarityMatrixEBI2 = function (identityMatrix, PID, enteredPrID, modelEntity) {
//     console.log("Identity Matrix: ", identityMatrix);
//     console.log("enteredPrID: ", enteredPrID);
//
//     var indexOfColon = identityMatrix.search("1:"), m, n, i, j;
//     identityMatrix = identityMatrix.slice(indexOfColon - 1, identityMatrix.length);
//
//     console.log("Identity Matrix: ", identityMatrix);
//
//     var matrixArray = identityMatrix.match(/[(\w\:)*\d\.]+/gi), twoDMatrix = [];
//
//     for (var i = 0; i < matrixArray.length; i++) {
//         if (matrixArray[i].indexOf(".") == -1) {
//             matrixArray.splice(i, 1);
//             i--;
//         }
//     }
//
//     console.log("matrixArray: ", matrixArray);
//
//     // convert 1D to 2D array
//     while (matrixArray.length) {
//         twoDMatrix.push(matrixArray.splice(0, PID.length));
//     }
//
//     console.log("twoDMatrix: ", twoDMatrix);
//
//     var similarityOBJ = [];
//     for (i = 0; i < twoDMatrix.length; i++) {
//         for (j = 0; j < twoDMatrix.length; j++) {
//             if (i == j || j < i) continue;
//
//             similarityOBJ.push({
//                 "PID1": proteinIndex[i][0],
//                 "PID2": proteinIndex[j][0],
//                 "similarity": twoDMatrix[i][j]
//             })
//         }
//     }
//
//     console.log("similarityOBJ: ", similarityOBJ);
//     console.log("enteredPrID: ", enteredPrID);
//
//     // length is empty when 100% matching
//     // appended a 0 bit after its protein id and make a comparision
//     if (similarityOBJ.length != 0) {
//         for (m = 0; m < modelEntity.length; m++) {
//
//             if (modelEntity[m].protein == "") continue;
//
//             if (splitPR(modelEntity[m].protein) == enteredPrID)
//                 modelEntity[m].scoreEBI = 100;
//
//             for (n = 0; n < similarityOBJ.length; n++) {
//                 if ((splitPR(modelEntity[m].protein) == similarityOBJ[n].PID1 && enteredPrID == similarityOBJ[n].PID2) ||
//                     (splitPR(modelEntity[m].protein) == similarityOBJ[n].PID2 && enteredPrID == similarityOBJ[n].PID1)) {
//                     modelEntity[m].scoreEBI = similarityOBJ[n].similarity;
//                 }
//             }
//         }
//     }
// };

var similarityMatrixEBI2 = function (identityMatrix, PID, enteredPrID, modelEntity) {
    console.log("Identity Matrix: ", identityMatrix);
    console.log("enteredPrID: ", enteredPrID);

    var indexOfColon = identityMatrix.search("1:"), m, n, i, j;

    console.log("index1stBar: ", identityMatrix.slice(indexOfColon - 1, identityMatrix.length));
    identityMatrix = identityMatrix.slice(indexOfColon - 1, identityMatrix.length);

    console.log("Identity Matrix: ", identityMatrix);

    var matrixArray = identityMatrix.match(/[(\w\:)*\d\.]+/gi),
        proteinIndex = [],
        twoDMatrix = [];

    console.log("matrixArray: ", matrixArray);

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

    console.log("twoDMatrix: ", twoDMatrix);

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

    var size = 14,
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
        text = ""; // text = "Empty"

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
                });
            // txt = g.append("text").attr("x", xtext).attr("y", ytext).text("" + text + "");

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
    for (var i = 0; i < templistOfModel.length; i++) {
        tempOBJ.push({model: templistOfModel[i]});
        for (var j = i + 1; j < templistOfModel.length; j++) {
            if (isExistProtocolElem(templistOfModel[i], templistOfModel[j])) {
                templistOfModel.splice(j, 1);
                j--;
            }
        }
    }
};

var isModelExist = function (modelEntity, cellmlModels) {
    var cellmlModelEntityName = modelEntity.slice(0, modelEntity.indexOf("#"));

    console.log(cellmlModelEntityName);

    for (var i = 0; i < cellmlModels.length; i++) {
        var cellmlModelName = cellmlModels[i].model.slice(0, cellmlModels[i].model.indexOf("#"));

        if (cellmlModelEntityName == cellmlModelName)
            return true;
    }

    return false;
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