window.selectedCircle = null;

function circlePressed() {
    if (window.selectedCircle) {
        window.selectedCircle.setAttribute('stroke-width', 1);
    }
    setTable(window.results[this.id]);
    this.setAttribute('stroke-width', 2);
    document.getElementById("results_table").childNodes.forEach(c => {
        if (+c.rowId === +this.id) {
            c.style.backgroundColor = "#49EEFF";
        } else if (window.selectedCircle && +c.rowId === +window.selectedCircle.id) {
            c.style.backgroundColor = "inherit";
        }
    });
    window.selectedCircle = this;
}

function delete_point(id) {
    $.ajax({
        url: 'checkPoint',
        type: 'GET',
        data: {
            target: "delete",
            point_id: id
        },
        error: (jqXHR) => {
            let msg_block = document.getElementById("message")
            msg_block.innerText = (jqXHR.message);
            try {
                msg_block.color = "crimson";
            } catch (e) {
                console.log(e);
            }
        },
        success: () => {
            let circle = document.getElementById(id);
            circle.parentNode.removeChild(circle);
            window.results[id] = undefined;
            setTable();
            window.selectedCircle = undefined;
            removeRow(id);
        }

    });
}

function setTable(point) {
    if (point !== undefined)
        document.getElementById("res_frame").innerHTML =
            "<table><tr><th colspan='2'>Точка" + (point.success === 1 ? '' : ' не') + " попала в область" +
            "</th></tr><tr><td>R</td><td>" + point.r + "</td></tr><tr><td>X</td><td>"
            + point.x.toFixed(3) + "</td></tr><tr><td>Y</td><td>"
            + point.y.toFixed(3) + "</td></tr><tr><td colspan='2'>Execution time: <b>"
            + point.duration + " nanoseconds</b></td></tr><tr><td colspan='2'>Current time: <b>" + point.date + "</b></td></tr>" +
            "<tr><td colspan='2'><button id='delete_button' onclick='delete_point(" + point.id + ")'>Delete</button></td></tr>" +
            "</table>";
    else
        document.getElementById("res_frame").innerHTML = "";

}

function addRow(point) {
    let table = document.getElementById("results_table");
    let row = document.createElement('tr');
    row.innerHTML =
        "<td>"+point.id+"</td>"+
        "<td>"+point.x+"</td>"+
        "<td>"+point.y+"</td>"+
        "<td>"+point.r+"</td>"+
        "<td>"+point.success+"</td>";
    row.rowId = point.id;
    table.appendChild(row);
}

function removeRow(id) {
    let table = document.getElementById("results_table");
    table.childNodes.forEach(c => {
        if (+c.rowId === +id) {
            c.parentNode.removeChild(c);
        }
    })

}
