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


};

let sortDirection = false;
let tableData = [
    {firstName: '', lastName: '', iD: num, title:'', annualSalary: num, '': ''  },
    {firstName: 'Jen', lastName: 'Barber', iD: 4521, title: 'Team Lead', annualSalary: $80,000, '': ''  },
    {firstName: 'Maurice', lastName: 'Moss', iD: 8724, title:'Support Team', annualSalary: $58,000, '': ''  },
    {firstName: 'Roy', lastName: 'Smith', iD: 9623, title:'Quality Assurance', annualSalary: $48,000, '': ''  }
];

window.onload = () => {
    loadTable(tableData);
}

loadTable(tableData);

function loadTable(tableData){
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let data of tableData){
        dataHtml += `<tr><td>${data.First Name}</td>${data.Last Name}<td>${data.ID}</td>${data.Title}<td>${data.Annual Salary}</td><td></tr>`,
        `<tr><td>${data.Jen}</td>${data.Barber}<td>${data.4521}</td>${data.Team Lead}<td>${data.$80,000}</td>${<button>Delete</button>}</button><td></td><td></td><td></td></tr>`,
        `<tr><td>${data.Maurice}</td>${data.Moss}<td>${data.8724}</td>${data.Support Team}<td>${data.$58,000}</td>${<button>Delete</button>}</button><td></td><td></td><td></td></tr>`,
        `<tr><td>${data.Roy}</td>${data.Smith}<td>${data.9623}</td>${data.Quality Assurance}<td>${data.$48,000}</td>${<button>Delete</button>}</button><td></td><td></td><td></td></tr>`,
        }
        console.log(dataHTML);

        tableBody.innerHTML = dataHTML
}
