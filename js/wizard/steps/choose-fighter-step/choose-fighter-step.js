import { doc } from 'prettier';
import { characterToggler } from './characterToggler.js';

export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.innerText = 'Choose fighter';

   let char = characterToggler(1);

   console.log(char.name);

   return chooseFighterStepWrapper;
};
