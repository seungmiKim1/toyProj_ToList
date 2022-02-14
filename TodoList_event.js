var today = new Date(); 
document.write(today);

function add_row() { 
    var my_row = document.getElementById('todoList'); 
    var row = todoList.insertRow(todoList.rows.length);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    
}

function row_delete() { 
    var my_row = document.getElementById('todoList'); 
    var row = todoList.deleteRow(todoList.rows.length);
    var cell1=row.deleteCell(0);
    var cell2=row.deleteCell(1);
    var cell3=row.deleteCell(2);
    
}

