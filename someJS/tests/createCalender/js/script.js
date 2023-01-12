const select = document.querySelector('select');
const optSelected = document.querySelector('h1');
const list = document.querySelector('ul');

select.addEventListener('change', () => {
    const choice = select.value;
    let days = 31;
    if (choice == 'February') {
        days = 28;
    } else if (choice == 'April' || choice == 'June' || choice == 'September' || choice == 'November') {
        days = 30;
    }
    createCalender(days, choice);
})

function createCalender(days, choice) {
    list.innerHTML='';
    optSelected.style.fontSize = '60px';
    list.style.fontSize = '45px';
    optSelected.innerHTML = choice;
    for (let i = 1; i <= days; i++) {
        const listItem = document.createElement('li');
        listItem.className = 'd-inline-flex border border-white text-white bg-black w-25 justify-content-evenly';
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}