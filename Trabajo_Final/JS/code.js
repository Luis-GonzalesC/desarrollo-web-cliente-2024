window.onload = () =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio = document.getElementsByClassName("container_edificio")[0]; //Div de los edificios
    
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

    
}

