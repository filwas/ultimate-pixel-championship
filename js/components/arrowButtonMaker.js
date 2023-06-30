/**
 * Creates a button of a specific type.
 * @param {object} props - The properties of the arrow button.
 * @param {string} props.type - The type of button ("left" or "right").
 * @param {int} props.index - We're passing the current fighter step index for onClick to work.
 * @returns {HTMLElement} - The generated button element.
 * @throws {Error} - Throws an error if the type is not "left" or "right".
 */

import { chooseFighterStep } from '../wizard/steps/choose-fighter-step/choose-fighter-step.js';

export function arrowButtonMaker(props) {
   const type = props.type;
   const index = props.index;

   if (type !== 'left' && type !== 'right') {
      throw new Error('Invalid button type. Only "left" and "right" are allowed.');
   }

   let button = document.createElement('button');
   if (type == 'right') {
      button.style.backgroundImage = 'url(../assets/buttonNext.svg)';
      button.style.right = '0%';
   } else {
      button.style.backgroundImage = 'url(../assets/buttonPrev.svg)';
      button.style.left = '0%';
   }
   button.classList.add('arrowButton');
   button.style.width = '61px';
   button.style.height = '60px';

   button.addEventListener('click', () => {
      const wizardWrapper = button.parentElement.parentElement;
      button.parentElement.remove();
      wizardWrapper.prepend(chooseFighterStep(type == 'right' ? index + 1 : index - 1));
   });

   return button;
}
