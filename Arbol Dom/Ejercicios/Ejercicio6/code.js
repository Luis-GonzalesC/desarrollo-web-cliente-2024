window.onload = () =>{
    let dedos = document.getElementsByTagName("input");
    for (elemento of dedos) {
        elemento.onclick = function(){
            document,document.bgColor = this.getAttribute("value");
        }
    }
}

/*
function boton1(){
    let boton = document.getElementsByTagName("input")[0];
    document.bgColor = boton.getAttribute("value");
    
}

function boton2(){
    let boton = document.getElementsByTagName("input")[1];
    document.bgColor = boton.getAttribute("value");
}

function boton3(){
    let boton = document.getElementsByTagName("input")[2];
    document.bgColor = boton.getAttribute("value");
}

function boton4(){
    let boton = document.getElementsByTagName("input")[3];
    document.bgColor = boton.getAttribute("value");
}

function boton5(){
    let boton = document.getElementsByTagName("input")[4];
    document.bgColor = boton.getAttribute("value");
}*/