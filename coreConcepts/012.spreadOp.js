/*
node 012.spreadOp
*/
//  Spread Operator [es6]

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = [a, b];     // not the best way!! **
console.log(c);
//  marges the array elements
let d = [...a, ...b];
// alternative to spread operator **
// d = a.concat(b); 
console.log(d);
//  Making shallow copy of the object (copy of the element, not the proto or others!)
let e = Object.assign([], a);
console.log(e);
e = Object.assign([], b);
console.log(e);

// Rest parameters (when it is used in a function argument It's called [rest parameter])
let func = (firstval, secondval, ...args) => {
    console.log(args);
    let countArgs = args.length;
    let val = args[countArgs - 2] + args[countArgs - 1];
    console.log(`${val} = ${args[countArgs - 2]} + ${args[countArgs - 1]}`);
};
let val1 = -50;
func(1, val1, '2', 5, true);    //2, 5

let arrayVals = [2, 2, 4, 1, 5, 3];
console.log(Math.min(2, 2, 4, 1, 5, 3)); // 1
console.log(Math.min(...arrayVals));    // 1