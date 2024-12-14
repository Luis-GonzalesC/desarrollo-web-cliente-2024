window.onload = () =>{
    let inputs = document.querySelectorAll("input");
    let span = document.getElementsByTagName("span"); ///Cogiendo el texto de cada checkbox
    let formu = document.getElementsByTagName("form")[0];

    for (let i = 0; i < inputs.length; i++) {
        let checkbox = inputs[i];
        checkbox.addEventListener("click", 
            () => {
                let texto_opciones = span[i].textContent; //Saco el texto del checkbox
                if (checkbox.checked) { //Marcado
                    let opcion = document.createElement("option");//Creo la opción
                    opcion.appendChild(document.createTextNode(texto_opciones)); //Añado el texto a la opción
                    formu.pais.appendChild(opcion); //La agrego a la lista
                }else{ //No Marcado
                    let j = 0;
                    while (j < formu.pais.options.length){
                        if (formu.pais.options[j].value === texto_opciones) { //Si la desmarcada es igual al texto correspondiende la elimino
                            formu.pais.removeChild(formu.pais.options[j]);
                            j = formu.pais.options.length; //Corto bucle
                        }
                        j++;
                    }
                }
            }, false);
    }
}