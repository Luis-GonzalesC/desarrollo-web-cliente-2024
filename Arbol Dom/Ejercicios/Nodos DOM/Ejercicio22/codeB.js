window.onload = () =>{
    //let imagen = document.getElementsByTagName("img")[0];
    let imagenes = document.getElementsByTagName("img");
    const ancho = 640;
    const alto = 360;

    let fondo = document.createElement("div");//div para el fondo
    let div_img = document.createElement("div");//div para la imagen

    let tocado = true;
    for (let i = 0; i < imagenes.length; i++) {
        
        imagenes[i].onclick = function (){
            if(tocado){//con la mano para que no me pete
                fondo.setAttribute("style", `
                    background-color: grey;
                    opacity: 0.5;
                    width: 100%;
                    height: 100%;
                    top:0;
                    position: fixed`);

                div_img.setAttribute("style", `
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;`);

                imagenes[i].setAttribute("style", `
                        position: relative;
                        width: 1280px;
                        height: 720px;
                        z-index: 2;
                        margin: 0 auto`);

            
                let padre = imagenes[i].parentNode;//saco el body

                div_img.appendChild(imagenes[i]);//Agrego la imagen al div

                padre.appendChild(div_img);//Agrego el div al body
                padre.appendChild(fondo);//Agrego el fondo al body
                tocado = false;
            }
        }
        
        fondo.onclick = function(){
            let padre = fondo.parentNode;
            //Creo una imagen nueva
            let imagen_nueva = document.createElement("img");
            imagen_nueva.src = imagenes[i].getAttribute("src");
            
            div_img.removeChild(imagenes[i]);//Elimino la imagen
            padre.removeChild(div_img);//Borro el div del padre
            padre.removeChild(fondo);//Borro el fondo

            imagen_nueva.setAttribute("style", `
                width: ${ancho}px;
                height: ${alto}px`);
                
            padre.appendChild(imagen_nueva);
            
            tocado = true;
        }
    }
}