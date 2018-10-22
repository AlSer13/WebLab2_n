function makeDraggable(evt) {
    const svg = evt.target;
    svg.addEventListener('mousedown', startDrag, false);
    svg.addEventListener('mousemove', drag, false);
    svg.addEventListener('mouseup', endDrag, false);
    svg.addEventListener('mouseleave', endDrag);

    function getMousePosition(evt) {
        const CTM = svg.getScreenCTM();
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    }

    let selectedElement, offset, transform;

    function startDrag(evt) {
        if (evt.target.classList.contains('draggable')) {
            selectedElement = evt.target;
            offset = getMousePosition(evt);

            // Make sure the first transform on the element is a translate transform
            let transforms = selectedElement.transform.baseVal;

            if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
                // Create an transform that translates by (0, 0)
                let translate = svg.createSVGTransform();
                translate.setTranslate(0, 0);
                selectedElement.transform.baseVal.insertItemBefore(translate, 0);
            }

            // Get initial translation
            transform = transforms.getItem(0);
            offset.x -= transform.matrix.e;
            offset.y -= transform.matrix.f;
        }
    }

    function drag(evt) {
        if (selectedElement) {
            evt.preventDefault();
            let coord = getMousePosition(evt);
            transform.setTranslate(coord.x - offset.x, coord.y - offset.y);
        }
    }

    function endDrag(evt) {
        let r = 1;
        document.getElementsByName("user_R").forEach(function (elt) {
            if (elt.checked){
                r = elt.value;
            }
        });
        let x = parseFloat(selectedElement.getAttribute("cx"));
        let y = parseFloat(selectedElement.getAttribute("cy"));
        x += transform.matrix.e;
        y += transform.matrix.f;

        let xhr = new XMLHttpRequest();
        let url = window.location.origin;
        url+="/Project1/php/action.php?user_X=" + x + "&user_Y=" + y + "&user_R=" + r + "&from_script=true";
        xhr.open('GET', url+'a', true);
        if (xhr.status !== 200) {
            let newChild = document.createTextNode(xhr.status + ":" + xhr.responseText);
            document.getElementById("content").appendChild(newChild);
        } else {
            document.getElementsByTagName("iframe")[0].innerHTML = xhr.responseText;
        }
        selectedElement = false;
    }
}
