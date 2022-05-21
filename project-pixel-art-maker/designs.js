// Select color input
// Select size input

let countClicked = 0;
const grid = document.getElementById("pixelCanvas");

function buttonPress(){
    if(countClicked == 0){
        makeGrid()
    }else if (countClicked == 1){
        grid.innerHTML = ''
        buttonClicked -= 1;
    }
}
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    countClicked += 1;
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

function addColorful(sqr){
    let color = document.getElementById("colorPicker").value;
    sqr.addEventListener("click", function() {
        sqr.style.backgroundColor = color 
     });
}
function addClear(){
        sqr.style.backgroundColor = "white"; 
        countClicked = 0;
}

