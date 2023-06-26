import { barAdder } from '../barAdder';

export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.innerText = 'ACCCCCBbA screen';

   let topBar = document.createElement('img');

   //barAdder(welcomeStepWrapper);

   topBar.src = './../assets/bar.svg';

   welcomeStepWrapper.appendChild(topBar);
   return welcomeStepWrapper;
};
