/**
 * Created by Dewan Sarwar on 14/01/2018.
 */
var protocolOBJ = {
    protocol1AX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1AY: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "        ?property semsim:physicalPropertyOf ?entity. " +
        "        ?entity ro:part_of ?entity2. " +
        "        ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "        ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "}}\n",
    protocol1BX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1BY: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "           ?model semsim:isComputationalComponentFor ?property. " +
        "           ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "           ?property semsim:physicalPropertyOf ?entity. " +
        "           ?entity ro:part_of ?entity2. " +
        "           ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17996>. " +
        "           ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "}}\n",
    protocol1CX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1CY: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "        WHERE { GRAPH ?w { " +
        "            ?model semsim:isComputationalComponentFor ?property. " +
        "            ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "            ?property semsim:physicalPropertyOf ?entity. " +
        "            ?entity ro:part_of ?entity2. " +
        "            ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17544>. " +
        "            ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "}}\n",
    protocol1DX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1DY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:physicalPropertyOf ?process. " +
        "        ?process semsim:hasSourceParticipant ?source. " +
        "        ?process semsim:hasSinkParticipant ?sink. " +
        "        ?process semsim:hasMediatorParticipant ?mediator. " +
        "        ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "        ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17544>. " +
        "        ?entitySRC ro:part_of ?entity11. " +
        "        ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "        ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "        ?entityDST ro:part_of ?entity22. " +
        "        ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "        ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "        ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84669>. " +
        "}}\n",
    protocol1EX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1EY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:physicalPropertyOf ?process. " +
        "        ?process semsim:hasSourceParticipant ?source. " +
        "        ?process semsim:hasSinkParticipant ?sink. " +
        "        ?process semsim:hasMediatorParticipant ?mediator. " +
        "        ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "        ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17996>. " +
        "        ?entitySRC ro:part_of ?entity11. " +
        "        ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "        ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "        ?entityDST ro:part_of ?entity22. " +
        "        ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "        ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "        ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84669>. " +
        "}}\n",
    protocol1FX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1FY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol1GX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1GY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:physicalPropertyOf ?process. " +
        "        ?process semsim:hasSourceParticipant ?source. " +
        "        ?process semsim:hasSinkParticipant ?sink. " +
        "        ?process semsim:hasMediatorParticipant ?mediator. " +
        "        ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "        ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17544>. " +
        "        ?entitySRC ro:part_of ?entity11. " +
        "        ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "        ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "        ?entityDST ro:part_of ?entity22. " +
        "        ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "        ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "        ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84669>. " +
        "}}\n",
    protocol1HX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1HY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:physicalPropertyOf ?process. " +
        "        ?process semsim:hasSourceParticipant ?source. " +
        "        ?process semsim:hasSinkParticipant ?sink. " +
        "        ?process semsim:hasMediatorParticipant ?mediator. " +
        "        ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "        ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17996>. " +
        "        ?entitySRC ro:part_of ?entity11. " +
        "        ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>. " +
        "        ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "        ?entityDST ro:part_of ?entity22. " +
        "        ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "        ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "        ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84669>. " +
        "}}\n",
    protocol1IX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1IY: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model semsim:isComputationalComponentFor ?property. " +
        "        ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "        ?property semsim:physicalPropertyOf ?entity. " +
        "        ?entity ro:part_of ?entity2. " +
        "        ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "        ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280791>. " +
        "}}\n",
    protocol1JX: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol1JY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280791>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol2AX: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "        WHERE { GRAPH ?w { " +
        "           ?model semsim:isComputationalComponentFor ?property. " +
        "           ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "           ?property semsim:physicalPropertyOf ?entity. " +
        "           ?entity ro:part_of ?entity2. " +
        "           ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_82715>. " +
        "           ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        " }}\n",
    protocol2AY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol2BX: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_15378>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "}}\n",
    protocol2BY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol3X: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        " }}\n",
    protocol3Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol4X: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_28938>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "}}\n",
    protocol4Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol5X: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "          ?model semsim:isComputationalComponentFor ?property. " +
        "          ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "          ?property semsim:physicalPropertyOf ?entity. " +
        "          ?entity ro:part_of ?entity2. " +
        "          ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_9641>. " +
        "          ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "}}\n",
    protocol5Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol6AX: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_9641>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "}}\n",
    protocol6AY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol6BX: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_9641>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "}}\n",
    protocol6BY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_15378>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol6CX: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_9641>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "}}\n",
    protocol6CY: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_28938>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol10X: "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "   SELECT DISTINCT ?w ?model " +
        "      WHERE { GRAPH ?w { " +
        "         ?model semsim:isComputationalComponentFor ?property. " +
        "         ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00340>. " +
        "         ?property semsim:physicalPropertyOf ?entity. " +
        "         ?entity ro:part_of ?entity2. " +
        "         ?entity semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_17996>. " +
        "         ?entity2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "}}\n",
    protocol10Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> " +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#> " +
        "   SELECT DISTINCT ?w ?model " +
        "         WHERE { GRAPH ?w { " +
        "             ?model semsim:isComputationalComponentFor ?property. " +
        "             ?property semsim:physicalPropertyOf ?process. " +
        "             ?process semsim:hasSourceParticipant ?source. " +
        "             ?process semsim:hasSinkParticipant ?sink. " +
        "             ?process semsim:hasMediatorParticipant ?mediator. " +
        "             ?source semsim:hasPhysicalEntityReference ?entitySRC. " +
        "             ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/CHEBI_29101>. " +
        "             ?entitySRC ro:part_of ?entity11. " +
        "             ?entity11 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_280787>. " +
        "             ?sink semsim:hasPhysicalEntityReference ?entityDST. " +
        "             ?entityDST ro:part_of ?entity22. " +
        "             ?entity22 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>. " +
        "             ?mediator semsim:hasPhysicalEntityReference ?entityMED. " +
        "             ?entityMED ro:part_of ?entityMED2. " +
        "             ?entityMED2 semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>. " +
        "}}\n",
    protocol11X: "PREFIX bqbiol: <http://biomodels.net/biology-qualifiers/> " +
        "SELECT DISTINCT ?w ?model " +
        "  WHERE { GRAPH ?w { " +
        "        ?model bqbiol:is <http://identifiers.org/opb/OPB_01023>. " +
        "}}\n",
    protocol11Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> \n" +
        "SELECT DISTINCT ?w ?model\n" +
        "   WHERE { GRAPH ?w { \n" +
        "      ?model semsim:isComputationalComponentFor ?property.\n" +
        "      ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00506>.\n" +
        "   }}\n",
    protocol12X: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> \n" +
        "SELECT DISTINCT ?w ?model\n" +
        "   WHERE { GRAPH ?w { \n" +
        "      ?model semsim:isComputationalComponentFor ?property.\n" +
        "      ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00506>.\n" +
        "   }}\n",
    protocol12Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>\n" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>\n" +
        "   SELECT DISTINCT ?w ?model \n" +
        "      WHERE { GRAPH ?w { \n" +
        "         ?model semsim:isComputationalComponentFor ?property.\n" +
        "         ?property semsim:physicalPropertyOf ?process. \n" +
        "         ?process semsim:hasSourceParticipant ?source. \n" +
        "         ?process semsim:hasSinkParticipant ?sink. \n" +
        "         ?process semsim:hasMediatorParticipant ?mediator. \n" +
        "         ?source semsim:hasPhysicalEntityReference ?entitySRC. \n" +
        "         ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>.\n" +
        "         ?sink semsim:hasPhysicalEntityReference ?entityDST.\n" +
        "         ?entityDST semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>.\n" +
        "         ?mediator semsim:hasPhysicalEntityReference ?entityMED.\n" +
        "         ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84666>.\n" +
        "      }}\n",
    protocol13X: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> \n" +
        "SELECT DISTINCT ?w ?model\n" +
        "   WHERE { GRAPH ?w { \n" +
        "      ?model semsim:isComputationalComponentFor ?property.\n" +
        "      ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00506>.\n" +
        "   }}\n",
    protocol13Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>\n" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>\n" +
        "   SELECT DISTINCT ?w ?model \n" +
        "      WHERE { GRAPH ?w { \n" +
        "         ?model semsim:isComputationalComponentFor ?property.\n" +
        "         ?property semsim:physicalPropertyOf ?process. \n" +
        "         ?process semsim:hasSourceParticipant ?source. \n" +
        "         ?process semsim:hasSinkParticipant ?sink. \n" +
        "         ?process semsim:hasMediatorParticipant ?mediator. \n" +
        "         ?source semsim:hasPhysicalEntityReference ?entitySRC. \n" +
        "         ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>.\n" +
        "         ?sink semsim:hasPhysicalEntityReference ?entityDST.\n" +
        "         ?entityDST semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_66836>.\n" +
        "         ?mediator semsim:hasPhysicalEntityReference ?entityMED.\n" +
        "         ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_84669>.\n" +
        "      }}\n",
    protocol14X: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#> \n" +
        "SELECT DISTINCT ?w ?model\n" +
        "   WHERE { GRAPH ?w { \n" +
        "      ?model semsim:isComputationalComponentFor ?property.\n" +
        "      ?property semsim:hasPhysicalDefinition <http://identifiers.org/opb/OPB_00506>.\n" +
        "   }}\n",
    protocol14Y: "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>\n" +
        "PREFIX ro: <http://www.obofoundry.org/ro/ro.owl#>\n" +
        "   SELECT DISTINCT ?w ?model \n" +
        "      WHERE { GRAPH ?w { \n" +
        "         ?model semsim:isComputationalComponentFor ?property.\n" +
        "         ?property semsim:physicalPropertyOf ?process. \n" +
        "         ?process semsim:hasSourceParticipant ?source. \n" +
        "         ?process semsim:hasSinkParticipant ?sink. \n" +
        "         ?process semsim:hasMediatorParticipant ?mediator. \n" +
        "         ?source semsim:hasPhysicalEntityReference ?entitySRC. \n" +
        "         ?entitySRC semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_74550>.\n" +
        "         ?sink semsim:hasPhysicalEntityReference ?entityDST.\n" +
        "         ?entityDST semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_9673>.\n" +
        "         ?mediator semsim:hasPhysicalEntityReference ?entityMED.\n" +
        "         ?entityMED semsim:hasPhysicalDefinition <http://purl.obolibrary.org/obo/FMA_67394>.\n" +
        "      }}\n"
};

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
        '?entityMED ro:part_of ?medEntityPartOf. ' +
        '?medEntityPartOf semsim:hasPhysicalDefinition ?mediatorFMA. ' +
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
        "}}\n";

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
        "}}\n";

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

