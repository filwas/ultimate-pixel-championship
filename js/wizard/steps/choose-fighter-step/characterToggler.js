/**
 * This function has all of the data required to display the fighter hard-coded. *
 * @param {int} i - Fighter's index, which is circular.
 * @returns {object} Returns an object containing the fighter.
 */
export const characterToggler = (i) => {
   i--;
   i = i % 6;
   let names = ['Annoyed Karen', 'Mad Suzie', 'Jenny Wick', 'Purple Pie', 'Pale Lara', 'Ivy Irene'];

   let src = ['assets/characters/annoyedKaren.svg'];
   let hp = [67, 78, 55, 80, 60, 70];
   let minAtk = [14, 12, 22, 9, 15, 10];
   let maxAtk = [18, 18, 24, 12, 16, 14];
   let special = [
      'Passive Aggressiveness',
      'Fist Punch',
      'Pencil Stab',
      'Roasting',
      'Bleach Splash',
      'Potion Pill',
   ];
   let weakness = [
      'Logical thinking',
      'Pink color',
      'Contrast',
      'Sunscreen',
      'Candy Cotton',
      'Broccoli',
   ];
   return {
      name: names[i],
      //I probably spent more time figuring out how to make the src from the name, than I would just writing them all down... ;P
      src:
         'assets/characters/' +
         names[i][0].toLowerCase() +
         names[i].slice(1).replace(/\s/, '') +
         '.svg',
      hp: hp[i],
      minAtk: minAtk[i],
      maxAtk: maxAtk[i],
      special: special[i],
      weakness: weakness[i],
   };
};
