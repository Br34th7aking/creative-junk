### Three Door Dungeon Game 
### By: Abhijit Raj
### June 2, 2019

import random 

chest_rewards = ['a sword',
                'a shield',
                'a golden key',
                'nothing',
                'nothing',
                'nothing',
                'nothing',
                'nothing'
                ]


class Player:
    def __init__(self, name):
        self.name = name
        self.inventory = [] # the list of equipments player owns


    def add_equipment(self, equipment):
        self.inventory.append(equipment) 
    def attack(self):
        self.inventory.remove('a sword')

    def defend(self):
        self.inventory.remove('a shield')

def play_game():
    prompt = '> ' 
    name = input('Hello adventurer! Have a name?' + prompt)
    
    player = Player(name)
    game_over = False
    current_stage = 1 
    deaths = 0
    score = 0
    possible_things = ['monster', 'monster', random.choice(chest_rewards)]
    while not game_over:

        door_choice = input(f'Stage #{current_stage}: {player.name}, You see three doors. Which door do you open?{prompt}')
        while int(door_choice) > 3:
            door_choice = input(f'{player.name}, Open a door by providing a number from 1 to 3. {prompt}')
            
        found_object = random.choice(possible_things)
        print(found_object)  
        # if found object is a monster, you kill, you run or you die. 
        # if found object is a treasure, add it to the player's inventory.
        if found_object in chest_rewards:
            if found_object == "a golden key":
                current_stage += 5
                score += 500
            elif found_object == "nothing":
                print("You find nothing in this treasure chest")
                current_stage += 1
                score += 50
            else:
                print(f"Wow, that's {found_object}! It will be useful.")
                player.add_equipment(found_object)
                current_stage += 1
                score += 50

        elif found_object == "monster":
            if "a sword" in player.inventory:
                print("You kill the monster with your sword")
                player.fight()
                current_stage += 1
                score += 100
            elif "a shield" in player.inventory: 
                print("You close the door quickly")
                score += 25
            else: 
                print("You die! Time to be reborn.")
                deaths += 1
                score -= 25
                
        if current_stage >= 25:
            game_over = True


    if game_over and current_stage >= 25:
        print(f"Congratulations, {player.name}! You won the game with {deaths} deaths.")
        print(f"Your score is {score}.")


play_game()

