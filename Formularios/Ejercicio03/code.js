window.onload = () =>{
    let boton = document.querySelector("input[type='button']"); //Tomando el boton del formulario
    let span = document.getElementsByTagName("span"); ///Cogiendo el texto de cada etiqueta
    let formu = document.querySelectorAll("input[type='checkbox']"); //Tomando todos los checkbox
    let texa= document.forms[0];


    boton.onclick = function(){
        let i = 0;
        for(let e of formu){
            if(e.checked) texa[4].value += span[i].textContent + "\n";
            i++;
        }
    }
    
}