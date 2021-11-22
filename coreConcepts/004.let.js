/*
node 004.let
*/

/// let keyword, shadowing and overriding

let value = 40;

//  [Shadowing]: It happens when we redefine variable in different scope (block inside a block)
if (true) {
    let ifval = -100, elseval = -100;
    if (value > 0) {
        let ifval = "ifvar";
        console.log(`value = ${value}, ifval = ${ifval}, elseval = ${elseval}`);
        //  ifval gets assigned with "ifval", "elseval" remains same 
    } else {
        let elseval = 'elseval';
        console.log(`value = ${value}, ifval = ${ifval}, elseval = ${elseval}`);
        //  elseval gets assigned with "elseval", "ifval" remains same
    }
    console.log(`value = ${value}, ifval = ${ifval}, elseval = ${elseval}`);    //  [Shadowing]
}
//  cant print value of "elseval" and "ifval" [block scope], will result compilation error


//  [Overriding]: value assign happens in a scope, inside another functional or global scope (block inside a block)
console.log('------');
value = 400; 
console.log(`Outside -- value = ${value}`);    //400
function F () {
    value = 1000; // [Overriding]
    if (value > 0) {
        value = -500;
        console.log(`value = ${value}`);    //-500
    } else {
        value = 500;
        console.log(`value = ${value}`);    //500
    }
    console.log(`Inside function-- value = ${value}`);    //
}
F();
console.log(`Outside -- value = ${value}`);