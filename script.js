playGame()

function playGame(){
    computerPoins = 0;
    playerPoints = 0;
    i = 0;
    
    while (i < 5){
        const computerSelection = getComputerChoice();
        playerSelection = prompt("Choose your weapon!");
        playRound(playerSelection, computerSelection)
        i++
    }
    if (computerPoins > playerPoints){
        console.log("Computer Wins!")
    }else if (computerPoins === playerPoints){
        console.log("It`s a tie! Nobody wins")
    }else{
        console.log("Human Player Wins!")
    }
    console.log("End of Five Rounds!")
}


function playRound(playerSelection, computerSelection) {
    // your code here!

    if (playerSelection == "rock" && computerSelection == "Rock"){
        console.log("It's a Tie!")
    }else if(playerSelection == "rock" && computerSelection == "Paper"){
        console.log("You Lose")
        computerPoins++
    }else if (playerSelection == "rock" && computerSelection == "Scissors"){
        console.log("You Win")
        playerPoints++
    }
    if (playerSelection == "paper" && computerSelection == "Rock"){
        console.log("You Win")
        playerPoints++
    }else if(playerSelection == "paper" && computerSelection == "Paper"){
        console.log("It's a tie")
    }else if (playerSelection == "paper" && computerSelection == "Scissors"){
        console.log("You Lose")
        computerPoins++
    }
    if (playerSelection == "scissors" && computerSelection == "Rock"){
        console.log("You Lose")
        computerPoins++
    }else if(playerSelection == "scissors" && computerSelection == "Paper"){
        console.log("You Win")
        playerPoints++
    }else if (playerSelection == "scissors" && computerSelection == "Scissors"){
        console.log("It's a tie!")
    }
}

function getComputerChoice(){
    const computerAnswers = ["Rock", "Paper", "Scissors"];
    randomSelection = computerAnswers[(Math.floor(Math.random() * computerAnswers.length))];
    return randomSelection;
}
