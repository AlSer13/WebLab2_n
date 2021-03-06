function draw_point(point) {
    let plot = document.getElementById("svg_plot");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttribute('cx', convertX(point.x));
    circle.setAttribute('cy', convertY(point.y));
    circle.setAttribute('r', "4");
    circle.setAttribute("fill", point.success ? "#00ff00" : "#ff0000");
    circle.setAttribute("stroke-width", "1");
    circle.setAttribute("stroke", "black");
    circle.ownR = point.r;
    // circle.setAttribute("class", "draggable");
    plot.appendChild(circle);
    addRow(point);
    circle.id = point.id;
    if (+circle.ownR !== +window.r1) {
        circle.setAttribute('fill-opacity', "0.2");
        circle.setAttribute('stroke-opacity', "0.5");
    }
}

function convertX(x) {
    return 120 * x / window.r1 + 150;
}

function convertY(y) {
    return 150 - 120 * y / window.r1;
}
