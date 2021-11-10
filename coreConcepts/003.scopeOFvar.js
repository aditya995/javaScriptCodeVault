/*
node 003.scopeOFvar
*/

/// scoping of "var"
var a = null;
//var "a" initialized before-hand
console.log(typeof (a)); //object

a = 8;  //  This value-assignment will change the variable's type dynamically!
console.log(typeof (a)); //number

var a;
console.log(typeof (a)); // number
//Type is still number ! not undefined type!
console.log('-----------');

/// global vs local "var"
//  var is always global, only if it is not inside a funcion
var global1 = -1, global2 = 2;
function globalCheck () {
    if (global2 > 0) {
        var localIf = -10;  //Acts as local
        console.log(`global2 ${global2}`);
        console.log(`localIf ${localIf}, localElse ${localElse}`);
    }
    else {
        var localElse = -20;  //Acts as local
        console.log(`global2 ${global2}`);
        console.log(`localIf ${localIf}, localElse ${localElse}`);
    }
}
globalCheck();
// Output:
// global2 2
// localIf -10, localElse undefined
console.log(`localIf ${localIf}, localElse ${localElse}`);  //localIf undefined, localElse undefined
/**
 * We can access the local variables from outside. But value will be undefined !! [functional scope]
 */

if (true) {
    if (global1 > 0) {
        var localIf = -10;
        console.log(`global1 ${global1}`);  //global1 1
        console.log(`localIf ${localIf}, localElse ${localElse}`);  //localIf -10, localElse undefined
    }
    else {
        var localElse = -20;
        console.log(`global1 ${global1}`);
        console.log(`localIf ${localIf}, localElse ${localElse}`);  //localIf undefined, localElse -20
    }
}
console.log(`localIf ${localIf}, localElse ${localElse}`);  //Depends on if else execution

/**
 * We can access the variables (declared in a child block) from outside, if that is in a block [block scope]
 * In this case it is an if-else block
 */

for (var i = 0; i<5; i++){
    var j = 10;
    j += 2;
    console.log(`j = ${j}, i = ${i}`);
}
console.log(`Outside of the loop, j = ${j}`);

/**
 * However, We can access the variables (declared in a child block) from outside, if that is in a block [block scope]
 * In this case it is an for-loop block
 */