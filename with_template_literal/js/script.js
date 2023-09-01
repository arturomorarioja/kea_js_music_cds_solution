'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    const trNew = document.createElement('tr');
    trNew.innerHTML = `
        <td>${e.target.txtAuthor.value}</td>
        <td>${e.target.txtTitle.value}</td>
        <td class="right">${parseInt(e.target.txtYear.value)}</td>
        <td class="right"><img src="img/trash.png" onclick="this.parentElement.parentElement.remove();"></td>
    `;
    document.querySelector('table > tbody').appendChild(trNew);

    document.querySelector('table').style.visibility = 'visible';

    // The form is reset
    this.reset();
});