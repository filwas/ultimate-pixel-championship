import { barAdder } from './js/components/barAdder.js';
import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');

   barAdder(app);

   const displayWelcomeScreen = welcomeScreen();

   app.append(displayWelcomeScreen);
});
