window.onload = () => {
    let formulario = document.forms[0];
    let boton = document.querySelector("input[type='submit']");
    let boton_resetear = document.querySelector("input[type='button']");

    boton_resetear.addEventListener("click", 
        ()=>{
            formulario.reset();
        }, false)

    boton.addEventListener("click", (ev) => {
        ev.preventDefault();
        
        //Validacion de cada apartado
        //True si está mal, devuelvo el foco
        if (validarDNI(formulario[0])) formulario[0].focus();
        else if (validarNombre(formulario[1])) formulario[1].focus();
        else if (validarApellido(formulario[2])) formulario[2].focus();
        else if (validarFechaNacimiento(formulario[3])) formulario[3].focus();
        else if (validarWeb(formulario[4])) formulario[4].focus();
        else if (validarContrasenia(formulario[5])) formulario[5].focus();
        else window.location.href = "todo_bien.html"; //Dirección que nos llevará a otra página si todo ha ido bien

    }, false);
}
/*====================Funciones de validación para cada apartado====================*/

//Función para validar el DNI
function validarDNI(valorDni) {
    let dni = valorDni.value;
    let dniNum = dni.substring(0, 8);
    //console.log(dniNum);
    let dniLetra = dni.charAt(8);
    //console.log(dniLetra);

    if (dni == '') {
        alert("El dni no puede estar vacio");
        return true;
    } else if (dni.length != 9) {
        alert("El dni solo debe tener 9 caracteres");
        //valorDni.value = ""; // Dejo vacío la caja de texto
        return true;
    } else if (isNaN(dniNum) || !isNaN(dniLetra)) {
        alert("El dni debe tener 8 números y una letra");
        //valorDni.value = ""; // Dejo vacío la caja de texto
        return true;
    }
    return false;

}

//Función para validar el Nombre
function validarNombre(valorNombre) {
    let nombre = valorNombre.value.split(" ");//Lo combierto en un array para saber su longitud
    if (valorNombre.value == "") {
        alert("El nombre no puede estar vacío");
        return true;
    } else if (nombre.length < 1 || nombre.length > 2) { //Si la longitud del array no es ni 1 o 2 ESTÁ MAL
        alert("Se debe contener uno o dos nombres");
        //valorNombre.value = ""; // Dejo vacío la caja de texto
        return true;
    }
    return false;
}

//Función para validar el Apellido
function validarApellido(valorApellido) {
    let apellido = valorApellido.value.split(" ");//Lo combierto en un array para saber su longitud
    if (valorApellido.value == "") {
        alert("El apellido no puede estar vacío");
        return true;
    } else if (apellido.length < 1 || apellido.length > 2) { //Si la longitud del array no es ni 1 o 2 ESTÁ MAL
        alert("Se debe contener uno o dos apellidos");
        //valorApellido.value = ""; // Dejo vacío la caja de texto
        return true;
    }
    return false;
}

//Función para validar la Fecha de Nacimiento
function validarFechaNacimiento(valorFecha) {
    //console.log(valorFecha.value); => Formato año-mes-dia
    let fecha = valorFecha.value.split("-");//Hago un array que tendra como longitud 3
    
    if (fecha.length == 1) {//Por si me ingresan cualquier cosa que no sea una fecha
        alert("Se debe escoger una fecha de nacimiento correcta");
        valorFecha.type = "date"; // Cambio la fecha a tipo date por si la cambian a text
        return true;
    } else if (fecha[0].length != 4 || fecha[1].length != 2 || fecha[2].length != 2) { //Comprobando el tamaño de las fechas año, mes y dia sean correctas
        alert("La fecha de nacimiento no es correcta");
        return true;
    } else if (isNaN(fecha[0]) || isNaN(fecha[1]) || isNaN(fecha[2])) { //Por si lo cambian a tipo text comprobando que sea un número
        alert("La fecha de nacimiento no es válida, deben ser números");
        return true;
    } else if (fecha[1] < 1 || fecha[1] > 12 || fecha[2] < 1 || fecha[2] > 31) { //Comprobando el mes (1-12) y el dia (1-31)
        alert("La fecha de nacimiento no es válida, día o mes incorrecto");
        return true;
    }
    return false;
}

//Función para validar la Web
function validarWeb(valorWeb) {
    let web = valorWeb.value.substring(0, 8); //Solo tomo los primeros caracteres
    if (web != "https://") {
        alert("La web personal debe empezar con https://");
        return true;
    }
    return false;
}

//Función para validar la Contraseña
function validarContrasenia(valorContra) {
    let contraseña = valorContra.value;
    if (contraseña.length < 8 || contraseña.length > 12) {
        alert("La contraseña solo puede estar entre 8 y 12 caracteres");
        return true;
    }
    return false;
}