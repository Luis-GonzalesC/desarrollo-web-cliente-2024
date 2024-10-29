let timer;
window.onload = () => {
    let salto = 50;
    resetear();
    mover(salto);
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

function mover(salto){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[1];

    boton.onclick = function () {
        this.disable = true;
        timer = setInterval(() => {
            if ((salto* i) <= (screen.width - divisito.offsetWidth)) {
                divisito.style.left = (salto * i) + "px";
                i++;
            }
            else{
                divisito.style.left =  (screen.width - divisito.offsetWidth) + "px";
                clearInterval(timer);
            }
        }, 50);
    }
}