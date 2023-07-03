import { CharacterDataObject } from '/js/hard data/characterData.js';
import { formElementMaker } from '../../../components/formMakerFunctions.js';
import { bigButtonMaker } from '../../../components/buttonMaker.js';
import { initWizard } from '../../wizard.js';

/**
 * Creates the booking-details-step.
 * @param {object} props - The properties of the wizard.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {CharacterDataObject} props.characterObject - Current chosen character.
 * @param {FormData} props.formData - Object containing form submission data.
 * @returns {HTMLElement} - The generated step.
 */
export const bookingDetailsStep = (props) => {
   const bookingDetailsStepWrapper = document.createElement('div');
   bookingDetailsStepWrapper.classList.add('genericScreenStyle');
   bookingDetailsStepWrapper.id = 'bookingDetailsStepWrapper';
   bookingDetailsStepWrapper.style.marginTop = '65px';

   let form = document.createElement('form');

   let charNameElement = formElementMaker({
      blockName: 'CHOSEN FIGHTER',
      blockType: 'charName',
      characterObject: props.characterObject,
   });
   let userNameElement = formElementMaker({
      blockName: 'COMMANDER',
      blockType: 'userName',
   });
   let emailElement = formElementMaker({
      blockName: 'EMAIL',
      blockType: 'email',
   });

   let bigOrangeButton = bigButtonMaker({
      text: 'Submit',
      background: '#DA8B14',
      onClick: wizardProceed,
   });

   let bigBackButton = bigButtonMaker({
      text: 'Back',
      background: '#2B1F1F',
      fontColor: '#FFFFFF',
      onClick: wizardProceed,
   });
   bigBackButton.style.marginTop = '16px';

   form.style.display = 'grid';
   form.style.height = '263px';
   form.style.alignItems = 'end';

   form.appendChild(charNameElement);
   form.appendChild(userNameElement);
   form.appendChild(emailElement);

   function wizardProceed(event) {
      let wizardWrapper = bookingDetailsStepWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      let formData = null;

      if (event.target.textContent == 'Submit') {
         if (!formValidator()) return;
         formData = new FormData(form);
      }

      wizardScreenWrapper.append(
         initWizard({
            wizardStep: formData ? 2 : 0,
            characterObject: props.characterObject,
            formData: formData,
         }),
      );

      wizardWrapper.remove();
   }

   function formValidator() {
      //This leviathan of an email-validating regexp function was shamelessly stolen from the Internet.
      let emailRegex = new RegExp(
         "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
      );

      let validationScore = 0;

      form.querySelectorAll('input').forEach((input) => {
         switch (input.name) {
            case 'name':
               if (input.value == '') invalidAction(input);
               break;

            case 'email':
               if (!emailRegex.test(input.value)) invalidAction(input);
               break;

            default:
               break;
         }
      });

      function invalidAction(target) {
         target.classList.add('errorInput');
         target.nextElementSibling.classList.add('errorTextOn');
         validationScore++;
      }

      return validationScore == 0 ? true : false;
   }

   bookingDetailsStepWrapper.append(form);
   bookingDetailsStepWrapper.append(bigOrangeButton);
   bookingDetailsStepWrapper.append(bigBackButton);

   return bookingDetailsStepWrapper;
};
