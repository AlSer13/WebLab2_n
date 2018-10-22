package Main;

import java.text.NumberFormat;

public class Point {
    public int id;
    public float x;
    public float y;
    public float r;

    public int success;
    public long duration;
    public String date;


    Point(float x, float y, float r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }

    public void setId(int id) {
        this.id = id;
    }
//    public Point(String s) {
//        s = s.substring(1, s.length()-1);
//        String[] params = s.split(",");
//        HashMap<String, String> fields = Arrays.stream(params).map(p -> p.split(":")).collect(Collectors.toMap(p -> p[0], p -> p[1]));
//        id = Integer.parseInt(fields.get("id"));
//        x = Float.parseFloat(fields.get("x"));
//        y = Float.parseFloat(fields.get("y"));
//        r = Float.parseFloat(fields.get("r"));
//    }

    @Override
    public String toString() {
        return "{\"id\":" + this.id + "," +
                "\"x\":" + this.x + "," +
                "\"y\":" + this.y + "," +
                "\"r\":\"" + this.r + "\"," +
                "\"success\":" + this.success + "," +
                "\"duration\":\"" + this.duration + "\"," +
                "\"date\":\"" + this.date + "\"" +
                "}";
    }

//    public String makeResp() {
//        NumberFormat nf = NumberFormat.getNumberInstance();
//        return "<table><tr><th colspan=\\\"2\\\">Точка" + (this.success == 1 ? "" : " не") + " попала в область" +
//                "</th></tr><tr><td>R</td><td>" + this.r + "</td></tr><tr><td>X</td><td>"
//                + nf.format(this.x) + "</td></tr><tr><td>Y</td><td>"
//                + nf.format(this.y) + "</td></tr><tr><td colspan=\\\"2\\\">Execution time: <b>"
//                + this.duration + " nanoseconds</b></td></tr><tr><td colspan=\\\"2\\\">Current time: <b>" + this.date + "</b></td></tr>" +
//                "<tr><td colspan='2'><button id='delete_button' onclick='delete_point(" + this.id + ")'>Delete</button></td></tr>" +
//                "</table>";
//    }
}
