window.onload = () =>{
    let boton_aniadir = document.getElementsByTagName("input")[0];
    let boton_limpiar = document.getElementsByTagName("input")[1];

    //elemento contenedor
    let div = document.getElementById("contenedor");
    
    apartadoA(boton_aniadir, boton_limpiar, div);
    apartadoB(boton_limpiar, div);
}

function apartadoA(boton_aniadir, boton_limpiar, div){
    boton_aniadir.onclick = function(){
        //Habilitar el botón LIMPIAR
        boton_limpiar.disabled = false;
        //ruta de la imagen por defecto y la carpeta donde se encuentran mis imagenes
        const img_carpeta = "img/";
        const img_defecto = "terra.jpg";
        //Pregunto al usuario la ruta de la imagen
        let ruta = prompt("Ingrese la ruta de su imagen");

        let imagen = document.createElement("img");//Creación de la imagen
        imagen.setAttribute("class", "foto");//le asigno la clase

        //Si es vacio le asigno por defecto una imagen
        if(ruta === ""){
            imagen.setAttribute("alt", img_defecto);
            imagen.setAttribute("src", img_carpeta + img_defecto);
        }
        else{ //imagen ingresada por el usuario
            imagen.setAttribute("alt", ruta);
            imagen.setAttribute("src", img_carpeta + ruta);
        }
        //agrego la imagen al contenedor padre
        div.appendChild(imagen);
    }
}

function apartadoB(boton_limpiar, papi){
    //Boton limpiar que borra todas las imagenes del contenedor
    boton_limpiar.onclick = function(){
        //Mientras papi tenga hijos (mi contenedor)
        while(papi.firstChild){
            papi.removeChild(papi.firstChild);//matalos a todos(sus hijos)
        }
    }
}
