$(document).ready(function () {
   $('.form-details').submit(function (e) {
      e.preventDefault();
      const values = $(this).serialize();
      console.log(values);
   })

   $('.form-details').validate({
      errorClass: "alertFail",
      validClass: "valid alertSuccess",
      errorElement:"label",
      wrapper:"p",

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
      messages: {
         firstname: "Please enter first name",
         lastname: "Please enter last name",
         designation: "Please enter your designation",
         mobile: "The mobile no should be 10-12 digits",
         email: "The email should be : abc@domain.tld"
      }
   });

   $('.btnReset').click(function (e) {
      $('.form-details')[0].reset();
      $('label.alertFail').hide();
      e.preventDefault();
   });
});