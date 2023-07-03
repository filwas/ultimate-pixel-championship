import { formElementMaker } from '../../../components/formMakerFunctions.js';

export function formAssembly(props) {
   let form = document.createElement('form');

   let charNameElement = formElementMaker({
      blockName: 'CHOSEN FIGHTER',
      blockType: 'charName',
      characterObject: props.characterObject,
   });
   let userNameElement = formElementMaker({
      blockName: 'COMMANDER',
      blockType: 'userName',
   });
   let emailElement = formElementMaker({
      blockName: 'EMAIL',
      blockType: 'email',
   });

   form.style.display = 'grid';
   form.style.height = '263px';
   form.style.alignItems = 'end';

   form.appendChild(charNameElement);
   form.appendChild(userNameElement);
   form.appendChild(emailElement);

   return form;
}
