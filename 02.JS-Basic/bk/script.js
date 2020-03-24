
/*
* Variable and data types
*/

var firstName = 'John';
//console.log(firstName);

var lastName = 'Smith';
var age = 28;

//var fullAge = true;

//console.log(fullAge);
 
var job;
//console.log(job);

job = 'Teacher'

//console.log(job);


//console.log(firstName + ' ' + age);



 /*
Number : Floating point numbers, for decimals and integers
String : Sequence of characters, used for text.
Boolean : Logical data type that can only be true or false.
Undefined : Data type of a variable that does not have a value yet.
Null : Also means 'non-existent'

 */

var job, isMarried;
job = 'Teacher';
isMarried = false;

/*console.log(firstName+' is a '+age+' years old '
	+job+'. Is he Married? ' + isMarried);
*/

//variable mutation

age = 'twenty eight';
job = 'driver';

/*alert(firstName+' is a '+age+' years old '
	+job+'. Is he Married? ' + isMarried);*/


//var lastName = prompt('what is his last Name?');

//console.log(firstName + ' '+ lastName);


/*
* Basic Operators
*/

/*var year, yearJohn, yearMark;

now = 2018;
ageJhon = 28;
ageMark = 33;

 year = 2018;
 yearJohn = year - 28;
 yearMark = year - 33;

console.log(now+2);
console.log(now*2);
console.log(now/2);


console.log(yearJohn);	

//logical operators

var johnOlder = ageJhon > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJhon);
console.log(typeof 'mark is older than john');

var x;
console.log(typeof x);*/



//operator precedence


var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

//Grouping
var ageJhon = now - yearJohn;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;

//console.log(average);

//Multiple assginments

var x, y;
x = y = (3+5)*4-6; //8*4-6 // 32-6 // 26
//console.log(x, y);

//assignment has a direction that right to left


//More operators
x = x * 2;
x*=2;
//those are same.



//Coding Challenge1


var massJohn, massMark, heightJohn, heightMark, bmiJohn, bmiMark;
massJohn = 60;
massMark = 80;
heightJohn = 180;
heightMark = 170;

bmiJohn = massJohn / (heightJohn*heightJohn);
bmiMark = massMark / (heightMark*heightMark);

var isHigher = bmiMark > bmiJohn;

//console.log("Is Mark's BMI higher than John's?"+isHigher);




/*
 if else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName+' is married');
} else {
	console.log(firstName+' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
	console.log(firstName+' is married');
} else {
	console.log(firstName+' will hopefully marry soon :)');
}


/*
  Boolean logic
*/

/*var firstName = 'john';
var age = 20;

if (age < 13) {
	console.log(firstName+" is a boy");
} else if(age >= 13 && age < 20) {
	console.log(firstName + " is a teenager.");
} else if (age > 20 && age < 30) {
	console.log(firstName + " is a young man.");
}else {
	console.log(firstName+" is a man.");
}

*/

/*
 The Ternary Operator and Switch Statements
*/
/*
var firstName = 'john';
var age = 16;

//Ternary Operator
age >= 18? console.log(firstName+'drinks beer.') 
: console.log(firstName+'drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch Statements
var job = 'instructor';

switch (job){
	case 'teacher':
	case 'instructor':
		console.log(firstName+' teaches kids how to code.');
	break;
	case 'driver':
		console.log(firstName+' drives an uber in Lisbon.');
	break;
	case 'designer' : 
		console.log(firstName+' designs beautiful websites.');
	break;
	default:
		console.log(firstName+' does something else.');
}



switch (true) {
	case age < 13:
		console.log(firstName + 'is a boy');
	break;
	case age >= 13 && age < 20:
		console.log(firstName + 'is a teenager');
	break;
	case age >= 20 && age <30 :
		console.log(firstName + 'is a young man');
	break;	
	default : 
	console.log(firstName + 'is a man');
}

*/
/*
  Truthy and Falsy values and equality operators

*/

//falsy values: undefined, null, 0 , '', NaN
// truthy values : Not falsy values

