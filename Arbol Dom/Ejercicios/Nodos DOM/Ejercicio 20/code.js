window.onload = () =>{
    let padre = document.getElementsByTagName("p")[0];
    let boton_generar = document.getElementsByTagName("input")[0];
    let boton_borrar_viejo = document.getElementsByTagName("input")[1];
    let boton_borrar_nuevo = document.getElementsByTagName("input")[2];
    let sustituir = document.getElementsByTagName("input")[3];

    boton_generar.onclick = function(){
        //1.Creando el nodo
        let nuevo = document.createElement("p");
        //COLOCANDO EL ATRIBUTO
        nuevo.setAttribute("class","segunda");
        //2 .Creamos el nodo texto
        let texto = document.createTextNode("Este es el nuevo párrafo que se acaba de crear")
        //3. Engancho el texto a mi elementos
        nuevo.appendChild(texto);
        
    }
}