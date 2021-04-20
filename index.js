function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Pick and write rock, paper or scissors ").toLowerCase();
        let computerSelection = randomChoose();
        if (computerSelection === playerSelection){
            console.log("Tie");
        }
        else{
            switch(playerSelection){
                case "rock":
                    if (computerSelection === "scissors"){
                        console.log("You win!");
                        playerWins++;
                        break;
                    }
                    console.log("You lose!");
                    computerWins++;
                    break;
                case "paper":
                    if (computerSelection === "rock"){
                        console.log("You win!");
                        playerWins++;
                        break;
                    }
                    console.log("You lose!");
                    computerWins++;
                    break;
                case "scissors":
                    if (computerSelection === "paper"){
                        console.log("You win!");
                        playerWins++;
                        break;
                    }
                    console.log("You lose!");
                    computerWins++;
                    break;
    
            }
        }
        console.log("Computer: " + computerWins + " Player: " + playerWins);
        
    }
    if (computerWins > playerWins){
        console.log("Computer Wins!");
    }
    else if (playerWins > computerWins){
        console.log("Player Wins!");
    }
    else{
        console.log("It´s a tie!");
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

game();