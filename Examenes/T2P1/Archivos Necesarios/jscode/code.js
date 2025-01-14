window.onload = () =>{
    let formulario = document.forms[0];//Tomando el formulario

    /*FUNCIONALIDADES 1*/
    let email = formulario.email;//Tomando el campo input
    email.addEventListener("keydown", 
        (ev)=>{
            const NOTECLAS = ["Enter", "Backspace", "CapsLock", "Tab", "Escape", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "NumLock", "Delete","End", "PageDown", "Insert", "Shift", "Alt", "Control", "Meta", "AltGraph", "Dead"];
            if(!NOTECLAS.includes(ev.key)) formulario.remail.value += ev.key;
        }, false);
    
    /*Funcionalidad de los Checkbox*/
    let inputs = [formulario.af1, formulario.af2, formulario.af3];//Tomo todos los checkbox de aficion
    let texa = document.getElementById("afiText");

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

    //2. Reglas de validación BOTON ENVIAR
    formulario[19].addEventListener("click", 
        (ev)=> {
            ev.preventDefault();
            borrar_todos_mensajes(formulario);

            let tmp_nombre = formulario[0];
            let tmp_clave = formulario[1];
            let tmp_repite_clave = formulario[2];
            let tmp_respuesta = formulario[4];
            let tmp_edad = formulario[8];
            let tmp_captcha = formulario[15];

            let nombre = null, clave = null, respuesta = null, edad = null, captcha = null;
            //Validación del nombre
            if (!campo_vacio(tmp_nombre)) nombre = tmp_nombre.value;
            else tmp_nombre.focus();
            //Validación de CLAVES
            if (!campo_vacio(tmp_clave)){
                /*if (tmp_clave.value.length < 8) mensaje_erroneo(tmp_clave, "La longitud mínima de la clave debe ser de 8 caracteres");
                else clave = tmp_clave.value;*/
                //Con expresiones regulares
                let patron = /^\w{8,}/i;
                if(patron.test(tmp_clave.value)) clave = tmp_clave.value;
                else mensaje_erroneo(tmp_clave, "La longitud mínima de la clave debe ser de 8 caracteres");
                
            }else tmp_clave.focus();

            if (!campo_vacio(tmp_repite_clave)){
                if(clave != tmp_repite_clave.value){
                    mensaje_erroneo(tmp_repite_clave, "Las claves no coinciden");
                    tmp_clave.value = "";
                    tmp_repite_clave.value = "";
                }
            }else tmp_repite_clave.focus();

            //Verificando si coincide la clave con el nombre
            if(clave != null && nombre != null && clave == nombre) mensaje_erroneo(tmp_clave, "La clave no puede coincidir con el contenido del campo usado para el nombre");
            else tmp_clave.focus();

            //El campo donde se indican la pregunta debe tener seleccionada alguna opción de su lista que no sea la primera
            let select = formulario.pregunta;
            if(select.selectedIndex == 0) mensaje_erroneo(select, "Tienes que seleccionar alguna otra opción que no sea la primera");
            else select.focus();
            
            //La longitud mínima del campo donde va la respuesta debe ser 6 caracteres.
            if (!campo_vacio(tmp_respuesta)){
                if (tmp_respuesta.value.length < 6) mensaje_erroneo(tmp_clave, "La longitud mínima de la respuesta debe ser de 6 caracteres");
                else respuesta = tmp_respuesta.value;
            }else tmp_respuesta.focus();

            //Al menos un botón radio debe estar marcado.
            let radios = document.querySelectorAll("input[type='radio']");
            let j = 0;
            let encontrado = false
            while (j < radios.length && !encontrado){
                if(!radios[j].checked) j++;
                else encontrado = true;
            }
            if(j == radios.length){
                console.log("Al menos un botón radio debe estar marcado");
                
                //mensaje_erroneo(radios[j], "Al menos un botón radio debe estar marcado");
            }
            
            //El campo edad solo puede contener números y estar en un rango válido que va desde 3 hasta 99 años.
            if (!campo_vacio(tmp_edad)){
                if(isNaN(tmp_edad.value)) mensaje_erroneo(tmp_edad, "La edad solo puede contener números ENTEROS");
                else{
                    if(parseInt(tmp_edad.value) < 3 || parseInt(tmp_edad.value) > 99){
                        mensaje_erroneo(tmp_edad, "Rango válido desde 3 hasta 99 años");
                    }else edad = tmp_edad.value;
                }
            }else tmp_edad.focus();

            //El valor del campo de la palabra de seguridad debe coincidir con el código QGPHJD (todo en mayúsulas)
            if(!campo_vacio(tmp_captcha)){
                if(tmp_captcha.value != "QGPHJD") mensaje_erroneo(tmp_captcha, "Captcha incorrecto");
                else captcha = tmp_captcha.value;
            }else tmp_captcha.focus();

            if(!formulario[17].checked) mensaje_erroneo(formulario[17], "Se deben aceptar las condiciones de uso");
            
            //Enviando el formulario
            if(nombre != null && clave != null && respuesta != null && edad != null && captcha != null && encontrado) formulario.submit();

        }, false);
    
    //3 Boton resetear
    formulario[18].addEventListener("click", ()=>{borrar_todos_mensajes(formulario)}, false)

    
    /*Función para validar todos los campos que se encuetran vacios*/
    function campo_vacio(elemento){ //True vacio, false campo NO vacio
        if(elemento.value.trim() == ""){
            mensaje_erroneo(elemento, "No puede ser un campo vacío");
            return true;
        }
        return false;
    }


    function mensaje_erroneo(elemento, mensaje){

        let div = document.createElement("div");
        div.appendChild(document.createTextNode(mensaje));

        div.setAttribute("style", `
            display: flex;
            margin: 5px;
            align-items: center;
            text-align: center;
            background-color: antiquewhite;
            color: black;
            width: 220px;
            height: 60px;
            border: 2px solid black;
            `);

        elemento.setAttribute("style", "border: 2px solid red;");
        
        elemento.parentElement.insertBefore(div, elemento.nextSibling); /*inserta el nuevo elemento div justo antes de elemento.nextSibling (osea el br)*/

    }

    function borrar_todos_mensajes(formulario){
        let elementos = formulario.querySelectorAll("input");
        formulario.pregunta.setAttribute("style", "border: 1px solid black;");
        for (let elemento of elementos) {
            elemento.setAttribute("style", "border: 1px solid black;");
        }

        let divs = formulario.querySelectorAll("div");

        for (let div of divs) {
            div.remove();
        }
    }
}