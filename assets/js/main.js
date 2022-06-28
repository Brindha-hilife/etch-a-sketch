const container = document.querySelector('.container')
// const blackbtn = document.querySelector('.black');
const color = document.querySelector('.color');
const whitebtn = document.querySelector('.white');
const sizeNum = document.querySelector('.size');
let size = sizeNum.value;
const erasebtn = document.querySelector('.erase');
const resetbtn = document.querySelector('.reset');

// get the size
sizeNum.addEventListener('click', () =>{
    size = prompt("size");
    container.innerHTML="";
    createPixel(size);
})

// create div using function
function createPixel(size){

    container.style.setProperty('--size', size);
    for (let i = 0; i < (size * size); i++){
        const div = document.createElement('div');
        div.style.backgroundColor = "#8080800f";
        div.classList.add('pixel');
        container.appendChild(div)
        //  black
        // blackbtn.addEventListener('click', () =>{
        //     div.addEventListener('mouseover', function(){
        //         div.style.background = "black";
        //     })
        //     container.appendChild(div)
        // })

        //  white
        whitebtn.addEventListener('click', () =>{
            div.addEventListener('mouseover', function(){
                div.style.background = "#fff ";
            })
        })

        //  choice
        color.addEventListener('click', () =>{
            div.addEventListener('mouseover', function(){
                div.style.background = color.value;
            })

        })

        //  erase
        erasebtn.addEventListener('click', () =>{
            div.addEventListener('mouseover', function(){
                div.style.background = "none";
            })
        })

        // reset
        resetbtn.addEventListener('click', () =>{
            div.style.background = "none";
        })
       
    }
}
createPixel(16);

