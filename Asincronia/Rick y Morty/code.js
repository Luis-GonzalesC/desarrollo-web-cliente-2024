document.addEventListener("DOMContentLoaded", ()=>{
    let boton = document.getElementById("boton");

    boton.addEventListener("click", ()=>{
        const url = "https://rickandmortyapi.com/api/character";

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
            for (let array of datos["results"]) {
                let seccion = document.createElement("section");
                for (let clave in array) {
                    switch (clave) {
                        case "id":
                            crearElementos("h2", array[clave], seccion);
                            break;
                        case "name":
                            crearElementos("h1", array[clave], seccion);
                            break;
                        case "status":
                            crearElementos("h3", array[clave], seccion);
                            break;
                        case "gender":
                            crearElementos("h4", array[clave], seccion);
                            break;
                        case "image":
                            let img = document.createElement("img");
                            img.setAttribute("src", array[clave]);
                            img.setAttribute("style", "width:500px; height:500px");
                            seccion.appendChild(img);
                            break;
                    }
                }
                document.body.appendChild(seccion);
            }
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });
    
    function crearElementos(etiqueta, texto, seccion){
        let elemento = document.createElement(etiqueta);
        elemento.appendChild(document.createTextNode(texto));
        seccion.appendChild(elemento);
    }
});