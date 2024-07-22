const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scorboard = document.querySelector(".scoreboard");
const result = document.querySelector(".result > h3");
const resetBtn = document.getElementById("reset");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let userScore = 0;
let computerScore = 0;


//Random computer weapon choice
getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
}
getComputerChoice ();

//Win, lose, draw messages
const win = (userChoice, computerChoice) => {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
}

const lose = (userChoice, computerChoice) => {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    result.innerHTML = `${computerChoice} beats ${userChoice}. You lose!`;
}

const draw = (userChoice, computerChoice) => {
    result.innerHTML = `${computerChoice} equals ${userChoice}. It's a draw!`;
}



//Define win, lose, draw
const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "scissorsrock":
        case "rockPaper":
        case "paperscissors":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    };
}

//Weapon choice eventListeners
function mainGame () {
rockBtn.addEventListener("click", function() {
    game("rock");
});

paperBtn.addEventListener("click", function() {
    game("paper");
});

scissorsBtn.addEventListener("click", function() {
    game("scissors");
});
}
mainGame();

//Reset game
resetBtn.addEventListener("click", function(){
	reset();
});

reset = () => {
	//reset scores
	userScore = 0;
	computerScore = 0;
	//resets display
	userScoreSpan.textContent = 0;
	computerScoreSpan.textContent = 0;
}