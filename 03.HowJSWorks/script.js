///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);

function calculateAge(year) {
    console.log(2016-year);
}
*/
//not working like this 순서
//retirement(1956);

var retirement = function (year) {
    console.log(65 - (2016-year));
}


//variables

console.log(age); //undefined
var age = 23; //defined in the variable of global execution context
//console.log(age);

function foo(){
    //console.log(age); //undefined
    var age = 65; 
    //defined in the variable of object execution context object of the foo funtion
    console.log(age);
}

foo();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/*var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'John';
    //console.log(a + b + c + d); -> fail
    console.log(a + d);
}




///////////////////////////////////////
// Lecture: The this keyword


/*

- Regular function call : the this keyword points at the global object.
(the window object, in the browser.)

- Method call : the this variable points to the object that is calling
the method.

The this keyword is not assigned a value until a function where it is
defined is actually called.

*/

//console.log(this); //window object

/*calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this); //global object...
}
*/
var john = {
    name:'john',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this); //john object
        console.log(2016-this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this); //back to window object
        }
        innerFunction(); 
        // -> this is not a method, just regular function in john object
        */
    }
};

john.calculateAge();


var mike = {
    name: 'mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // method borrow
mike.calculateAge(); // at this moment, this keyword points to Mike obj








