window.onload = () =>{
    let formulario = document.forms[0];
    let libros = JSON.parse(localStorage.getItem("libros"));
    
    
    formulario[8].addEventListener("click", ()=>{
        let tmp_titulo = formulario[0];
        let tmp_isbn = formulario[1];
        let tmp_paginas = formulario[2];
        let tmp_anio = formulario[4];
        let tmp_portada = formulario[5];
        let tmp_autor = formulario[6];
        let tmp_sinopsis = formulario[7];

        let nuevoLibro = {
            title: tmp_titulo.value,
            pages: tmp_paginas.value,
            cover: tmp_portada.value,
            synopsis: tmp_sinopsis.value,
            year: tmp_anio.value,
            ISBN: tmp_isbn.value,
            author: {
                name: tmp_autor.value,
            }
        };

        libros.push(nuevoLibro);
        localStorage.setItem("libros", JSON.stringify(libros));
    }, false);
    
}