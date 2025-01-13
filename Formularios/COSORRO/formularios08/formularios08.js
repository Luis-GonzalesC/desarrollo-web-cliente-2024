window.onload = () => {
    let formulario = document.forms[0];
    let longitud = document.querySelectorAll("input[type='radio']").length;
    let i = 0;

    while (i < longitud) {
        let radio = document.querySelectorAll("input[type='radio']")[i];
        radio.addEventListener("click", () => {
            let div = document.getElementById("alo");            
            
            if (radio.checked) {
                let nuevoColor = radio.value;
                
                div.setAttribute("style", 
                    `
                    width: 100%; 
                    height: 200px;
                    background-color:  ${nuevoColor}`);
            }
        }, false);        
        i++;
    }

    /*
        parentElement => Devuelve el padre del elemento
        firstElementChild => Devuelve el primer elemento hijo
        lastElementChild => Devuelve el último elemento hijo
        previousElementSibling => Devuelve el elemento hermano anterior
        nextElementSibling => Devuelve el elemento hermano siguiente
    */
}