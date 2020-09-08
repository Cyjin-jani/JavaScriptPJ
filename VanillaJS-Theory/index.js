//console.log('Hi this is vanilla JS!')

// const, let, var
//보통 사용은 const로! 오직 필요한 경우에만 let을 쓰기.
const a = 221; //cannot change
let b = a - 5;
var c = 10;
//a = 4;
console.log(b, a);

/* this is common 주석.
to do : ~~~
*/

//string
const what = "Nicolas";

//Boolean
const wat = true;
const fat = false;

//Number
const num = 541;

//Float
const flNum = 55.1;


//배열
const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(daysOfWeek);
console.log(daysOfWeek[2]);

//Object
const nicoInfo = {
    name: "nico",
    age : 33,
    gender: "Male",
    isHandsome: true,
    favMovies: ["along the gods", "LoTR", "old boy"],
    favFood: [
        {
            name: "Kimchi", 
            fatty: false
        }, {
            name: "CheeseBurger", 
            fatty: true
        }],
}

// console.log(nicoInfo);
// console.log(nicoInfo.gender);

nicoInfo.gender = "Female";

// console.log(nicoInfo.gender);

//Functions
console.log("Hello");

function sayHello(name, age) {
    // console.log("hello! "+name+"! you are" + age);
    return `Hello! ${name} you are ${age} years old!`;
}

// sayHello("nico", 15)
// sayHello("rula", 20)

//use function
const greetNicolas = sayHello("Nicolas", 25);
console.log(greetNicolas);


//Diff way to use function

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    devide: function (a, b) {
        return a / b;
    },
    multiple: function (a, b) {
        return a * b;
    },
    squares: function (a, b) {
        return a ** b;
    } 
}

const plus = calculator.plus(5, 10);
console.log(plus);


//DOM Manipulate

// const title = document.getElementById("title");
//const title = document.querySelector("#title");
// title.innerHTML = "Hi! From JS";
//title.style.color = 'red';
// document.title = "I own you now"

//Event Handle

// function handleClick(event) {
//     // console.log("I have been resized");
//     // console.log(event);
//     title.style.color = "blue";
// }

//title.addEventListener("click", handleClick);

// DOM if-else function practice

// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";

// const OTHER_COLOR = "#7f8c8d";

// function handleClick() {
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR) {
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init() {
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();

// function handleOnline() {
//     console.log("welcome back!");
// }

// window.addEventListener("online", handleOffline);

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // //console.log(currentClass);

    // if (hasClass){
    //     title.classList.remove(CLICKED_CLASS);
    // } else {
    //     title.classList.add(CLICKED_CLASS);
    // }

    //USE toggle
    title.classList.toggle(CLICKED_CLASS);

}

function init() {
    title.addEventListener("click", handleClick);
}
init();

