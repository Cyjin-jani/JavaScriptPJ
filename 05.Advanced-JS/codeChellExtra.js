//1. Build a Function Constructor.
var score =0;

function Question (qaNum, question, answerArray, answerNum){
	this.qaNum = qaNum;
	this.question = question;
	this.answerArray = answerArray;
	this.answerNum = answerNum;
	this.showQA = function () {
		console.log(qaNum+'. ' + question);
		for (var i=0; i<answerArray.length; i++){
			console.log(answerArray[i]);
		}
	}
	//10. Display score and save it.
	this.score = function () {
		score += 1;
		return console.log('Congratulation!! Your Score is '+ score +'  now!');
	}
}

//2. Create some questions using the constructor
var questionOne = new Question(1, 'What keyword is used when setting the variables?', ['0: this', '1: var', '2: for'], 1);
//questionOne.showQA();

var questionTwo = new Question(2, 'What is the football club in Milano?', ['0: SS Lazio', '1: Juventus', '2: Internazionale'], 2);
//questionTwo.showQA();

var questionThree = new Question(3, 'Who is the Manager of Tottenham in 19-20 season?', ['0: Jose Mourinho', '1: Alex Furgurson', '2: Pep Guardiola'], 0);
//questionThree.showQA();
var questionFour = new Question(4, 'Which team had won in 2019 spring in LCK?', ['0: KT', '1: Kingzone', '2: SKT T1'], 2);


//3. QA array + 7.private
Question.qaArray = [questionOne, questionTwo, questionThree, questionFour];


//4.  Select one random question and log it on the console
/*function RandomQA (qaArray) {
	var qaNum = Math.round(Math.random() * 2);
	qaArray[qaNum].showQA();
}

RandomQA(qaArray);
*/
Question.randomQA = function (qaArray) {
	var qaNum = Math.round(Math.random() * 3);
	Question.qaNum = qaNum;
	qaArray[qaNum].showQA();
};
Question.randomQA(Question.qaArray);


//5. Use the 'prompt' function to ask the user for the correct answer.
var userAnswer = function () { 
	var answers = prompt('What is the Correct Answer? choose one answer and enter it\'s number!');
	return answers;
};


//6. Check if the answer is correct and print to the console whether the answer is correct or not.
Question.checkAws = function (userAnswer) {
	var answered = userAnswer();
	//9. make exit;
	if(answered === 'exit'){return }
	else if (Question.qaArray[Question.qaNum].answerNum == answered){
		console.log('Your answer is Correct!');
		Question.qaArray[Question.qaNum].score(); //11. display score
	}else {
		console.log('Wrong! The Answer is '+ Question.qaArray[Question.qaNum].answerNum);
	}
	callNextQA()();
};

Question.checkAws(userAnswer);


//8. call next QA
function callNextQA () {
	return function () {
		Question.randomQA(Question.qaArray);
		Question.checkAws(userAnswer);
	};
