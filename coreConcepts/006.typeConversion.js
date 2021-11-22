/*
node 006.typeConversion
*/

//  Type conversion functions

var a = Boolean(-4);
console.log(a);
var a = Boolean(0);
console.log(a);
console.log('-------1');

var a = Boolean('false');
console.log(a);
var a = Boolean('true');
console.log(a);
var a = Boolean('-44');
console.log(a);
var a = Boolean('0');
console.log(a);
var a = Boolean('');
console.log(a);
console.log('-------2');

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log('-------3');

var a = Number('ff4');
console.log(a);
console.log(typeof (a));    //Still type is number!! 
var a = Number(false);
console.log(a);
var a = Number(true);
console.log(a);
console.log('-------4');

console.log(Number(null));
console.log(Number(undefined));
console.log(typeof (Number(undefined)));
console.log('-------5');

var x = '';
if (x == null || x == '' || x == undefined) {
    console.log('Value not assigned yet |' + x + '|');
} else {
    console.log('Value assigned |' + x + '|');
}
if (!x) {   // for x = 0, then !x => 1, [condition true]
    console.log('Value not assigned yet |' + x + '|');
} else {
    console.log('Value assigned |' + x + '|');
}
console.log('-------6');

var y;
if (!y) {   // for y = 0, then !y => 1, [condition true]
    console.log('Value not assigned yet |' + y + '|');
} else {
    console.log('Value assigned |' + y + '|');
}
