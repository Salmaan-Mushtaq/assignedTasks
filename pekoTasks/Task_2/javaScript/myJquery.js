$(document).ready(function () {
   $('.form-details').submit(function(e){
    e.preventDefault();
    const values = $(this).serialize();
    console.log(values);
   })

   $('.btnReset').click(function(){
    $('.form-details')[0].reset()
   });
});