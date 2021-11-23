/*
node 015.array.js
*/

let arr1 = new Array(1, 2, 5);
arr1[4] = 8;    // added elements and also value assigned 
console.log(arr1);
arr1[3] = 10; //    accessing elements
arr1[0] = 20; //    accessing elements
delete (arr1[1]);
console.log(arr1);

// 4 ways to Populate an Array in JavaScript

// Using --> Array.fill()
let filledArray1 = new Array(3).fill('hello');
filledArray1[1] = '';
console.log(filledArray1);
/**
 * fill() gets passed an object, it will copy the reference and fill the array with references to that object.
 * filledArray[0].hello = "adios"
 * It will change every object in the array because they are all referencing the same object.
 */
let filledArray2 = new Array(5).fill({ 'hello': 'goodbye' });
filledArray2[1].hello = '#'; // Mutation will change all the values from 'goodbye' to '#'
filledArray2[1] = {hello: 'new'}; // Re-assigning still works on single element 
console.log(filledArray2);
let filledArray3 = new Array(6).fill(null).map(() => ({ 'hello': 'goodbye' }));
filledArray3[1].hello = '11'; // Mutation will not change all the values
console.log(filledArray3);

// Using loops
// Rather than using the fill and map methods, we could create a new array like this:

let filledArrayL = new Array(10);
// Then loop over the array the old fashioned way like this:
for(let i=0; i<5;i++){
    filledArrayL[i] = {'hello':'goodbye'};
}
// This avoids using the map method.

// Using Array.from()

let filledArrayF = Array.from({ length: 3 }, () => ({ 'hello': 'goodbye' }));
let filledArrayS = [...new Array(3)].map(() => ({ 'hello': 'goodbye' }));
// Mutation doesnot cause all the values to be changed at once
filledArrayF[0].hello = '00';
filledArrayS[0].hello = '22';
console.log(filledArrayF);
console.log(filledArrayS);

// Using Spread operator

let ga = [1, 2];
let gb = [3, 4];
let gc = [...ga, ...gb];
console.log(gc);

console.log('-------------1');

//  Array methods

let arrayA = [1, 2, 3, 4, 5, 70];
let arrayB = [11, 12, 13, 14, 15, 17];
console.log(arrayA.length);
console.log(`pop operation returns ${arrayA.pop()}`); // removes last element
console.log(arrayA);
console.log(`push operation returns ${ arrayA.push(8, 9) }`);
console.log(arrayA);
console.log(`concat operation returns ${arrayA.concat(arrayB)}`);
console.log(`reverse operation returns ${arrayA.reverse()}`);
console.log(`shift operation returns ${arrayA.shift()}`); // removes first element
console.log(arrayA);
console.log(`unshift operation returns ${arrayA.unshift(51, 52)}`); // Adds elements in front
console.log(arrayA);
console.log('----------2');

let slicedA = arrayA.slice(1, 4); //    sliced from index (1 - 3)
console.log(slicedA);
console.log(arrayA);

let sorted = ['zzz', 'bdf', 'bef', 'abz'].sort();
console.log(sorted);
// comparator function
let sorted2 = ['zzz', 'bdf', 'bef', 'abz'].sort(function (a, b) {a - b}); // Descending
let sorted3 = ['zzz', 'bdf', 'bef', 'abz'].sort(function (a, b) {b - a}); // Ascending
console.log(sorted2);
console.log(sorted3);

// Sorting Array of objects
let objArray = [
    {
        name: "Jordan",
        job: 'Player',
        favColor: 'blue',
        number: 100,
    },
    {
        name: "Buckey Roberts",
        job: 'Programmer',
        number: 2,
    },
    {
        name: "Rock",
        job: 'Actor',
        hobby: 'Mocking People',
        number: 15,
    },
];
// must use comparator function, Or It wont be sorted
// Works good with number values in properties
let sortedObjArr = objArray.sort(function(a, b){return a.number - b.number}); // must use comparator function, Or It wont be sorted
console.log(sortedObjArr);
// strings are bit tricky comparison
let sortedStrProp = objArray.sort(function (a, b) {
    let x = a.name.toLowerCase(); // grab the porperty
    let y = b.name.toLowerCase(); // grab the porperty
    if (x < y) {return 1;} // for ascending -1, descending 1
    if (x > y) {return -1;} // for ascending 1, descending -1
    return 0;
});
console.log(sortedStrProp);
console.log('----------------------3')

let arrStr = [1, 2, 3, 'Q', { name: 'orko'}];
console.log(arrStr);
console.log(arrStr.toString());
console.log(arrStr.join());
console.log(arrStr.join('~~'));
let arr01 = [1, 2, 3];
let arr02 = ['rr'];
let arr03 = [' o', 'p', '_ '];
console.log(arr01.join(arr02));
/** Outputs the same */
console.log(arr01.join(arr03)); 
console.log(arr01.join(arr03.toString()));
console.log('---------------4');
/** */

