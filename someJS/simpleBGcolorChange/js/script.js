const button = document.querySelector('button');
const body = document.querySelector('body');

const colors = ["green", "yellow", "pink", "blue", "violet", "indigo", "purple", "red", "aqua", "white"];


// function backgroundChange() {
//     const index = Math.floor(Math.random() * 10);
//     body.style.backgroundColor= colors[index];
// }

function rgb() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const a = Math.random();
    color = `rgba(${r}, ${g}, ${b}, ${a})`;
    body.style.backgroundColor = color;
}