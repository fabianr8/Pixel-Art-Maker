// This will Connect the pixelCanvas Html Table into the javascript. The Grid is now able to be constructed dynamically in Javascript

const grid = document.getElementById("pixelCanvas");

/**
This will create the MakeGrid function which will use height and width to create a Grid. 
When size is submitted by the user, call makeGrid() */
function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    //if there is any td's in the grid remove them before creating a grid based on current height and length
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
        }
//This for loop creates the rows of the grid and uses the HTML tr (TableRow) to append the rows onto the Grid
    for (let i= 0; i < height; i++) {
        let row = document.createElement("tr");
        row.id = "row" + i;
        grid.appendChild(row);
        let thisRow = document.getElementById("row" + i);
//This is the inner part of the for loop which creates the cells by appending the Child dependent on the Width inputted
        for (let j = 0; j < width; j++) {
          let sqr = document.createElement("td"); 
          thisRow.appendChild(sqr);
          addColorful(sqr);
        }
    }
}
// This Function adds color variable to the sqr variable of the cells.
function addColorful(sqr){
 //  This event listener takes note of when the mouse is pressed on the grid so that the grid can be painted in correlation to the colorPicker
    sqr.addEventListener("mousedown", function() {
        color = document.getElementById("colorPicker").value;
        sqr.style.backgroundColor = color 
     });
}


