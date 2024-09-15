'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = e.target.txtAuthor.value;
    const title = e.target.txtTitle.value;
    const year = parseInt(e.target.txtYear.value);

    /*
        The row is created directly in the table
    */
    const trNew = document.querySelector('table > tbody').insertRow();
    
    const tdAuthor = trNew.insertCell();
    tdAuthor.innerText = author;

    const tdTitle = trNew.insertCell();
    tdTitle.innerText = title;

    const tdYear = trNew.insertCell();
    tdYear.innerText = year;
    tdYear.classList.add('right');
    
    const imgDelete = document.createElement('img');
    imgDelete.classList.add('delete');
    // When the delete icon is clicked, the whole row (the <tr>) is removed
    imgDelete.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });

    const tdDelete = trNew.insertCell();
    tdDelete.appendChild(imgDelete);
    tdDelete.classList.add('right');

    document.querySelector('table').classList.add('visible');

    this.reset();   // The form is reset
});