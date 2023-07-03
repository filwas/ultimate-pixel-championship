import { characters } from '../hard data/characterData.js';
import { initWizard } from '../wizard/wizard.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.id = 'wizardScreenWrapper';
   const wizard = initWizard({
      wizardStep: 0,
      characterObject: characters[0],
   });
   wizardScreenWrapper.append(wizard);
   return wizardScreenWrapper;
};
