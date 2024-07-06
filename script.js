let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userSC=document.querySelector("#player");
const compSC=document.querySelector("#comp");

const genCompChoice=() => {
    const options=["rock","paper","scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=() => {
    console.log("Round draw");
    msg.innerText="game tied";
}

const showWinner=(userWin) =>{
    if(userWin){
        userScore++;
        userSC.innerText=userScore;
        console.log("you win");
        msg.innerText="Game was won";
    }
    else{
        compScore++;
        compSC.innerText=compScore;
        console.log("you lose");   
        msg.innerText="game was lost";   
    }
}

const playGame=(userChoice) => {
    console.log("User choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
    
});