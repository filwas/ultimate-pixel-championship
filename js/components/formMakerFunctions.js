import { characterData } from './characterData.js';

/**
 * Creates the input bar.
 * @param {object} props - The properties of input bar.
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

/**
 * Creates the building block of a form.
 * @param {object} props - The properties of the form block.
 * @param {string} props.blockName - info to be displayed on top
 * @param {string} props.blockType - Allowed types: "charName", "userName", "email"
 * @param {number} props.characterIndex - Needed in case of type = charName
 * @returns {HTMLDivElement}
 */
export function formElementMaker(props) {
   let allowedTypes = ['userName', 'charName', 'email'];

   if (!allowedTypes.includes(props.blockType)) {
      throw new Error(`Invalid input type. Allowed form types are: ${allowedTypes}.`);
   }

   let formElement = document.createElement('div');
   formElement.style.display = 'grid';
   formElement.style.fontSize = '12px';
   formElement.classList.add('smallText');
   formElement.classList.add('formStyle');

   let blockName = document.createElement('span');
   blockName.textContent = props.blockName;

   let blockEssence;

   switch (props.blockType) {
      case 'charName':
         blockEssence = document.createElement('span');
         blockEssence.textContent = characterData[props.characterIndex].name;
         blockEssence.classList.add('bigText');
         blockEssence.style.fontSize = '30px';
         break;

      case 'userName':
         blockEssence = inputMaker({ type: 'text' });
         break;

      case 'email':
         blockEssence = inputMaker({ type: 'email' });
         break;

      default:
         break;
   }

   formElement.append(blockName);
   formElement.append(blockEssence);

   return formElement;
}
