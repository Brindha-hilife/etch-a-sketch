const container = document.querySelector('.container')
const blackbtn = document.querySelector('.black');
const color = document.querySelector('.color');
const rgbbtn = document.querySelector('.rgb');
const sizeNum = document.querySelector('.size');
const size = sizeNum.value;
const erase = document.querySelector('.erase');
const resetbtn = document.querySelector('.reset');

// create div using function

function createPixel(size){
    container.style.setProperty('--size', size);
    for (let i = 0; i < (size * size); i++){
        const div = document.createElement('div');
        div.style.backgroundColor = "#8080800f";
        div.classList.add('pixel');

     
        blackbtn.addEventListener('click', () =>{
            div.addEventListener('mouseover', function(){
                div.style.background = "black";
            })
            container.appendChild(div)
        })
    
    
        // rgbbtn.addEventListener('click', () =>{
        //     div.addEventListener('mouseover', function(){
        //         div.style.background = "black";
        //     })
        //     container.appendChild(div)
        // })
        // color.addEventListener('click', () =>{
        //     div.addEventListener('mouseover', function(){
        //         div.style.background = "black";
        //     })
        //     container.appendChild(div)
        // })

        // div.addEventListener('mouseover', function(){
        //     div.style.backgroundColor = color.value;
        
        // })


        container.appendChild(div)
        
    }
}
createPixel(size);

function firstbutton(){
    blackbtn.addEventListener('click', () =>{
        div.addEventListener('mouseover', function(){
            div.style.background = "black";
        })
        container.appendChild(div)
    })
}

 
firstbutton()





