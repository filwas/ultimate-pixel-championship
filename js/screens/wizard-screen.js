import { initWizard } from '../wizard/wizard.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.id = 'wizardScreenWrapper';
   wizardScreenWrapper.setAttribute('characterIndex', 0);
   const wizard = initWizard({
      wizardStep: 0,
      characterIndex: 0,
   });
   wizardScreenWrapper.append(wizard);
   return wizardScreenWrapper;
};
