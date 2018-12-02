<%@ page import="Main.Point" %>
<%@ page contentType="text/html;charset=UTF-8"%>
<jsp:useBean id="pointsBean" class="Main.PointsBean" scope="session"/>
<html>
<head>
    <title>Title</title>
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="styles/external.css">
    <script type="text/javascript" src="js/validate.js"></script>
    <script type="text/javascript" src="js/addRow.js"></script>
    <script type="text/javascript" src="js/plot_functions.js"></script>
    <script type="text/javascript" src="js/draw_point.js"></script>
</head>
<body>
<div id="header">
    <h2>Zhetesova Dana p3217, v. 28705</h2>
</div>
<div id="container">
    <div id="content">
        <div id="input">
            <script>init();</script>
            <form action="${pageContext.request.contextPath}/controller" onsubmit="return validate()" method="get" id="form">
                <table>
                    <tr>
                        <th>
                            <p>
                                <label for="x_input">X: </label>
                                <input type="text" maxlength="6" id="x_input" name="x" pattern="^(-)?[0-2]((\.)\d{1,5})?$" onchange="return validate_x();">
                                <div id="alert_block_X"></div>
                            </p>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <p id="p_y">Y: </p>
                            <p><input type="button" id="y-2" value="-2" onclick="y_to_hidden(-2)" width="10px">
                                <input type="button" id="y-1.5" value="-1.5" onclick="y_to_hidden(-1.5)" width="15px">
                                <input type="button" id="y-1" value="-1" onclick="y_to_hidden(-1)" width="20px">
                                <input type="button" id="y-0.5" value="-0.5" onclick="y_to_hidden(-0.5)" width="25px">
                                <input type="button" id="y0" value="0" onclick="y_to_hidden(0)" width="30px">
                                <input type="button" id="y0.5" value="0.5" onclick="y_to_hidden(0.5)" width="6px">
                                <input type="button" id="y1" value="1" onclick="y_to_hidden(1)" width="6px">
                                <input type="button" id="y1.5" value="1.5" onclick="y_to_hidden(1.5)">
                                <input type="button" id="y2" value="2" onclick="y_to_hidden(2)"></p>
                        </th>
                        <div id="alert_block_Y"></div>
                    </tr>
                    <tr>
                        <th>
                            <p>
                                <label for="r">R: </label>
                                <input type="text" id="r" name="r" maxlength="6" pattern="^[1-3]((\.)\d{1,5})?$"
                                       onchange="validate_r()" onkeyup="r_changed(this.value)">
                            </p>
                            <div id="alert_block_R"></div>
                        </th>
                    </tr>
                    <tr>
                        <th>
                            <input type="submit">
                            <input type="hidden" id="y" name="y">
                            <input type="hidden" name="target" value="new_point">
                        </th>
                    </tr>
                </table>
                <p id="alrt">
                    <%  if (!"0".equals(request.getParameter("errCode")) &&
                            request.getParameter("errcode") != null) {
                        out.println("Error code: " + request.getAttribute("errCode").toString());
                        out.println(request.getAttribute("message").toString());
                    }
                    %>
                </p>
            </form>
        </div>
        <div id="plot_and_result">
            <div id="plot" class="element" title="Plot">
                <div>
                    <svg id="svg_plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" onclick="plotClicked(evt)">
                        <defs>
                            <style>
                                .cls-2 {
                                    fill: none;
                                }
                                .cls-2, .cls-3 {
                                    stroke: #000;
                                    stroke-miterlimit: 10;
                                    stroke-width: 0.5px;
                                }
                                .cls-4 {
                                    font-size: 12px;
                                }
                                .cls-4, .cls-5 {
                                    font-family: MyriadPro-Regular, Myriad Pro, serif;
                                }
                                .cls-5 {
                                    font-size: 14px;
                                }</style>
                        </defs>
                        <title>Graph</title>
                        <path class="cls-1"
                              d="M150 150 L270 150 A120,120,0,0,0,150,30 L150 150 Z"
                              transform="translate(0 0)"></path>
                        <polygon class="cls-1" points="90,150 150,150 150,210"></polygon>
                        <rect class="cls-1" x="150" y="150" width="120" height="120"></rect>
                        <line class="cls-2" x1="150" y1="300" x2="150" y2="5.295"></line>
                        <polygon points="150 0 153.049 7.462 150 5.691 146.952 7.462 150 0"></polygon>
                        <line class="cls-2" y1="150.052" x2="294.705" y2="149.95"></line>
                        <polygon points="300 149.948 292.539 153 294.309 149.95 292.537 146.902 300 149.948"></polygon>
                        <path class="cls-3" d="M90.02,150l-.02.02V150Z" transform="translate(0 0)"></path>
                        <line class="cls-2" x1="210" y1="154" x2="210" y2="146"></line>
                        <line class="cls-2" x1="154" y1="210" x2="146" y2="210"></line>
                        <line class="cls-2" x1="154" y1="90" x2="146" y2="90"></line>
                        <line class="cls-2" x1="90" y1="154" x2="90" y2="146"></line>
                        <line class="cls-2" x1="154" y1="270" x2="146" y2="270"></line>
                        <line class="cls-2" x1="270" y1="154" x2="270" y2="146"></line>
                        <line class="cls-2" x1="154" y1="30" x2="146" y2="30"></line>
                        <line class="cls-2" x1="30" y1="154" x2="30" y2="146"></line>
                        <text class="cls-4" transform="translate(30 143)">-
                            <tspan>1</tspan>
                        </text>
                        <text class="cls-4" transform="translate(154 267)">-
                            <tspan>1</tspan>
                        </text>
                        <text class="cls-4" transform="translate(263 143)">
                            <tspan>1</tspan>
                        </text>
                        <text class="cls-4" transform="translate(158 40.045)">
                            <tspan>1</tspan>
                        </text>
                        <text class="cls-4 divis" transform="translate(154 207)">-
                            <tspan>0.5</tspan>
                        </text>
                        <text class="cls-4 divis" transform="translate(158 99.974)">
                            <tspan>0.5</tspan>
                        </text>
                        <text class="cls-4 divis" transform="translate(210 143)">
                            <tspan>0.5</tspan>
                        </text>
                        <text class="cls-4 divis" transform="translate(69 143)">-
                            <tspan>0.5</tspan>
                        </text>
                        <text class="cls-5" transform="translate(158 12.378)">Y</text>
                        <text class="cls-5" transform="translate(288.666 143)">X</text>
                    </svg>
                </div>
            </div>
        </div>
        <div id="results_wrap" class="element">
            <table id="results_table">
                <tr>
                    <td><b>Id</b></td>
                    <td><b>X</b></td>
                    <td><b>Y</b></td>
                    <td><b>R</b></td>
                    <td><b>Success</b></td>
                </tr>
            </table>
        </div>

        <div id="message" class="element">
        </div>
    </div>
    <script defer="defer">
        <%
        for(Point point: pointsBean.getPoints().values()) {
            %>
        draw_point(<%=point.toString()%>);
        <%}%>
        r_changed(1);
    </script>
</div>
</body>
</html>