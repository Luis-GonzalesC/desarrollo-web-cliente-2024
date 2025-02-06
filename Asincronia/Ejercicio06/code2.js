document.addEventListener("DOMContentLoaded", ()=>{

    let personaje = localStorage.getItem("personaje");
    let papi = document.querySelector("body");
    let contenedor = document.createElement("div");
    let boton = document.createElement("input");
    contenedor.setAttribute("class", "container mt-5 text-center");

    const url = `https://dragonball-api.com/api/characters/${personaje}`;

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
        for(let dato in datos){
            switch (dato) {
                case "name":
                    let h1 = document.createElement("h1");
                    h1.appendChild(document.createTextNode(datos[dato]));
                    contenedor.appendChild(h1);
                    papi.appendChild(contenedor);
                    break;
                case "description":
                    let p = document.createElement("p");
                    p.appendChild(document.createTextNode(datos[dato]));
                    contenedor.appendChild(p);
                    papi.appendChild(contenedor)
                    break;
                case "image":
                    let img = document.createElement("img");
                    img.setAttribute("src", datos[dato]);
                    img.setAttribute("style", "width:200px; height:500px");
                    contenedor.appendChild(img);
                    papi.appendChild(contenedor)
                    break;
                case "originPlanet":
                    for(let planeta in datos[dato]){
                        if(planeta == "name"){
                            let h1 = document.createElement("h1");
                            h1.appendChild(document.createTextNode(datos[dato][planeta]));
                            contenedor.appendChild(h1);
                            papi.appendChild(contenedor)
                        }else if(planeta == "description"){
                            let p = document.createElement("p");
                            p.appendChild(document.createTextNode(datos[dato][planeta]));
                            contenedor.appendChild(p);
                            papi.appendChild(contenedor)
                        }else if(planeta == "image"){
                            let img = document.createElement("img");
                            img.setAttribute("src", datos[dato][planeta]);
                            img.setAttribute("style", "width:200px; height:500px");
                            contenedor.appendChild(img);
                            papi.appendChild(contenedor)
                        }
                    }
                    break;
                case "transformations":
                    let titulo = document.createElement("img");
                    titulo.setAttribute("src", "https://fontmeme.com/permalink/250206/f91f0c9b069b7255132ee322076840d8.png");
                    contenedor.appendChild(titulo);
                    let div_row = document.createElement("div");
                    div_row.setAttribute("class", "row mt-5 text-center ");
                    for (let transformacion of datos["transformations"]){
                        let div_col = document.createElement("div");
                        div_col.setAttribute("class", "col-3 ms-5 mb-5");
                        
                        let nombre = document.createElement("h3");
                        nombre.appendChild(document.createTextNode(transformacion.name));
                        div_col.appendChild(nombre);

                        let img = document.createElement("img");
                        img.setAttribute("src", transformacion.image);
                        img.setAttribute("style", "width:300px; height:500px;");
                        div_col.appendChild(img);

                        let p = document.createElement("p");
                        p.appendChild(document.createTextNode("Máximo ki:" + transformacion.ki));
                        div_col.appendChild(p);

                        div_row.appendChild(div_col);
                        contenedor.appendChild(div_row)
                        papi.appendChild(contenedor);
                    }
                    break;
            }
        }

        boton.setAttribute("type", "submit");
        boton.setAttribute("value", "Regresar para atrás");
        boton.setAttribute("class", "btn btn-primary mb-5");
        contenedor.appendChild(boton);
        papi.appendChild(contenedor);
        boton.addEventListener("click", (ev)=>{
            ev.preventDefault();
            history.back();
        });
    })
    //CAPTURO Y GESTIONO LOS DATOS
    .catch((error) =>{
        alert(`Problemas accediendo a la URL ${error}`)
    });
});