/*var height;
if (height) {
	console.log('variable is defined');
} else {
	console.log('variable is not defined');
}
*/
//this way is can figure out that variable is defined or not.
/*
var height;
height = 23;

if (height || height === 0) {
	console.log('variable is defined');
} else {
	console.log('variable is not defined');
}


// Equality operators

if (height === '23') {
	console.log('The == operator does type coercion!');
}
if (height == '23') {
	console.log('The == operator does type coercion!');
}






//Coding Challenge 2

var johnTeam = [89, 120, 103];
var MikeTeam = [116, 94, 123];


//1. calculate the average score of each team.

var jTeamAvg = (johnTeam[0]+johnTeam[1]+johnTeam[2])/3;
var mTeamAvg = (MikeTeam[0]+MikeTeam[1]+MikeTeam[2])/3;

//2. decide which team's score is higher
console.log("2quiz");
if (jTeamAvg > mTeamAvg){
	console.log("john's team is winner! score is"+jTeamAvg);
}else {
	console.log("Mike's team is winner! score is"+mTeamAvg);
}

//3. change the scores to show different winners.
console.log("3quiz");
if (jTeamAvg > mTeamAvg){
	console.log("john's team is winner! score is"+jTeamAvg);
}else if (jTeamAvg == mTeamAvg) {
	console.log("draw!");
}else {
	console.log("Mike's team is winner! score is"+mTeamAvg);
}


//4. extra
//console.log("4quiz");
var MaryTeam = [97, 134, 105];
var maryTeamAvg = (MaryTeam[0]+MaryTeam[1]+MaryTeam[2])/3;

if (maryTeamAvg > mTeamAvg && maryTeamAvg > jTeamAvg){
//	console.log("mary's team is winner! score is"+maryTeamAvg);
}else if (jTeamAvg > mTeamAvg && maryTeamAvg < jTeamAvg) {
	//console.log("john's team is winner! score is"+maryTeamAvg);
}else if (mTeamAvg > maryTeamAvg && mTeamAvg > jTeamAvg){
	//console.log("Mike's team is winner! score is"+mTeamAvg);
} else {
	//console.log("draw");
}
*/

/*
	Function 
*/

function calculateAge (birthYear){
	return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

//console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName){
	var age = calculateAge(year);
	var retirement = 65 - age;
	
	if(retirement > 0){
		//console.log(firstName + ' retires in '+retirement + 'years');
	}else {
		//console.log(firstName+" is already retired");
	}

	
}

yearsUntilRetirement(1990, 'john');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');





/*
  Function Statements and Expressions
*/


//Function declaration
// function whatDoYouDo(job, firstName){}



 //function Expression
var whatDoYouDo = function(job, firstName){
	switch (job){
		case 'teacher':
			return firstName + ' teaches kids how to code';
		case 'driver':
			return firstName + ' drives a cab in Lisbon';
		case'designer':
			return firstName + ' designs beautiful websites';
		default:	
			return firstName + ' does something else';
	}	
}

/*
console.log(whatDoYouDo('teacher', 'john'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/



/*
	Arrays
*/

//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

//console.log(names[0]);
//console.log(names.length);
//console.log(names);

// Mutate array data
names[1]  = 'Ben';
names[5] = 'Mary';
names[names.length] = 'Mary3';
//console.log(names);

//Different data types

/*var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');

//console.log(john);

john.pop();
john.pop();
john.shift();
//console.log(john);

//console.log(john.indexOf(1990));

//console.log(john.indexOf(23));
//this is actually good way to figure out 
//that variable is really in the array or not.

var isDesigner = john.indexOf('designer') === -1 ? 'John is Not a designer.' : 'John is a designer';

//console.log(isDesigner);*/

//*****************************************
//Code Challenge 3

// 3 restaurants 124, 48, 268 dollors.

//less than $50 -> 20% tip
//between 50 and 200 -> 15% tip
// more than 200 -> tip 10%

//2arrays. 
//1) containing all three tips (one for each bill)
//2) containing all three final paid amounts. (bill + tip)

//*****************************************
//var price;
var tipArray = [];
var finalPay = [];
/*

function tipCalculator (price) {

	if (price < 50){
		tipArray.push(price*0.2);
		finalPay.push(price*0.2 + price);
	}else if (price > 50 && price < 200) {
		tipArray.push(price*0.15);
		finalPay.push(price*0.15 + price);
	}else {
		tipArray.push(price*0.1);
		finalPay.push(price*0.1 + price);
	}

	console.log(tipArray);
	console.log(finalPay);
};
*/

