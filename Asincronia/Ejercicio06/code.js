document.addEventListener("DOMContentLoaded", ()=>{
    let seccion = document.querySelector("section");

    const url = "https://dragonball-api.com/api/characters";

    fetch(url)
    //CAPTURO LA RESPUESTA
    .then((respuesta) =>{
        if(!respuesta.ok){
            throw new Error(`Error del fetch ${respuesta.status}`);
        }
        return respuesta.json(); //cambia de texto a formato json
    })
    .then((datos)=>{
        //Capturo y gestiono los datos
        let titulo = document.createElement("img");
        titulo.setAttribute("src", "https://fontmeme.com/permalink/250205/680947c5954c62eea9007ac32857f0b3.png");
        titulo.setAttribute("class", "mb-5")

        seccion.appendChild(titulo);

        for (let dato of datos["items"]) {//Datos.items para acceder a cada array dentro de la api
            let articulo = document.createElement("article");//CREAMOS UN ARTICULO PARA CADA DATO QUE SE MUESTRA EN PANTALLA
            articulo.setAttribute("class", "col-2");
            agregarPersonajes(dato, articulo, seccion);

            articulo.addEventListener("click", ()=>{
                localStorage.setItem("personaje", dato["id"]);
                window.location.href = "mostrar_datos.html";
            });
        }
    })
    //CAPTURO Y GESTIONO LOS DATOS
    .catch((error) =>{
        alert(`Problemas accediendo a la URL ${error}`)
    });

    //Función para agregar todas las P dentro del arbol DOM
    function agregarPersonajes(personaje, arti, seccion){
        arti.setAttribute("class", "col-2 ms-4 mb-5")

        let name = document.createElement("h1");
        name.appendChild(document.createTextNode(personaje["name"]));

        let imagen = document.createElement("img");
        imagen.setAttribute("src", personaje["image"]);
        imagen.setAttribute("style", "width:200px; height:500px");

        let raza = document.createElement("p");
        raza.appendChild(document.createTextNode('Raza: ' + personaje["race"]))
        
        let maxki = document.createElement("p");
        maxki.appendChild(document.createTextNode("Máximo ki: " + personaje["maxKi"]));

        arti.appendChild(name);
        arti.appendChild(imagen);
        arti.appendChild(raza);
        arti.appendChild(maxki);
        seccion.appendChild(arti);
    }
});