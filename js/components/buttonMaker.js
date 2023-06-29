/**
 * Creates a button of a specific type.
 * @param {object} props - The properties of the button.
 * @param {string} props.type - The type of button ("proceed", "back", "leftArrow" or "rightArrow").
 * @param {string} props.text - The text to be displayed on the button.
 * @param {void} props.onClick - Function to be executed on clicking the button.
 * @returns {HTMLElement} - The generated button element.
 * @throws {Error} - Throws an error if the type is not "proceed", "back" or "leftArrow" or "rightArrow".
 */

export function buttonMaker(props) {
   const type = props.type;
   const text = props.text;

   if (type !== 'proceed' && type !== 'back' && type !== 'rightArrow' && type !== 'leftArrow') {
      throw new Error('Invalid button type. Only "proceed", "back" or "arrow" are allowed.');
   }

   let button = document.createElement('button');
   button.classList.add('bigText');
   if (type != 'leftArrow' && type != 'rightArrow') {
      button.style.background = type == 'proceed' ? '#DA8B14' : '#2B1F1F';
      button.style.backgroundImage = 'url(../assets/buttonFrame.svg)';
      button.style.width = '263px';
      button.style.height = '64px';
      button.style.fontSize = '21px';
      button.textContent = text;
   } else {
      if (type == 'rightArrow') {
         button.style.backgroundImage = 'url(../assets/buttonNext.svg)';
         button.style.right = '0%';
      } else {
         button.style.backgroundImage = 'url(../assets/buttonPrev.svg)';
         button.style.left = '0%';
      }
      button.classList.add('arrowButton');
      button.style.width = '61px';
      button.style.height = '60px';
   }

   button.addEventListener('click', props.onClick);
   return button;
}
