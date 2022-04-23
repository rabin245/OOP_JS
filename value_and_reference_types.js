// Value types      Reference types
// - Number         - Object
// - String         - Function
// - Boolean        - Array
// - Symbol
// - undefined
// - null

// let x = 10;
// let y = x;
// console.log(x, y);  // 10, 10

// x = 20;
// console.log(x, y);  // 20, 10

let x = { value: 10 };
let y = x;
console.log(x, y); // { value: 10 } { value: 10 }

x.value = 20;
console.log(x, y); // { value: 20 } { value: 20 }

// Primitives are copied by their value
// Objecrs are copied by thei reference

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj); // { value: 11 }
