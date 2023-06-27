import { characterToggler } from './characterToggler.js';

export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.innerText = 'Choose fighter';

   let char = characterToggler(1);

   console.log(char);

   return chooseFighterStepWrapper;
};
