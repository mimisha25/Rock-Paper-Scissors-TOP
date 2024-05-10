
const humanScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const humanResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const buttons = document.querySelector(".buttons");
let humanCard = 0;
let computerCard = 0;


const computerChoice = () => {
    const getComputerAnswer = ["Rock", "Paper", "Scissors"];
    return getComputerAnswer[Math.floor(Math.random() * 3)];
}

buttons.addEventListener("click", function (e) {
    let target = e.target.id;
    console.log(target);
    if (target === "Rock" ||
        target === "Paper" ||
        target === "Scissors"
    ) {

        let computerChoose = computerChoice();
        playRound(target, computerChoose);
        computerResult.innerHTML = `<img src="./images/computer-` + computerChoose + `.png">`;
        humanResult.innerHTML = `<img src="./images/human-` + target + `.png">`;

    }
})

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper" ||
        humanChoice === "Paper" && computerChoice === "Scissors" ||
        humanChoice === "Scissors" && computerChoice === "Rock") {
        computerCard++;

        computerScore.innerText = computerCard;
    } else if (humanChoice === computerChoice) {
        console.log("It's a Tie!!!");
    } else {
        humanCard++;
        humanScore.innerText = humanCard;
    }
    playGame();
}

function playGame() {
    if (computerCard === 5 || humanCard === 5) {
        if (computerCard === 5) {
            alert("Computer is winner");
        } else if (humanCard === 5) {
            alert("human is winner");
        }
        reset();
    }

}


function reset() {
    humanCard = 0;
    computerCard = 0;
    plScore.innerHTML = "0";
    coScore.innerHTML = "0";
}

