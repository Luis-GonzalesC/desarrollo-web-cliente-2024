window.onload = () =>{
    let div = document.getElementsByClassName("container")[0];
    let boton = document.querySelector("input");

    let img = document.createElement("img");
    img.setAttribute("class", "img");
    realizaPeticion();//Por defecto cargar una imagen

    boton.addEventListener("click", ()=>{
        realizaPeticion();
    }, false);
    

    function realizaPeticion(){
        const url = "https://dog.ceo/api/breeds/image/random";
        fetch(url)
        .then(function (respuesta) {
            //Capturo las respuesta
            if (!respuesta.ok) {
                throw new Error("Error del fetch :" + respuesta.status);
            }

            //Devuelvo el formato texto o json
            return respuesta.json();
        })
        .then(function (datos) {
            //Capturo y gestiono los datos
            img.setAttribute("src", datos.message)
            div.appendChild(img);
            
        })
        .catch(function (error) {
            alert("Problemas accediendo a la URL: " + error);
        })
    }
}