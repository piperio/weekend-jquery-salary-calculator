console.log('js');
$(document).ready(readyNow);

function readyNow(){
    console.log('DOM ready');
    $('#submit-button').on('click', appendEmployeeToTable);
}

function appendEmployeeToTable(){
    let firstName = $('#first-name').val(); // .val() returns a string
    let lastName = $('#last-name').val();
    let id = $('#id').val();
    let title = $('#title').val();
    let annualSalary = $('#annual-salary').val();
    let tempNumber = parseInt(temperature);
    console.log(firstName, lastName, id, title, annualSalary);

    let rowClass = '';
    if (tempNumber > 75) {
        rowClass = 'warm';
    } else if (tempNumber < 50) {
        rowClass = 'cold';
    }


};