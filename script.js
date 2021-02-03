const playerOneName = document.querySelector('.player-one');
const playerTwoName = document.querySelector('.player-two');
const diceOne = document.querySelector('.dice-one');
const diceTwo = document.querySelector('.dice-two');
const diceImg1 = document.getElementById('dice-img1');
const diceImg2 = document.getElementById('dice-img2');
const editBtn = document.querySelector('.edit-name');
const startBtn = document.querySelector('.play');
const result = document.querySelector('.header h1');

const resultName1 = document.querySelector('.one');
const resultName2 = document.querySelector('.two');
const results1 = document.querySelector('.results1');
const results2 = document.querySelector('.results2');
const results3 = document.querySelector('.results3');
let wins1 = 0;
let wins2 = 0;
let draws = 0;

const editNames = () => {
    const newNameOne = prompt('Set name for Player One', 'Player One');
    playerOneName.textContent = newNameOne;
    resultName1.textContent = newNameOne;
    const newNameTwo = prompt('Set name for Player Two', 'Player Two');
    playerTwoName.textContent = newNameTwo;
    resultName2.textContent = newNameTwo;
};

const startGame = () => {
    diceImg1.classList.add('active');
    diceImg2.classList.add('active');

    setTimeout(() => {
        const numberDiceOne = Math.floor(Math.random()*6+1);
        const numberDiceTwo = Math.floor(Math.random()*6+1);

        diceImg1.setAttribute('src', `images/${numberDiceOne}.png`);
        diceImg2.setAttribute('src', `images/${numberDiceTwo}.png`);

        if (numberDiceOne > numberDiceTwo) {
            result.textContent = `${playerOneName.textContent} wins!`
            wins1++;
            results1.innerHTML = wins1;
        } else if (numberDiceTwo > numberDiceOne) {
            result.textContent = `${playerTwoName.textContent} wins!`
            wins2++;
            results2.innerHTML = wins2;
        } else {
            result.textContent = 'Draw!'
            draws++;
            results3.textContent = draws;
        };
    }, 1500);
};

const resultsTable = () => {

};


editBtn.addEventListener('click', editNames);
startBtn.addEventListener('click', startGame);