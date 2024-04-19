
const playerScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const playerResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const buttons = document.querySelector(".buttons");
const computerSelection = ["Rock", "Paper", "Scissor"];
let playerCard = 0;
let computerCard = 0;
let playerSelection;



// Make short and put in one function players selections + result of play + scores update + reset


// Reset scores.
function reset() {
    playerCard = 0;
    computerCard = 0;
    plScore.innerHTML = "0";
    coScore.innerHTML = "0";
}


//Open alert box. Designed and positioned on the page.
function customAlert() {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="ok()">Play Again</button>';
}

//Ok button in alert box. This button will turn the page to initial version
function ok() {
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
    presult.innerHTML = "";
    cresult.innerHTML = ""
}
