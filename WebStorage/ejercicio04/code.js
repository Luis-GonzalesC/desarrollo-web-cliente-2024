window.onload = () =>{
    let formu = document.forms[0];
    
    let nombre_tmp = formu[0];
    let contra_tmp = formu[1];
    let nombre = null, contrasenia = null;

    formu[2].addEventListener("click", (ev)=>{
        ev.preventDefault();

        borrar_error(nombre_tmp);
        borrar_error(contra_tmp);
        
        //Validación del nombre
        if(nombre_tmp.value != ""){
            let er = /^[a-z][a-z0-9]{7,}/g; //EXPRESION REGULAR
            if(er.test(nombre_tmp.value)) nombre = nombre_tmp.value; //Si cumple el patron, se crea la variable
            else crear_error(nombre_tmp);//Si no muestra el error
        }else crear_error(nombre_tmp);//Si no muestra el error


        //Validación de la contraseña
        if(contra_tmp.value != ""){
            /*er = /^[A-Za-z0-9]{8}/g;
            if(er.test(contra_tmp.value)) contrasenia = contra_tmp.value;
            else error(contra_tmp);*/
            contrasenia = contra_tmp.value;
        }else crear_error(contra_tmp);//Si no muestra el error

        if(nombre != null && contrasenia != null){//Si todas mis variables existen, quiero crear el objeto
            let usuario = {
                luser: nombre,
                contra : contrasenia
            };
            localStorage.setItem("usuario", (JSON.stringify(usuario)));//Guardo en formato string en el localStorage
        }
    }, false);

    //Formulario para resetar todo
    formu[3].addEventListener("click", ()=>{
        localStorage.clear();
        borrar_error(nombre_tmp);
        borrar_error(contra_tmp);
    }, false);

    //Método para mostrar en rojo los errores
    function crear_error(elemento){
        elemento.setAttribute("style", "border: 2px solid red;");
    }

    function borrar_error(elemento){
        elemento.setAttribute("style", "border: 1px solid black;");

    }
    
}