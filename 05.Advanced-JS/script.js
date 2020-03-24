// Objects in Javascript

//Everything is an object in JavaScript. (well, almost everything)

//Primitives 
/*
	Numbers
	Strings
	Booleans
	Undefined
	Null
*/

//Objects 
/*
	Arrays
	Functions
	Objects
	Dates
	Wrappers for Numbers, Strings, Booleans.....
	is An OBJECT
	*/

/* SUMMARY
 - Every JavaScript object has a prototype property, which makes inheritance possible in JavaScript

 - The prototype property of an object is where we put methods and properties that we want other objects to inherit;

 -  The Constructor's prototype property is NOT the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.

  - When a certain method(or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype.
  This continues until the method is found : prototype chain.
*/



//Function constructor
/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};

// Function constructor has a capital letter at first letter.
var Person = function (name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	/*this.calculateAge = function () {
		console.log(2016-this.yearOfBirth);
	}*/
//}
/*
//this can work! because of inheritance
Person.prototype.calculateAge = function () {
		console.log(2016-this.yearOfBirth);
	}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/
//hasOwnProperty, instanceof  -> these are useful



//Object.create
/*
var personProto = {
	calculateAge: function () {
		console.log(2016 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';


var jane = Object.create(personProto, {
	name: { value: 'Jane'},
	yearOfBirth: { value: 1969},
	job: { value: 'designer'}
});

*/

// Primitives vs objects

//Primitives
var a = 23;
var b = a;

a = 46;

//console.log(a);
//console.log(b);


//objects
/*var obj1 = {
	name: 'John',
	age: 26
};

var obj2 = obj1;

obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


var age = 27;
var obj = {
	name: 'Jonas',
	city: 'Lisbon'
};

function change(a, b){
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/



//Lecture: Passing functions as arguments
//Functions are also objects in js

/*

- A function is an instance of the Object type;

- A function behaves like any other object;

-We can store functions in a variable

- We can pass a function as an argument to another function

- We can return a function from a function

*/


/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge (el) {
	return 2016 - el;
}

function isFullAge(el) {
	return el >= 18;
}

function maxHeartRate(el){
	if (el >= 18 && el <= 81){
		return Math.round(206.9 - (0.67 * el)); 	
	}
	else {
		return -1;
	}
}


var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(ages, isFullAge);

console.log(ages);

console.log(fullAges);


var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);
*/





//Lecture: FUnctions returning functions

/*
function interviewQuestion(job){
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		}
	}else if(job === 'teacher'){
		return function(name){
			console.log('what subject do you teach?' + name +' ??')
		}
	}else {
		return function(name){
			console.log('Hello '+name+'what do u do?');
		}
	}
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');


interviewQuestion('teacher')('Mrak2');

*/


// Lecture: IIFE pattern (for Data privacy)

/*function game() {
	var score = Math.random() * 10;
	console.log(score >= 5);
}

game();
*/
/*
(function (){
	var score = Math.random() * 10;
	console.log(score >= 5);
 }
)();
*/
//console.log(score); //cannot see or access outside from the function. (hidden from outsideScope)
/*
(function (goodLuck){
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
 }
)(5);
*/





//Lecture: Closures

function retirement(retirementAge) {
	var a = ' years left until retirement';
	return function (yearOfBirth) {
		var age = 2016 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}


var retirementUS = retirement(66);

//retirementUS(1990);
//retirement(66)(1990);

/*
	CLOSURES SUMMARY

	An inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.


*/

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);


//using the closure and make same codes to this.
/*
function interviewQuestion(job){
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you please explain what UX design is?');
		}
	}else if(job === 'teacher'){
		return function(name){
			console.log('what subject do you teach?' + name +' ??')
		}
	}else {
		return function(name){
			console.log('Hello '+name+'what do u do?');
		}
	}
}
*/


//small coding challenge for closure
function interviewQA (job) {
	var questions = '';
	if(job === 'designer'){
			questions = ' can u please explain what UX is?';
	}else if(job === 'teacher'){
			questions = ', what subject do you teach?';
	}else {
			questions = ', what do u do?';
	}

	return function (name) {
			console.log(name + questions);
	}
}

var interviewTeacher = interviewQA('teacher');
var interviewdesigner = interviewQA('designer');
var interviewUnknown = interviewQA('Unknown');
interviewTeacher('John');
interviewdesigner('Mark');
interviewUnknown('elsa');

//solution
function interviewQuestion(job) {
	return function (name) {
		if (job === 'designer') {
			console.log(name + ', can you please explain what UX design is?');
		}else if(job === 'teacher'){
		console.log('what subject do you teach?' + name +' ??');
		}else {
		console.log('Hello '+name+'what do u do?');	
		}
	}
}

interviewQuestion('teacher')('john');



//Lecture Bind, call and apply


var john = {
	name: 'john',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){
		if (style === 'formal'){
			console.log('Good '+timeOfDay+', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
		}else if(style === 'friendly'){
			console.log('hey! what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + 'and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
		}
	}
}

var emily = {
	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');
//call can allow that borrow method... this will be changed from john to emily

/*john.presentation.apply(emily, ['friendly', 'afternoon']);*/

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');




//exercise

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
	var arrRes = [];
	for (var i = 0; i < arr.length; i++){
		arrRes.push(fn(arr[i]));
	}
	return arrRes;
}

function calculateAge (el) {
	return 2016 - el;
}

function isFullAge(limit, el) {
	return el >= limit;
}


var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);



// code challenges

/*

1. Build a function constructor called Question to describe a question.
A question should inclue: 

a) question itself
b) the answers from which the player can choose the correct one 
(choose an adequate data structure here, array, object, etc.)
c) correct answer ( I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)

(Hint : write a method for the question objects for this task.)

5. Use the 'prompt' function to ask the user for the correct answer.
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not.
(Hint: write another method for this.)

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint : we learned a speacial technique to do exactly that)


------Extra Level ------

8. After you display the result, display the next random question, so that the game naver ends. (Hint: write a function for this and call it right after displaying the result)

9. Be careful : after task8,the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun!. So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point. )

11. Display the score in the console. Use yet another method for this.

*/
















