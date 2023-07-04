export function formValidator(form) {
   //This leviathan of an email-validating regexp function was shamelessly stolen from the Internet.
   let emailRegex = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])",
   );

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
