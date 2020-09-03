var scores, roundScore, activePlayer, gamePlaying = true,
    preDice, settedScore;

init();




document.querySelector(".btn-roll").addEventListener("click", function () {
    if (gamePlaying) {
        //challenge 3
        var dice1 = Math.floor((Math.random() * 6) + 1);
        var dice2 = Math.floor((Math.random() * 6) + 1);
        var diceDOM1 = document.querySelector("#dice-1");
        var diceDOM2 = document.querySelector("#dice-2");
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';
        diceDOM2.src = 'dice-' + dice2 + '.png';


        /*
        challenge 1
        if (preDice === 6 && dice === 6) {
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = 0;

        } else if (dice !== 1) {
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

        } else {

            nextPlayer();


        }
        preDice = dice;*/
       if (dice1 !== 1 ||  dice2 !== 1) {
            roundScore += dice1 + dice2;
            document.getElementById("current-" + activePlayer).textContent = roundScore;

        } else {

            nextPlayer();


        } 
        
    }
});


document.querySelector(".btn-hold").addEventListener("click", function () {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
        //challenge 2
        settedScore = document.getElementById("set-score").value;
        var winningScore;
        if(settedScore){
            winningScore = settedScore;
        }
        else{
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#name-" + activePlayer).textContent = 'Winner!';

            document.querySelector("#dice-1").style.display = 'none';
            document.querySelector("#dice-2").style.display = 'none';

            document.querySelector(".player-" + activePlayer + "-panel").classList.add('winner');

            document.querySelector(".player-" + activePlayer + "-panel").classList.remove('active');
            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }




});

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;



    document.querySelector("#dice-1").style.display = 'none';
    document.querySelector("#dice-2").style.display = 'none';
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove('winner');
    document.querySelector(".player-1-panel").classList.remove('winner');
    document.querySelector(".player-0-panel").classList.remove('active');
    document.querySelector(".player-1-panel").classList.remove('active');
    document.querySelector(".player-0-panel").classList.add('active');

}

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;


    document.querySelector(".player-0-panel").classList.toggle('active');

    document.querySelector(".player-1-panel").classList.toggle('active');


    document.querySelector("#dice-1").style.display = 'none';
    document.querySelector("#dice-2").style.display = 'none';
    
}
