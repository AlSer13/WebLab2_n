<%@ page import="Main.Point" %>
<%@ page import="java.text.NumberFormat" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<jsp:useBean id="pointsBean" class="Main.PointsBean" scope="session"/>
<%
    NumberFormat nf = NumberFormat.getNumberInstance();
    int errCode = (Integer) request.getAttribute("errCode");
    out.print("errCode:" + errCode);
    if (errCode == 0) {
        final Point point = (Point) request.getAttribute("point");
        int max = 0;
        for (Point p : pointsBean.getPoints().values()) {
            if (p.id > max) max = p.id;
        }
        point.setId(max + 1);
        pointsBean.addPoint(point);
        out.print(point.toString());
    } else {
        String message = (String) request.getAttribute("message");
%>
<h2 style="color: crimson">
    <%= message%>
</h2>
<%}%>


