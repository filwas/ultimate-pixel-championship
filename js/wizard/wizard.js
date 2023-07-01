import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { progressMaker } from '../components/progressMaker.js';
import { wizardButtonWrapper } from '../components/wizardButtonWrapper.js';
import { characterData } from '../components/characterData.js';

export const initWizard = (wizardStep = 0) => {
   const wizardWrapper = document.createElement('div');
   wizardWrapper.id = 'wizardWrapper';
   wizardWrapper.classList.add('genericScreenStyle');

   let progressBar = progressMaker({ wizardStep });

   const steps = [chooseFighterStep(), bookingDetailsStep(), bookingConfirmationStep()];

   let wizardButtons = wizardButtonWrapper({ wizardStep });

   wizardWrapper.append(progressBar);

   // I displaying only active step in my HTML
   wizardWrapper.append(steps[wizardStep]);

   wizardWrapper.append(wizardButtons);

   function nextWizardStep() {
      let characterName =
         characterData[wizardWrapper.childNodes[1].getAttribute('characterIndex')].name;
      let wizardScreen = wizardWrapper.parentElement;
      wizardWrapper.remove();
      wizardScreen.append(initWizard((wizardStep + 1) % 3)); // modulo 3 in this step cicles back to choose-fighter-step
   }
   return wizardWrapper;
};
