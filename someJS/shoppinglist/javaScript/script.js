const inputText = document.querySelector('.input-text');
const button = document.querySelector('.add-item');
const para = document.querySelector('.list-items');

button.addEventListener('click', () => {
    const value = inputText.value;
    const li = document.createElement('li')
    const deleteBtn = document.createElement('button');
    const editBtn = document.createElement('button');

    /* append li  start*/
    li.textContent = value;
    inputText.value = '';
    li.className = 'mt-2 list';
    para.append(li);
    /*li ends */

    /*edit button start */
    editBtn.className = 'btn btnEdit btn-warning ms-4';
    editBtn.innerText = "Edit";
    li.appendChild(editBtn)
    /* Edit Button End*/

    /*Delete Button start */
    deleteBtn.innerText = "Delete";
    deleteBtn.className = 'btn btnDelt btn-danger ms-4';
    li.appendChild(deleteBtn);
    /*Delete Button End */

    /*Event listerner for edit and Delete  */
    deleteBtn.addEventListener('click', deleteListItem);
    editBtn.addEventListener('click', editListItem);
    function editListItem() {
        const liText = document.querySelector('.list');
            console.log(liText.childNodes.innerText)
        // inputText.value = li.value;
    }
    function deleteListItem() {
        li.remove();
    }

})