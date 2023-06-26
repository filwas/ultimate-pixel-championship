export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.innerText = 'Welcome screen';

   let topBar = document.createElement('img');

   topBar.src = './../assets/bottomBar.svg';

   welcomeStepWrapper.appendChild(topBar);

   return welcomeStepWrapper;
};
