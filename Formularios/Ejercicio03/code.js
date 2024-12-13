window.onload = () =>{
    let boton = document.querySelector("input[type='button']"); //Tomando el boton del formulario
    let span = document.getElementsByTagName("span"); ///Cogiendo el texto de cada etiqueta
    let inputs = document.querySelectorAll("input[type='checkbox']"); //Tomando todos los checkbox
    let texa= document.forms[0];

    //APARTADO A
    /*boton.addEventListener("click", 
        function(){
            let i = 0;
            texa[4].value = ''; // Para evitar que se acumulen, tambien me borra el contenido
            for(let e of inputs){
                if(e.checked) texa[4].value += span[i].textContent + "\n";
                i++;
            }
        }, false);*/

    //APARTADO B
    for (let checkbox of inputs) {
        checkbox.addEventListener("click", 
            () => {
                let i = 0;
                texa[4].value = ''; // Para evitar que se acumulen, tambien me borra el contenido
                for (let bof of inputs) {
                    if (bof.checked) texa[4].value += span[i].textContent + "\n"; // Actualizar texto
                    i++;
                }
            }, false);
    }
}