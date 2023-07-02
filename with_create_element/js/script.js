'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = document.querySelector('#txtAuthor').value;
    const title = document.querySelector('#txtTitle').value;
    const year = parseInt(document.querySelector('#txtYear').value);

    /*
        The row is created in browser memory
    */
    const trNew = document.createElement('tr');
    
    const tdAuthor = document.createElement('td');
    tdAuthor.appendChild(document.createTextNode(author));
    trNew.appendChild(tdAuthor);

    const tdTitle = document.createElement('td');
    tdTitle.appendChild(document.createTextNode(title));
    trNew.appendChild(tdTitle);

    const tdYear = document.createElement('td');
    tdYear.appendChild(document.createTextNode(year));
    tdYear.classList.add('right');
    trNew.appendChild(tdYear);
    
    const imgDelete = document.createElement('img');
    imgDelete.classList.add('delete');
    // When the delete icon is clicked, the whole row (the <tr>) is removed
    imgDelete.addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });

    const tdDelete = document.createElement('td');    
    tdDelete.appendChild(imgDelete);
    tdDelete.classList.add('right');
    trNew.appendChild(tdDelete);

    /*
        The row is appended to the DOM on the page
    */
    document.querySelector('table > tbody').appendChild(trNew);

    document.querySelector('table').style.visibility = 'visible';

    this.reset();   // The form is reset
});