/*console.log(tipCalculator(124));
console.log(tipCalculator(48));
console.log(tipCalculator(268));
*/

/*
// udemy answer

function tipCal(bill) {
	var percentage;

	if(bill < 50) {
		percentage = .2;
	}else if (bill >= 50 && bill <200) {
		percentage = .15;
	}else {
		percentage = .1;
	}

	return percentage * bill;
}

var bills = [124, 48, 268];

var tips = [tipCal(bills[0]),tipCal(bills[1]),tipCal(bills[2])];

var finalValues = [bills[0] + tips[0],
					bills[1] + tips[1],
					bills[2] + tips[2]
					];

console.log(tips, finalValues);
*/




/*
  Objects and properties
*/

//key value pair object literal
/*var john = {
	firstName: 'John',
	lastName: 'Smith',
	birthYear: 1990,
	family: ['Jane', 'Mark', 'Bob', 'Emily'],
	job: 'teacher',
	isMarried: false
};


console.log(john.firstName);
console.log(john['lastName']);


var x = "birthYear";
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);


//new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane["lastName"] = 'Smith';

console.log(jane);

*/

/*
	Objects and methods
*/

// var john = {
// 	firstName: 'John',
// 	lastName: 'Smith',
// 	birthYear: 1992,
// 	family: ['Jane', 'Mark', 'Bob', 'Emily'],
// 	job: 'teacher',
// 	isMarried: false,
// 	calcAge: function(birthYear){
// 		return 2018 - birthYear;		
// 	}
// 	calcAge: function(){
// 		return 2018 - this.birthYear;		
// 	}
// 	calcAge: function(){
// 		this.age = 2018 - this.birthYear;		
// 	}

// };



// //console.log(john.calcAge(1990));
// //console.log(john.calcAge());

// john.calcAge();
// //console.log(john);




/*************************************
	code Chanllenge 4
 ************************************
 Mark, Johns compare their BMIs.
*/

//1. For each of them, create an object with properties for their
//full name, mass and height.

//2. Then, add a method to each object to calculate the BMI.
//Save the BMI to the object and also return it from the method.
/*
var Johns = {
		name: 'Johns Savie',
		mass: 60,
		height: 170,
		whatBmi: function (){
			return this.mass / (this.height * this.height);
		}
};

var Mark = {
		name: 'Mark Mab',
		mass: 78,
		height: 187,
		bmi: 0,
		whatBmi: function (){
			this.bmi = this.mass / (this.height * this.height);
		}
};

Mark.whatBmi();
//3. log to the console who has the highest BMI, 
//together with full name and the respective BMI.

if (Johns.whatBmi() > Mark.bmi) {
	console.log(Johns.name+" is higher. BMI is: "+ Johns.whatBmi());
}else if (Johns.whatBmi() < Mark.bmi) {
	console.log(Mark.name+" is higher. BMI is: "+ Mark.bmi);
}else {
	console.log('their BMI is same!');
}
*/

/*
	code chanllenge 4 UDEMY ANSWER!
*/

/*
var Johns = {
		name: 'Johns Savie',
		mass: 110,
		height: 1.95,
		calcBmi: function (){
			this.bmi = this.mass / (this.height * this.height);
			return this.bmi;
		}
};

var Mark = {
		name: 'Mark Miller',
		mass: 78,
		height: 1.69,
		calcBmi: function (){
			this.bmi = this.mass / (this.height * this.height);
			return this.bmi;
		}
};

if(Johns.calcBmi() > Mark.calcBmi()) {
	console.log(Johns.name + 'has a higher BMI of '+ Johns.bmi);
}else if (Mark.bmi > Johns.bmi) {
	console.log(Mark.name + 'has a higher BMI of '+ Mark.bmi);
}else {
	console.log('They have a same BMI');	
}

*/



/*
	Loops and iteration
*/

for (var i=0; i<10; i++){
	//console.log(i);
}


// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

/*
var john = ['john', 'smith', 1990, 'designer',false ];

//for loop
for (var i=0; i < john.length; i++ ){
	console.log(john[i]);	
}

//while loop
var i = 0;
while(i < john.length){
	console.log(john[i]);
	i++;
}
*/
// continue and break statements


