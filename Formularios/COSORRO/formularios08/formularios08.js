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
        Ejercicio 3 => CHeckbox
        Ejercicio 8 => Radio
        EJercicio 10 => Select

        blur() Pierde el foco del ratón sobre el objeto especificado.
        focus() Obtiene el foco del ratón sobre el objeto especificado.
        select() Selecciona todo el texto dentro del objeto dado.

        parentElement => Devuelve el padre del elemento
        firstElementChild => Devuelve el primer elemento hijo
        lastElementChild => Devuelve el último elemento hijo
        previousElementSibling => Devuelve el elemento hermano anterior
        nextElementSibling => Devuelve el elemento hermano siguiente
        
        EJEMPLOS DE PATRON POR SI ME SIRVE DE AYUDA
        ^[a-zA-Z][a-zA-Z0-9-_]{1,16}
        ^[#][A-Fa-f0-9]{3,6}
        ^(http[s]?:\/\/)(www)?[0-9a-z-]+[\.]([0-9a-z-]+[\.])?[a-z]{2,3}
        (\d{1,3}\.){3}\d{1,3}

    */
}