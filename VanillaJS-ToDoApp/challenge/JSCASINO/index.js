// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

//JS RANDOM 숫자 게임
console.log("WELCOME TO RANDOME GAME");

const rangeEl = document.getElementById('myRange');
const userRange = document.getElementById('rangeValue');
const numBox = document.getElementById('numBox');
const chosenVal = document.getElementById('chosenVal');
const machineVal = document.getElementById('answer');
const result = document.getElementById('result');
const displayResult = document.querySelector('.afterPlay');
let rangeValue;


const onInput = () => {
    // console.log('change range limit');
    rangeValue = rangeEl.value;
    // console.log('now limit: ', rangeValue);
    userRange.innerHTML = rangeValue;
    
    //if range has been changed, change the input number limit
    numBox.max = rangeValue;
}

const makeAnswer = (value) => {
    const answer = Math.floor(Math.random()*value);
    // console.log("setting answer:", answer);
    return answer;
}

const playGame = () => {
    // console.log('press play button');
    //show user value
    chosenVal.innerHTML = numBox.value;
    // console.log("userInput", numBox.value);
    // console.log('NumLimit', rangeEl.value);
    //show machine answer
    const machineAns = makeAnswer(rangeEl.value);
    machineVal.innerHTML = machineAns;

    //input Check (limit)
    if (!numBox.value || numBox.value === "") {
        displayResult.style.display = 'none';
        alert('Please enter the number');
    }
    else if(parseInt(numBox.value) > parseInt(rangeEl.value)) {
        displayResult.style.display = 'none';
        alert('Your number is not in a range of setting number! Please Re-try!')
    } else {
        if(parseInt(numBox.value) === machineAns) {
            //if answer is correct
            result.innerHTML = 'You Won!';
        } else {
            //if answer is not correct
            result.innerHTML = 'You Lost!';
        }
        displayResult.style.display = 'block';

    }

}


function init() {
    //setting initial value text
    userRange.innerHTML = '100'
    rangeEl.value = '100';
}

init();