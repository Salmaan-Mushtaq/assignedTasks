const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.btn');
const equal = document.querySelector('.btn-equal');
const clear = document.querySelector('.btn-clear');

buttons.forEach(function (button) {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.num;
        screen.value += value;
    })
});
function display(val){
    buttons.forEach(function(val){
        screen.value +=value;
    })
    return val
}
