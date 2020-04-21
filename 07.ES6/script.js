 // Lecture: let and const

/*
 // ES5 
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 
const name6 = 'Jane Smith';
let age6 =23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5 (function scoped)
function driverLicense5(passedTest) {
	if (passedTest) {
		//console.log(firstName); //undefined
		var firstName = 'John';
		var yearOfBirth = 1990;
	}

	//console.log(firstName + ', born in '+yearOfBirth+', is now officially allowed to drive a car');
}
/* this is not work! because var is function scope!
console.log(firstName + ', born in '+yearOfBirth+', is now officially allowed to drive a car');*/

driverLicense5(true);

// ES6 (block scoped)
function driverLicense6(passedTest) {
	
	//console.log(firstName); --> error (cannot access)
	let firstName = 'John';
	const yearOfBirth = 1990; 

	if (passedTest) {
		firstName = 'John';
	}

	//console.log(firstName + ', born in '+yearOfBirth+', is now officially allowed to drive a car'); //--> this will be error because let or const is block scope!
}

driverLicense6(true);

//var i = 23; both i is var, then the result will be 5 (the last one.)
/*let i = 23;

for (let i=0; i < 5; i++) {
	//console.log(i); // 0, 1, 2, 3, 4
}
*/
//console.log(i); //23 (because of block scoped!) It's completely diff variable.



////////////////////////////////////////////////////////////////////
// Lecture : Blocks and IIFEs

// ES 6
{
	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b); //error!!
//console.log(c); //3 (because it's not a block-scoped!)

// ES5 
(function() {
	var c = 3;
})();

//console.log(c);

/////////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2016 - year;
}

// ES5 
console.log('This is ' + firstName + ' '+lastName + '. He was born in ' + yearOfBirth+ 'today is his btday.');


//ES 6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} year old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); //True
console.log(n.startsWith('n')); //false
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(3));

*/

/////////////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5

var ages5 = years.map(function(el) {
	return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

 console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${age}.`
});

console.log(ages6);

*/


/////////////////////////////////////////////////
// Lecture: Arrow Functions 2

// ES5
/*
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		
		//with just this, it would be 'undefined' (cuz this will focus on global object)
		document.querySelector('.green').addEventListener('click', function() {
				var str = 'This is box number '+ this.position +' and it is ' + this.color;
				alert(str);
		}); 
 		var self = this;
		document.querySelector('.green').addEventListener('click', function() {
				var str = 'This is box number '+ self.position +' and it is ' + self.color;
				alert(str);
		});
	}
};*/

//box5.clickMe();

// ES6
/*
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		
		document.querySelector('.green').addEventListener('click', () => {
					var str = 'This is box number '+ this.position +' and it is ' + this.color;
					alert(str);
		});
	}
};

box6.clickMe();*/

/*//this also would be undefined.... 
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		
		document.querySelector('.green').addEventListener('click', () => {
					var str = 'This is box number '+ this.position +' and it is ' + this.color;
					alert(str);
		});
	}
};

box66.clickMe();*/

/*
function Person(name) {
	this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {

	var arr = friends.map(function(el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));

	console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('john').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

	var arr = friends.map(el => `${this.name} is friends with ${el}`);
	
	console.log(arr);
};

new Person('Mike').myFriends6(friends);

*/

//////////////////////////////////////////////////////
// Lecture: Destructuring
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];


// ES6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);

console.log(age2);
console.log(retirement);


*/


////////////////////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

//ES5

var boxesArr5 = Array.prototype.slice.call(boxes);*/
/*
boxesArr5.forEach(function(cur) {
	cur.style.backgroundColor = 'dodgerblue';
});
*/
/*
//ES6

const boxesArr6 = Array.from(boxes);
//boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//above codes can be written only one line!
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
//Change words in boxes
//ES 5
/*for (var i=0; i < boxesArr5.length; i++) {

	if(boxesArr5[i].className === 'box blue') {
		continue;
		//break;
	}

	boxesArr5[i].textContent = 'I changed to blue!';
};*/
/*
//ES6
for (const cur of boxesArr6) {
	if (cur.className === 'box blue') {
		continue;
	}
	//and maybe can use [includes]method
	//if(cur.className.includes('blue'))
	cur.textContent = 'I changed to blue!';
}
*/

/*
// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
	return cur >= 18;
});

console.log(full);
console.log(full.indexOf(true)); // which one?
console.log(ages[full.indexOf(true)]); //how old ?

//ES6
console.log('Result:'+ages.findIndex(cur => cur >= 18)); // for index
console.log(ages.find(cur => cur >= 18)); //for value



*/




/////////////////////////////////////////////////////
// Lecture : Spread operator
/*
function addFourAges (a, b, c, d) {
	return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');

*/


/////////////////////////////////////////////////////
// Lecture : Rest parameters

/*
// ES5
function isFullAge5() {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= 18);
	});

}

//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6

function isFullAge6(...years) {
	//console.log(years);
	years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016, 1987);
*/


/*// ES5
function isFullAge5(limit) {
	//console.log(arguments);
	var argsArr = Array.prototype.slice.call(arguments, 1);

	//console.log(argsArr);

	argsArr.forEach(function(cur) {
		console.log((2016 - cur) >= limit);
	});

}

//isFullAge5(21, 1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES6

function isFullAge6(limit, ...years) {
	//console.log(years);
	years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(21, 1990, 1999, 1965, 2016, 1987);

*/


/////////////////////////////////////////////////////
// Lecture : Default parameters

//ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
	
	lastName === undefined ? lastName = 'Smith' : lastName = lastName;
	nationality === undefined ? nationality = 'american' : nationality = nationality;

	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}
*/
/*
//ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
	this.firstName = firstName;
	this.lastName = lastName;
	this.yearOfBirth = yearOfBirth;
	this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


*/


/////////////////////////////////////////////////////
// Lecture : Maps


const question = new Map();

question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer! :D');
question.set(false, 'Wrong! Please try again!');


console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
	//question.delete(4);	//delete values with only key 
	//console.log('Answer 4 is here');
}

//delete all the things in the map
//question.clear();

/*question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`)); */
/*
for (let [key, value] of question.entries()) {
	//console.log(`This is ${key}, and it's set to ${value}`);
	if (typeof(key) === 'number') {
		console.log(`Answer ${key}:${value}`);
	}
}
*/
//const ans = parseInt(prompt('Write the correct answer'));

//console.log(question.get(ans === question.get('correct'))); 

/*
Why map is better than object for hashmap
1. Can use anything as a key

2. maps are iterable, making it very easy to loop through them.
and to manipulate them.

3. easy to get the size of a map using the size property and also be very handy

4. easily add and remove data from a map
*/





/////////////////////////////////////////////////////
// Lecture : Classes


//ES5
var Person5 = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person5.prototype.calculateAge = function() {
	var age = new Date().getFullYear - this.yearOfBirth;
	console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');


//ES6
class Person6 {
	constructor (name, yearOfBirth, job){
		this.name = name;
		this.yearOfBirth = yearOfBirth;
		this.job = job;
	}

	calculateAge() {
		var age = new Date().getFullYear - this.yearOfBirth;
		console.log(age);
	}

	static greeting() {
		console.log('Hey there!');
	}
} 

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

//class is not hoisted... so you cannot use this class before declaration 
//can only add methods but not properties



















































































