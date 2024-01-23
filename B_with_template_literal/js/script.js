'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    // The table cells are not created as a DOM node, but as the innerHTML of the table row.
    // As a consequence, it is not possible to attach event listeners to them.
    // The solution is to add the action of the onclick event as inline JavaScript (line 22).
    // This implies sever problems in regards to the code sustainability of the project:
    // - The separation of concerns pattern is broken simply by using template literals
    //   (HTML is written in JavaScript)
    // - Said pattern is completely disregarded by injecting JS in the HTML injected in JS
    // Future developers joining the project may have trouble finding this piece of code,
    // as its positioning in the codebase is not natural. They may waste unnecessary time finding it.
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