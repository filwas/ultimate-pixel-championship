import { formElementMaker } from '../../../components/formMakerFunctions.js';

/**
 * Function that creates the step that includes a form.
 * @param {number} characterIndex - Character chosen by the user.
 * @returns {HTMLElement} - Wrapper containing the form.
 */
export const bookingDetailsStep = (characterIndex) => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('genericScreenStyle');
   bookingDetailsStepWrapper.id = 'bookingDetailsStepWrapper';
   bookingDetailsStepWrapper.style.marginTop = '65px';

   let formWrapper = document.createElement('form');

   let charNameElement = formElementMaker({
      blockName: 'CHOSEN FIGHTER',
      blockType: 'charName',
      characterIndex: characterIndex,
   });
   let userNameElement = formElementMaker({
      blockName: 'COMMANDER',
      blockType: 'userName',
   });
   let emailElement = formElementMaker({
      blockName: 'EMAIL',
      blockType: 'email',
   });

   formWrapper.style.display = 'grid';
   formWrapper.style.height = '263px';
   formWrapper.style.alignItems = 'end';

   formWrapper.appendChild(charNameElement);
   formWrapper.appendChild(userNameElement);
   formWrapper.appendChild(emailElement);

   bookingDetailsStepWrapper.append(formWrapper);
   return bookingDetailsStepWrapper;
};
