point-in-polygon-extended
================

[![Build Status](https://travis-ci.org/iominh/point-in-polygon-extended.svg)](https://travis-ci.org/iominh/point-in-polygon-extended) [![Coverage Status](https://coveralls.io/repos/iominh/point-in-polygon-extended/badge.svg)](https://coveralls.io/r/iominh/point-in-polygon-extended)

Determine if a point is inside of a polygon.

This is a fork of James Halliday's [point-in-polygon](https://github.com/substack/point-in-polygon) that extends it to allow for alternative algorithms beyond ray casting.

I had issues using the original library because it failed to detect points on boundaries ([see issue2](https://github.com/substack/point-in-polygon/issues/2)) so I switched to [robust-point-in-polygon](https://www.npmjs.com/package/robust-point-in-polygon) but
that too had issues for certain complex polygons.

Ultimately, I've decided to implement my own library that allows a user to switch between different algorithms and compare their results. The current default algorithm I'm exploring is the [winding number test](http://geomalgorithms.com/a03-_inclusion.html).

Also, I really liked the testing layout of [libtess.js by Brendan Kenny](https://github.com/brendankenny/libtess.js) so I borrowed
some Mocha and gulp source from his project.

example
=======

``` js
var inside = require('point-in-polygon');
var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];

console.dir([
    inside([ 1.5, 1.5 ], polygon),
    inside([ 4.9, 1.2 ], polygon),
    inside([ 1.8, 1.1 ], polygon)
]);
```

output:

```
[ true, false, true ]
```

methods
=======

var inside = require('point-in-polygon')

inside(point, polygon)
----------------------

Return whether `point` is contained in `polygon`.

`point` should be a 2-item array of coordinates.

`polygon` should be an array of 2-item arrays of coordinates.

install
=======

    npm install point-in-polygon-extended
