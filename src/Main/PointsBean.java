package Main;

import java.util.HashMap;
import java.util.Map;

public class PointsBean {
    private HashMap<Integer, Point> points = new HashMap<Integer, Point>();

    public void addPoint(Point point) {
        points.put(point.id, point);
    }

    public void removePoint(Point point) {
        points.remove(point.id);
    }

    public void removePoint(int id) {
        points.remove(id);
    }

    public Map<Integer, Point> getPoints() {
        return points;
    }
}
