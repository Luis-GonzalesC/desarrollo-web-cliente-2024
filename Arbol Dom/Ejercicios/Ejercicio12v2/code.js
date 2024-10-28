window.onload = () => {
    resetear();
    mover();
}

let i = 1;
function resetear(){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        divisito.style.left = "0px";    
        i = 1;
    }
}

function mover(){
    let divisito = document.getElementsByTagName("div")[0];
    let pantalla_final = screen.width;
    divisito.onmouseover = function (){
        while((5*i) <= pantalla_final - divisito.clientWidth){
            divisito.style.left = (5*i) + "px";
            i++;
        }
    }
}