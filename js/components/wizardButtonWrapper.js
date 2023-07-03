import { CharacterDataObject } from '../hard data/characterData.js';
import { initWizard } from '../wizard/wizard.js';
import { bigButtonMaker } from './buttonMaker.js';
/**
 * Creates the buttons for the wizard.
 * @param {object} props - The properties of the button wrapper.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {CharacterDataObject} props.characterObject - Current chosen character.
 * @returns {HTMLElement} - The generated wizard buttons element.
 */
export function wizardButtonWrapper(props) {
   let buttonWrapper = document.createElement('div');
   buttonWrapper.id = 'wizardButtonWrapper';

   let orangeProps = {
      text: '',
      background: '#DA8B14',
      onClick: genericClick,
   };

   switch (props.wizardStep) {
      case 0:
         orangeProps.text = 'Choose fighter!';
         break;

      case 1:
         buttonWrapper.style.marginTop = '53px';
         orangeProps.text = 'Submit';
         orangeProps.onClick = submitClick;

         let backButton = bigButtonMaker({
            text: 'Back',
            background: '#2B1F1F',
            fontColor: '#FFFFFF',
            onClick: genericClick,
         });
         backButton.style.marginTop = '16px';

         backButton.setAttribute('type', 'back');
         buttonWrapper.append(backButton);

         break;

      case 2:
         orangeProps.text = 'Submit another fighter';
         break;

      default:
         break;
   }

   let proceedButton = bigButtonMaker(orangeProps);

   proceedButton.setAttribute('type', 'proceed');

   function genericClick(event) {
      let wizardWrapper = buttonWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      let increment = event.target.getAttribute('type') == 'proceed' ? 1 : -1;

      let newWizardStep = (props.wizardStep + increment) % 3;
      wizardScreenWrapper.append(
         initWizard({
            wizardStep: newWizardStep,
            characterObject: props.characterObject,
            formData: null,
         }),
      );

      wizardWrapper.remove();
   }

   function submitClick() {
      let wizardWrapper = buttonWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;
      let form = wizardWrapper.childNodes[1].firstChild;

      let formData = new FormData(form);

      wizardScreenWrapper.append(
         initWizard({
            wizardStep: 2,
            characterObject: props.characterObject,
            formData: formData,
         }),
      );

      wizardWrapper.remove();
   }

   buttonWrapper.prepend(proceedButton);

   return buttonWrapper;
}
