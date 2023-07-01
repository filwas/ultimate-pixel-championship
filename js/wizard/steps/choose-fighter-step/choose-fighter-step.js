import { arrowButtonMaker } from '../../../components/buttonMaker.js';
import { characterData } from '../../../components/characterData.js';
import { characterProfileMaker } from '../../../components/characterProfileMaker.js';

/**
 * @param {number} characterIndex
 * @returns
 */
export const chooseFighterStep = (characterIndex) => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.id = 'chooseFighterStepWrapper';
   chooseFighterStepWrapper.classList.add('genericScreenStyle');

   let characterDetails = characterData[characterIndex];
   let characterProfile = characterProfileMaker(characterIndex);

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

   characterImage.src = characterDetails.src;
   characterShadow.src = 'assets/characterShadow.svg';
   characterName.textContent = characterDetails.name;

   characterImage.style.marginTop = '30px';
   characterImage.style.zIndex = '2';
   characterShadow.style.marginTop = '-10px';
   characterName.classList.add('bigText');
   characterName.style.fontSize = '30px';

   chooseFighterStepWrapper.appendChild(characterImage);
   chooseFighterStepWrapper.appendChild(characterShadow);
   chooseFighterStepWrapper.appendChild(characterName);
   chooseFighterStepWrapper.appendChild(characterProfile);
   characterIndex != 5 && chooseFighterStepWrapper.appendChild(rightArrow);
   characterIndex != 0 && chooseFighterStepWrapper.appendChild(leftArrow);

   function changeHero(event) {
      let increment = event.target.id == 'right' ? 1 : -1;
      let progressWrapper = chooseFighterStepWrapper.parentElement.childNodes[0];
      progressWrapper.insertAdjacentElement(
         'afterend',
         chooseFighterStep(parseInt(characterIndex + increment)),
      );

      progressWrapper.parentElement.parentElement.setAttribute(
         'characterIndex',
         parseInt(characterIndex + increment),
      );
      chooseFighterStepWrapper.remove();
   }

   return chooseFighterStepWrapper;
};
