window.onload = () =>{
    let boton = document.querySelector("input");
    let seccion1 = document.getElementsByTagName("section")[0];
    let seccion2 = document.getElementsByTagName("section")[1];

    boton.addEventListener("click", ()=>{
        boton.disabled = true;
        const url = "https://fakestoreapi.com/products";

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
            for (const dato of datos) {
                let ul = document.createElement("ul");
                let li1 = document.createElement("li");
                let li2 = document.createElement("li");
                li1.appendChild(document.createTextNode(dato.title));
                li2.appendChild(document.createTextNode(dato.price));
                ul.appendChild(li1);
                ul.appendChild(li2);
                seccion1.appendChild(ul);

                let div = document.createElement("div");
                let img = document.createElement("img");

                li1.addEventListener("mouseenter", function(ev){
                    console.log(ev);
                    let posx = ev.clientX;//ARREGLAR ESTO
                    let poxy = ev.clientY;//ARREGLAR ESTO
                    img.setAttribute("src", dato.image);
                    img.setAttribute("class", "img");
                    div.setAttribute("class", "contendor_imagen");
                    div.appendChild(img);
                    document.body.appendChild(div);
                    

                    li1.addEventListener("mousemove", ()=>{
                        div.setAttribute("style", `
                            left: ${posx}px;
                            top: ${poxy}px`);
                    }, false);
                });

                li1.addEventListener("mouseout", ()=>{
                    seccion1.parentNode.removeChild(div);
                })
            }
            
        })
        .catch((error)=>{
            alert("Problemas accediendo a la URL: " + error);
        })
    });

}