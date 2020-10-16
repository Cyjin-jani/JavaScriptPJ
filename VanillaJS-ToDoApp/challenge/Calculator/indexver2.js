// <⚠️ DONT DELETE THIS ⚠️>
// import "styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
//JS CALCULATOR

let numValue = "";
let array = [];
let result = 0;

function allClear() {
    document.querySelector('input').value = 0;
    numValue = "";
    array = [];
    result = 0;
}

const changeInput = (input) => {
    document.querySelector('input').value = input;
}


const getNumber = () => {
    document.querySelectorAll('.num').forEach(numEl => {
        numEl.addEventListener('click', () => {
            // console.log('click num', numEl.innerHTML);
            numValue += numEl.innerHTML
            changeInput(numValue);
            // console.log('now numValue', numValue);
        })
    })
}


function calculate(operator) {
    // console.log('연산자 : ', operator);
    let resultString="";
    //연산자를 누르면 numValue와 연산자를 배열에 추가.
    if(numValue){
        array.push(parseInt(numValue))
    }
    array.push(operator)

    // console.log("array상태", array);
    
    for(let i = 0; i < array.length; i++) {
        //수식이 옳지 않은 경우,
        if(array.length % 2 == 0){
            //맨 마지막 연산자 전까지의 수식을 더함.
            if(i < array.length-1) {
                // console.log("맨마지막 연산자 전까지의 수식 더함.");
                resultString += array[i];
            }
        }else {
            resultString += array[i];
        }
    }
    
    if(array.length >=3) {
        // console.log('Eval한 결과', resultString);
        result = eval(resultString);
    }else {
        //초기 단 두개만 입력된 경우 처리
        result = array[0];
    }

//    console.log('계산 결과', result);
   changeInput(result)
    //연산자를 눌렀으므로 숫자는 다시 초기화.
    numValue = "";
    array = [];
    array.push(result);
    array.push(operator)
}

function getResult() {
    array.push(numValue); //가장 마지막에 입력한 숫자 넣기
    // console.log('최종 결과 계산 전 배열의 상태', array);
    let resultString="";
    if (array.length % 2 == 0) {
        //연산자로 마무리. 올바르지 않은 수식
        return alert('Not valid Expression');
    } else {
        for(let i = 0; i < array.length; i++) {
            resultString += array[i];
        }
        result = eval(resultString)
        // console.log("최종계산결과", result);
        changeInput(result)
        numValue = "";
        array = [];
        array.push(result);
        // console.log('최종 결과 계산 후 초기화 + 초기값 넣은 배열의 상태', array);
    }
}

function init() {
    // console.log('start');
    allClear();
    getNumber();
}

init();