
function game(playerSelection){
    let text = document.querySelector("#messages");
    let playerWins = document.querySelector("#player");
    let computerWins = document.querySelector("#computer");
    let playerScore = Number(playerWins.textContent);
    let computerScore = Number(computerWins.textContent);
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = randomChoose();
    if (computerSelection === playerSelection && (playerScore < 5 && computerScore < 5)){
        text.textContent = "Tie";
    }
    else if (playerScore < 5 && computerScore < 5){
        switch(playerSelection){
            case "rock":
                if (computerSelection === "scissors"){
                    text.textContent = "You win!";
                    playerScore++;
                    break;
                }
                text.textContent = "You lose!";
                computerScore++;
                break;
            case "paper":
                if (computerSelection === "rock"){
                    text.textContent = "You win!";
                    playerScore++;
                    break;
                }
                text.textContent = "You lose!";
                computerScore++;
                break;
            case "scissors":
                if (computerSelection === "paper"){
                    text.textContent = "You win!";
                    playerScore++;
                    break;
                }
                text.textContent = "You lose!";
                computerScore++;
                break;
        }
        playerWins.textContent = playerScore.toString();
        computerWins.textContent = computerScore.toString();            
        
    }
    
    if (computerScore == 5){
        text.textContent = "Computer Wins!";
    }
    else if(playerScore == 5){
        text.textContent = "Player Wins!";
    }
    }
    
function randomChoose(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0){
        return "rock";
    } 
    else if (randomNumber == 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function main(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach(function(button){
    button.addEventListener("click", function(){
        game(button.textContent);
    })
})
}

main();