var mediatorSPARQLRecreate = function (proteinModelElem) {
    var query = "PREFIX semsim: <http://www.bhi.washington.edu/SemSim#>" +
        "SELECT ?modelEntity " +
        "WHERE { " +
        "?modelEntity semsim:isComputationalComponentFor ?model_prop. " +
        "?model_prop semsim:physicalPropertyOf ?model_proc. " +
        "?model_proc semsim:hasMediatorParticipant ?model_medparticipant. " +
        "?model_medparticipant semsim:hasPhysicalEntityReference ?med_entity. " +
        "?med_entity semsim:hasPhysicalDefinition <" + proteinModelElem + ">. " +
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
        "}}\n";

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
        "}}\n";

    return query;
};

var circleIDmyWelcomeWindowSPARQL = function (circleID, cellmlModel) {
    var query;
    if (circleID[1] == "" && circleID[2] == "") {
        query = "SELECT ?Protein ?Biological_meaning " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "}}\n";
    } else if (circleID[1] != "" && circleID[2] == "") { // (circleID[1] != "")
        query = "SELECT ?Protein ?Biological_meaning ?Biological_meaning2 " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "<" + circleID[1] + "> <http://purl.org/dc/terms/description> ?Biological_meaning2 . " +
            "}}\n"
    } else if (circleID[1] != "" && circleID[2] != "") { // (circleID[1] != "")
        query = "SELECT ?Protein ?Biological_meaning ?Biological_meaning2 ?Biological_meaning3 " +
            "WHERE { GRAPH ?g { " +
            "<" + cellmlModel + "> <http://www.obofoundry.org/ro/ro.owl#modelOf> ?Protein . " +
            "<" + circleID[0] + "> <http://purl.org/dc/terms/description> ?Biological_meaning . " +
            "<" + circleID[1] + "> <http://purl.org/dc/terms/description> ?Biological_meaning2 . " +
            "<" + circleID[2] + "> <http://purl.org/dc/terms/description> ?Biological_meaning3 . " +
            "}}\n"
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
        "}}\n";

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
    } else if (model_entity3 == "") {
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
    } else {
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
        "}}\n";

    return query;
};