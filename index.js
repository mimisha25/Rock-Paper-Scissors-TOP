
const humanScore = document.querySelector(".your-score");
const computerScore = document.querySelector(".computer-score");
const humanResult = document.querySelector(".playerResult");
const computerResult = document.querySelector(".computerResult");
const buttons = document.querySelector(".buttons");
let humanCard = 0;
let computerCard = 0;


const computerChoice=()=>{
    const getComputerAnswer=["Rock", "Paper", "Scissors"];
    return getComputerAnswer[Math.floor(Math.random()*3)];
}

// Make short and put in one function players selections + result of play + scores update + reset
buttons.addEventListener("click", function (e){
    let target = e.target.id;
    console.log(target);
    if(target==="Rock"||
        target==="Paper"||
        target==="Scissors"
    ){
        let computerChoose=computerChoice();
        playRound(target, computerChoose);
        computerResult.innerHTML=`<img src="./images/computer-` + computerChoose + `.png">`;
        humanResult.innerHTML=`<img src="./images/human-` + target + `.png">`;
    }
})

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Paper" ||
       humanChoice === "Paper" && computerChoice === "Scissors" ||
       humanChoice === "Scissors" && computerChoice === "Rock" ){
        computerCard++;
        computerScore.innerText=computerCard;
    }else if(humanChoice === computerChoice){
        console.log("It's a Tie!!!");
    }else{
        humanCard++;
        humanScore.innerText=humanCard;
    }
  }

  function playGame(){
    if(computerCard === 5 || humanCard === 5){
        if(computerCard === 5){
            customAlert();
        }else if(humanCard === 5){
            customAlert();
        }
    }
    
  }

// Reset scores.
function reset() {
   humanCard = 0;
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
