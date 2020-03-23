/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();
//scores = [0,0];
//roundScore = 0;
//activePlayer = 0; // firstplayer: 0, secondplayer: 1


//console.log(dice);

//setter

//textContent is only can sent normal text, not html
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>';

//can read the value (getter)
//var x = document.querySelector('#score-0').textContent;
//console.log(x);



//Anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
	if(gamePlaying){
		//1. Random number
		var dice = Math.floor(Math.random()*6)+1;

		//2. Display the result
		var diceDOM = document.querySelector('.dice');

		diceDOM.style.display = 'block';
		diceDOM.src = 'dice-'+dice+'.png';

		//3. Update the round score IF the rolled number was NOT a 1.
		if(dice !== 1) {
			//Add score
			roundScore += dice;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
		}else {
			//Next player
			nextPlayer();
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
		if(scores[activePlayer] >= 20) {
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


function init() {
	gamePlaying = true;
	scores = [0,0];
	activePlayer = 0;
	roundScore = 0;
	
	document.querySelector('.dice').style.display = 'none';

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

//1. player looses his entire score when he rolls two 6 in a row.
//After that, next player's turn.

//2. add an input field to the HTML where players can set the winning score.

//3. add another dice to the game. so that there are two dices now.
// player looses his current score when one of them is a 1. 