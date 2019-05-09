/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


"use strict"

class GameObject {
constructor  (attr){
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
}

destroy () {
  return (`${this.name} was removed from the game`)
}
}

/*
  === CharacterStats ===
  11* healthPoints
  11* takeDamage() // prototype method -> returns the string '<object name> took damage.'
  11* should inherit destroy() from GameObject's prototype
*/

// class CharacterStats extends GameObject {
//     constructor ({healthPoints, createdAt, name, dimensions}) {
//         super ({createdAt, name, dimensions});
//   this.healthPoints = healthPoints;
//     }
class CharacterStats extends GameObject {
    constructor (attribute) {
        super (attribute);
  this.healthPoints = attribute.healthPoints;
    }

takeDamage (){
  return (`${this.name} took damage`)
}
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
 11 * team
 11 * weapons
  11* language
  11* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  *111 should inherit destroy() from GameObject through CharacterStats
  1111* should inherit takeDamage() from CharacterStats
*/

class Humanoid extends CharacterStats{
    constructor  (attr) {
        super  (attr);
  this.team = attr.team;
  this.weapons = attr.weapons;
  this.language = attr.language;
    }
greet () {
  return (`${this.team} offers a greeting in ${this.language}`)
}
}
 
/*
  *111 Inheritance chain: GameObject -> CharacterStats -> Humanoid
  *111 Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * 111Instances of CharacterStats should have all of the same properties as GameObject.
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

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

  function Villain (attr) {
    this.evilPower = attr.evilPower;
    this.menacingLaugh = attr.menacingLaugh;
    Humanoid.call(this, attr)
  }

  Villain.prototype = Object.create(Humanoid.prototype)

  function Hero(attr) {
    this.heroPower = attr.heroPower;
    this.heartWarmingLaugh = attr.heartWarmingLaugh;
    Villain.call(this, attr)
  }

  Hero.prototype = Object.create(Villain.prototype)


  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;


  // * Create two new objects, one a villain and one a hero and fight it out with methods!