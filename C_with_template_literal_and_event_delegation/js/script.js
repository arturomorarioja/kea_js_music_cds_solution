'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    // The table cells are not created as a DOM node, but as the innerHTML of the table row.
    // Consequentially, it is not possible to attach event listeners to them until they exist on the DOM.
    // A solution is to attach the event listeners to the table through event delegation
    const trNew = `
        <tr>
            <td>${e.target.txtAuthor.value}</td>
            <td>${e.target.txtTitle.value}</td>
            <td class="right">${parseInt(e.target.txtYear.value)}</td>
            <td class="right"><img src="img/trash.png" class="deleteIcon"></td>
        </tr>
    `;
    document.querySelector('table > tbody').innerHTML += trNew;
    document.querySelector('table').classList.add('visible');

    // The form is reset
    this.reset();
});

// Through event delegation, the event listener for removing a row
// is added only once to the container table
document.querySelector('table').addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('deleteIcon')) {
        e.target.parentElement.parentElement.remove();
    }
});