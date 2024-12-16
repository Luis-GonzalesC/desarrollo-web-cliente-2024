window.onload = () =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio =  document.getElementsByTagName("input")[1];; //Boton de los edificios

    //Referencias al panel de los eficios
    let panel = document.getElementsByClassName("panel_edificio")[0];
    let cerrar_panel = document.querySelector("#cerrar_panel");

    let tiempo_Modena = 0.25;
    let jugador = {
        moneda: 0,
    };

    //Generador de monedas
    boton_iniciado.addEventListener("click",
        ()=>{ //Ejecuta la función despues de esperar un número determinado de segundos
            setTimeout(() => {
                jugador.moneda++;
                contadorMonedas.textContent = jugador.moneda;
                if(jugador.moneda == 2) edificio.setAttribute("style", "display: block")
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
    
}

