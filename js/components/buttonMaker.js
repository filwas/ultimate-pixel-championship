/**
 * Creates a button of a generic type.
 * @param {object} props - The properties of the big button.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {string} props.background - The background color of the button.
 * @param {string} props.backgroundImage - The background image of the button.
 * @param {string} props.width - The width of the button.
 * @param {string} props.height - The height of the button.
 * @param {string} props.fontSize - The font size of the button's text.
 * @param {string} props.fontColor - The font color of the button's text.
 * @param {void} props.onClick - Function to be executed on clicking the button.
 * @returns {HTMLElement} - The generated button element.
 */
export function buttonMaker(props) {
   let button = document.createElement('button');

   button.style.background = props.background;
   button.style.backgroundImage = props.backgroundImage;
   button.style.width = props.width;
   button.style.height = props.height;
   button.style.fontSize = props.fontSize;
   button.style.color = props.fontColor;
   button.style.border = 'none';
   button.textContent = props.text;

   button.addEventListener('click', props.onClick);

   return button;
}
/**
 * Creates a button of the BIG type.
 * @param {object} props - The properties of the big button.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {string} props.background - The background color of the button.
 * @param {string} props.fontColor - The color of the text.
 * @param {void} props.onClick - Function to be executed on clicking the button.
 * @returns {HTMLElement} - The generated button element.
 */
export function bigButtonMaker(props) {
   let button = buttonMaker({
      text: props.text,
      background: props.background,
      backgroundImage: 'url(assets/buttonFrame.svg)',
      width: '263px',
      height: '64px',
      fontSize: '21px',
      fontColor: props.fontColor,
      onClick: props.onClick,
   });

   button.classList.add('bigText');

   return button;
}

/**
 * Creates a button of the arrow type.
 * @param {object} props - The properties of the arrow button.
 * @param {string} props.direction - Allows to create a "left" or "right" arrow button.
 * @param {void} props.onClick - Function to be executed on clicking the button.
 * @returns {HTMLElement} - The generated button element.
 */
export function arrowButtonMaker(props) {
   if (props.direction !== 'left' && props.direction !== 'right') {
      throw new Error('Invalid input type. Only "left" and "right" arrows are allowed.');
   }
   let button = buttonMaker({
      width: '61px',
      height: '60px',
      onClick: props.onClick,
   });

   button.classList.add('arrowButton');

   if (props.direction == 'left') {
      button.style.backgroundImage = 'url(assets/buttonPrev.svg)';
      button.style.left = '0%';
      button.id = 'left';
   } else {
      button.style.backgroundImage = 'url(assets/buttonNext.svg)';
      button.style.right = '0%';
      button.id = 'right';
   }

   return button;
}
