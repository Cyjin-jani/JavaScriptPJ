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
let i = 23;

for (let i=0; i < 5; i++) {
	//console.log(i); // 0, 1, 2, 3, 4
}

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












































































































































































