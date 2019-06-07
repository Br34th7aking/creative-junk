const welcomeScreen = document.querySelector('.welcome-screen');
const startButton = document.querySelector('.start-button');
const gameScreen = document.querySelector('.game-screen');
const doorArea = document.querySelector('.door-area');
let playerNameInput = document.querySelector('.player-name');
const progressScreen = document.querySelector('.progress');
const inventoryScreen = document.querySelector('.inventory');
const door_rewards = ['sword', 'shield', 'monster', 'monster', 'monster', 'nothing', 'nothing', 'nothing', 'nothing']

// doors
const doors = document.querySelectorAll('.door');

let messageScreen = document.querySelector('.message-screen');
let playerName = 'Adventurer';
let stage = 1;
let lives  = 3;
let inventory = [];
let num_swords = 0;
let num_shields = 0;
let won = false;


startButton.addEventListener('click', () => {
    if (playerNameInput.value != "") {
            playerName = playerNameInput.value;
    }
    document.querySelector(".game-audio").play();
    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    messageScreen.innerHTML = playerName + ', you see three doors. Which one will you open?(Click your choice)';
    progressScreen.innerHTML = 'Stage: ' + stage + ' Lives: ' + lives;
    inventoryScreen.innerHTML = 'Inventory => Swords: ' + num_swords + ' Shields: ' + num_shields;

});
// simulating start game with enter button
document.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    if (playerNameInput.value != "") {
            playerName = playerNameInput.value;
    }

    welcomeScreen.style.display = "none";
    gameScreen.style.display = "block";
    messageScreen.innerHTML = playerName + ', you see three doors. Which one will you open?(Click your choice)';
    progressScreen.innerHTML = 'Stage: ' + stage + ' Lives: ' + lives;
    inventoryScreen.innerHTML = 'Inventory => Swords: ' + num_swords + ' Shields: ' + num_shields;
  }

});
let gameOver = false;

// while (!gameOver) {
//
//
    for (let i = 0; i < doors.length; i++) {
         doors[i].addEventListener('click', () => {
             message = 'You chose to open ' + doors[i].id + '. ';
             reward = door_rewards[Math.floor(Math.random() * door_rewards.length)];
             if (reward == "sword") {
                     message += "You found a sword. It will be useful to kill the monster.";
                     stage++;
                     num_swords++;
             }
                 else if (reward == "shield") {
                         message += "You found a shield. This will help save you from the monsters. You will get just enough time to close the door.";
                         num_shields++;
                         stage++;
                 }
                 else if (reward == "nothing") {
                         message += "You found the room to be empty. Trembling with fear, you move forward.";
                         stage++;

                 } else {
                         // face the monster
                         // check the inventory. If there is a sword, kill the monster and progress.
                         // if there is a shield, then use it to save yourself. no stage progress.
                         // if nothing, then you're dead.
                         if (num_swords > 0) {
                                 message += "You found a monster. But worry not, you use your sword to kill it. The sword gets trapped in the monster's rock hard skin. Move forward " + playerName;
                                 stage++;
                                 num_swords--;
                         } else if (num_shields > 0) {
                                 message += "You found a monster. He looks at you with his glowing red eyes in the dark. Scared shitless, you put your shield forward. The shield breaks. But before the monster's razor sharp claws can get to you, you close the door."
                                 num_shields--;
                         }
                         else {
                                 message += "Whoops!...you can feel the stench of a monster's den.You have no sword! You have no shield! And now, you have no head! Enjoy the afterlife, " + playerName;
                                 lives--;
                                 if (lives <= 0) {
                                         gameOver = true;
                                 }
                         }


                 }

                 messageScreen.innerHTML = message;
                 progressScreen.innerHTML = 'Stage: ' + stage + ' Lives: ' + lives;
                 inventoryScreen.innerHTML = 'Inventory => Swords: ' + num_swords + ' Shields: ' + num_shields;

                 if (stage == 30) {
                         won = true;
                         gameOver = true;
                 }
               // gameOver = true;
               // }
               // //
               // //
               if (gameOver) {
                 if (won) {
                 messageScreen.innerHTML = "Bravo, " + playerName + ". You have cleared the dungeon. Stories of this day will be told. Of your amazing escape from the monsters. But be ready, the world will soon need saving... (*cough*)...in my next game. Till then, farewell, my friend!";
               } else {
                 if (stage < 5) {
                         messageScreen.innerHTML = "Seriously? Your Great Grandmother will be proud of you!!!";
                 } else if (stage < 10) {
                     messageScreen.innerHTML = "Okay Amateur! May be gaming is not your thing.";
                 } else if (stage < 15) {
                     messageScreen.innerHTML = "Noob! You can do better with a few tries.";
                 } else if (stage < 20) {
                     messageScreen.innerHTML = "Hmm, I can see some improvement here. Another try may be?";
                 } else if (stage < 25) {
                     messageScreen.innerHTML = "Wow, you're turning into a pro here. Keep at it and you'll make it through the dungeon.";
                 } else {
                     messageScreen.innerHTML = "So close, yet so far! I bet you can do it next time! ";
                 }

               }
               doorArea.style.display = 'none';
             }
         });

    }
