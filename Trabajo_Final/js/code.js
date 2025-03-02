window.onload = () =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio =  document.getElementsByTagName("input")[1];; //Boton de los edificios

    let boton_recoger = document.getElementById("btn_recoger");
    
    //Referencias al panel de los eficios
    let cerrar_panel = document.querySelectorAll("#cerrar_panel");
    //Array de todos los edificios que hay
    let array_eficios = document.querySelectorAll(".panel_edificio > input");
    //En un inicio todos los edificios estarán escondidos y conforme se obtenga monedas se iran desbloqueando uno a uno
    for (let edificios of array_eficios) {
        edificios.disabled = true;
    }
    //cogiendo los recursos del html
    let recursos = document.querySelectorAll('.recursos .texto_recursos');
    
    //Variable del jugador
    let tiempo_Moneda = 0.25;
    let jugador = {
        moneda: 0,
        piedra: 0,
        madera: 0,
        trabajadores: 0,
        trigo: 0,
        cuero: 0,
        caballos: 0,
        pan:0,
        cabañas:0
    };

    //Variables para generar trigo y establecer un temporizador
    let timer;
    
    //======================PANTALLA INICIAL======================//
    //Generador de monedas
    boton_iniciado.addEventListener("click", (ev)=>{ //Ejecuta la función despues de esperar un número determinado de segundos
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
        }, (tiempo_Moneda * jugador.moneda) * 1000); //convierto el tiempo a milisegundos porque setTimeout requiere milisegundos no segundos
    }, false)

    edificio.addEventListener("click", ()=>{
        //Cuando se haga click que se habilite una lista con los edificios
        abrirPaneles("panel_edificio");
    }, false)

    //LLamo a mi función para cerrar el panel de los edicios
    cerrarPaneles(cerrar_panel[0], "panel_edificio");
    
    //======================CONSTRUYENDO LOS EDIFICIOS======================//
    //Evento para el Almacén => El santuario de los Stand (costo: 2 monedas)
    array_eficios[1].addEventListener("click", () => {
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

    //Funcionalidad del boton de recoger
    boton_recoger.addEventListener("click", ()=>{
        //Se deshabilita el boton por un tiempo
        boton_recoger.disabled = true;
        boton_recoger.setAttribute("style", `
            display: block;
            background-color: grey;
            opacity: 0.5;`);
        //Valor aleatorio entre piedra y madera por el número de trabajadores
        let piedra_random = Math.floor(Math.random() * (jugador.trabajadores + 2) + 1);
        let madera_random = Math.floor(Math.random() * (jugador.trabajadores + 2) + 1);
        jugador.piedra += piedra_random;
        jugador.madera += madera_random;
        alert(`Obtuviste ${piedra_random} de piedra y ${madera_random} de madera`);
        
        recursos[0].textContent = "Piedra Estelar: " + jugador.piedra;
        recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera;
        setTimeout(() => {//Ejecuta la función luego del tiempo indicado
            boton_recoger.disabled = false;
            //Vuelvo a poner el boton en su forma original
            boton_recoger.id = "btn_recoger"; //Vuelvo a reasignar la misma clase
            boton_recoger.setAttribute("style", "display: block"); //Vuelvo a poner la clase en block
        }, /*(45 - jugador.trabajadores) **/ 1000);
    }, false)

    //Evento para la Cabaña => Casa del usuario del Stand (costo: 6 monedas y 6 piedras)
    let min_monedas = 6;
    let min_piedras = 6;
    array_eficios[2].addEventListener("click", ()=>{
        if(jugador.moneda >= min_monedas && jugador.piedra >= min_piedras){//Costo mínimo
            document.querySelector(".cabaña").setAttribute("style", "display:block");//Muestro en pantalla la cabaña que se crea
            jugador.cabañas++;//Le sumo al contador de cabañas creadas
            document.querySelector("#texto_cabaña").textContent = "Cabaña: " + jugador.cabañas;//Muestro en pantalla el número de cabañas que se crean
            
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
    array_eficios[3].addEventListener("click", ()=>{
        if(jugador.moneda >= 8 && jugador.piedra >= 9 && jugador.madera >= 5){
            //Resto a mis recursos para obtener una granja
            jugador.moneda -= 8;
            jugador.piedra -= 9;
            jugador.madera -= 5;

            contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Actualizo la cantidad de piedras
            recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera;

            array_eficios[5].disabled = false;
            array_eficios[3].disabled = true;
            alert("Se ha desbloqueado un nuevo edificio, Los Establos de Hold Horse");

            timer = setInterval(() => {
                jugador.trigo += 1;
                recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo;
                alert("Obtuviste 1 de trigo");
            }, 20000);
        } else alert("Se necesitan 8 monedas, 9 piedras y 5 de madera para poder construir la granja");
    }, false)
    
    /*==========================EDIFICIO DEL MERCADO==========================*/
    //Evento para el Mercado => Mercado de las Sombras (costo: 8 de piedra y 9 de madera)
    let boton_mercado = document.querySelector(".mercado");
    let panel_mercado = document.querySelectorAll(".panel_mercado > input");

    array_eficios[4].addEventListener("click", ()=>{
        if(jugador.piedra >= 8 && jugador.madera >= 9){
            //Restando los valores para construir el mercado
            jugador.piedra -= 8;
            jugador.madera -= 9;
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Muestro la pieda en pantalla
            recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera; //Muestro la madera en pantalla
            array_eficios[4].disabled = true;
            alert("Se ha construido el Mercado");
            boton_mercado.setAttribute("style", "display: block");
        }else alert("Se necesitan 8 piedras y 9 de madera para poder construir el Mercado");
    }, false)

    boton_mercado.addEventListener("click", ()=>{
        //Cuando se haga click que se habilite la lista del mercado
        abrirPaneles("panel_mercado");
    }, false)

    //LLamo a mi función para cerrar el panel de los edicios
    cerrarPaneles(cerrar_panel[1], "panel_mercado");

    //Comprando CUERO en el mercado
    panel_mercado[1].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar Alma de Stand(cuero) vale 3 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 3){
                jugador.moneda -= 3; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.cuero++; //Le agrego el cuero obtenido
                recursos[4].textContent = " Alma de Stand: " + jugador.cuero; //Muestro el cuero en pantalla
            } else alert("No cuenta con 3 monedas para obtener 1 de Alma de Stand(cuero)");
        } else alert("Regrese pronto");
        
    }, false);

    //Comprando PIEDRA en el mercado
    panel_mercado[2].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar PIEDRA vale 1 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 1){
                jugador.moneda -= 1; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.piedra++; //Le agrego la piedra obtenido
                recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Muestro la piedra en pantalla
            } else alert("No cuenta con 1 moneda para obtener 1 de Piedra Estelar");
        } else alert("Regrese pronto");
    }, false);

    //Comprando MADERA en el mercado
    panel_mercado[3].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar MADERA vale 1 monedas. ¿Esta segur@?");
        if(respuesta){
            if(respuesta && jugador.moneda >= 1){
                jugador.moneda -= 1; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.madera++; //Le agrego la madera obtenido
                recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera; //Muestro la madera en pantalla
            } else alert("No cuenta con 1 moneda para obtener 1 de Madera de la Familia Joestar");
        } else alert("Regrese pronto");
        
    }, false);
    /*========================================================================*/


    //==============TODAS LAS FUNCIONES NECESARIAS PARA LA CORRECTA EJECUCIÓN DEL CÓDIGO==============\\
    function abrirPaneles(clase){
        let panel = document.getElementsByClassName(clase)[0];
        panel.setAttribute("style", "display: block");
    }
    //Función para cerrar el panel de los edificios tanto como para el mercado
    function cerrarPaneles(boton, clase){
        boton.addEventListener("click", ()=>{
            //Cuando se haga click que se habilite una lista con los edificios
            let panel = document.getElementsByClassName(clase)[0];
            panel.setAttribute("style", "display: none");
        }, false)
    }
}