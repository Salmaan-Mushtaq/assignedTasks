const select = document.querySelector('#theme');
const html = document.querySelector('html');

document.body.style.padding="12px"; 
document.body.style.margin='20px';

select.addEventListener('change',()=>select.value == 'green'?update('green','white'):update('blue','white'));

function update(bgColor,textColor){
    html.style.backgroundColor=bgColor;
    html.style.color = textColor;
}