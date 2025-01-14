'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = e.target.txtAuthor.value;
    const title = e.target.txtTitle.value;
    const year = parseInt(e.target.txtYear.value);

    /*
        The row is cloned from its template
    */
    const trNew = document.querySelector('#cdRow').content.cloneNode(true);
    trNew.querySelector('td:nth-of-type(1)').innerText = author;
    trNew.querySelector('td:nth-of-type(2)').innerText = title;
    trNew.querySelector('td:nth-of-type(3)').innerText = year;
    
    // The delete button's event listener has to be added manually
    trNew.querySelector('img').addEventListener('click', function() {
        this.parentElement.parentElement.remove();
    });
    
    /*
        The row is appended to the DOM on the page
    */
    document.querySelector('table > tbody').appendChild(trNew);
    document.querySelector('table').classList.add('visible');

    this.reset();   // The form is reset
});