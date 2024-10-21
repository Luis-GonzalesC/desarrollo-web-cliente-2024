window.onload = function(){
    boton1();
    boton2();
}

function boton1(){
    let mi_link = document.getElementsByTagName("a")[0];
    let buton = document.getElementsByTagName("button")[0];

    buton.onclick = function(){
        console.log(mi_link.href);
        console.log(mi_link.textContent);
    }
}

function boton2(){
    let mi_link = document.getElementsByTagName("a")[0];
    let buton = document.getElementsByTagName("button")[1];

    buton.onclick = function(){
        mi_link.href = "https://www.jaimeweb.es/";
        mi_link.textContent = "e cambiao tron";
    }
}