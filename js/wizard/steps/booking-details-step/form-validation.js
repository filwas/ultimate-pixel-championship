export function formValidator(form) {
   let emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

   let validationScore = 0;

   form.querySelectorAll('input').forEach((input) => {
      switch (input.name) {
         case 'name':
            if (input.value == '') invalidAction(input);
            break;

         case 'email':
            if (!emailRegex.test(input.value)) invalidAction(input);
            break;

         default:
            break;
      }
   });

   function invalidAction(target) {
      target.classList.add('errorInput');
      target.nextElementSibling.classList.add('errorTextOn');
      validationScore++;
   }

   return validationScore == 0 ? true : false;
}
