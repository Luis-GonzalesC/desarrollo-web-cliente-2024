window.onload = ()=>{
    let boton = document.querySelector("input");
    let seccion = document.getElementById("salida");
    boton.addEventListener("click", ()=>{
        const url = "https://jsonplaceholder.typicode.com/comments";

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
            for (let dato of datos) {
                let p = document.createElement("p");
                p.appendChild(document.createTextNode("Body: " + dato.body));
                seccion.appendChild(p);
            }
            
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });
    
}