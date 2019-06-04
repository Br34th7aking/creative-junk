const welcomeScreen = document.querySelector('.welcome-screen');
const startButton = document.querySelector('.start-button');
const gameScreen = document.querySelector('.game-screen');
let playerNameInput = document.querySelector('.player-name');



// doors 
const doors = document.querySelectorAll('.door');

let messageScreen = document.querySelector('.message-screen');
let playerName = 'Adventurer';

startButton.addEventListener('click', () => {
    if (playerNameInput.value != "") {
            playerName = playerNameInput.value;
    }

    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block"; 
    messageScreen.innerHTML = playerName + ', you see three doors. Which one will you open?(Click your choice)'
});

for (let i = 0; i < doors.length; i++) {
        doors[i].addEventListener('click', () => {
            messageScreen.innerHTML = 'You chose to open ' + doors[i].id; 
        });
}

