import { arrowButtonMaker, bigButtonMaker } from '../../../components/buttonMaker.js';
import { characterProfileMaker } from '../../../components/characterProfileMaker.js';
import { CharacterDataObject, characters } from '../../../hard data/characterData.js';
import { initWizard } from '../../wizard.js';

/**
 * Creates the choose-fighter-step.
 * @param {object} props - The properties of the wizard.
 * @param {number} props.wizardStep - Current step of the wizard.
 * @param {CharacterDataObject} props.characterObject - Current chosen character.
 * @param {FormData} props.formData - Object containing form submission data.
 * @returns {HTMLElement} - The generated step.
 */
export const chooseFighterStep = (props) => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.id = 'chooseFighterStepWrapper';
   chooseFighterStepWrapper.classList.add('genericScreenStyle');

   let characterProfile = characterProfileMaker(props.characterObject);
   let characterIndex = characters.indexOf(props.characterObject);

   let characterImage = document.createElement('img');
   let characterShadow = document.createElement('img');
   let characterName = document.createElement('span');

   let rightArrow = arrowButtonMaker({
      direction: 'right',
      onClick: changeHero,
   });
   let leftArrow = arrowButtonMaker({
      direction: 'left',
      onClick: changeHero,
   });

   let bigButton = bigButtonMaker({
      text: 'Choose fighter!',
      background: '#DA8B14',
      onClick: wizardProceed,
   });

   characterImage.src = props.characterObject.src;
   characterShadow.src = 'assets/characterShadow.svg';
   characterName.textContent = props.characterObject.name;

   characterImage.style.marginTop = '30px';
   characterImage.style.zIndex = '2';
   characterShadow.style.marginTop = '-10px';
   characterName.classList.add('bigText');
   characterName.style.fontSize = '30px';

   chooseFighterStepWrapper.appendChild(characterImage);
   chooseFighterStepWrapper.appendChild(characterShadow);
   chooseFighterStepWrapper.appendChild(characterName);
   chooseFighterStepWrapper.appendChild(characterProfile);
   characterIndex != characters.length - 1 && chooseFighterStepWrapper.appendChild(rightArrow);
   characterIndex != 0 && chooseFighterStepWrapper.appendChild(leftArrow);
   chooseFighterStepWrapper.appendChild(bigButton);

   function changeHero(event) {
      let increment = event.target.id == 'right' ? 1 : -1;
      let wizardWrapper = chooseFighterStepWrapper.parentElement;
      let wizardsScreenWrapper = wizardWrapper.parentElement;

      wizardsScreenWrapper.append(
         initWizard({
            wizardStep: 0,
            characterObject: characters[parseInt(characterIndex + increment)],
         }),
      );

      wizardWrapper.remove();
   }

   function wizardProceed() {
      let wizardWrapper = chooseFighterStepWrapper.parentElement;
      let wizardScreenWrapper = wizardWrapper.parentElement;

      wizardScreenWrapper.append(
         initWizard({
            wizardStep: 1,
            characterObject: props.characterObject,
            formData: null,
         }),
      );

      wizardWrapper.remove();
   }

   return chooseFighterStepWrapper;
};
