package Main;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

@WebServlet(name = "AreaCheckServlet")
public class AreaCheckServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int errCode = 0;
        float[] right_Rs = {1f, 1.5f, 2f, 2.5f, 3f};

        float userR = 0;
        float userX = 0;
        float userY = 0;
        Point point;

        try {
            userR = Float.parseFloat(request.getParameter("user_R"));
            userX = Float.parseFloat(request.getParameter("user_X"));
            userY = Float.parseFloat(request.getParameter("user_Y"));
        } catch (NumberFormatException e) {
            errCode = 2;
        } catch (NullPointerException e) {
            errCode = 1;
        }

        if (errCode == 0) {
            errCode = 3;
            for (float r : right_Rs) {
                if (r == userR) {
                    errCode = 0;
                    break;
                }
            }

            if ((userX < -3) || (userX > 3))
                errCode = 4;

            if ((userY < -5) || (userY > 3))
                errCode = 5;
        }

        long start = System.nanoTime();
        if (errCode == 0) {
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss z");
            Figure figure = new Figure(userR);
            point = new Point(userX, userY, figure.r);
            point.success = figure.fits(point) ? 1 : 0;
            point.date = dateFormat.format(new Date());
            point.duration = System.nanoTime() - start;
            request.setAttribute("point", point);
        } else {
            String mesg = "Invalid value:";
            switch (errCode) {
                case 1:
                    mesg = "ERROR: some data was lost on the way.";
                    break;
                case 2:
                    mesg = "ERROR: Hackers stole a numeric value and it's not numeric anymore!";
                    break;
                case 3:
                    mesg = "ERROR: Hackers stole R!";
                    break;
                case 4:
                    mesg += " X should be [-3; 3]";
                    break;
                case 5:
                    mesg += " Y should be [-5; 3]";
                    break;
            }
            request.setAttribute("message", mesg);
        }
        request.setAttribute("errCode", errCode);
        request.getRequestDispatcher("/table.jsp").forward(request, response);
    }
}