/*
var john = ['john', 'smith', 1990, 'designer',false, 'blue' ];

for (var i=0; i < john.length; i++ ){
	if (typeof john[i] !== 'string' ) {
		continue;
	}
	console.log(john[i]);	
}

for (var i=0; i < john.length; i++ ){
	if (typeof john[i] !== 'string' ) {
		break;
	}
	console.log(john[i]);	
}

//Looping backwards
for (var i = john.length-1; i >= 0; i--){
	console.log(john[i]);	
}*/


//code Challenge 5

/*
var johnBillArray = [124, 48, 268, 180, 42];
var markBillArray = [77, 375, 110, 45];
var johnTipsArray = [];
var johnFinalPayArray = [];
var markTipsArray = [];
var markFinalPayArray = [];

function tipCalc (family, bills) {
	var tips = 0;
	if(family === 'john'){
		for (var i = 0; i < johnBillArray.length; i++) {

			if (bills[i] < 50){
				tips = bills[i]*0.2
			}else if (bills[i] >= 50 && bills[i] <= 200 ){
				tips = bills[i]*0.15
			}else {
				tips = bills[i]*0.1
			}
			johnTipsArray.push(tips);
			johnFinalPayArray.push(tips+bills[i]);
		}
	}else {
		for (var i = 0; i < markBillArray.length; i++) {

			if (bills[i] < 100){
				tips = bills[i]*0.2
			}else if (bills[i] >= 100 && bills[i] <= 300 ){
				tips = bills[i]*0.1
			}else {
				tips = bills[i]*0.25
			}
			markTipsArray.push(tips);
			markFinalPayArray.push(tips+bills[i]);
		}
	}
}


tipCalc('john', johnBillArray);
tipCalc('mark', markBillArray);

console.log(johnTipsArray,johnFinalPayArray);
console.log(markTipsArray, markFinalPayArray);



function calAvgTip (tips){
	var sum = 0;
	var avgTip = 0;
	var i;
	for (i = 0; i < tips.length; i++){
		sum = sum + tips[i];
	}
	avgTip = sum / i;
	return avgTip;
}

if (calAvgTip(johnTipsArray) > calAvgTip(markTipsArray)) {
	console.log('john');
}else if(calAvgTip(johnTipsArray) < calAvgTip(markTipsArray)) {
	console.log('mark');
}else {
	console.log('draw');
}
*/


//Code Challenge 5 ANSWER 

//part 1


var john = {
		fullname: 'John Smith',
		bills: [124, 48, 268, 180, 42],
		calcTips: function(){
			this.tip = [];
			this.finalValues = [];

			for (var i=0; i<this.bills.length; i++){
				//determine percentage based on tipping rules
				var percentage;
				var bill = this.bills[i];

				if (this.bills[i] < 50){
					percentage = .2;
				}else if(this.bills[i] >= 50 && this.bills[i] < 200){
					percentage = .15;
				}else {
					percentage = .1;
				}

				//Add results to the correspond
				this.tip[i] = bill * percentage;
				this.finalValues[i] = bill + bill*percentage; 
			}
		}
}


var mark = {
		fullname: 'Mark Miller',
		bills: [77, 475, 110, 45],
		calcTips: function(){
			this.tip = [];
			this.finalValues = [];

			for (var i=0; i<this.bills.length; i++){
				//determine percentage based on tipping rules
				var percentage;
				var bill = this.bills[i];

				if (this.bills[i] < 100){
					percentage = .2;
				}else if(this.bills[i] >= 100 && this.bills[i] < 300){
					percentage = .1;
				}else {
					percentage = .25;
				}

				//Add results to the correspond
				this.tip[i] = bill * percentage;
				this.finalValues[i] = bill + bill*percentage; 
			}
		}
}


function calcAverage(tips){
	var sum = 0;
	for (var i=0; i < tips.length; i++){
		sum = sum + tips[i];
	}
	return sum / tips.length;
}


// do the calculations
john.calcTips();
mark.calcTips();
john.average = calcAverage(john.tip);
mark.average = calcAverage(mark.tip);

console.log(john, mark);


if (john.average > mark.average) {
	console.log(john.fullname + ' has higher tips with an average of '+john.average);
}else if (john.average < mark.average) {
	console.log(mark.fullname + ' has higher tips with an average of '+mark.average);
}















