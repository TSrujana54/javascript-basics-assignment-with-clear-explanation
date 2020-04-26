/* Write a Program to convert an array of objects to an object
	based on a given key */


/*

The isArray() method determines whether an object is an array.

This function returns true if the object is an array, and false if not.

*/


/*

The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 

It will return the target object.

Object.assign({}, ['a','b','c']); // {0:"a", 1:"b", 2:"c"}

*/
const convert = (arr, idValue) => {
	if (Array.isArray(arr)) {
		let object = arr.reduce(
			(obj, item) => Object.assign(obj, {[item[idValue]]: item}), {}
		);
		return object;   /* if the above condition satisfies it returns object if not it returns null */
	}
	return null;
};


/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
		
*/	'2': {id: 2, value: 'xyz'}
		 }



module.exports = convert;
