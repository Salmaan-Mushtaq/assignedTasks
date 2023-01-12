const btnReset = document.querySelector('.btnReset');
const formDetails = document.querySelector('.form-details');
const btnSubmit = document.querySelector('.btnSubmit');

btnReset.addEventListener('click', function (event) {
    event.preventDefault();
    formDetails.reset();
})

btnSubmit.addEventListener('click', (e) => {
    const formdata = new FormData(formDetails);

    /*The below line of code will provide dataArray
    const formValues = [...formdata.values()];
    */
    const values = [...formdata.entries()];
    e.preventDefault();
    console.log(values)
})