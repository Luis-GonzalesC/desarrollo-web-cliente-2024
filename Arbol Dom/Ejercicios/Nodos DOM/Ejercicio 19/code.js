window.onload = () =>{
    let boton = document.getElementsByTagName("input")[0];

    boton.onclick = function(){
        let texto = prompt("Ingrese una cadena");
        //1. Creo el elemento 
        let hijo = document.createElement("li");

        //2. Creo texto 
        let texto_a_insertar = document.createTextNode(texto);

        //3. Engacho el texto
        hijo.appendChild(texto_a_insertar);

        //4. Asigno el padre e inserto el hijo
        let papi = document.querySelector("ul");//Selecciono al padre
        papi.appendChild(hijo);
    }

}