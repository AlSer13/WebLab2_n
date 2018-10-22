package Main;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ControllerServlet")
public class ControllerServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String target = request.getParameter("target");
        if ("new_point".equals(target)) {
            request
                    .getRequestDispatcher("/areaCheckServlet")
                    .forward(request, response);

        } else if ("delete".equals(target)) {
            request
                    .getRequestDispatcher("/deleter")
                    .forward(request, response);

        }
    }
}
