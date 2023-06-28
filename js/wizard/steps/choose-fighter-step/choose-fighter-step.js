import { characterProfileMaker } from './characterProfileMaker.js';
import { characterToggler } from './characterToggler.js';

export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.classList.add('welcomeScreen');

   let characterIndex = 1;

   let characterDetails = characterToggler(characterIndex);
   let characterProfile = characterProfileMaker(characterIndex);

   let topText = document.createElement('span');
   let progressBar = document.createElement('img');
   let characterImage = document.createElement('img');
   let characterShadow = document.createElement('img');
   let characterName = document.createElement('span');

   // let leftArrow
   // let rightArrow i'll be adding these arrows later when I'll add slideshow

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

   return chooseFighterStepWrapper;
};
