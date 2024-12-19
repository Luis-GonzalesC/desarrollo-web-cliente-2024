window.onload = () =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio =  document.getElementsByTagName("input")[1];; //Boton de los edificios

    //Referencias al panel de los eficios
    let cerrar_panel = document.querySelector("#cerrar_panel");

    //Array de todos los edificios que hay
    let array_eficios = document.querySelectorAll(".panel_edificio > input");
    //En un inicio todos los edificios estarán escondidos y conforme se obtenga monedas se iran desbloqueando uno a uno
    for (let edificios of array_eficios) {
        edificios.setAttribute("style", "display: none");
    }
    
    //Variable del juegador
    let tiempo_Modena = 0.25;
    let jugador = {
        moneda: 0,
    };
    
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
                if(jugador.moneda == 2) edificio.setAttribute("style", "display: block") 
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
            //Con 2 monedas se desbloquea directamente edificio
            array_eficios[0].setAttribute("style", "display: block");
        }, false)

    cerrar_panel.addEventListener("click", 
        ()=>{
            //Cuando se haga click que se habilite una lista con los edificios
            let panel = document.getElementsByClassName("panel_edificio")[0];
            panel.setAttribute("style", "display: none");
        }, false)
    
}

