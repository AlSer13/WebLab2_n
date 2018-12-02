function init() {
    window.r1 = 1.0;
}

function r_changed(r2) {
    if (validate_r(r2)) {
        let plot = document.getElementById("svg_plot");
        let toRemove = [];
        plot.childNodes.forEach(function (childNode) {
            if (childNode.nodeName === "circle")
                toRemove.push(childNode);
            if (childNode.nodeName === "text") {
                let temp_r = r2;
                if ([].includes.call(document.getElementsByClassName("divis"), childNode)) {
                    temp_r = r2 / 2;
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
            childNode.setAttribute('cx', convertXr(childNode.getAttribute('cx'), window.r1, r2));
            childNode.setAttribute('cy', convertYr(childNode.getAttribute('cy'), window.r1, r2));
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
}

function plotClicked(event){
    if (document.elementFromPoint(event.clientX, event.clientY).tagName !== "circle") {
        let r = window.r1;
        let oX = convertXReverse(event.offsetX, r); //=== undefined ? event.layerX : event.offsetX;
        let oY = convertYReverse(event.offsetY, r); //=== undefined ? event.layerY : event.offsetY;
        document.getElementById("x_input").value = oX;
        document.getElementById("r_input").value = r;
        validate_xyr(oX, oY, r, 0);
    }
}

function convertXr(x, r1, r2) {
    return ((x - 150) * r1)/ r2 + 150;
}

function convertYr(y, r1, r2) {
    return 150 + ((y - 150) * r1)/ r2;
}

function convertXReverse(cx) {
    return (cx - 175) * window.r1 / 140;
}

function convertYReverse(cy) {
    return (cy - 175) * window.r1 / -140;
}