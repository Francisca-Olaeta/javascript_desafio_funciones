let color = "";
let div1 = document.getElementById('div-1');
let div2 = document.getElementById('div-2');
let div3 = document.getElementById('div-3');
let div4 = document.getElementById('div-4');

document.addEventListener('keydown', function(cambiarColor){
    if (cambiarColor.key === 'a') {
        color = "#301a4b";
    }
    else if (cambiarColor.key === 's') {
        color = "#6db1bf";
    }
    else if (cambiarColor.key === 'd') {
        color = '#52489c';
    }
    else if (cambiarColor.key === 'f') {
        color = '#f39a9d';
    }
    else {
        color = 'white';
    }
}
)

div1.addEventListener('click', ()=>{div1.style.backgroundColor = color, div1.style.color = "white"})
div2.addEventListener('click', ()=>{div2.style.backgroundColor = color, div2.style.color = "white"})
div3.addEventListener('click', ()=>{div3.style.backgroundColor = color, div3.style.color = "white"})
div4.addEventListener('click', ()=>{div4.style.backgroundColor = color, div4.style.color = "white"})