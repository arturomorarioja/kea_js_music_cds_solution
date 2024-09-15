'use strict';

document.querySelector('#frmCD').addEventListener('submit', function(e) {
    e.preventDefault();

    // The new table row is not created as a DOM node, but as the innerHTML of the table body.
    // Consequentially, it is not possible to attach event listeners to them until they exist on the DOM.
    // A solution is to add the action of the onclick event as inline JavaScript (line 22).
    // This implies several problems in regards to the code sustainability of the project:
    // - The separation of concerns pattern is broken simply by using template literals
    //   (HTML is written in JavaScript)
    // - Said pattern is completely disregarded by injecting JS in the HTML injected in JS
    // Future developers joining the project may have trouble finding this piece of code,
    // as its positioning in the codebase is not natural. They may waste unnecessary time finding it.
    const trNew = `
        <tr>
            <td>${e.target.txtAuthor.value}</td>
            <td>${e.target.txtTitle.value}</td>
            <td class="right">${parseInt(e.target.txtYear.value)}</td>
            <td class="right"><img src="img/trash.png" onclick="this.parentElement.parentElement.remove();"></td>
        </tr>
    `;
    document.querySelector('table > tbody').innerHTML += trNew;
    document.querySelector('table').classList.add('visible');

    // The form is reset
    this.reset();
});