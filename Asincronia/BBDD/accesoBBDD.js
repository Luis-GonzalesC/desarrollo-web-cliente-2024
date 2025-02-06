window.onload = () =>{
    let boton = document.getElementById("boton");
    let salida = document.getElementById("salida");

    const url = "http://www.jaimeweb.es/medac/ejemplos/consulta.php";


    boton.addEventListener("click", ()=>{

        let formu = document.querySelector("form");
        let fd = new FormData(formu);//Esto crea un objeto formulario, obtiene los campos que están disabled pero los readonly si
        //fd.append("Carlos", "el de los ******* largos"); => Método para agregar al formulario
        //fd.delete("imagen"); Esto borra cuando le pasamos por parámtros la key
        console.log("Datos del formulario: ");
        console.log(fd);
        console.log("===========================");
        

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

            for (const juego of datos) {
                let caja = document.createElement("article");
                let titulo = document.createElement("h2");
                titulo.textContent = juego.nombre;
                let img = document.createElement("img");
                img.setAttribute("src", juego.imagen);
                img.setAttribute("width", "150px");

                caja.appendChild(titulo);
                caja.appendChild(img);
                salida.appendChild(caja);
            }
           console.log(datos);
           
            
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });

}