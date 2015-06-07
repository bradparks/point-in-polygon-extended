/* jshint node: true */
/* global suite, test */
'use strict';

var chai = require('chai');
var assert = chai.assert;
var pointInPolygonRC = require('../src/index.js');

/**
 * Basic tests of the API using the different APIs
 */

suite('Ray casting point in polygon tests', function () {
	test('simple test', function () {
		var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ];
		var test1 = pointInPolygonRC([ 1.5, 1.5 ], polygon);
		var test2 = pointInPolygonRC([ 4.9, 1.2 ], polygon);
		var test3 = pointInPolygonRC([ 1.8, 1.1 ], polygon);
		assert.strictEqual(test1, true, 'Point should be inside');
		assert.strictEqual(test2, false, 'Point should be outside');
		assert.strictEqual(test3, true, 'Point should be inside');
	});

});