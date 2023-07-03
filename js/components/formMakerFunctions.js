import { CharacterDataObject } from '../hard data/characterData.js';

/**
 * Creates the input bar.
 * @param {object} props - The properties of input bar.
 * @param {string} props.type - Can be of text, email or hidden.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.id - The id of the input field.
 * @returns {HTMLInputElement} - The generated input element.
 * @throws {Error} - Throws an error if the type is not "text", "email" or "hidden.".
 */
export function inputMaker(props) {
   const type = props.type;

   if (type !== 'text' && type !== 'email' && type !== 'hidden') {
      throw new Error('Invalid input type. Only "text", "email" and "hidden" are allowed.');
   }

   let input = document.createElement('input');
   input.classList.add('bigText');
   input.classList.add('inputStyle');
   input.type = type;
   //in case of no name, uses type as name
   input.name = props.name ? props.name : type;
   //in case of no id, tries to use name, and then tries to use type
   input.id = props.id ? props.id : props.name ? props.name : type;
   input.placeholder = 'Your ' + input.name;

   return input;
}

/**
 * Creates the building block of a form.
 * @param {object} props - The properties of the form block.
 * @param {string} props.blockName - info to be displayed on top
 * @param {string} props.blockType - Allowed types: "charName", "userName", "email"
 * @param {CharacterDataObject} props.characterObject - Needed in case of type = charName
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

   let blockName = document.createElement('label');
   blockName.setAttribute('for', props.blockType);
   blockName.textContent = props.blockName;

   let blockEssence;

   switch (props.blockType) {
      case 'charName':
         blockEssence = document.createElement('div');
         blockEssence.textContent = props.characterObject.name;
         blockEssence.classList.add('bigText');
         blockEssence.style.fontSize = '30px';

         let hiddenInput = inputMaker({ type: 'hidden', name: 'charName' });
         hiddenInput.value = props.characterObject.name;
         // if we'd rather pass on the whole character object in the form, we could do it like this:
         //hiddenInput.value = JSON.stringify(props.characterObject)
         blockEssence.appendChild(hiddenInput);
         break;

      case 'userName':
         blockEssence = inputMaker({ type: 'text', name: 'userName' });
         blockEssence.placeholder = 'Your name';
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
