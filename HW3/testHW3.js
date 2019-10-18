/*
 * testHW3.js
 *
 * Name: Toan Minh Do
 * CS 453 - HW3
 * October 11th, 2019
 * Dr. Xuechan Zhang
 */

var exercises = require('./exercises');

//Test the sum function
console.log("***Sum Function Test***");
console.log("Expected value: 10");
var sum = exercises.arrayMethods.sum;
console.log(sum([1, 2, 3, 4]));

//Test the remove function
console.log("***Remove Function Test***");
console.log("Expected value: [2,3,4,5]");
var remove = exercises.arrayMethods.remove;
console.log(remove([1,2,3,4,5], 1));

//Test the duplicate function
console.log("***Duplicate Function Test***");
console.log("Expected value: [1, 6]");
var dup = exercises.arrayMethods.findDuplicates;
console.log(dup([1,1,2,3,4,5,6,6,7]));

//Test the map function
console.log("***Map Function Test***");
console.log("Expected value: [2, 3, 4, 5, 6]");
var map = exercises.highorderMethods.map;
console.log(map([1,2,3,4,5], x => x+1));

//Test the filter function
console.log("***Filter Function Test***");
console.log("Expected value: ['three', 'four', 'five']");
var filter = exercises.highorderMethods.filter;
console.log(filter(['one', 'two', 'three', 'four', 'five', 'six'], x => x.length > 3));

//Test the reduce function
console.log("***Reduce Function Test***");
console.log("Expected value: 16");
const reduceFunc = (accu, currentValue) => accu + currentValue;
var reduce = exercises.highorderMethods.reduce;
console.log(reduce([1,2,3,4,5], reduceFunc, 1));

//Test the reduce right function
console.log("***Reduce Right Function Test***");
console.log("Expected value: 16");
var reduceRight = exercises.highorderMethods.reduceRight;
console.log(reduceRight([1,2,3,4,5], reduceFunc, 1));

//Test the stringify function
console.log("***Stringify Function Test***");
console.log("Expected value: hee hee");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify("hee hee"));

console.log("Expected value: 1306");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify(1306));

console.log("Expected value: false");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify(false));

console.log("Expected value: [0,1,5]");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify([0,1,5]));

console.log("Expected value: {a: 1, b: 2}");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify({a: 1, b: 2}));

console.log("Expected value: Throws an error");
var stringify = exercises.stringifyMethods.mystringify;
console.log(stringify((x, y) => 1));
