package Main;

import static java.lang.StrictMath.pow;
import static java.lang.StrictMath.sqrt;

class Figure {
    public float r;

    public Figure(float r) {
        this.r = r;
    }

    private boolean fits2(Point point) {
        if (point.y < 0 || point.x > 0 || point.x < -this.r || point.y > this.r) return false;

        return point.y <= sqrt(pow(this.r, 2) - pow(point.x, 2));
    }

    private boolean fits3(Point point) {
        return
                (point.x >= -this.r) &&
                        (point.x <= 0) &&
                        (point.y >= -this.r / 2) &&
                        (point.y <= 0);
    }

    private boolean fits4(Point point) {
        if (point.x < 0 || point.y > 0) return false;
        return point.y >= point.x / 2 - this.r / 2;
    }

    boolean fits(Point point) {
        return (this.fits2(point) || this.fits3(point) || this.fits4(point));
    }

}