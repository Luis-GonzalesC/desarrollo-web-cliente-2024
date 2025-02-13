document.addEventListener("DOMContentLoaded", ()=>{
    let obtener_datos = document.querySelector("input[type='button']");//Boton 1
    let enviar_datos = document.querySelector("input[type='submit']");//Boton 2

    let div = document.getElementById("salida");//DIV donde se mostrará todo
    
    //BOTON DE OBTENER DATOS
    obtener_datos.addEventListener("click", ()=>{
        const url = "http://www.jaimeweb.es/medac/getProfesores.php";
        //Cada que se pulse el boton quiero eliminar el contenido
        eliminarContenido(obtener_datos, div);//Función creada por mi
        //Realizando la consulta a la BBDD
        fetch(url)
        .then((respuesta)=>{
            //Capturo la respuesta        
            if(!respuesta.ok){
                throw new Error("Error del fetch: " + respuesta.status);
            }
            return respuesta.json();//Si todo va bien se manda en formato JSON
        })
        .then((datos)=>{
            //Capturo y gestiono los datos
            //Mostrando por consola los datos (APARTADO A)
            console.log("Apartado A");
            console.log(datos);
            
            //Mostrand en el DIV de salida los datos de cada profesor (APARTADO B)
            for (let dato of datos) {
                let nombre = document.createElement("p");
                let apellido = document.createElement("p");;
                let articulo = document.createElement("article");//Creando el artículo
                for (let clave in dato) {
                    articulo.setAttribute("class", "ficha");//Agrego la clase usuarioa cada artículo
                    switch (clave) {
                        case "nombre":
                            nombre.appendChild(document.createTextNode(dato[clave]));
                            break;
                        case "dni":
                            apellido.appendChild(document.createTextNode(dato[clave]));
                            break;
                    }
                }
                articulo.appendChild(nombre);//Inserto primero el nombre
                articulo.appendChild(apellido);//Insert el apellido
                div.appendChild(articulo);//Agrego al arbol dom
            }

        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });

    //BOTON DE ENVIAR DATOS
    enviar_datos.addEventListener("click", (e)=>{
        e.preventDefault();
        const url = "http://www.jaimeweb.es/medac/setProfesores.php";

        let formu = document.forms[1];//Tomando el segundo formulario
        
        let fd = new FormData(formu);

        const cabecera = {
            method: "POST",
            body: fd
        };

        fetch(url, cabecera)//Se pone la cabecera como segundo parámetro para hcaer post
        .then((respuesta)=>{
            //Capturo la respuesta        
            if(!respuesta.ok){
                throw new Error("Error del fetch: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then((datos)=>{
            //Capturo y gestiono los datos
            //Apartado B
            div.textContent = datos;

        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    })

    function eliminarContenido(boton_limpiar, papi){
        //Boton limpiar que limpiar la salida
        boton_limpiar.addEventListener("click", ()=>{
            //Mientras papi tenga hijos (mi contenedor)
            while(papi.firstChild){
                papi.removeChild(papi.firstChild);//matalos a todos(sus hijos)
            }
        })
    }
});