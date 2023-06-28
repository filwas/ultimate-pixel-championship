/**
 * Creates a button of a specific type.
 * @param {string} type - The type of button ("begin", "choose", "leftArrow", "rightArrow").
 * @returns {HTMLElement} - The generated button element.
 * @throws {Error} - Throws an error if the type is not "begin", "choose", "leftArrow" or "rightArrow".
 */

export function buttonMaker(type) {
   if (type !== 'begin' && type !== 'choose' && type !== 'leftArrow' && type !== 'rightArrow') {
      throw new Error(
         'Invalid button type. Only "begin", "choose", "leftArrow" or "rightArrow" are allowed.',
      );
   }

   let button = document.createElement('button');
   let buttonImg = document.createElement('img');
   button.appendChild(buttonImg);

   switch (type) {
      case 'begin':
         buttonImg.src = 'assets/buttonBegin.svg';
         break;
      case 'choose':
         buttonImg.src = 'assets/buttonChoose.svg';
         break;
      case 'leftArrow':
         buttonImg.src = 'assets/buttonNext.svg';
         button.style.transform = 'rotate(180deg)';
         break;
      case 'rightArrow':
         buttonImg.src = 'assets/buttonNext.svg';
         break;
      default:
         break;
   }

   button.style.background = 'transparent';

   return button;
}
