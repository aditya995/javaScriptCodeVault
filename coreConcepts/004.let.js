/*
node 004.let
*/

/// let keyword

let value = 40;

if (true) {
    if (value > 0) {
        let ifval = 1;
        console.log(`value = ${value}, ifval = ${ifval}`);
        //  cant print value of "elseval", will result error
    } else {
        let elseval = 1;
        console.log(`value = ${value}, elseval = ${elseval}`);
        //  cant print value of "ifval", will result error
    }    
}
//  cant print value of "elseval" and "ifval", will result compilation error
console.log(`value = ${value}`);

