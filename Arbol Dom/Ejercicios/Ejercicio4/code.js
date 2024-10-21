let imagenes = ["Imagenes/jojos.jpg", "Imagenes/dragon_ball.jpg", "Imagenes/jujutsu.jpg", "Imagenes/kimetsu.jpg", "Imagenes/naruto.jpg", "Imagenes/shingeki.jpg"];

window.onload = () =>{
    avanza();
    retro();
}


let i = 0;
function avanza(){
    let mi_imagen = document.getElementsByTagName("img")[0];
    let buton = document.getElementsByTagName("input")[0];

    buton.onclick = function(){
        if (i < imagenes.length - 1) i++;
        mi_imagen.setAttribute("src", imagenes[i]);
    }
}

function retro(){
    let mi_imagen = document.getElementsByTagName("img")[0];
    let buton = document.getElementsByTagName("input")[1];

    buton.onclick = function (){
        if (i > 0) i--;
        
        mi_imagen.setAttribute("src", imagenes[i]);
    }

}