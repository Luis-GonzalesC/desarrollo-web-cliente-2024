window.onload = () =>{
    let libros = JSON.parse(localStorage.getItem("libros"));
    
    //Agregando titulo a la biblioteca
    let titulo = document.querySelector("h1");
    
    titulo.textContent = `Hay ${libros.length} libros en la biblioteca`;

    //Recorriendo cada cajon del array y agregandolo en el arbol DOM
    for (let i = 0; i < libros.length; i++) {
        mostrar_bibliotecla(libros[i].title, libros[i].cover, i);
    }
    //Mando información a otra página
    let as = document.querySelectorAll("section article a");
    let i = 0;
    while (i < as.length){
        let a = as[i];
        a.addEventListener("click", 
            () => {
                localStorage.setItem("id_pulsado", a.dataset.fila)
        }, false);
        i++;
    }
        

    function mostrar_bibliotecla(mensaje, enlace, i){
        let section = document.querySelector("section");
        //Creando el artículo
        let article = document.createElement("article");
        article.setAttribute("class", "presentacion");
        //Creando los elementos para cada libro
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        let a = document.createElement("a");
        //Agregando los elementos en su orden
        h3.appendChild(document.createTextNode(mensaje));
        img.setAttribute("src", enlace);
        a.setAttribute("href", "mostrar.html");
        a.setAttribute("data-fila", i);


        a.appendChild(img)
        //Agregando los elementos al article
        article.appendChild(h3);
        article.appendChild(a);
        //Agregando al section el article
        section.appendChild(article);

        
    }
}