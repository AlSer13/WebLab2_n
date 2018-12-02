// function delete_point(id) {
//     $.ajax({
//         url: 'checkPoint',
//         type: 'GET',
//         data: {
//             target: "delete",
//             point_id: id
//         },
//         error: (jqXHR) => {
//             let msg_block = document.getElementById("message")
//             msg_block.innerText = (jqXHR.message);
//             try {
//                 msg_block.color = "crimson";
//             } catch (e) {
//                 console.log(e);
//             }
//         },
//         success: () => {
//             let circle = document.getElementById(id);
//             circle.parentNode.removeChild(circle);
//             window.results[id] = undefined;
//             removeRow(id);
//         }
//
//     });
// }

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

// function removeRow(id) {
//     let table = document.getElementById("results_table");
//     table.childNodes.forEach(c => {
//         if (+c.rowId === +id) {
//             c.parentNode.removeChild(c);
//         }
//     })
//
// }
