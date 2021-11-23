/*
node 014.this
*/
// Problem with [annonymous functions] regarding 'this' keyword
var mb = function () {
    this.val = 21;
    setTimeout(function() {// Here it has its owh 'this'
        this.val++; //  Its not the 'val' from outside, It is now a new variable of the current function
        console.log(this.val); // NaN
    }, 1);
};
var f = new mb(); //    Constructor getting called and setTimeout() gets called here

// Solving the this scope problem in a difficult way in annonymous function
var mb2 = function () {
    var thatVal = this; // holds the scope of the mb2 function
    this.val = 10;
    setTimeout(function() {
        thatVal.val++; //   Uses the scope of outside the setTimeout function
        console.log(thatVal.val); //11
    }, 1);
};
var f2 = new mb2();

// Solving the this scope problem in a better way with [arrow function]
var mb2 = function () {
    this.val = 20;
    setTimeout(() => {
        this.val++; //   Uses the scope of outside the setTimeout function
        console.log(this.val); //21
    }, 1);
};
var f2 = new mb2();