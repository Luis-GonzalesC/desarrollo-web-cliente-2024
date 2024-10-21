window.onload = function (){

    let imagen = document.getElementsByTagName("img")[0];
    imagen.onmouseout = function(){
        this.setAttribute("src","Imagenes/jaime.jpg");
    }
    imagen.onmouseover = function(){
        this.setAttribute("src","Imagenes/dani.jpg");
    }
}