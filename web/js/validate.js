function validate() {
    let y = document.getElementById("y_input").value;
    let x = document.getElementById("x_input").value;
    y = y.replace(",", ".");
    x = x.replace(",", ".");
    return validate_xy(x, y);
}

function validate_xy(x, y) {
    let wrong = false;

    if (isNaN(y)) {
        alrt("Y must be a number.", "Y");
        wrong = true;
    }
    if (isNaN(x)) {
        alrt("X must be a number.", "X");
        wrong = true;
    }


    if (y === "") {
        alrt("Y field must be filled out.", "Y");
        wrong = true;
    }
    if (x === "") {
        alrt("X field must be filled out.", "X");
        wrong = true;
    }


    if (y < -5 || y > 3) {
        alrt("Y must be between -5 and 3", "Y");
        wrong = true;
    }
    if (x < -3 || x > 3) {
        alrt("X must be between -3 and 3", "X");
        wrong = true;
    }


    if (y.length > 10) {
        alrt("Y too long", "Y");
        wrong = true;
    }
    if (x.length > 10) {
        alrt("X too long", "X");
        wrong = true;
    }

    if (wrong) return false;

    alrt("from -3 to 3", "X");
    alrt("from -5 to 3", "Y");


    let r = window.r1;

    getTableAjax(x, y, r, 0);

    return false;

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
}
