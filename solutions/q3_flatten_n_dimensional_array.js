/* Write a Program to Flatten a given n-dimensional array */

/*

The isArray() method determines whether an object is an array.

This function returns true if the object is an array, and false if not.

*/

/*
  here cur represents current.
  acc represents previous.
  we are adding or concadinating both the current and previous values.
*/

/* 
syntax for terinary operator [condition ? expression_1 : expression_2;].
if the condition is true it prints expression1.if the condition fails it prints expression2.
*/
const flatten = (inputArray) => {
	if (Array.isArray(inputArray)) {
		return inputArray.reduce(function(acc, cur) {
			let items = Array.isArray(cur) ? flatten(cur) : [cur]; /* here we used terinary operator to reduce the size of the code*/
			return acc.concat(items); /* isArray(cur)--->checks weather the object is an array.
                                                     if it satisfies it returns the concadination of previous and current values . 
                                                     if not it returns null*/
		}, []);
	}
	return null;
};
/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;




