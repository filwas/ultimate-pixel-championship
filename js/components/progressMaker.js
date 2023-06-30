/**
 * Creates the progress bar.
 * @param {object} props - The properties of progress bar.
 * @param {int} props.index - Current step index.
 * @returns {HTMLElement} - The generated button element.
 * @throws {Error} - Throws an error if the type is not "left" or "right".
 */
export function progressMaker(props) {
   const progressWrapper = document.createElement('div');
   progressWrapper.id = 'progressWrapper';
   progressWrapper.classList.add('genericScreenStyle');
   const index = props.index;
   let topText = document.createElement('span');
   let progressBar = document.createElement('img');

   switch (index) {
      case 0:
         topText.textContent = 'Choose your fighter';
         progressBar.src = 'assets/progress/stepOne.svg';
         break;
      case 1:
         topText.textContent = 'Booking details';
         progressBar.src = 'assets/progress/stepTwo.svg';
         break;
      case 2:
         topText.textContent = 'Confirmation';
         progressBar.src = 'assets/progress/stepThree.svg';
         break;
   }

   topText.classList.add('bigText');
   topText.style.fontSize = '30px';
   topText.style.color = '#DA8B14';
   progressBar.style.marginTop = '15px';

   progressWrapper.append(topText);
   progressWrapper.append(progressBar);

   return progressWrapper;
}
