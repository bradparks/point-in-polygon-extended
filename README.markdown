point-in-polygon-extended
================

[![Build Status](https://travis-ci.org/iominh/point-in-polygon-extended.svg)](https://travis-ci.org/iominh/point-in-polygon-extended) [![Coverage Status](https://coveralls.io/repos/iominh/point-in-polygon-extended/badge.svg)](https://coveralls.io/r/iominh/point-in-polygon-extended)

Determine if a point is inside of a polygon.

This is a fork of James Halliday's [point-in-polygon](https://github.com/substack/point-in-polygon) and includes
alternative algorithms beyond ray casting because the original library does not include points on boundaries
(([see issue2](https://github.com/substack/point-in-polygon/issues/2)). Another library called
[robust-point-in-polygon](https://www.npmjs.com/package/robust-point-in-polygon) solves this problem but still
has some difficulty for complex polygons with regards to performance and accuracy.

Point-in-polygon-extended allows a user to switch between the aforementioned algorithms or other ones, such
as the [winding number test](http://geomalgorithms.com/a03-_inclusion.html). This library also includes a testing
suite to compare the different algorithms for different test cases.

example
=======

``` js
var inside = require('point-in-polygon');
var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];

console.dir([
    inside.raycast([ 1.5, 1.5 ], polygon),
    inside.raycast([ 4.9, 1.2 ], polygon),
    inside.raycast([ 1.8, 1.1 ], polygon)
]);
```

output:

```
[ true, false, true ]
```

methods
=======

inside(point, polygon, algorithm)
----------------------

Return whether `point` is contained in `polygon`.

`point` should be a 2-item array of coordinates.

`polygon` should be an array of 2-item arrays of coordinates.

`algorithm` is an optional string specifying the algorithm to use. By default it uses ray casting. See the algorithms
section for more details

algorithms
=======

Algorithm | notes
------------- | -------------
raycast  | Based on the [Point Inclusion in Polygon Test (PNPOLY) by W. Randolph Franklin](http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html). This is the default algorithm is none is specified.
robustRaycast | More robust point in polygon detection
windingNumber | Based on the [winding number test](http://geomalgorithms.com/a03-_inclusion.html) by Dan Sunday

install
=======

    npm install point-in-polygon-extended

credit
======

Thank you to the following people and projects:

- James Halliday /substack for [point-in-polygon](https://github.com/substack/point-in-polygon)
- Mikola Lysenko for [robust-point-in-polygon](https://github.com/mikolalysenko/robust-point-in-polygon)
- Brendan Kenny for[libtess.js](https://github.com/brendankenny/libtess.js). I borrowed a lot of his testing layout
(gulp, travis, coveralls, mocha, etc)

other options / research
======

- [Java polygon-contains-point](https://github.com/sromku/polygon-contains-point/tree/master/Polygon/src/com/sromku/polygon)
- [Stackoverflow point-in-polygon answer](http://stackoverflow.com/questions/217578/point-in-polygon-aka-hit-test)