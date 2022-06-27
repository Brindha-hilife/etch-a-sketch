
// const greenbtn = document.getElementsByClassName('.green');
// const blackbtn = document.getElementsByClassName('.black');
// const color = document.getElementsByClassName('.color');
// const size = document.getElementsByClassName('.size');
// const resetbtn = document.getElementsByClassName('.reset');


const container_grid = document.querySelector('.container_grid');
// const size = document.getElementsByClassName('.size');

// function createPixel(){
//     // const div = decument.createElement('div');
//     div = setAttribute("id","pixels");
//     div.classList.add("pixel");
//     div.appandChild("div");
//     for (i = 0; i < size * size; i++) {
//         pixelsqr = document.createElement('div');
//         pixelsqr.classList.add("pixelsqr");
//         div.appendChild(pixelsqr);
//     }
//     container_grid.innerHTML="";
//     container_grid.appendChild(div);
// }
 /* Creating the grid */
/* Creating the grid */
function grid(el) {
    var container = document.createElement("div");
    container.id = "main";
    container.className = "container";

    for (i=0; i<16; i+=1) {
        var row = document.createElement("div");
        row.className = "row";
        row.id = "row" + i;
      
        for (k=0; k<16; k+=1) {
            var box = document.createElement("div"); 
            box.className = "box";
            row.appendChild(box);
        };
      
        container.appendChild(row);      
    };
  
    el.appendChild(container);
};

grid(document.body);











