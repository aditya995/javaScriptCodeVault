/*
node 002.var_let.js
*/

///  var keyword
// dynamically changes types!
var a = 7, b = 8;
console.log(typeof(a)); //number
a = "value";
console.log(typeof(a)); //string
console.log('-----------');

/* ******* Javascript Operators
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/
var undefined1;
var num1 = 10, str1 = "Str", bool1 = true, bool2 = false, null1 = null;
//  Operators on same type of data

console.log(num1+num1); //20
console.log(str1 + str1);   //StrStr
console.log(bool1 + bool1); //2
console.log(bool1 + bool2); //1
console.log(null1 + null1); //0
console.log(undefined1 + undefined1); //NaN
console.log('-----------');


/// *******       Javascript Weird Behaviours          ********

// Using opertors in two different types of data: [string with (number or bool or null or undefined)]
//  string and other type data together- both operates as string 
//  here a = "value", b = 8
console.log(str1 + num1); // value8
console.log(num1 + str1); // 8value
console.log(str1 + null1);  //Strnull
console.log(str1 + bool1);  //Strtrue
console.log(str1 + undefined1);  //Strundefined
//  Other operations will result NaN (Not a Number)
console.log(str1 - bool1); // NaN
console.log(str1 / bool1); // NaN
console.log(str1 * bool1); // NaN
console.log(str1 ** bool1); // NaN
console.log(str1 % bool1); // NaN
// order reversed
console.log(bool1 - str1); // NaN
console.log(bool1 / str1); // NaN
console.log(bool1 * str1); // NaN
console.log(bool1 ** str1); // NaN
console.log(bool1 % str1); // NaN

//  exceptions:
console.log('exceptions:');
console.log(str1 ** null1); // outputs 1, in this particular order (string ** null)
console.log('-----------');


// Using opertors in two different types of data: [bool with number]
//  bool and number together- both operates as number [true => 1, false => 0]
console.log('Add-');
console.log(num1 + bool1);  //10
console.log(num1 + bool2);  //11
console.log('Subtract-');  
console.log(num1 - bool1);  //9
console.log(num1 - bool2);  //10
console.log(bool1 - num1);  //-9
console.log(bool2 - num1);  //-10
console.log('Multiplication-');
console.log(num1 * bool1);  //10
console.log(num1 * bool2);  //0
console.log('division-');
console.log(num1 / bool1);  //10
console.log(num1 / bool2);  //Infinity
console.log(bool1 / num1);  //0.1
console.log(bool2 / num1);  //0
console.log('-----------');

// Using opertors in two different types of data: [null with number]
//  null acts as (numeric) value 0.
console.log(num1 + null1); // 10
console.log(num1 - null1); // 10
console.log(num1 / null1); // Infinity
console.log(num1 * null1); // 0
console.log(num1 ** null1); // 1
console.log(num1 % null1); // NaN
// order reversed
console.log(null1 + num1); // 10
console.log(null1 - num1); // -10
console.log(null1 / num1); // 0
console.log(null1 * num1); // 0
console.log(null1 ** num1); // 0
console.log(null1 % num1); // 0

// Using opertors in two different types of data: [undefined and number]
//  All the operations with [undefined and number] will result NaN
console.log(num1 + undefined1); // NaN