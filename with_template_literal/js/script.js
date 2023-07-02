'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    const author = document.querySelector('#txtAuthor').value;
    const title = document.querySelector('#txtTitle').value;
    const year = parseInt(document.querySelector('#txtYear').value);

    const trNew = document.createElement('tr');
    trNew.innerHTML = `
        <td>${author}</td>
        <td>${title}</td>
        <td class="right">${year}</td>
        <td class="right"><img src="img/trash.png" onclick="this.parentElement.parentElement.remove();"></td>
    `;
    document.querySelector('table > tbody').appendChild(trNew);

    document.querySelector('table').style.visibility = 'visible';

    // The form is reset
    this.reset();
});