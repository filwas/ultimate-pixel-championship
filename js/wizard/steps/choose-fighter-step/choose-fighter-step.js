import { arrowButtonMaker } from '../../../components/buttonMaker.js';
import { characterProfileMaker } from '../../../components/characterProfileMaker.js';
import { CharacterDataObject, characters } from '../../../hard data/characterData.js';
import { initWizard } from '../../wizard.js';

/**
 * @param {CharacterDataObject} characterObject
 * @returns
 */
export const chooseFighterStep = (characterObject) => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.id = 'chooseFighterStepWrapper';
   chooseFighterStepWrapper.classList.add('genericScreenStyle');

   let characterProfile = characterProfileMaker(characterObject);
   let characterIndex = characters.indexOf(characterObject);

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

   characterImage.src = characterObject.src;
   characterShadow.src = 'assets/characterShadow.svg';
   characterName.textContent = characterObject.name;

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

   return chooseFighterStepWrapper;
};
