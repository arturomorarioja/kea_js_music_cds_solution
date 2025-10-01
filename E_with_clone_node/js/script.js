'use strict';

const rowTemplate = () => {
    const trTemplate = document.createElement('tr');

    const tdAuthor = document.createElement('td');
    const tdTitle = document.createElement('td');
    const tdYear = document.createElement('td');
    tdYear.classList.add('right');
    
    const imgDelete = document.createElement('img');
    imgDelete.classList.add('delete');
    const tdDelete = document.createElement('td');
    tdDelete.appendChild(imgDelete);
    tdDelete.classList.add('right');
    
    trTemplate.appendChild(tdAuthor);
    trTemplate.appendChild(tdTitle);
    trTemplate.appendChild(tdYear);
    trTemplate.appendChild(tdDelete);

    return trTemplate;
}
const tableRowTemplate = rowTemplate();

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = e.target.txtAuthor.value;
    const title = e.target.txtTitle.value;
    const year = parseInt(e.target.txtYear.value);

    /*
        The row is cloned from its template
    */
    const trNew = tableRowTemplate.cloneNode(true);
    trNew.querySelector('td:nth-of-type(1)').innerText = author;
    trNew.querySelector('td:nth-of-type(2)').innerText = title;
    trNew.querySelector('td:nth-of-type(3)').innerText = year;
    // As cloneNode() does not clone event listeners,
    // the delete button's has to be added manually
    trNew.querySelector('img').addEventListener('click', function() {
        this.closest('tr').remove();
    });
    
    /*
        The row is appended to the DOM on the page
    */
    document.querySelector('table > tbody').appendChild(trNew);
    document.querySelector('table').classList.add('visible');

    this.reset();   // The form is reset
});