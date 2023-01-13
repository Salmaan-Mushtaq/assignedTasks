$(document).ready(function () {

   /*--- Form Validation Start ---*/
   $('.form-details').validate({
      errorClass: "alertFail",
      validClass: "valid alertSuccess",
      errorElement: "label",

      rules: {
         firstname: 'required',
         lastname: 'required',
         designation: 'required',
         mobile: {
            required: true,
            number: true,
            maxlength: 12,
            minlength: 10
         },
         email: {
            required: true,
            email: true,
         }
      },
      /*--- Below Code is for Custom Messages ---*/
      messages: {
         firstname: "Please enter first name",
         lastname: "Please enter last name",
         designation: "Please enter your designation",
         mobile: "The mobile no should be 10-12 digits",
         email: "The email should be : abc@domain.tld"
      }
   });

   /*--- Form Data Shown To Console Start ---*/
   //The below code to console the form data as Object
   $('.form-details').submit(function (e) {
      e.preventDefault();
      const values = {
         firstname: $('#firstname').val(),
         lastname: $('#lastname').val(),
         designation: $('#designation').val(),
         mobile: $('#mobile').val(),
         email: $('#email').val(),
         company: $('#company').val(),
         city: $('#city').val(),
         businessActivity: $('#businessActivity').val()

      };
      console.log(values);
   });
   /*--- Form Data Shown To Console End ---*/

   /*--- Form Console Data Starts Here ---*/
   /*--- The below code is to console the form data as encoded text string. ---*/
   // $('.form-details').submit(function (e) {
   //    e.preventDefault();
   //    const values = $(this).serialize();
   //    console.log(values);
   // });
   /*--- Form Console Data Ends Here ---*/

   /*--- Other way of getting the form data as Array --*/
   /*-- Code Start --*/

   //  $('.form-details').submit(function (e) {
   //    e.preventDefault();
   //    const values = $(this).serializeArray();
   //    console.log(values);
   // });

   /*-- Code End --*/

   /*--- Form Reset Code Starts Here ---*/
   //The below code is to reset the form details

   $('.btnReset').click(function (e) {
      $('.form-details')[0].reset();
      $('label.alertFail').hide();
      e.preventDefault();
   });

   /*--- Form Reset Code Ends Here ---*/

});