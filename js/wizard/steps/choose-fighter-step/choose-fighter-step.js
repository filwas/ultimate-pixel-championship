import { characterProfileMaker } from './characterProfileMaker.js';
import { characterData } from './characterData.js';
import { arrowButtonMaker } from '../../../components/arrowButtonMaker.js';

export const chooseFighterStep = (index = 0) => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.id = 'chooseFighterStepWrapper';
   chooseFighterStepWrapper.classList.add('genericScreenStyle');

   let characterDetails = characterData[index];
   let characterProfile = characterProfileMaker(characterDetails);

   let topText = document.createElement('span');
   let progressBar = document.createElement('img');
   let characterImage = document.createElement('img');
   let characterShadow = document.createElement('img');
   let characterName = document.createElement('span');

   let rightArrow = arrowButtonMaker({ type: 'right', index: index });
   let leftArrow = arrowButtonMaker({ type: 'left', index: index });

   topText.textContent = 'Choose your fighter';
   progressBar.src = 'assets/progress/stepOne.svg';
   characterImage.src = characterDetails.src;
   characterShadow.src = 'assets/characterShadow.svg';
   characterName.textContent = characterDetails.name;

   topText.classList.add('bigText');
   topText.style.fontSize = '30px';
   topText.style.color = '#DA8B14';
   progressBar.style.marginTop = '15px';
   characterImage.style.marginTop = '30px';
   characterImage.style.zIndex = '2';
   characterShadow.style.marginTop = '-10px';
   characterName.classList.add('bigText');
   characterName.style.fontSize = '30px';

   chooseFighterStepWrapper.appendChild(topText);
   chooseFighterStepWrapper.appendChild(progressBar);
   chooseFighterStepWrapper.appendChild(characterImage);
   chooseFighterStepWrapper.appendChild(characterShadow);
   chooseFighterStepWrapper.appendChild(characterName);
   chooseFighterStepWrapper.appendChild(characterProfile);
   index != 5 && chooseFighterStepWrapper.appendChild(rightArrow);
   index != 0 && chooseFighterStepWrapper.appendChild(leftArrow);

   return chooseFighterStepWrapper;
};
