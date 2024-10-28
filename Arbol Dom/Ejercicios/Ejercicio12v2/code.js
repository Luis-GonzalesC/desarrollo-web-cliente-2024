window.onload = () => {
    let salto = 50;
    resetear();
    mover(salto);
}

let timer;
let i = 1;
function resetear(){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[0];
    
    
    boton.onclick = function(){
        divisito.style.left = "0px";    
        i = 1;
    }
}

function mover(salto){
    let divisito = document.getElementsByTagName("div")[0];
    divisito.onmouseenter = function () {
        timer = setInterval(() => {
            if ((salto* i) <= (screen.width - divisito.offsetWidth)) {
                this.style.left = (salto * i) + "px";
                i++;
            }
            else{
                this.style.left =  (screen.width - divisito.offsetWidth) + "px";
            }
        }, 50);
    }

    divisito.onmouseleave = function(){
        clearInterval(timer);
    }
    
}