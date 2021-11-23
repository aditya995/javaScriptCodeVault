/*
node 013.passBYval_ref
*/
//  Pass by value, pass by reference, mutability, re-assignment


//  Re-assigning vs Mutation of objects

// Re-assigning 
let val = 9;
val = 10; // re-assigned or replaced
let a = {
    count: 10,
};
console.log(a);
a = { // re-assigned or replaced
    name: 'zzz',
};
console.log(a);

//  Mutation 
// Mutation means a change in the form or nature of the original data.
// [simply put, changing the values of the properties of the object]
// premitive values are not mutable, they can only be replaced of re-assigned!!
let b = {
    count: 10,
};
b.count = 110; // we mutated the count property here
console.log(b.count);
console.log('-----------------1');

// Pass by value ***

// Primitive data types are always pass by value, cause premitive values are not mutable
//  they can only be replaced of re-assigned!!
let val1 = 10;
let val2 = val1;
function passByVal(val) {
    val = 20;
}
passByVal(val1);
console.log(val1);
// Pass by value in objects
let objA = {
    name: 'placeholder',
};
let objB = objA; // It does not create another object, simply points to the 'objA'
objB.name = '';
console.log(objA);
function passByValObj(val) {
    // It will pass by value, cause It re-assigns the object with a new object!
    val = {
        name: 'lol',
    };
}
passByValObj(objB);
console.log(objA);
console.log(objB);
console.log('-----------------2');

//pass by reference ***
let obj1 = {
    name: 'placeholder',
};
let obj2 = obj1; // It does not create another object, simply points to the 'obj1'

function passByRefObj(val) {
    // Pass by ref, cause It mutates the name property!
    val.name = 'MB';
}
passByRefObj(obj2);
console.log(obj1);
console.log(obj2);
