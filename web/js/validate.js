function validate() {
    let y = document.getElementById("y_input").value;
    let x = document.getElementById("x_input").value;
    y = y.replace(",", ".");
    x = x.replace(",", ".");
    return validate_xyr(x, y);
}

function validate_xyr(x, y, r) {
    if (validate_x(x) && validate_r(r) && validate_y(y)) {
        getTableAjax(x, y, r, 0);
    }
    return false;

}

function validate_y(y) {
    if (y === "") {
        alrt("Y field must be filled out.", "Y");
        return false;
    }

    if (y === null) {
        alrt("Wrong Y", "Y");
        return false;
    }

    if (isNaN(+y)) {
        alrt("Y must be a number.", "Y");
        return false;
    }


    if (y < -2 || y > 2) {
        alrt("Y must be between -2 and 2", "Y");
        return false;
    }


    if (y.length > 10) {
        alrt("Y too long", "Y");
        return false;
    }
    alrt("from -2 to 2", "Y");
    return true;
}

function validate_x(x) {

    if (x === "") {
        alrt("X field must be filled out.", "X");
        return false;
    }

    if (isNaN(+x)) {

        alrt("X must be a number.", "X");
        return false;
    }

    if (x === null) {
        alrt("Wrong X", "X");
        return false;
    }

    if (x < -3 || x > 3) {
        alrt("Y must be between -3 and 3", "X");
        return false;
    }
    if (x.length > 10) {
        alrt("X too long", "X");
        return false;
    }
    alrt("from -3 to 3", "X");
    return true;
}

function validate_r(r) {

    if (r === "") {
        alrt("R field must be filled out.", "R");
        return false;
    }

    if (isNaN(+r)) {
        alrt("R must be a number.", "R");
        return false;
    }

    if (r === null) {
        alrt("Wrong R", "R");
        return false;
    }

    if (r < 1 || r > 4) {
        alrt("R must be between 1 and 4", "R");
        return false;
    }
    if (r.length > 10) {
        alrt("R too long", "R");
        return false;
    }
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
                document.getElementById("message").innerHTML = "";
            } else {
                document.getElementById("message").innerHTML = response;
            }
        }

    });
}

function alrt(msg, x_or_y) {
    document.getElementById("alert_block_" + x_or_y.toUpperCase()).innerHTML = msg; // тут по хитрому считается id alert блока
}
