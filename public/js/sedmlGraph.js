// /*
// * Read a SEDML file
// */
// var sedmlGraph = function () {
//
//     var startTime, endTime, pointOfInterval;
//     var xAxis, yAxis, itemsArray = [];
//
//     console.log("sedmlWorkspaceName: ", sedmlWorkspaceName);
//
//     sendGetRequest(
//         sedmlWorkspaceName,
//         function (workspaceHtml) {
//             // console.log("workspaceHtml: ", workspaceHtml);
//
//             var parser = new DOMParser();
//             var xmlDoc = parser.parseFromString(workspaceHtml, "text/xml");
//             // console.log("xmlDoc: ", xmlDoc);
//
//             for (var i = 0; i < xmlDoc.getElementsByTagName("uniformTimeCourse").length; i++) {
//                 if (xmlDoc.getElementsByTagName("uniformTimeCourse")[i].getAttribute("id") == "simulation1") {
//                     startTime = xmlDoc.getElementsByTagName("uniformTimeCourse")[i].getAttribute("initialTime");
//                     endTime = xmlDoc.getElementsByTagName("uniformTimeCourse")[i].getAttribute("outputEndTime");
//                     pointOfInterval = parseFloat(1 / xmlDoc.getElementsByTagName("uniformTimeCourse")[i].getAttribute("numberOfPoints"));
//
//                     for (var i = 0; i < xmlDoc.getElementsByTagName("variable").length; i++) {
//
//                         if (xmlDoc.getElementsByTagName("variable")[i].getAttribute("id") == "xVariable1_1") {
//                             xAxis = xmlDoc.getElementsByTagName("variable")[i].getAttribute("target");
//                         }
//
//                         if (xmlDoc.getElementsByTagName("variable")[i].getAttribute("id") == "yVariable1_1") {
//                             yAxis = xmlDoc.getElementsByTagName("variable")[i].getAttribute("target");
//                         }
//                     }
//
//                     break;
//                 }
//             }
//
//             xAxis = xAxis.slice(xAxis.lastIndexOf("='") + 2, xAxis.length - 2);
//             yAxis = yAxis.slice(yAxis.lastIndexOf("='") + 2, yAxis.length - 2);
//
//             console.log("xAxis and yAxis: ", xAxis, yAxis);
//             console.log("startTime, endTime, and pointInterval: ", startTime, endTime, pointOfInterval);
//
//             itemsArray.push([xAxis, yAxis]);
//
//             var iteration = 0;
//             for (var i = 0; i < 1; i = i + pointOfInterval) {
//                 iteration++;
//                 itemsArray.push({time: parseFloat(i.toFixed(3)), concentration: parseFloat(10 * i.toFixed(3))});
//             }
//
//             console.log("iteration: ", iteration);
//
//             var svg = d3.select("svg"),
//                 margin = {top: 20, right: 20, bottom: 30, left: 50},
//                 width = +svg.attr("width") - margin.left - margin.right,
//                 height = +svg.attr("height") - margin.top - margin.bottom,
//                 g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//             var x = d3.scaleLinear()
//                 .rangeRound([0, width]);
//
//             var y = d3.scaleLinear()
//                 .rangeRound([height, 0]);
//
//             var line = d3.line()
//                 .x(function (d) {
//                     return x(d.time);
//                 })
//                 .y(function (d) {
//                     return y(d.concentration);
//                 });
//
//             var drawLine = function (data) {
//
//                 console.log("data: ", data);
//
//                 x.domain(d3.extent(data, function (d) {
//                     return d.time;
//                 }));
//                 y.domain(d3.extent(data, function (d) {
//                     return d.concentration;
//                 }));
//
//                 g.append("g")
//                     .attr("transform", "translate(0," + height + ")")
//                     .call(d3.axisBottom(x))
//                     // .select(".domain")
//                     // .remove();
//                     .append("text")
//                     .attr("fill", "#000")
//                     .attr("x", 800)
//                     .attr("y", -6)
//                     .attr("dx", "0.71em")
//                     .attr("text-anchor", "end")
//                     .text(xAxis);
//
//                 g.append("g")
//                     .call(d3.axisLeft(y))
//                     .append("text")
//                     .attr("fill", "#000")
//                     .attr("transform", "rotate(-90)")
//                     .attr("y", 6)
//                     .attr("dy", "0.71em")
//                     .attr("text-anchor", "end")
//                     .text(yAxis);
//
//                 g.append("path")
//                     .datum(data)
//                     .attr("fill", "none")
//                     .attr("stroke", "steelblue")
//                     .attr("stroke-linejoin", "round")
//                     .attr("stroke-linecap", "round")
//                     .attr("stroke-width", 1.5)
//                     .attr("d", line);
//             };
//
//             drawLine(itemsArray);
//
//         }, false);
// }();