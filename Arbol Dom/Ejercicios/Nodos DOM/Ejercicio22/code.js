window.onload = () =>{
    let imagen = document.getElementsByTagName("img")[0];
    const ancho = imagen.width;
    const alto = imagen.height;

    let fondo = document.createElement("div");
    let i = 0;

    //div para el fondo
    fondo.setAttribute("style", `
        width: 100%;
        height: 100%;
        background-color: grey;
        position: fixed;
        z-index: 1;
        opacity: 0.5;
        top: 0;
        right: 0;`);

    //fondo creado para poner la imagen dentro y poder centrarlo
    let conten_img = document.createElement("div");
    //Sin width => porque al hacer control + scrool no se queda en el centro
    conten_img.setAttribute("style", `
        display: flex;
        align-items: center;
        justify-content: center;
        height: ${screen.height}px`);

    imagen.onclick = function(){
        if(i == 0){
            i++;
            this.setAttribute("style", `
                position: relative;
                width: 1280px;
                height: 720px;
                z-index: 2;
                margin: 0 auto`);

            let padre = imagen.parentNode;//Saco el padre de la imagen
            conten_img.append(this);//Meto la imagen dentro del fondo
            
            //Nota: Primero se agrega el fondo porque no se ve
            padre.appendChild(fondo);//Meto el fondo al padre
            padre.appendChild(conten_img);////meto el div-con la imagen en el padre
        }

    }

    fondo.onclick = function(){
        imagen.setAttribute("style", `
            width: ${ancho}px;
            height: ${alto}px`);
            
        let padre = this.parentNode;//Saco el padre del fondo
        padre.removeChild(this);//borro el fondo del padre
        padre.removeChild(conten_img);//borro el fondo del padre
        padre.appendChild(imagen)//meto la imagen al padre
        i = 0;
    }
}