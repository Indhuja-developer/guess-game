const hidenumber= document.querySelector(".hide-num");
const inputbox = document.querySelector(".input-number");
const chkbutton = document.querySelector(".btn-check");
const score = document.querySelector(".score");
const highscore = document.querySelector(".high-score");
const message = document.querySelector(".message")
const play = document.querySelector(".play-again")


//GAME VARIABLES

let generatenumber;
let totalscore;
let maxscore = 0;

// function to initialize / reset the game

function initGame(){
    generatenumber = Math.trunc(Math.random()*20)+1;
    totalscore=20;
    score.textContent=totalscore;
    hidenumber.textContent="?"; // initially hide the number
    hidenumber.style.width='0%'; // hide the number visually
    message.textContent='start Guessing......'; // initial message
}

//initialize the game when the page loads
initGame();

//function to handle the guess

function guess() {
    let userGuess = Number(inputbox.value);

    // Check if the input is valid
    if (!userGuess) {
        message.textContent = "Please enter a number.";
        return;
    }

    // Check if the guess is correct
    if (userGuess === generatenumber) {
        hidenumber.textContent = generatenumber;
        hidenumber.style.width = '25%';
        hidenumber.style.color='#fff';
        hidenumber.style.transition = 'all 0.5s ease-in';
        message.textContent = "Congratulations! You've won the game :)";
        // Update highscore if necessary
        if (totalscore > maxscore) {
            maxscore = totalscore;
            highscore.textContent = maxscore;
        }
    } else {
        // Decrease score if guess is incorrect
        if (totalscore > 1) {
            totalscore--;
            score.textContent = totalscore;
            message.textContent = userGuess > generatenumber ? "Too high!" : "Too low!";
        } else {
            message.textContent = "You've lost the game.";
            score.textContent = 0;
        }
    }
}

// Add event listener to the check button
chkbutton.addEventListener('click', guess);

// Add event listener to the play again button
play.addEventListener('click', initGame);

play.addEventListener('click', clear);

function clear(){
    inputbox.value="";
    hidenumber.style.color="#000";

}






    


