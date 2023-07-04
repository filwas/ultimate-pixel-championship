import { CharacterDataObject } from '/js/hard data/characterData.js';
import { bigButtonMaker } from '../../../components/buttonMaker.js';
import { initWizard } from '../../wizard.js';
import { formValidator } from './form-validation.js';
import { formAssembly } from './booking-form.js';

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

   let form = formAssembly(props);

   function wizardProceed(event) {
      let wizardWrapper = bookingDetailsStepWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      let formData = null;

      if (event.target.textContent == 'Submit') {
         if (!formValidator(form)) return;
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

   bookingDetailsStepWrapper.append(form);
   bookingDetailsStepWrapper.append(bigOrangeButton);
   bookingDetailsStepWrapper.append(bigBackButton);

   return bookingDetailsStepWrapper;
};
