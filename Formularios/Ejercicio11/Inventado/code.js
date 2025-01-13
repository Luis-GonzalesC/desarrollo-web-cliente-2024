window.onload = () =>{
    let formulario = document.forms[0];

    formulario[7].addEventListener("click", 
        (ev) =>{
            ev.preventDefault();
            
            let tmp_dni = formulario[0];
            let tmp_nombre = formulario[1];
            let tmp_apellido = formulario[2];
            let tmp_fecha_nacimiento = formulario[3];
            let tmp_web = formulario[4];
            let tmp_contrasenia = formulario[5];

            borrar_todos_mensajes(formulario);


            let dni = null, nombre = null, apellido = null, fecha_nacimiento = null, web = null, contrasenia = null;

            //Validacion DNI
            if (tmp_dni.value.trim() == "") {
                mensaje_erroneo(tmp_dni, "DNI es OBLIGATORIO");
            }else{
                if(tmp_dni.value.trim().length == 9){
                    let patron = /^\d{8}[A-Z]$/i;
                    //console.log(patron.test(tmp_dni.value));
                    if(patron.test(tmp_dni.value)) dni = tmp_dni;
                    else mensaje_erroneo(tmp_dni, "No cumple el patron");
                }else{
                    mensaje_erroneo(tmp_dni, "La longitud tiene que ser de 9");
                }
                
            }
            
            //Validacion nombre
            if(tmp_nombre.value.trim() == ""){
                mensaje_erroneo(tmp_nombre, "El nombre no puede ser un campo vacío");
            }else{
                let array_nombre = tmp_nombre.value.split(" ");
                if (array_nombre.length < 1 || array_nombre.length > 2) mensaje_erroneo(tmp_nombre, "Se debe contener uno o dos nombres no más");
                else nombre = tmp_nombre;
            }
            
            //Validacion apellido
            if(tmp_apellido.value.trim() == ""){
                mensaje_erroneo(tmp_apellido, "El nombre no puede ser un campo vacío");
            }else{
                let array_nombre = tmp_apellido.value.split(" ");
                if (array_nombre.length < 1 || array_nombre.length > 2) mensaje_erroneo(tmp_apellido, "Se debe contener uno o dos nombres no más");
                else apellido = tmp_apellido;
            }

            
            //Valicacion fecha de nacimiento
            if(tmp_fecha_nacimiento.value == ""){
                mensaje_erroneo(tmp_fecha_nacimiento, "La fecha de nacimiento no puede ser un campo vacío");
            }else{
                let fecha = tmp_fecha_nacimiento.value.split("-");//Hago un array que tendra como longitud 3

                if (fecha.length == 1) {//Por si me ingresan cualquier cosa que no sea una fecha
                    mensaje_erroneo(tmp_fecha_nacimiento, "Se debe escoger una fecha de nacimiento correcta");
                    valorFecha.type = "date"; // Cambio la fecha a tipo date por si la cambian a text
                } else if (fecha[0].length != 4 || fecha[1].length != 2 || fecha[2].length != 2) { //Comprobando el tamaño de las fechas año, mes y dia sean correctas
                    mensaje_erroneo(tmp_fecha_nacimiento, "La fecha de nacimiento no es correcta, aaaa/mm/dd");
                } else if (isNaN(fecha[0]) || isNaN(fecha[1]) || isNaN(fecha[2])) { //Por si lo cambian a tipo text comprobando que sea un número
                    mensaje_erroneo(tmp_fecha_nacimiento, "La fecha de nacimiento no es válida, deben ser números");
                } else if (fecha[1] < 1 || fecha[1] > 12 || fecha[2] < 1 || fecha[2] > 31) { //Comprobando el mes (1-12) y el dia (1-31)
                    mensaje_erroneo(tmp_fecha_nacimiento, "La fecha de nacimiento no es válida, día o mes incorrecto");
                } else fecha_nacimiento = tmp_fecha_nacimiento;
            }
            
            //Validacion de la web
            if(tmp_web.value.trim() == ""){
                mensaje_erroneo(tmp_web, "La web no puede ser un campo vacío");
            }else{
                let patron = /^(https:\/\/)/i;
                if(patron.test(tmp_web.value)) web = tmp_web;
                else mensaje_erroneo(tmp_web, "La URL de la web debe comenzar por https://");

            }
            //Validacion de la contraseña
            if(tmp_contrasenia.value.trim() == ""){
                mensaje_erroneo(tmp_contrasenia, "La contraseña no puede ser un campo vacío");
            }else{
                if (tmp_contrasenia.value.length < 8 || tmp_contrasenia.value.length > 12) mensaje_erroneo(tmp_contrasenia, "La contraseña solo puede estar entre 8 y 12 caracteres");
                else contrasenia = tmp_contrasenia;
            }

            if(dni != null && nombre != null && apellido != null && fecha_nacimiento != null && web != null && contrasenia != null) formulario.submit();
            else console.log("No mandando");
            
        }, false);
    
    formulario[6].addEventListener("click", ()=>{ 
        formulario.reset();
        borrar_todos_mensajes(formulario);
    }, false);
        
    
    function mensaje_erroneo(elemento, mensaje){
        let div_error = elemento.nextElementSibling;//Esto para saber si el elemento siguiente es mi div con el error y saber si existe o no
        //console.log(div_error);//Para saber si es un div en la consola pone tagName
        
        if(div_error.tagName == "DIV"){
            div_error.textContent = mensaje;
        }else{
            let div = document.createElement("div");
            div.appendChild(document.createTextNode(mensaje));
            div.setAttribute("style", `
                display: flex;
                align-items: center;
                text-align: center;
                background-color: antiquewhite;
                color: black;
                width: 220px;
                height: 40px;
                border: 2px solid black;
                `);

            //elemento.parentElement = saco el padre del elemento
            //elemento.nextSibling = saco el elemento siguiente (el siguiente nodo DOM)
            //Y lo quiero insertar justo antes del elemento siguiente

            elemento.parentElement.insertBefore(div, elemento.nextSibling); /*inserta el nuevo elemento div justo antes de elemento.nextSibling (osea el br)*/
        }
    }

    function borrar_todos_mensajes(formulario){
        let divs = formulario.querySelectorAll("div");

        for (let div of divs) {
            div.remove();
        }
    }
}