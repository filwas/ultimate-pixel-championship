import { barAdder } from './js/barAdder.js';
import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   barAdder(app);
   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();

   app.append(displayWelcomeScreen);

   // Display wizard screen
   // app.append(displayWizardScreen);
});
