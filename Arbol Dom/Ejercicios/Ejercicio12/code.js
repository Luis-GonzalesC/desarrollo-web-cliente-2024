window.onload = () => {
    moverDerecha();
    moverIzquieda();
    
}

let i = 1;
function moverDerecha(){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        if((5*i) <= (screen.width - divisito.offsetWidth)){
            divisito.style.left = (5*i) + "px";
            i++;
        }
    }
}

function moverIzquieda(){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[1];

    boton.onclick = function(){
        if(i > 1){
            divisito.style.left = (parseInt(divisito.style.left) - 5) + "px";
            i--;
        }
    }
}