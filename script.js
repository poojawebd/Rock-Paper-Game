let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updateScore();

document.querySelector('.js-rock').addEventListener('click',()=>{
    playGame('Rock');
});document.querySelector('.js-paper').addEventListener('click',()=>{
    playGame('Paper');
});document.querySelector('.js-scissor').addEventListener('click',()=>{
    playGame('Scissors');
});

document.body.addEventListener('keydown',(event)=>{
    if (event.key === 'r') {
        playGame('Rock');
    } else if (event.key==='p') {
        playGame('Paper');
    } else if (event.key==='s') {
        playGame('Scissors');
    } 
});


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    }


    else if (playerMove === 'Paper') {

        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        }
        else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
    }

    else if (playerMove === 'Scissors') {

        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        }
        else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }


    if (result === 'You win') {
        score.wins++;
    } else if ((result === 'You lose')) {
        score.loses++;
    } else if (result === 'Tie') {
        score.ties++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You  <img class="icon" src="img/${playerMove}-emoji.png"> <img class="icon" src="img/${computerMove}-emoji.png"> Computer`;


};

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins},Loses : ${score.loses}, Ties : ${score.ties}`;

};
function pickComputerMove() {
    const randomNum = Math.random();

    let computerMove = '';

    if (0 <= randomNum && randomNum < 1 / 3) {
        computerMove = 'Rock';
    } else if (1 / 3 <= randomNum && randomNum < 2 / 3) {
        computerMove = 'Paper';
    } else if (2 / 3 <= randomNum && randomNum < 1) {
        computerMove = 'Scissors';
    }
    return (computerMove);
}
