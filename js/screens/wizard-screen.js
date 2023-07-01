import { initWizard } from '../wizard/wizard.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   wizardScreenWrapper.id = 'wizardScreenWrapper';
   const wizard = initWizard(0);
   wizardScreenWrapper.append(wizard);
   return wizardScreenWrapper;
};
