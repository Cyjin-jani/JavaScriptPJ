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

console.log(nicoInfo);
console.log(nicoInfo.gender);

nicoInfo.gender = "Female";

console.log(nicoInfo.gender);

