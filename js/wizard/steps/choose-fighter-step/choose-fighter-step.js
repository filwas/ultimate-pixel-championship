import { doc } from 'prettier';
import { characterToggler } from './characterToggler.js';

export const chooseFighterStep = () => {
   const chooseFighterStepWrapper = document.createElement('div');

   let topText = document.createElement('span');
   let progressBar = document.createElement('img');
   let characterImage = document.createElement('img');
   let characterShadow = document.createElement('img');
   let characterName = document.createElement('span');
   // let leftArrow
   // let rightArrow i'll be adding these arrows later

   let char = characterToggler(1);

   console.log(char.name);

   return chooseFighterStepWrapper;
};
