/*global describe*/
/*global require*/
/*global it*/
'use strict';

describe('my first test suite', function () {

    var calc = require('../lib/calc'),
    	should = require('should');

	it('should sum numbers', function (done) {
		let c = calc.sum(5, 3);
		c.should.be.equal(8);
		done();
	});

	it('should not sum', function (done) {
		let c = calc.sum(8, 3);
		c.should.not.be.equal(8);
		done();
	});

	it('should substract', function (done) {
		let c = calc.substract(8, 3);
		c.should.be.equal(5);
		done();
	});

	it('should multiply', function (done) {
		let c = calc.multiply(8, 3);
		c.should.be.equal(24);
		done();
	});
});