function init() {
  window.r1 = 1.0;
  window.results = [];
}

function radio_pressed(r2) {
    let plot = document.getElementById("svg_plot");
    let toRemove = [];
    plot.childNodes.forEach(function (childNode) {
        if (childNode.nodeName === "circle")
            toRemove.push(childNode);
        if (childNode.nodeName === "text") {
            let temp_r = r2;
            if ([].includes.call(document.getElementsByClassName("divis"), childNode)) {
                temp_r=r2/2;
            }
            childNode.childNodes.forEach(function (child) {
                if (child.nodeName === "tspan") {
                    let tspan = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
                    tspan.innerHTML = temp_r;
                    childNode.replaceChild(tspan, child);
                }
            });
        }
    });
    toRemove.forEach(function (childNode) {
        // plot.removeChild(childNode);
        childNode.setAttribute('cx', convertXr(convertXReverse(childNode.getAttribute('cx')), r2));
        childNode.setAttribute('cy', convertYr(convertYReverse(childNode.getAttribute('cy')), r2));
        if (+childNode.ownR === r2) {
            childNode.setAttribute('fill-opacity', "1");
            childNode.setAttribute('stroke-opacity', "1");
        } else {
            childNode.setAttribute('fill-opacity', "0.2");
            childNode.setAttribute('stroke-opacity', "0.5");
        }
    });
    window.r1 = r2;
}

function plotClicked(event){
    if (document.elementFromPoint(event.clientX, event.clientY).tagName !== "circle") {
        let r = window.r1;
        let oX = convertXReverse(event.offsetX, r); //=== undefined ? event.layerX : event.offsetX;
        let oY = convertYReverse(event.offsetY, r); //=== undefined ? event.layerY : event.offsetY;
        document.getElementById("x_input").setAttribute("value", oX);
        document.getElementById("y_input").setAttribute("value", oY);
        validate_xy(oX, oY, r, 0);
    }
}

function convertXr(x, r) {
    return 140 * x / r + 175;
}

function convertYr(y, r) {
    return 175 - 140 * y / r;
}

function convertXReverse(cx) {
    return (cx - 175) * window.r1 / 140;
}

function convertYReverse(cy) {
    return (cy - 175) * window.r1 / -140;
}