function validate() {
    let y = document.getElementById("y_input").value;
    let x = document.getElementById("x_input").value;
    y = y.replace(",", ".");
    x = x.replace(",", ".");
    return validate_xyr(x, y);
}

function validate_xyr(x, y, r) {
    let wrong = !(validate_x(x) && validate_r(r));
    if (y === null) return false;

    if (isNaN(+y)) {
        alrt("Y must be a number.", "Y");
        wrong = true;
    }


    if (y === "") {
        alrt("Y field must be filled out.", "Y");
        wrong = true;
    }


    if (y < -2 || y > 2) {
        alrt("Y must be between -2 and 2", "Y");
        wrong = true;
    }


    if (y.length > 10) {
        alrt("Y too long", "Y");
        wrong = true;
    }

    if (wrong) return false;

    alrt("from -3 to 3", "X");
    alrt("from -2 to 2", "Y");
    alrt("from 1 to 4", "R");

    getTableAjax(x, y, r, 0);

    return false;

}

function validate_x(x) {
    let wrong = false;
    if (x === null) return false;
    if (isNaN(+x)) {
        alrt("X must be a number.", "X");
        wrong = true;
    }
    if (x === "") {
        alrt("X field must be filled out.", "X");
        wrong = true;
    }
    if (x < -3 || x > 3) {
        alrt("Y must be between -3 and 3", "X");
        wrong = true;
    }
    if (x.length > 10) {
        alrt("X too long", "X");
        wrong = true;
    }
    if (wrong) return false;
    alrt("from -3 to 3", "X");
    return true;
}

function validate_r(r) {
    let wrong = false;
    if (r === null) return false;
    if (isNaN(+r)) {
        alrt("R must be a number.", "R");
        wrong = true;
    }
    if (r === "") {
        alrt("R field must be filled out.", "R");
        wrong = true;
    }
    if (r < 1 || r > 4) {
        alrt("R must be between 1 and 4", "R");
        wrong = true;
    }
    if (r.length > 10) {
        alrt("R too long", "R");
        wrong = true;
    }
    if (wrong) return false;
    alrt("from 1 to 4", "R");
    return true;
}


function getTableAjax(x, y, r, restoring) {
    $.ajax({
        url: "checkPoint",
        type: "GET",
        data: {
            target: "new_point",
            user_X: x,
            user_Y: y,
            user_R: r,
            restoring: restoring
        },
        error: (jqXHR) => alert("Wasted\nStatus: " + jqXHR.status),
        success: (response) => {
            console.log(response);
            const colonPos = response.indexOf("errCode:") + 8;
            const resp_code = response.substring(colonPos, colonPos + 1);
            response = response.substr(colonPos + 1);
            if (+resp_code === 0) {
                let point = JSON.parse(response);
                draw_point(point);
            } else {
                document.getElementById("message").innerHTML = response;
            }
        }

    });
}

function alrt(msg, x_or_y) {
    document.getElementById("alert_block_" + x_or_y.toUpperCase()).innerHTML = msg; // тут по хитрому считается id alert блока
}
