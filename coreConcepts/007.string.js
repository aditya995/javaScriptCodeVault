/*
node 007.string
*/

let str1 = "'String 1'";
let str2 = '"String 2"';
let str3 = `Template literals \nPrinting Escape sequence characters $`;
console.log(`${str1} ${str2} ${str3}`);
//  Prints raw content
let str4 = String.raw`\$\^\@\\`;
console.log(`${str4}`);

let str5 = str4 + '88';
console.log(`${str5}`);

let int = 10;
let string1 = 'value of int is ' + int + ' | ' + int.toString() + true;
console.log(string1);
console.log(typeof (string1));

//  tagged template (Useful for internationalization)

let taggedTemplate = function (strArray, ...vals) {
    console.log(strArray);
    console.log(vals);
};
//  It seperates the String part and the variable part in two different arrays
let bangla = 'ভাই কি পেরা';
taggedTemplate`Here is some string ${str3}, some integer value ${int}`;

console.log('hello'.startsWith('he'));
console.log('hello'.endsWith('lo'));
console.log('hello'.includes('ll'));
console.log('hello '.repeat(3));