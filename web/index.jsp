<%@ page import="java.io.IOException" %>
<%@ page import="Main.Point" %>
<%@ page contentType="text/html;charset=UTF-8" %>

<jsp:useBean id="pointsBean" class="Main.PointsBean" scope="session"/>


<html>

<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" href="styles/initial.css">
    <link rel="shortcut icon" type="image/png" href="favicon.png"/>
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script type="text/javascript" src="js/clearPoints.js"></script>
    <script type="text/javascript" src="js/validate.js"></script>
    <script type="text/javascript" src="js/draw_point.js"></script>
    <script type="text/javascript" src="js/circlePressed.js"></script>
    <!--<script src="js/makeDraggable.js"></script>-->
</head>

<body>
<div id="page_wrap">
    <div id="page_header" class="shadow">
        <div id="group">P3212</div>
        <a target="_blank"
           href="https://docs.google.com/spreadsheets/d/1_0q_h2O3rhopXSIHdteni_U8cN-to1BLEkMOgr_2zTE/edit#gid=2069076794&range=P13">
            <div id="name">Serdyukov Alexey</div>
        </a>
        <div id="variant">Variant 28210</div>
    </div>

    <div id="content" class="shadow">

        <div id="form_div">
            <script>init();</script>
            <form id="point_props" onsubmit="return validate()">
                <div>
                    <label>
                        Enter X:
                        <div class="in_and_alert">
                            <input type="text" name="user_X" value="0" id="x_input">
                            <div id="alert_block_X">from -3 to 3</div>
                        </div>
                    </label>
                </div>

                <div>
                    <label>
                        Enter Y:
                        <div class="in_and_alert">
                            <input type="text" name="user_Y" value="0" id="y_input"/>
                            <div id="alert_block_Y">from -5 to 3</div>
                        </div>
                    </label>
                </div>

                <div>
                    <label>Choose R:</label>
                    <div class="radio_list">
                        <label>
                            <input type="radio" name="user_R" value="1.0" onchange="radio_pressed(1.0)"
                                   checked> 1.0
                        </label> <br/>
                        <label>
                            <input type="radio" name="user_R" value="1.5" onchange="radio_pressed(1.5)">
                            1.5
                        </label> <br/>
                        <label>
                            <input type="radio" name="user_R" value="2.0" onchange="radio_pressed(2.0)">
                            2.0
                        </label> <br/>
                        <label>
                            <input type="radio" name="user_R" value="2.5" onchange="radio_pressed(2.5)">
                            2.5
                        </label> <br/>
                        <label>
                            <input type="radio" name="user_R" value="3.0" onchange="radio_pressed(3.0)">
                            3.0
                        </label> <br/>
                    </div>

                    <input type="submit" name="submit_form" value="Send"/>
                </div>

            </form>
        </div>

        <div id="plot_and_result">
            <div id="plot" class="element" title="Plot">
                <div>
                    <svg id="svg_plot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"
                         onclick="plotClicked(evt)">
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
                        <title>Plot</title>
                        <path class="cls-1" d="M150,30V150H30A119.992,119.992,0,0,1,150,30Z"
                              transform="translate(0 0)"></path>
                        <polygon class="cls-1" points="150 210 150 150 270 150 150 210"></polygon>
                        <rect class="cls-1" x="30" y="150" width="120" height="60"></rect>
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
            <div id="res_wrap" title="Result">
                <div id="res_frame" class="element"></div>
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
            <h2>Welcome!</h2>
        </div>
    </div>
</div>
<script defer="defer">
    <%
    for(Point point: pointsBean.getPoints().values()) {
        out.print("draw_point("+point.toString()+");");
//                        try {
//                            out.print("getTableAjax("+args+");");
//                        } catch (IOException e) {
//                            e.printStackTrace();
//                        }
    }%>
    radio_pressed(1);
</script>

</body>

</html>