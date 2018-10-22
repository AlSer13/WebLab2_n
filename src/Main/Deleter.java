package Main;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Enumeration;

@WebServlet(name = "Deleter")
public class Deleter extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int id = Integer.parseInt(request.getParameter("point_id"));
        Enumeration<String> e = request.getSession().getAttributeNames();
        while (e.hasMoreElements()) {
            System.out.println(e.nextElement());
        }
        PointsBean bean = (PointsBean) request.getSession().getAttribute("pointsBean");
        if (bean == null) {
            response.sendError(12345, "It seems there are no points to delete.");
        } else {
            try {
                bean.removePoint(id);
            } catch (Throwable t) {
                response.sendError(500, "Something went wrong.");
            }
        }
    }
}
