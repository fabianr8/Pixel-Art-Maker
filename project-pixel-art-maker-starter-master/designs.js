// Select color input
// Select size input

const grid = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    //if there is any td's in the grid remove them before creating a grid based on current height and length
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
        }
//create rows
    for (let i= 0; i < height; i++) {
        let row = document.createElement("tr");
        row.id = "row" + i;
        grid.appendChild(row);
        let thisRow = document.getElementById("row" + i);
//create cells
        for (let j = 0; j < width; j++) {
          let sqr = document.createElement("td"); 
          thisRow.appendChild(sqr);
          addColorful(sqr);
        }
    }
}
// Function to add color variable
function addColorful(sqr){
    color = document.getElementById("colorPicker").value;
    sqr.addEventListener("mousedown", function() {
        sqr.style.backgroundColor = color 
     });
}


