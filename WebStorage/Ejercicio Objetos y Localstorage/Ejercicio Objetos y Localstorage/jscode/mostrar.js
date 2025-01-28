window.onload = () =>{
    let libros = JSON.parse(localStorage.getItem("libros"));
    let elemento = localStorage.getItem("id_pulsado");
    let seccion = document.getElementById("info");

    let img = document.createElement("img");
    let h2 = document.createElement("h2");

    let tabla = document.createElement("table");
    let tbody = document.createElement("tbody");
    tabla.appendChild(tbody);

    for(dato in libros[elemento]){
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td_estela = document.createElement("td");
        switch (dato) {
            case "title":
                h2.appendChild(document.createTextNode(libros[elemento][dato]));
                break;
            case "pages":
                crearTabla(dato, libros[elemento][dato], tr, td, td_estela);
                break;
            case "genre":
                crearTabla(dato, libros[elemento][dato], tr, td, td_estela);
                break;
            case "synopsis":
                crearTabla(dato, libros[elemento][dato], tr, td, td_estela);
                break;
            case "year":
                crearTabla(dato, libros[elemento][dato], tr, td, td_estela);
                break;
            case "ISBN":
                crearTabla(dato, libros[elemento][dato], tr, td, td_estela);
                break;
            case "author":
                crearTabla(dato, libros[elemento][dato]["name"], tr, td, td_estela);
                break;
            case "cover":
                img.setAttribute("class", "portada");
                img.setAttribute("src", libros[elemento][dato])
                break;
        }

    }
    seccion.appendChild(h2);
    seccion.appendChild(tabla);
    seccion.appendChild(img);
    

    function crearTabla(clave, valor, tr, td, td2){
        td.appendChild(document.createTextNode(clave));
        td2.appendChild(document.createTextNode(valor));

        tr.appendChild(td);
        tr.appendChild(td2)
        tbody.appendChild(tr);
    }
}