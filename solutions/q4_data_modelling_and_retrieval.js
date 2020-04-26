// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

/*

The isArray() method determines whether an object is an array.

This function returns true if the object is an array, and false if not.

*/


let fruits = [];//specifies array
function Fruit(name, color, priceperkg) {
  this.name = name;
  this.color = color;
  this.priceperkg = priceperkg;
  this.getProperties = function() {
    return 'Color is ' + this.color + ' Price is ' + this.priceperkg;
  };
}
// list of fruits
fruits.push(new Fruit('Apple', 'Red', '120'));
fruits.push(new Fruit('Banana', 'Yellow', '30'));
fruits.push(new Fruit('Pomegranate', 'Red', '140'));
fruits.push(new Fruit('Guava', 'Green', '80'));
fruits.push(new Fruit('Grapes', 'Black', '100'));
fruits.push(new Fruit('Mango', 'yellow', '150'));
function getFruitProperty(arr, name) {
  let properties;
  if(Array.isArray(arr) && name !== 'undefined' && name !== '') {
    arr.some(function(ele) {
      if(ele.name.toLowerCase() === name.toLowerCase()) {
        properties = ele.getProperties();
        return true;
      }
      return false;
    });
  }
  return properties;
}
getFruitProperty(fruits, 'Pomegranate');
