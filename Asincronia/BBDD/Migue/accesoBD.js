let salida = document.querySelector("#salida");
let url = "";
/**
 * Este funciona de la misma forma que una API.
 * En la url accedemos al documento php que nos devuelve los juegos
*/
document.querySelector("#obtener").addEventListener("click", function () {
    url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";

    fetch(url)
        .then(function (respuesta) {

            if (!respuesta.ok) {
                throw new Error("Error del fetch: " + error);
            };

            return respuesta.json();
        })
        .then(function (datos) {

            for (const juego of datos) {
                let caja = document.createElement("article");

                let titulo = document.createElement("h2");
                titulo.textContent = juego.nombre;

                let img = document.createElement("img");
                img.src = juego.imagen;
                img.setAttribute("width", "150px");
                
                let descrip = document.createElement("p");
                descrip.textContent= juego.descripcion;


                caja.appendChild(titulo);
                caja.appendChild(img);
                caja.appendChild(descrip);

                salida.appendChild(caja);
            }

        })
        .catch(function (error) {
            alert("Problemas accediendo a la URL: " + error);
        })


})

/**
 * En este introducimos los datos.
 * El documento addJuego.php tiene un insert dentro.
 * cogemos los datos del formuario y los enviamos a través de la cabecera.
 */
document.querySelector("#enviar").addEventListener("click", function () {
    url = "http://www.jaimeweb.es/medac/ejemplos/addJuego.php";

    let formu = document.querySelector("form");
    let fd = new FormData(formu);

    //Para añadir un dato nuevo al form
    fd.append("dato", "nuevo dato");

    //Para borrar un dato
    //fd.delete("dato");

    //Para comprobar que datos envio
    //MUCHO CUIDADO PORQUE EN CHROME PUEDE QUE NO MUESTRE LO DATOS
    //Hacer en Mozilla y evitar problemas
    console.log(fd);

    //Indico el método que voy a usar y lo que quiero enviar en el body
    //En este caso los datos del formulario
    const cabecera = {
        method: "POST",
        body: fd
    }

    fetch(url, cabecera)
        .then(function (respuesta) {

            if (!respuesta.ok) {
                throw new Error("Error del fetch: " + error);
            };

            return respuesta.json();
        })
        .then(function () {

            //Escribo esto para tener una guía visual
            let caja = document.createElement("article");
            caja.textContent = "Juego añadido";
            salida.appendChild(caja);

        })
        .catch(function (error) {
            alert("Problemas accediendo a la URL: " + error);
        })


})
