const welcomeScreen = document.querySelector('.welcome-screen');
const startButton = document.querySelector('.start-button');
const gameScreen = document.querySelector('.game-screen');
let playerNameInput = document.querySelector('.player-name');

let playerName = 'Adventurer';

startButton.addEventListener('click', () => {
    if (playerNameInput.value != "") {
            playerName = playerNameInput.value;
    }

    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block"; 
});
