/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, winningScore;
var diceValueFirst, diceValueSecond = 0;
 
init();


//Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//1. Random number
		var diceFirst = Math.floor(Math.random()*6)+1;
		var diceSecond = Math.floor(Math.random()*6)+1;

		//2. Display the result
		var diceDOM1 = document.querySelector('.dice1');
		var diceDOM2 = document.querySelector('.dice2');

		diceDOM1.style.display = 'block';
		diceDOM1.src = 'dice-'+diceFirst+'.png';
		diceDOM2.style.display = 'block';
		diceDOM2.src = 'dice-'+diceSecond+'.png';

		//3. Update the round score IF the rolled number was NOT a 1.
		if(diceFirst !== 1 && diceSecond !== 1 ) {
			//Add score
			roundScore = roundScore + diceFirst + diceSecond;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}else {
			//Next player
			nextPlayer();
		}

		//4. if dice is 6 twice in a row, then looses entire score.
		if(diceValueFirst > 0) {
			diceValueSecond = dice;
			if(checkDoubleSix()){
				scores[activePlayer] = 0;
				roundScore = 0;
				diceValueFirst = 0;
				diceValueSecond = 0;
				document.querySelector('#current-'+activePlayer).textContent = roundScore;
				document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
				nextPlayer();																			
			}else {
				diceValueFirst = diceValueSecond;
				diceValueSecond = 0;
			}

		}else {
			diceValueFirst = dice;
		}

	}
});


document.querySelector('.btn-hold').addEventListener('click', function(){
	if(gamePlaying){
		//Add current score to GLOBAL score
		scores[activePlayer] += roundScore;

		// update the UI 
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		//Check if player won the game
		if(scores[activePlayer] >= winningScore) {
			//win
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}else {
			//Next player
			nextPlayer();	
		}
	}
});


function nextPlayer() {
	//Next player
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; //ternary operator
		roundScore = 0;
		diceValueFirst = 0;
		diceValueSecond = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}

//new game button
document.querySelector('.btn-new').addEventListener('click', init);

//save the winning score button
document.querySelector('.btn-score').addEventListener('click', getWinningScore);


function init() {
	gamePlaying = true;
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	
	document.querySelector('.dice1').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
	document.querySelector('.newGameScore').style.display = 'inline-block';
	document.getElementById('winningScore').value = '';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}

//code challenge

//2. add an input field to the HTML where players can set the winning score.
function getWinningScore(){
	document.querySelector('.newGameScore').style.display = "none";
	winningScore = document.getElementById('winningScore').value;
	//console.log("haha"+winningScore);
} 



//1. player looses his entire score when he rolls two 6 in a row.
//After that, next player's turn.
function checkDoubleSix(){
	if (diceValueFirst === 6 && diceValueSecond === 6){
		return true;
	}else {
		return false;
	}
}



//3. add another dice to the game. so that there are two dices now.
// player looses his current score when one of them is a 1. 