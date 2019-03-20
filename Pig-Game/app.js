/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var score,roundScore,activePlayer,gamePlaying,pre_dice = 0 ;

	init();
  
  
  document.querySelector('.btn-roll').addEventListener('click',function()
  {		
  
		if(gamePlaying)
		{	
			
			var dice = Math.floor(Math.random() * 6) + 1 ;
		
			var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-'+dice+'.png';
			
			console.log('pdp:'+pre_dice);
			console.log('d:'+ dice);
			
			 if(dice !== 1  &&  dice !== 6)
			 {
				roundScore = roundScore + dice;
				document.getElementById('current-'+activePlayer).innerHTML = roundScore;
				pre_dice = dice ;
				console.log('pd:'+ pre_dice);
				
				
			 }
			 
			 else if(dice === 6 )
			 {
				if(pre_dice === 6)
				{ 
				 score[activePlayer] = 0;
				 roundScore = 0;
				 document.getElementById('current-'+activePlayer).innerHTML = roundScore;
				 document.getElementById('score-'+activePlayer).innerHTML = 0;
				 pre_dice = 0;
				 nextPlayer();
				}
				else
				{
						roundScore = roundScore + dice;
						document.getElementById('current-'+activePlayer).innerHTML = roundScore;
						pre_dice = dice ;
						console.log('pd:'+ pre_dice);
				}
				 
				 
			 }
			 else
			 {	
				nextPlayer();
				pre_dice = 0;
				 
			 }
			
			
		}
		
		
		
		
 });
 
 
 document.querySelector('.btn-hold').addEventListener('click',function()
 {
		
	if(gamePlaying)
		{
					score[activePlayer] += roundScore;
					document.getElementById('score-'+ activePlayer).innerHTML = score[activePlayer];
				
					var input = document.querySelector('.final-score').value;
					var winningScore ;
					
					if(input)
					{
						winningScore = input;
						
					}
					else
						winningScore = 100;
					  
					
					
					
				if(score[activePlayer] >= winningScore)
				{
					document.querySelector('#name-'+activePlayer).innerHTML = 'Winner!';
					document.querySelector('.dice').style.display = 'none';

					document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
					document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
					
					gamePlaying = false;
					
				}
				else
					nextPlayer();
		}
		
		
		
 } );
 
 document.querySelector('.btn-new').addEventListener('click',init);
		
 
 
 function nextPlayer()
 {
	 
			activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
			roundScore = 0;
			document.getElementById('current-1').innerHTML = 0;
			document.getElementById('current-0').innerHTML = 0;
			
			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');
			
			document.querySelector('.dice').style.display ='none';
 }
 
 function init()
 {		
 
		 gamePlaying = true;
		 score = [0,0];
		 roundScore = 0 ;
		 activePlayer = 0;

		  
		  document.querySelector('.dice').style.display = 'none';
		  
		  document.getElementById('score-0').innerHTML = 0;
		  //document.querySelector('score-0').textContent = 0;
		  document.getElementById('score-1').innerHTML = 0;
		  document.getElementById('current-0').innerHTML = 0;
		  document.getElementById('current-1').innerHTML = 0;
		  
		  document.querySelector('#name-0').innerHTML = 'Player 1';
		  document.querySelector('#name-1').innerHTML = 'player 2';
		  
		  document.querySelector('.player-0-panel').classList.remove('winner');
		  document.querySelector('.player-1-panel').classList.remove('winner');
		  document.querySelector('.player-0-panel').classList.remove('active');
		  document.querySelector('.player-1-panel').classList.remove('active');
		  document.querySelector('.player-0-panel').classList.add('active');
		  
		  
		  
 }
 
 