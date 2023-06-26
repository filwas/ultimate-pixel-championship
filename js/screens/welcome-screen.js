import { wizardScreen } from './wizard-screen.js';
/**
 * This function creates the welcome screen..
 *
 */
export const welcomeScreen = () => {
   // 1. Establish main wrapper.
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.classList.add('welcomeScreen');

   // 2. Create all the required elements.
   let gameNameText = document.createElement('span');
   let nameFirstPart = document.createElement('span');
   let nameSecondPart = document.createElement('span');
   let swordsImg = document.createElement('img');
   let infoText = document.createElement('span');
   let button = document.createElement('img');

   // 3. Add text and image sources.
   nameFirstPart.textContent = 'Ultimate Pix\n';
   nameSecondPart.textContent = 'Championships';
   infoText.textContent = 'Fill out the form to sign up\nfor upcoming tournee.';
   swordsImg.src = 'assets/swords.svg';
   button.src = 'assets/buttonChoose.svg';

   // 4. Apply CSS classes, as well as tweaks for specific elements.
   nameFirstPart.classList.add('bigText');
   nameSecondPart.classList.add('bigText');
   infoText.classList.add('smallText');

   nameSecondPart.style.color = '#DA8B14';
   nameSecondPart.style.textDecoration = 'underline dotted';
   swordsImg.style.marginTop = '31px';
   swordsImg.style.marginBottom = '19px';
   infoText.style.color = '#EFB55E';
   button.style.marginTop = '56px';

   // 5. Append all children, thus creating the page.
   gameNameText.appendChild(nameFirstPart);
   gameNameText.appendChild(nameSecondPart);
   welcomeStepWrapper.appendChild(gameNameText);
   welcomeStepWrapper.appendChild(swordsImg);
   welcomeStepWrapper.appendChild(infoText);
   welcomeStepWrapper.appendChild(button);

   // 6. Make clicking the button change screens.
   button.addEventListener('click', () => {
      let app = welcomeStepWrapper.parentElement;
      welcomeStepWrapper.remove();
      app.appendChild(wizardScreen());
   });

   return welcomeStepWrapper;
};
