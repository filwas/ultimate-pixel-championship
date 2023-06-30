/**
 * Creates a button of a specific type.
 * @param {object} props - The properties of the big button.
 * @param {string} props.type - The type of button ("proceed", "back").
 * @param {string} props.text - The text to be displayed on the button.
 * @param {void} props.onClick - Function to be executed on clicking the button.
 * @returns {HTMLElement} - The generated button element.
 * @throws {Error} - Throws an error if the type is not "proceed" or "back".
 */

export function bigButtonMaker(props) {
   const type = props.type;
   const text = props.text;

   if (type !== 'proceed' && type !== 'back') {
      throw new Error('Invalid button type. Only "proceed" or "back" are allowed.');
   }

   let button = document.createElement('button');
   button.classList.add('bigText');

   button.style.background = type == 'proceed' ? '#DA8B14' : '#2B1F1F';
   button.style.backgroundImage = 'url(../assets/buttonFrame.svg)';
   button.style.width = '263px';
   button.style.height = '64px';
   button.style.fontSize = '21px';
   button.textContent = text;

   button.addEventListener('click', props.onClick);
   return button;
}
