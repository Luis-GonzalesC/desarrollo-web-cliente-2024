window.onload = () =>{
    let boton = document.querySelector("input[type='button']"); //Tomando el boton del formulario
    let span = document.getElementsByTagName("span"); ///Cogiendo el texto de cada etiqueta
    let inputs = document.querySelectorAll("input[type='checkbox']"); //Tomando todos los checkbox
    let texa= document.forms[0].elements["content"];

    //APARTADO A
    /*boton.addEventListener("click",
        function(ev){
            ev.defaultPrevented();
            for (let i = 0; i < inputs.length; i++) {
                if(inputs[i].checked) {
                    texa.value += span[i].textContent + "\n"; 
                }
            }
        }, false);*/

    //APARTADO B
    //nextElementSibling => Devuelve el elemento hermano siguiente por el que estoy
    let i = 0;
    while (i < inputs.length){
        let checkbox = inputs[i];
        checkbox.addEventListener("click", 
            () => {
                if(checkbox.checked) texa.value += checkbox.nextElementSibling.textContent + "\n";//Saco el texto del span
                else texa.value = texa.value.replace(checkbox.nextElementSibling.textContent + "\n", "");
                i = inputs.length;
        }, false);
        i++;
    }
}