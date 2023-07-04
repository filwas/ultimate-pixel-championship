import { bigButtonMaker } from '../../../components/buttonMaker.js';
import { characters } from '../../../hard data/characterData.js';

/**
 * Creates the booking-confirmation-step.
 * @param {object} props - The properties of the wizard.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {CharacterDataObject} props.characterObject - Current chosen character.
 * @param {FormData} props.formData - Object containing form submission data.
 * @returns {HTMLElement} - The generated step.
 */
export const bookingConfirmationStep = (props) => {
   const bookingConfirmationStepWrapper = document.createElement('div');
   bookingConfirmationStepWrapper.id = 'bookingConfirmationStepWrapper';

   let confirmationMessageWrapper = document.createElement('div');
   let firstMessage = document.createElement('span');
   let image = document.createElement('img');
   let secondMessage = document.createElement('span');

   confirmationMessageWrapper.append(firstMessage);
   confirmationMessageWrapper.append(image);
   confirmationMessageWrapper.append(secondMessage);

   confirmationMessageWrapper.classList.add('genericScreenStyle');
   confirmationMessageWrapper.style.display = 'grid';
   confirmationMessageWrapper.style.alignContent = 'space-between';
   confirmationMessageWrapper.style.justifyItems = 'center';
   confirmationMessageWrapper.style.height = '344px';
   confirmationMessageWrapper.style.width = '259px';
   confirmationMessageWrapper.style.marginTop = '70px';

   firstMessage.classList.add('bigText');
   firstMessage.style.fontSize = '30px';

   secondMessage.classList.add('smallText');
   secondMessage.style.fontSize = '12px';

   //I had to make displaying this message dependant on an if, because I'd get error
   //due to trying to call .get() on undefined.
   if (props.formData)
      firstMessage.textContent = `Thank you for signing up, Commander ${props.formData.get(
         'name',
      )}!`;
   image.src = 'assets/swords.svg';
   secondMessage.textContent =
      'You will be notified about the\nnext steps in the championship\nprocess via email.';

   let button = bigButtonMaker({
      text: 'Submit another fighter',
      background: '#DA8B14',
      onClick: lastButtonClick,
   });
   button.style.marginTop = '50px';

   function lastButtonClick() {
      let wizardWrapper = bookingConfirmationStepWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      wizardScreenWrapper.append(
         initWizard({
            wizardStep: 0,
            characterObject: characters[0],
            formData: null,
         }),
      );

      wizardWrapper.remove();
   }

   bookingConfirmationStepWrapper.append(confirmationMessageWrapper);
   bookingConfirmationStepWrapper.append(button);
   return bookingConfirmationStepWrapper;
};
