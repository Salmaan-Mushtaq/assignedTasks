const input = document.querySelector('input');
const button = document.querySelector('.submit');
const showMessage = document.querySelector('p');

showMessage.style.fontSize = "30px";
showMessage.style.fontWeight = "bold";

button.addEventListener('click', function () {
    const value = input.value;
    if (value == "") {
        showMessage.textContent = "Please Enter Any Message";
    } else {
        showMessage.textContent = value;
    }
    input.value = "";
})
