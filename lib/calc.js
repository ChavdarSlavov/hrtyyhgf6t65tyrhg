'use strict';

/**
 * A Model for Calc
 * @module  Calc
 * @exports Calc
 */
var Calc = {

	/**
	 * @memberOf module:Calc#
	 * 
	 * @static
	 * @param {number} a 
	 * @param {number} b
	 * @returns {number}
	 * @example
	 * // returns 9
	 * calc.sum(4, 5) 
	 *
	 * {@link http://github.com}
	 */
	sum: function(a, b){
		return a + b;
	},

	/**
	 * @memberOf module:Calc#
	 * 
	 * @static
	 * @param {number} a 
	 * @param {number} b
	 * @returns {number}
	 * @example
	 * // returns 2
	 * calc.sum(5, 3) 
	 *
	 */
	substract: function(a, b){
		return a - b;
	},

	/**
	 * @memberOf module:Calc#
	 * 
	 * @static
	 * @param {number} a 
	 * @param {number} b
	 * @returns {number}
	 * @example
	 * // returns 15
	 * calc.sum(3, 5) 
	 *
	 * {@link http://github.com}
	 */
	multiply: function(a, b){
		return a * b;
	}




};

module.export = Calc;