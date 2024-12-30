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
    
    //Variable del jugador
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

    //Variables para generar trigo y establecer un temporizador
    let timer;
    
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
                if(jugador.moneda >= 2){
                    edificio.setAttribute("style", "display: block");
                    //Con 2 monedas se desbloquea directamente edificio
                    array_eficios[0].disabled = false;
                    array_eficios[1].disabled = false;
                }                //Eliminando el elemento p luego de la animación
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
            alert("Están disponibles 3 nuevos edificios");

        } else alert("No tienes suficientes monedas para comprar El santuario de los Stand.");
        }, false);

    boton_recoger.addEventListener("click", 
        ()=>{
            //Se deshabilita el boton por un tiempo
            boton_recoger.disabled = true;
            boton_recoger.setAttribute("style", `
                display: block;
                background-color: grey;
                opacity: 0.5;`);
            //Valor aleatorio entre piedra y madera por el número de trabajadores
            let piedra_random = Math.floor(Math.random() * (jugador.trabajadores + 2));
            let madera_random = Math.floor(Math.random() * (jugador.trabajadores + 2));
            jugador.piedra += piedra_random;
            jugador.madera += madera_random;
            alert(`Obtuviste ${piedra_random} de piedra y ${madera_random} de madera`);
            
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra;
            recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera;
            setTimeout(() => {
                boton_recoger.disabled = false;
                //Vuelvo a poner el boton en su forma original
                boton_recoger.id = "btn_recoger";
                boton_recoger.setAttribute("style", "display: block");
            }, (0 - jugador.trabajadores) * 1000);
        }, false)

    //Evento para la Cabaña => Casa del usuario del Stand (costo: 6 monedas y 6 piedras)
    let min_monedas = 6;
    let min_piedras = 6;
    array_eficios[2].addEventListener("click", 
        ()=>{
            if(jugador.moneda >= min_monedas && jugador.piedra >= min_piedras){//Costo mínimo
                //Le quitamos la cantidad de monedas o piedras del coste por cada cabaña
                jugador.moneda -= min_monedas;
                jugador.piedra -= min_piedras;
                jugador.trabajadores += 5; //Sumamos en 5 los trabajadores
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Actualizo la cantidad de piedras
                recursos[2].textContent = "Usuarios de Stand: " + jugador.trabajadores;
                //Se incrementa su coste en 5 luego de crear una cabaña
                min_monedas += 5;
                min_piedras += 5;
                alert("Acabas de contruir una cabaña");
                alert("Se acaban de agregar 5 trabajadores");
            } else alert(`Como mínimo se necesitan ${min_monedas} monedas y ${min_piedras} piedras`);
        }, false)
    
    //Evento para la Granja => La Granja de la Fuerza (costo: 8 monedas, 9 piedras y 5 de madera)
    array_eficios[3].addEventListener("click",
        ()=>{
            if(jugador.moneda >= 8 && jugador.piedra >= 9 && jugador.madera >= 5){
                array_eficios[5].disabled = false;
                array_eficios[3].disabled = true;
                alert("Se ha desbloqueado un nuevo edificio");

                timer = setInterval(() => {
                    jugador.trigo += 1;
                    recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo;
                    alert("Obtuviste 1 de trigo");
                }, 20000);
            } else alert("Se necesitan 8 monedas, 9 piedras y 5 de madera para poder construir la granja");
        }, false)
    
    //Evento para el Mercado => Mercado de las Sombras (costo: 8 de piedra y 9 de madera)
    array_eficios[4].addEventListener("click",
        ()=>{
            if(jugador.piedra >= 8 && jugador.madera >= 9){
                //FALTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
            }else alert("Se necesitan 8 piedras y 9 de madera para poder construir el Mercado");
        }, false)
}