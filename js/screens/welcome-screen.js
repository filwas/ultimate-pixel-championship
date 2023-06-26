import { wizardScreen } from './wizard-screen.js';

export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.classList.add('welcomeScreen');

   let gameNameText = document.createElement('span');
   let nameFirstPart = document.createElement('span');
   let nameSecondPart = document.createElement('span');
   let swordsImg = document.createElement('img');
   let infoText = document.createElement('span');
   let button = document.createElement('img');

   nameFirstPart.textContent = 'Ultimate Pix\n';
   nameSecondPart.textContent = 'Championships';
   infoText.textContent = 'Fill out the form to sign up\nfor upcoming tournee.';
   infoText.classList.add('smallText');
   infoText.style.color = '#EFB55E';
   swordsImg.src = 'assets/swords.svg';
   button.src = 'assets/buttonChoose.svg';

   swordsImg.style.marginTop = '31px';
   swordsImg.style.marginBottom = '19px';
   button.style.marginTop = '56px';

   gameNameText.appendChild(nameFirstPart);
   gameNameText.appendChild(nameSecondPart);

   nameFirstPart.classList.add('bigText');
   nameSecondPart.classList.add('bigText');
   nameSecondPart.style.color = '#DA8B14';
   nameSecondPart.style.textDecoration = 'underline dotted';

   welcomeStepWrapper.appendChild(gameNameText);
   welcomeStepWrapper.appendChild(swordsImg);
   welcomeStepWrapper.appendChild(infoText);
   welcomeStepWrapper.appendChild(button);

   button.addEventListener('click', () => {
      let app = welcomeStepWrapper.parentElement;
      welcomeStepWrapper.remove();
      app.appendChild(wizardScreen());
   });

   return welcomeStepWrapper;
};
