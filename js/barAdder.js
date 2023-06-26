export const barAdder = (wrapper) => {
   let barAddress = './../assets/bar.svg';
   let topBar = document.createElement('img');
   let botBar = document.createElement('img');

   topBar.src = barAddress;
   botBar.src = barAddress;

   wrapper.innerText = 'aaAA';

   wrapper.appendChild(topBar);
};
