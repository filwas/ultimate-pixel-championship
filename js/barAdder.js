/**
 * This function adds the top and bottom bars, which always appear on every screen.
 *
 * @param {HTMLDivElement} wrapper - Select the main wrapper.
 */
export const barAdder = (wrapper) => {
   let barAddress = './../assets/bar.svg';
   let topBar = document.createElement('img');
   let botBar = document.createElement('img');

   topBar.src = barAddress;
   topBar.style.position = 'absolute';
   topBar.style.top = '0px';

   botBar.src = barAddress;
   botBar.style.transform = 'rotate(180deg)';
   botBar.style.position = 'absolute';
   botBar.style.bottom = '0';

   wrapper.appendChild(topBar);
   wrapper.appendChild(botBar);
};
