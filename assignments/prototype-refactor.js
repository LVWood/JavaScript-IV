/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor (attributes) {
        this.createdAt = attributes.createdAt;
        this.name = attributes.name;
        this.dimensions = attributes.dimensions
    }  
    destroy() {
        return `${this.name} was removed from the game.`
      };     
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  class CharacterStats extends GameObject {
    constructor(statAttributes) {
        super(statAttributes);
        this.healthPoints = statAttributes.healthPoints;
      }
    takeDamage() {
        return `${this.name} took damage.`
      };
  }
    
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
 class Humanoid extends CharacterStats {
    constructor (humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team;
        this.weapons = humanoidAttributes.weapons;
        this.language = humanoidAttributes.language;
      } 
    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
      };
    attack(attacker, defender) {
        if (attacker.healthPoints <= 10) {
          return attacker.destroy();
      } else if (attacker.healthPoints >= 10) {
          return defender.takeDamage();
        }
      };
 }
    
  ///////////// STRETCH ////////////////////////
  // Hero
  class Hero extends Humanoid {
    constructor(heroAttributes) {
        super(heroAttributes);
        this.superPower = heroAttributes.superPower;
        this.quest = heroAttributes.quest;
      }
    credo() {
        return `${this.name} was born to great purpose: to ${this.quest}.`
      };
    battle(opponent) {
        if (opponent.healthPoints < 6 && opponent.healthPoints > 0) {
          return opponent.takeDamage();
        } else if (opponent.healthPoints < 0) {
          return opponent.destroy();
        } else {
          return `${opponent.name} will not be vanquished!`;
        }
      };
  }
    
  // Villain
  class Villain extends Humanoid {
    constructor(villainAttributes) {
        super(villainAttributes);
        this.motivator = villainAttributes.motivator;
        this.weakness = villainAttributes.weakness;
      }
    backstory() {
        return `${this.name}'s heart was turned to stone by ${this.motivator}.`
      }
    vanquished(opponent) {
        if (this.healthPoints < opponent.healthPoints) {
          return this.takeDamage();
        } else if (this.healthpoints > opponent.healthPoints) {
          return opponent.takeDamage();
        } else {
          return `The battle between ${this.name} and the noble ${opponent.name} is a draw.`;
        }
      };
  }
  
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  //////////////////////// STRETCH ////////////
  // new hero & villain objects
  
    const ladyAnthrax = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Zoot',
      team: 'The Round Table',
      weapons: [
        'Charm',
        'Whip',
      ],
      language: 'Common Tongue',
      superPower: 'looking on the bright side',
      quest: 'explore the world'
    });
  
    const oldKnight = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 3,
      },
      healthPoints: 9,
      name: 'Garin of Beaucaire',
      team: 'Old farts',
      weapons: [
        'Bad Temper',
        'Money',
      ],
      language: 'Common Tongue',
      motivator: 'money and power',
      weakness: 'his gout'
    });
  
    // console.log(mage.createdAt); // Today's date
    // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    // console.log(swordsman.healthPoints); // 15
    // console.log(mage.name); // Bruce
    // console.log(swordsman.team); // The Round Table
    // console.log(mage.weapons); // Staff of Shamalama
    // console.log(archer.language); // Elvish
    // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    // console.log(mage.takeDamage()); // Bruce took damage.
    // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
    // console.log('STRETCH LOGS BEGIN HERE');
    // console.log(ladyAnthrax.superPower);
    // console.log(oldKnight.vanquished(swordsman));
    // console.log(ladyAnthrax.credo());
    // console.log(oldKnight.backstory())
    // console.log(ladyAnthrax.battle(mage));
    // console.log(oldKnight.vanquished(archer));
    // console.log(ladyAnthrax.battle(oldKnight));
    // console.log(archer.attack(archer, mage));
    // console.log(oldKnight.attack(oldKnight, ladyAnthrax));
  