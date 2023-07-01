import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { progressMaker } from '../components/progressMaker.js';
import { wizardButtonWrapper } from '../components/wizardButtonWrapper.js';
/**
 * Creates the wizard.
 * @param {object} props - The properties of the wizard.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {number} props.characterIndex - Current chosen character.
 * @returns {HTMLElement} - The generated wizard.
 */
export const initWizard = (props) => {
   const wizardWrapper = document.createElement('div');
   wizardWrapper.id = 'wizardWrapper';
   wizardWrapper.classList.add('genericScreenStyle');

   let progressBar = progressMaker({ wizardStep: props.wizardStep });

   const steps = [
      chooseFighterStep(props.characterIndex),
      bookingDetailsStep(props.characterIndex),
      bookingConfirmationStep(),
   ];

   let wizardButtons = wizardButtonWrapper({
      wizardStep: props.wizardStep,
      characterIndex: props.characterIndex,
   });

   wizardWrapper.append(progressBar);

   wizardWrapper.append(steps[props.wizardStep]);

   wizardWrapper.append(wizardButtons);

   return wizardWrapper;
};
