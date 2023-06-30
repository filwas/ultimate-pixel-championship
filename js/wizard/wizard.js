import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { bigButtonMaker } from '../components/bigButtonMaker.js';
import { progressMaker } from '../components/progressMaker.js';
import { characterData } from './steps/choose-fighter-step/characterData.js';

export const initWizard = (index = 0) => {
   let proceedButtonProps = {
      type: 'proceed',
      text: index == 0 ? 'Choose fighter!' : 'Continue',
      onClick: nextWizardStep,
   };
   let button = bigButtonMaker(proceedButtonProps);
   // I keep steps in the array, so Im able to navigate through
   const steps = [chooseFighterStep(), bookingDetailsStep(), bookingConfirmationStep()];

   // I need to monitor which step is active. You can change value to see how step changes. Try 2 for example.
   const currentStepIndex = index;

   // I need to know max steps amount, to prevent going to far
   const maxSteps = steps.length;

   const wizardWrapper = document.createElement('div');
   wizardWrapper.append(progressMaker({ index }));
   wizardWrapper.classList.add('genericScreenStyle');
   wizardWrapper.id = 'wizardWrapper';

   // I displaying only active step in my HTML
   wizardWrapper.append(steps[currentStepIndex]);

   wizardWrapper.append(button);

   function nextWizardStep() {
      let characterName =
         characterData[wizardWrapper.childNodes[1].getAttribute('characterIndex')].name;
      console.log(characterName);
      let wizardScreen = wizardWrapper.parentElement;
      wizardWrapper.remove();
      wizardScreen.append(initWizard((index + 1) % 3)); // modulo 3 in this step cicles back to choose-fighter-step
   }
   return wizardWrapper;
};
