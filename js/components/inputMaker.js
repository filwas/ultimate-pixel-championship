/**
 * Creates the input bar.
 * @param {object} props - The properties of progress bar.
 * @param {string} props.type - Can be of text or email.
 * @returns {HTMLInputElement} - The generated input element.
 * @throws {Error} - Throws an error if the type is not "text" or "email".
 */
export function inputMaker(props) {
   const type = props.type;

   if (type !== 'text' && type !== 'email') {
      throw new Error('Invalid input type. Only "text" and "email" are allowed.');
   }

   let input = document.createElement('input');
   input.classList.add('bigText');
   input.classList.add('inputStyle');
   input.type = type;
   input.placeholder = 'Your ' + (type == 'text' ? 'name' : 'email');

   return input;
}
