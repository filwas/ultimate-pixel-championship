import { initWizard } from '../wizard/wizard.js';
import { bigButtonMaker } from './buttonMaker.js';
/**
 * Creates the buttons for the wizard.
 * @param {object} props - The properties of the button wrapper.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {number} props.characterIndex - Current chosen character.
 * @returns {HTMLElement} - The generated wizard buttons element.
 */
export function wizardButtonWrapper(props) {
   let buttonWrapper = document.createElement('div');
   buttonWrapper.id = 'wizardButtonWrapper';

   let orangeText = '';

   switch (props.wizardStep) {
      case 0:
         orangeText = 'Choose fighter!';
         break;

      case 1:
         buttonWrapper.style.marginTop = '53px';
         orangeText = 'Submit';

         let backButton = bigButtonMaker({
            text: 'Back',
            background: '#2B1F1F',
            fontColor: '#FFFFFF',
            onClick: buttonClick,
         });
         backButton.style.marginTop = '16px';

         backButton.setAttribute('type', 'back');
         buttonWrapper.append(backButton);

         break;

      case 2:
         orangeText = 'Submit another fighter';
         break;

      default:
         break;
   }

   let proceedButton = bigButtonMaker({
      text: orangeText,
      background: '#DA8B14',
      onClick: buttonClick,
   });

   proceedButton.setAttribute('type', 'proceed');

   function buttonClick(event) {
      let wizardWrapper = buttonWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      let increment = event.target.getAttribute('type') == 'proceed' ? 1 : -1;

      let newWizardStep = (props.wizardStep + increment) % 3;
      wizardScreenWrapper.append(
         initWizard({
            wizardStep: newWizardStep,
            characterIndex:
               newWizardStep == 0 ? 0 : wizardScreenWrapper.getAttribute('characterIndex'),
         }),
      );
      wizardWrapper.remove();
   }

   buttonWrapper.prepend(proceedButton);

   return buttonWrapper;
}
