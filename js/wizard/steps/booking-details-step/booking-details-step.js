import { CharacterDataObject } from '/js/hard data/characterData.js';
import { inputMaker } from '../../../components/inputMaker.js';

/**
 *
 * @param {CharacterDataObject} characterObject
 * @returns
 */
export const bookingDetailsStep = (characterObject) => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('genericScreenStyle');
   bookingDetailsStepWrapper.id = 'bookingDetailsStepWrapper';
   bookingDetailsStepWrapper.style.marginTop = '65px';

   let formWrapper = document.createElement('form');
   formWrapper.classList.add('smallText');
   formWrapper.classList.add('formStyle');
   formWrapper.style.display = 'grid';
   formWrapper.style.fontSize = '12px';
   formWrapper.style.height = '263px';
   formWrapper.style.alignItems = 'end';

   let charNameWrapper = document.createElement('div');
   charNameWrapper.classList.add('formStyle');
   let nameText = document.createElement('span');
   nameText.textContent = 'CHOSEN FIGHTER\n';
   let charName = document.createElement('span');
   charName.textContent = characterObject.name;
   charName.classList.add('bigText');
   charName.style.fontSize = '30px';

   let userNameWrapper = document.createElement('div');
   userNameWrapper.classList.add('formStyle');
   let userText = document.createElement('span');
   userText.textContent = 'COMMANDER\n';
   let userInput = inputMaker({ type: 'text' });

   let userEmailWrapper = document.createElement('div');
   userEmailWrapper.classList.add('formStyle');
   let emailText = document.createElement('span');
   emailText.textContent = 'EMAIL\n';
   let emailInput = inputMaker({ type: 'email' });

   charNameWrapper.append(nameText);
   charNameWrapper.append(charName);

   userNameWrapper.append(userText);
   userNameWrapper.append(userInput);

   userEmailWrapper.append(emailText);
   userEmailWrapper.append(emailInput);

   formWrapper.appendChild(charNameWrapper);
   formWrapper.appendChild(userNameWrapper);
   formWrapper.appendChild(userEmailWrapper);

   bookingDetailsStepWrapper.append(formWrapper);
   return bookingDetailsStepWrapper;
};
