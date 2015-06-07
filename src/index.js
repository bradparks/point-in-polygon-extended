/**
 * Returns whether a point is in a polygon using ray casting. This still returns
 * false if a point is on the boundary.
 *
 * See http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
 *
 * @param point {object} x,y coordinate
 * @param vs {Array} array of {object} x,y points
 * @returns {boolean} true if point is inside or false if not
 */
function pointInPolyRaycast(point, vs) {
	var x = point[0], y = point[1];

	var inside = false;
	for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		var xi = vs[i][0], yi = vs[i][1];
		var xj = vs[j][0], yj = vs[j][1];

		var intersect = ((yi > y) !== (yj > y)) &&
			(x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		if (intersect) {
			inside = !inside;
		}
	}
	return inside;
}


/**
 * Returns whether a point is in a polygon using a winding number test
 *
 * http://geomalgorithms.com/a03-_inclusion.html
 *
 * @param point {object} x,y coordinate
 * @param points {Array} array of x,y point objects
 * @return {boolean} true if inside, false if outside
 */
function pointInPolyWindingNumber(point, points) {
	if (points.length === 0) {
		return false;
	}
	var n = points.length;
	var newPoints = points.slice(0);
	newPoints.push(points[0]);
	var wn = 0; // wn counter
	var pt = {
		x: point[0],
		y: point[1]
	};

	// loop through all edges of the polygon
	for (var i = 0; i < n; i++) {
		if (newPoints[i].y <= pt.y) {
			if (newPoints[i + 1].y > pt.y) {
				if (isLeft(newPoints[i], newPoints[i + 1], pt) > 0) {
					wn++;
				}
			}
		} else {
			if (newPoints[i + 1].y <= pt.y) {
				if (isLeft(newPoints[i], newPoints[i + 1], pt) < 0) {
					wn--;
				}
			}
		}
	}
	// the point is outside only when this winding number wn===0, otherwise it's inside
	return wn !== 0;
}

/**
 * Tests if a point is Left|On|Right of an infinite line.
 *
 * See http://geomalgorithms.com/a01-_area.html
 *
 * @param p0 {object} x,y point
 * @param p1 {object} x,y point
 * @param p2 {object} x,y point
 * @returns {number}
 *  >0 for P2 left of the line through P0 and P1,
 *  =0 for P2  on the line,
 *  <0 for P2  right of the line
 */
function isLeft(p0, p1, p2) {
	return ( (p1.x - p0.x) * (p2.y - p0.y) ) -
		((p2.x - p0.x) * (p1.y - p0.y) );
}

// TODO
function pointInPolyCrossingNumber(point, points) {
	return true;
}

module.exports = {
	pointInPolyWindingNumber: pointInPolyWindingNumber,
	pointInPolyRaycast: pointInPolyRaycast
};



