/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

function valuePair(obj1, obj2, key) {
  let array = [];

  for (const objKey in obj1){
    if (`${objKey}` === key){
      array.push(obj1[`${objKey}`]);
    }
  }

  for (const objKey in obj2){
    if (`${objKey}` === key){
      array.push(obj2[`${objKey}`]);
    }
  }
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
