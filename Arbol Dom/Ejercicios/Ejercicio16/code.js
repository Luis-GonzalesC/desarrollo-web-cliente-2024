let timer;
window.onload = () =>{
    descargar();
    cargar();
}

function descargar(){
    let meter = document.getElementsByTagName("meter")[0];
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        timer = setInterval(() =>{
            if(parseInt(meter.value)+10 >= meter.max){
                boton.disabled = true;
                clearInterval(timer);
            }
            meter.value += 10;
        }, 50);
    }
}

function cargar(){
    let progress = document.getElementsByTagName("progress")[0];
    let boton = document.getElementsByTagName("input")[1];

    boton.onclick = function(){
        timer = setInterval(() =>{
            if(parseInt(progress.value)+10 >= progress.max){
                boton.disabled = true;
                clearInterval(timer);
            }
            progress.value += 10;
        }, 50);
    }
}