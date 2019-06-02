# Three Door Dungeon 
# Created by: Abhijit Raj 
# Part of 45 min creative junk projects 
# June 2, 2019

import termcolor
import pyfiglet
import random


possible_rewards = ['sword', 'shield', 'golden_key', 'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing', 'Nothing']
# with a shield the player can save himself and return to the previous stage and try again.
# with a sword the player can kill the monster and advance. 
# with a golden key the player will be able to skip stages. 
# the chance of getting these items will be very low. Currently equal for each item. 

class Player:
    def __init__(self):
        self.inventory = []
    
    def has_golden_key(self):
        # if the player has golden key, return true and remove the golden key from 
        # his inventory
        if "golden_key" in self.inventory:
            self.inventory.remove("golden_key")
            return True
        
        return False
    
    def open_chest(self):
        random_num = random.randint(0, 100)
        
        reward = "Nothing"
        if random_num < 3:
            reward = possible_rewards[random_num]
            self.inventory.add(reward)
        # print a message to the user. 
        printf(f"You opened the chest. You found {reward} in the chest.")


def startGame():
    # main game code 
    player = Player()
    current_stage = 0
    game_over = False
    deaths = 0
    while not game_over:
        if current_stage >= 2:
            game_over = True
            print('Congratulations!', end = ' ')
            if deaths == 0:
                print('You finished the game without dying. You are the true champion of these dungeons!')
            else: 
                print(f"You finished the game with {deaths} deaths. I bet your GrandMa could do better!")
        try: 
            door = input("You see three doors infront of you. Pick a door, player!")
        except ValueError:
            door = input('Pick again!')

        door_possibly_contains = ['monster', 'monster', random.choice(possible_rewards)]
        
        door_contains = random.choice(door_possibly_contains)
        

        
        

startGame()
