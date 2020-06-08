function generateTable(){
     let result = document.getElementById("result");
     let rows = document.getElementById("zeilenFeld").value;
     let cols = document.getElementById("spaltenFeld").value;
     let table = document.createElement("table");
     
     for (var r = 0; r < rows; r++) {
        var row = table.insertRow();
        for (var c = 0; c < cols; c++) {
          var cell = row.insertCell();
          cell.innerHTML = parseInt(row.rowIndex + 1) + "." + parseInt(cell.cellIndex + 1);
        }

      } result.appendChild(table);
}