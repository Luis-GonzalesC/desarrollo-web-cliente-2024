document.addEventListener("DOMContentLoaded", ()=>{
    let boton = document.querySelector("input");

    boton.addEventListener("click", ()=>{
        url = "http://www.jaimeweb.es/medac/datos.json";

        fetch(url)
        .then((respuesta)=>{
            //Capturo la respuesta        
            if(!respuesta.ok){
                throw new Error("Error del fetch: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then((datos)=>{
            //Capturo y gestiono los datos
            //Apartado A
            console.log("Apartado A");
            console.log(datos);

            //Apartado B
            console.log("Apartado B");
            for (let dato in datos) {
                console.log(datos[dato]);
            }

            //Apartado C
            console.log("Apartado C");
            
            for (let dato of datos) {
                for (let clave in dato) {
                    console.log(clave + ": " + dato[clave]);
                }
                console.log("=========================");
                
            }

        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })    
    })
});