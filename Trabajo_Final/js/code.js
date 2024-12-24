window.onload = () =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio =  document.getElementsByTagName("input")[1];; //Boton de los edificios

    let boton_recoger = document.getElementById("btn_recoger");
    
    //Referencias al panel de los eficios
    let cerrar_panel = document.querySelector("#cerrar_panel");
    //Array de todos los edificios que hay
    let array_eficios = document.querySelectorAll(".panel_edificio > input");
    //En un inicio todos los edificios estarán escondidos y conforme se obtenga monedas se iran desbloqueando uno a uno
    for (let edificios of array_eficios) {
        edificios.disabled = true;
    }
    //cogiendo los recursos del html
    let recursos = document.querySelectorAll('.recursos .texto_recursos');
    
    //Variable del juegador
    let tiempo_Modena = 0.25;
    let jugador = {
        moneda: 0,
        piedra: 0,
        madera: 0,
        trabajadores: 0,
        trigo: 0,
        cuero: 0,
        caballos: 0,
        pan:0
    };
    
    //======================PANTALLA INICIAL======================//
    //Generador de monedas
    boton_iniciado.addEventListener("click",
        (ev)=>{ //Ejecuta la función despues de esperar un número determinado de segundos
            setTimeout(() => {
                //==========Creando animación================
                let p = document.createElement("p"); //Creación de un elemento p que será visualmente cada +1 en pantalla
                p.appendChild(document.createTextNode("+1"));
                p.setAttribute("class", "sumar");
                p.setAttribute("style", `
                    top: ${ev.clientY}px; 
                    left: ${ev.clientX}px;
                `);
                boton_iniciado.parentElement.appendChild(p); //Agregando el elemento p al padre del boton
                jugador.moneda++;//Sumandole a la moneda del jugador
                contadorMonedas.textContent = jugador.moneda;//Agreganado texto
                update_edificios(jugador, edificio, array_eficios);//Verificando mis edificios con la moneda y recursos
                //Eliminando el elemento p luego de la animación
                setTimeout(() => {
                    boton_iniciado.parentElement.removeChild(p); 
                }, 2000);//2000 => 2s (lo que dura mi animación creada)
            }, (tiempo_Modena * jugador.moneda) * 1000); //convierto el tiempo a milisegundos porque setTimeout requiere milisegundos no segundos
        }, false)

    edificio.addEventListener("click", 
        ()=>{
            //Cuando se haga click que se habilite una lista con los edificios
            let panel = document.getElementsByClassName("panel_edificio")[0];
            panel.setAttribute("style", "display: block");
        }, false)

    cerrar_panel.addEventListener("click", 
        ()=>{
            //Cuando se haga click que se habilite una lista con los edificios
            let panel = document.getElementsByClassName("panel_edificio")[0];
            panel.setAttribute("style", "display: none");
        }, false)
    
    //======================CONSTRUYENDO LOS EDIFICIOS======================//
    //Evento para el Almacén => El santuario de los Stand (costo: 2 monedas)
    array_eficios[1].addEventListener("click", 
        () => {
        if (jugador.moneda >= 2) {
            jugador.moneda -= 2; //Restamos 2 monedas por comprar el Almacén
            contadorMonedas.textContent = jugador.moneda; //Actualizamos la cantidad de monedas

            boton_recoger.setAttribute("style", "display: block");//Se desbloquea el boton de recoger
            document.getElementsByClassName("recursos")[0].setAttribute("style", "display: block");//Se desbloquea el marcador de recursos
            //disponibles 3 nuevos edificios en el panel correspondiente: Cabaña, Granja y Mercado 
            array_eficios[2].disabled = false;
            array_eficios[3].disabled = false;
            array_eficios[4].disabled = false;

            alert("¡Has construido un Almacén!");
        } else alert("No tienes suficientes monedas para comprar El santuario de los Stand.");
    });

    boton_recoger.addEventListener("click", 
        ()=>{
            //Se deshabilita el boton por un tiempo
            boton_recoger.disabled = true;
            boton_recoger.setAttribute("style", `
                display: block;
                background-color: grey;
                opacity: 0.5;`);
            //Valor aleatorio entre piedra y madera por el número de trabajadores
            jugador.piedra = Math.floor(Math.random() * jugador.trabajadores);
            jugador.madera = Math.floor(Math.random() * jugador.trabajadores);
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra;
            setTimeout(() => {
                boton_recoger.disabled = false;
                //Vuelvo a poner el boton en su forma original
                boton_recoger.id = "btn_recoger";
                boton_recoger.setAttribute("style", "display: block");
            }, (45 - jugador.trabajadores) * 1000);
            alert("click"); 
    }, false);

    //Evento para la Cabaña => Casa del usuario del Stand (costo: 6 monedas y 6 piedras)


}

function update_edificios(jugador, edificio, array_eficios){
    if(jugador.moneda >= 2){
        edificio.setAttribute("style", "display: block");
        //Con 2 monedas se desbloquea directamente edificio
        array_eficios[0].disabled = false;
        array_eficios[1].disabled = false;
    }

}
