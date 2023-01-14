$(document).ready(function () {

   /*--- Form Validation Start ---*/
   $('.form-details').validate({
      errorClass: "alertFail",
      validClass: "alertSuccess",
      // errorElement: 'div',
      rules: {
         firstname: {
            required: true,
            minlength: 3
         },
         lastname: 'required',
         designation: 'required',
         mobile: {
            required: true,
            number: true,
            minlength:10,
            maxlength: 10,
         },
         email: {
            required: true,
            email: true,
         }
      },

      /*--- Below Code is for Custom Messages ---*/
      messages: {
         firstname: {
            required: "*Please enter your first name.",
            mailength: "*Please enter at least 3 characters."
         },
         lastname: "*Please enter your last name.",
         designation: "*Please enter your designation.",
         mobile: {
            required:"*Please enter mobile number.",
            minlength:"*Please enter 10 digits",
            maxlength:"*Enter 10 digits"
         },
         email: "*enter a valid email address like- abc@domain.tld"
      },
      errorPlacement: function (error, element) {
         if (element.attr('name') == 'firstname') {
            error.appendTo('.err-fname');
         }
        else if (element.attr('name') == 'lastname') {
            error.appendTo('.err-lname');
         }
         else if (element.attr('name') == 'designation') {
            error.appendTo('.err-desgntion');
         }
         else if (element.attr('name') == 'mobile') {
            error.appendTo('.err-mble');
         }
        else if (element.attr('name') == 'email') {
            error.appendTo('.err-email');
         }else{
            error.appendTo(element)
         }
      }
   });
   /*--- Form Validation End ---*/

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


   /*--- Form Reset Code Starts Here ---*/
   //The below code is to reset the form details

   $('.btnReset').click(function (e) {
      $('.form-details')[0].reset();
      $('label.alertFail').hide();
      e.preventDefault();
   });

   /*--- Form Reset Code Ends Here ---*/

});