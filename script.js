const playerOneName = document.querySelector('.player-one');
const playerTwoName = document.querySelector('.player-two');
const diceOne = document.querySelector('.dice-one');
const diceTwo = document.querySelector('.dice-two');
const editBtn = document.querySelector('.edit-name');
const startBtn = document.querySelector('.play');
const result = document.querySelector('.header h1');



const editNames = () => {
    const newNameOne = prompt('Set name for Player One', 'Player One');
    playerOneName.textContent = newNameOne;
    const newNameTwo = prompt('Set name for Player Two', 'Player Two');
    playerTwoName.textContent = newNameTwo;
};

const startGame = () => {
    setTimeout(() => {
        const numberDiceOne = Math.floor(Math.random()*6+1);
        const numberDiceTwo = Math.floor(Math.random()*6+1);
        diceOne.textContent = numberDiceOne;
        diceTwo.textContent = numberDiceTwo;

        if (numberDiceOne > numberDiceTwo) {
            result.textContent = `${playerOneName.textContent} wins!`
        } else if (numberDiceTwo > numberDiceOne) {
            result.textContent = `${playerTwoName.textContent} wins!`
        } else {
            result.textContent = 'Draw!'
        }
    }, 1000)
};


editBtn.addEventListener('click', editNames);
startBtn.addEventListener('click', startGame);