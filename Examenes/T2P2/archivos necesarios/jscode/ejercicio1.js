document.addEventListener("DOMContentLoaded", ()=>{
    let botones = document.getElementsByTagName("input");
    let div = document.querySelector("div");
    
    //Apartado A
    const url = "https://randomuser.me/api";

    botones[0].addEventListener("click", ()=>{
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
            console.log(datos["results"][0]);//Mostrando por consola el usuario
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });

    //Apartado B
    botones[1].addEventListener("click", ()=>{
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
            for (let dato of datos["results"]) {
                let articulo = document.createElement("article");//Creando el artículo
                for (let clave in dato) {//Recorriendo al usuario
                    articulo.setAttribute("class", "usuario");//Agrego la clase usuarioa cada artículo
                    switch (clave) {//Por cada propiedad muestro una cosa
                        case "name":
                            agregandoDOM(articulo, dato[clave]["first"] + " " + dato[clave]["last"]);
                            //articulo.appendChild(document.createTextNode(dato[clave]["first"] + " " + dato[clave]["last"]));
                            break;
                        case "dob":
                            agregandoDOM(articulo, ": " + dato[clave]["age"]);
                            //articulo.appendChild(document.createTextNode(": " + dato[clave]["age"]));
                            break;
                        case "picture":
                            let img = document.createElement("img");
                            img.setAttribute("src", dato[clave]["medium"]);
                            articulo.appendChild(img);
                            break;
                    }
                    div.appendChild(articulo);
                }
            }
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });

    //datos.result[0].name.first

    //FUNCION PARA AGREGAR AL ARBOL DOM EL TEXTO
    function agregandoDOM(articulo, texto){
        articulo.setAttribute("class", "usuario");//Agrego la clase usuario a cada artículo
        articulo.appendChild(document.createTextNode(texto));
    }

});
