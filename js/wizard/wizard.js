import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { progressMaker } from '../components/progressMaker.js';
import { CharacterDataObject } from '../hard data/characterData.js';

/**
 * Creates the wizard.
 * @param {object} props - The properties of the wizard.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {CharacterDataObject} props.characterObject - Current chosen character.
 * @param {FormData} props.formData - Object containing form submission data.
 * @returns {HTMLElement} - The generated wizard.
 */
export const initWizard = (props) => {
   const wizardWrapper = document.createElement('div');
   wizardWrapper.id = 'wizardWrapper';
   wizardWrapper.classList.add('genericScreenStyle');

   let progressBar = progressMaker(props);

   const steps = [
      chooseFighterStep(props),
      bookingDetailsStep(props),
      bookingConfirmationStep(props),
   ];

   wizardWrapper.append(progressBar);

   wizardWrapper.append(steps[props.wizardStep]);

   return wizardWrapper;
};
