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

            //Validacion DNI
            if (tmp_dni.value.trim() == "") {
                mensaje_erroneo(tmp_dni, "DNI es OBLIGATORIO");
            }
            //Validacion nombre
            if(tmp_nombre.value == ""){
                mensaje_erroneo(tmp_nombre, "El nombre no puede ser un campo vacío");
            }
            //Validacion apellido
            if(tmp_apellido.value == ""){
                mensaje_erroneo(tmp_apellido, "El Apellido no puede ser un campo vacío");
            }
            //Valicacion fecha de nacimiento
            if(tmp_fecha_nacimiento.value == ""){
                mensaje_erroneo(tmp_fecha_nacimiento, "La fecha de nacimiento no puede ser un campo vacío");
            }
            //Validacion de la web
            if(tmp_web.value == ""){
                mensaje_erroneo(tmp_web, "La web no puede ser un campo vacío");
            }
            //Validacion de la contraseña
            if(tmp_contrasenia.value == ""){
                mensaje_erroneo(tmp_contrasenia, "La contraseña no puede ser un campo vacío");
            }
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
        let divs = document.querySelectorAll("div");

        for (let div of divs) {
            div.remove();
        }
    }
}
