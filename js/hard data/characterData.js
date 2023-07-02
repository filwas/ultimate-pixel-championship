const characterData = [
   {
      name: 'Annoyed Karen',
      src: 'assets/characters/annoyedKaren.svg',
      hp: 67,
      minAtk: 14,
      maxAtk: 18,
      special: 'Passive Aggressiveness',
      weakness: 'Logical thinking',
   },
   {
      name: 'Mad Suzie',
      src: 'assets/characters/madSuzie.svg',
      hp: 78,
      minAtk: 12,
      maxAtk: 18,
      special: 'Fist Punch',
      weakness: 'Pink color',
   },
   {
      name: 'Jenny Wick',
      src: 'assets/characters/jennyWick.svg',
      hp: 55,
      minAtk: 22,
      maxAtk: 24,
      special: 'Pencil Stab',
      weakness: 'Contrast',
   },
   {
      name: 'Purple Pie',
      src: 'assets/characters/purplePie.svg',
      hp: 80,
      minAtk: 9,
      maxAtk: 12,
      special: 'Roasting',
      weakness: 'Sunscreen',
   },
   {
      name: 'Pale Lara',
      src: 'assets/characters/paleLara.svg',
      hp: 60,
      minAtk: 15,
      maxAtk: 16,
      special: 'Bleach Splash',
      weakness: 'Candy Cotton',
   },
   {
      name: 'Ivy Irene',
      src: 'assets/characters/ivyIrene.svg',
      hp: 70,
      minAtk: 10,
      maxAtk: 14,
      special: 'Potion Pill',
      weakness: 'Broccoli',
   },
];

/**
 * @class {Object} CharacterDataObject
 * @property {string} name - Character's name.
 * @property {string} src - URL for the character's image.
 * @property {number} hp - Character's max health points.
 * @property {number} minAtk - Character's minimum atack value.
 * @property {number} maxAtk - Character's maximum atack value.
 * @property {string} special - Character's special attack name.
 * @property {string} weakness - Character's weakness.
 */
export class CharacterDataObject {
   constructor(name, src, hp, minAtk, maxAtk, special, weakness) {
      this.name = name;
      this.src = src;
      this.hp = hp;
      this.minAtk = minAtk;
      this.maxAtk = maxAtk;
      this.special = special;
      this.weakness = weakness;
   }
}

export const characters = characterData.map((character) => {
   return new CharacterDataObject(
      character.name,
      character.src,
      character.hp,
      character.minAtk,
      character.maxAtk,
      character.special,
      character.weakness,
   );
});
