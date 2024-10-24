let timer;
window.onload = () => {
    reseteo();
    moverIzquieda();
    
}

let i = 1;

function reseteo(){
    let divisito = document.getElementsByTagName("div")[0];
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        divisito.style.left = 0;
        clearInterval(timer);
        i = 1;
    }
}

function moverIzquieda(){
    let divisito = document.getElementsByTagName("div")[0];
    divisito.onmouseover = function(){
        while((5*i) <= (screen.width - divisito.offsetWidth)){
            divisito.style.left = (5*i) + "px";
            i++;
        }
    }
}