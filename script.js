//changing the initial scores to 0-0
let score1 = document.getElementById('score--0');
let score2 = document.getElementById('score--1');

score1.textContent = 0;
score2.textContent = 0;

//keeping the dic hidden till player starts playing
let dice = document.querySelector('.dice');
dice.classList.add('hidden');

//implementing functionality to the dice
let rollDice = document.querySelector('.btn--roll');
let current = 0;
let scores = [0,0];//scores of both the players
let activePlayer =0; //if ap=0->player 1 ; if ap=1 -> player 2
//scores[activePlayer] -> returns scores of active player

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1')

let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');

rollDice.addEventListener('click', function(){
    //1. generate random no btw 1 to 6 
    /*
    Math.random() - generates random floating no btw 0 and 1
    Math.random()*6 - by multiplying it with 6 we now can get floating no btw 0 and 5
    Math.trunc() - converts floating no to decimal/integer
    Math.trunc(Math.random())+1 - random no btw 1 and 6
    */
    let diceNumber = Math.trunc(Math.random()*6)+1;
    //2. display the dice image of the random no
    dice.classList.remove('hidden');//remove hidden image class
    dice.src = `diceimages/dice${diceNumber}.png`;
    //3. if random no is not 1 then add the random no to the current score
    if(diceNumber!=1){
        current=current+diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent=current;
        //current1.textContent=current;
    }
    else{
        current = 0;
        document.getElementById(`current--${activePlayer}`).textContent=current;
        activePlayer = activePlayer ===0? 1:0;
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')

    }
    
    //4. if random no equals to 1 then reset current score to 0
})

//implementing functionality to hold
let holdBtn = document.querySelector('.btn--hold');
holdBtn.addEventListener('click', function(){
    //1.add current score to total score
    scores[activePlayer]=scores[activePlayer]+current;
    document.getElementById(`score--${activePlayer}`).textContent=activePlayer;

    //check if player is winner
    if(scores[activePlayer] >= 20){
        //make changes to show that player is winner
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        document.querySelector(`#name--${activePlayer}`).textContent="WINNER";
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');
        


    }
    else{
        current = 0;
        document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
        activePlayer = activePlayer ===0? 1:0;
        player1.classList.toggle('player--active')
        player2.classList.toggle('player--active')
    }
})

//adding functionality to new game button
let name1 = document.querySelector('#name--0');
let name2 = document.querySelector('#name--1');
let newGame = document.querySelector('.btn--new');
newGame.addEventListener('click', function(){
    //reset everything
    //total scores
    score1.textContent = 0;
    score2.textContent = 0;

    //current scores
    current1.textContent= 0;
    current2.textContent= 0;

    //images
    dice.classList.add('hidden');    
    rollDice.classList.remove('hidden');
    holdBtn.classList.remove('hidden');

    //name of player
    player1.classList.remove('player--winner');
    player2.classList.remove('player-winner');
    name1.textContent="Player 1";
    name2.textContent="Player 2";

    //active player remove
    player1.classList.remove('player--active');
    player2.classList.remove('player--active');

    //since player 1 is always the first active player
    player1.classList.add('player--active');

    //initial scores to be 0
    current=0;
    scores = [0,0];
    activePlayer =0;
    

})

