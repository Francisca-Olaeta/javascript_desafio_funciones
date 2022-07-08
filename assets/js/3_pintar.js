// Función original
// function pintar(){
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
//   }
//   ele = document.getElementById("ele1");
//   ele.addEventListener("click", pintar)

// Función modificada
ele = document.getElementById("ele1")
function pintar(color = "green") {
    ele.style.backgroundColor = color
}
ele.addEventListener("click", ()=>pintar('yellow'));
    

