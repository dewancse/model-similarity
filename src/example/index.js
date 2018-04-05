/*
* Testing Model Similarity ...
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

    var model = parseModelName(concentration[0].model_entity);
    var model2 = parseModelName(concentration2[0].model_entity);

    var links = [], links2 = [], links3 = [], name, target;

    for (var i = 0; i < concentration.length; i++) {
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

    for (var i = 0; i < concentration2.length; i++) {
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

    // similarity calculation from concentration and concentration2
    for (var i = 0; i < concentration.length; i++) {
        for (var j = 0; j < concentration2.length; j++) {
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
                    source: {
                        name: concentration[i].model_entity
                    },
                    target: {
                        name: concentration2[j].model_entity
                    }
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
    for (var i = 0; i < links3.length; i++) {
        links3[i].source = nodes[links3[i].source.name];
        links3[i].target = nodes2[links3[i].target.name];
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
            for (var i = 0; i < edgelabels.length; i++) {
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
            for (var i = 0; i < edgelabels.length; i++) {
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
            for (var i = 0; i < edgelabels.length; i++) {
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
            .on("start", dragstarted2)
            .on("drag", dragged2)
            .on("end", dragended2));

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

    // model1 (left)
    function dragstarted(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
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
        if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
        d.fx = null;
        d.fy = null;
    }

    // model2 (right)
    function dragstarted2(d) {
        if (!d3.event.active) simulation2.alphaTarget(0.3).restart();
        if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged2(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }

    function dragended2(d) {
        if (!d3.event.active) simulation2.alphaTarget(0);
        if (!d3.event.active) simulation3.alphaTarget(0.3).restart();
        d.fx = null;
        d.fy = null;
    }
}();