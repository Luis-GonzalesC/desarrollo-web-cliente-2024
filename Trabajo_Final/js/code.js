document.addEventListener("DOMContentLoaded",() =>{
    let boton_iniciado = document.getElementsByTagName("input")[0]; //Primer boton en pantalla
    let contadorMonedas = document.getElementById("contadorMonedas");//Monedas en el HTML
    let edificio =  document.getElementsByTagName("input")[1];; //Boton de los edificios

    let boton_recoger = document.getElementById("btn_recoger");
    //Referencias al panel de los eficios
    let cerrar_panel = document.querySelectorAll("#cerrar_panel");
    //Array de todos los edificios
    let array_eficios = document.querySelectorAll(".panel_edificio > input");
    //En un inicio todos los edificios estarán escondidos y conforme se obtenga monedas se iran desbloqueando uno a uno
    for (let edificios of array_eficios) {
        edificios.disabled = true;
    }
    //Por defecto quiero el almacen esté activo
    array_eficios[0].disabled = false;
    array_eficios[1].disabled = false;
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

    //Array de canciones
    let canciones = [
        "audio/cancion1.mp3",
        "audio/cancion2.mp3",
        "audio/cancion3.mp3",
        "audio/cancion4.mp3",
        "audio/cancion5.mp3",
        "audio/cancion6.mp3",
    ];

    let indiceCancion = 0;
    let reproducir = new Audio(canciones[indiceCancion]);
    reproducir.addEventListener("ended", ()=>{
        indiceCancion = (indiceCancion + 1) % canciones.length;
        reproducir.setAttribute("src", canciones[indiceCancion]);
        reproducir.play();
    }, false);

    reproducir.play();//reproducir al cargar el arbol DOM
    reproducir.volume = 0.4;

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
            contadorMonedas.textContent = jugador.moneda;//Agregando texto
            if(jugador.moneda >= 2) edificio.setAttribute("style", "display: block");
            PonerSonido("audio/ora.mp3", 0.3);
            //Eliminando el elemento p luego de la animación
            setTimeout(() => {
                boton_iniciado.parentElement.removeChild(p); 
            }, 2000);//2000 => 2s (lo que dura mi animación creada)
        }, (tiempo_Moneda * jugador.moneda) * 1000); //convierto el tiempo a milisegundos porque setTimeout requiere milisegundos no segundos
    }, false)

    //Cuando se haga click que se habilite el panel con los edificios
    edificio.addEventListener("click", ()=>{
        abrirPaneles("panel_edificio");
    }, false)

    //LLamo a mi función para cerrar el panel de los edicios
    cerrarPaneles(cerrar_panel[0], "panel_edificio");
    
    //======================CONSTRUYENDO LOS EDIFICIOS======================//
    /*=========================EDIFICIO DEL ALMACEN=========================*/
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

            //Bloqueando el Almacen
            array_eficios[1].disabled = true;
            mostrarAlertaPersonalizada("¡Has construido un Almacén!");
            mostrarAlertaPersonalizada("Están disponibles 3 nuevos edificios");

        } else mostrarAlertaPersonalizada("No tienes suficientes monedas para comprar El santuario de los Stand.");
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
        mostrarAlertaPersonalizada(`Obtuviste ${piedra_random} de piedra y ${madera_random} de madera`);

        //Función que devuelve el tamaño de la caja para saber la pos en la animacion
        let tam1 = tamanioCaja(recursos[0]);
        let tam2 = tamanioCaja(recursos[1]);
        //Animación de sumar en ambos valores
        animacionSumar(recursos[0], tam1.width, tam1.heigth, "+"+piedra_random);//Que se vea la animación sumar en piedra
        animacionSumar(recursos[1], tam2.width, tam2.heigth, "+"+madera_random);//Que se vea la animación sumar en madera
        recursos[0].textContent = "Piedra Estelar: " + jugador.piedra;
        recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera;
        setTimeout(() => {//Ejecuta la función luego del tiempo indicado
            boton_recoger.disabled = false;
            //Vuelvo a poner el boton en su forma original
            boton_recoger.id = "btn_recoger"; //Vuelvo a reasignar la misma clase
            boton_recoger.setAttribute("style", "display: block"); //Vuelvo a poner la clase en block
        }, (45 - jugador.trabajadores) * 1000);
    }, false)

    /*==========================EDIFICIO DE LA CABAÑA==========================*/
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
            let tam = tamanioCaja(recursos[2]);//Sacando el tamaño en la caja
            animacionSumar(recursos[2], tam.width, tam.heigth, "+5");//Que se vea la animación sumar en los trabajadores

            //Se incrementa su coste en 5 luego de crear una cabaña
            min_monedas += 5;
            min_piedras += 5;
            mostrarAlertaPersonalizada("Acabas de contruir una cabaña");
            mostrarAlertaPersonalizada("Se acaban de agregar 5 trabajadores");
        } else mostrarAlertaPersonalizada(`Como mínimo se necesitan ${min_monedas} monedas y ${min_piedras} piedras`);
    }, false)

    /*==========================EDIFICIO DE LA GRANJA==========================*/
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
            mostrarAlertaPersonalizada("Ahora conseguiras Trigo cada 20 segundos");
            mostrarAlertaPersonalizada("Se ha desbloqueado un nuevo edificio, Los Establos de Hold Horse");

            timer = setInterval(() => {
                jugador.trigo += 1;
                recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo;
                let tam = tamanioCaja(recursos[3]);//Sacando el tamaño en la caja
                animacionSumar(recursos[3], tam.width, tam.heigth, "+1");
            }, 20000);
        } else mostrarAlertaPersonalizada("Se necesitan 8 monedas, 9 piedras y 5 de madera para poder construir la granja");
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
            //Actualizando los recursos
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Muestro la pieda en pantalla
            recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera; //Muestro la madera en pantalla
            array_eficios[4].disabled = true;
            mostrarAlertaPersonalizada("Se ha construido el Mercado");
            boton_mercado.setAttribute("style", "display: block");
        }else mostrarAlertaPersonalizada("Se necesitan 8 piedras y 9 de madera para poder construir el Mercado");
    }, false)

    boton_mercado.addEventListener("click", ()=>{
        //Cuando se haga click que se habilite la lista del mercado
        abrirPaneles("panel_mercado");
    }, false)

    //LLamo a mi función para cerrar el panel de los edicios
    cerrarPaneles(cerrar_panel[1], "panel_mercado");

    //Comprando CUERO(Alma de Stand) en el mercado
    panel_mercado[1].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar Alma de Stand(cuero) vale 3 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 3){
                jugador.moneda -= 3; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.cuero++; //Le agrego el cuero obtenido
                let tam = tamanioCaja(recursos[4]);//Sacando el tamaño en la caja
                animacionSumar(recursos[4], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en los trabajadores
                recursos[4].textContent = " Alma de Stand: " + jugador.cuero; //Muestro el cuero en pantalla
                mostrarAlertaPersonalizada("Se ha obtenido una Alma de Stand");
            } else mostrarAlertaPersonalizada("No cuenta con 3 monedas para obtener 1 de Alma de Stand(cuero)");
        } else mostrarAlertaPersonalizada("Regrese pronto");
        
    }, false);

    //Comprando PIEDRA en el mercado
    panel_mercado[2].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar PIEDRA vale 1 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 1){
                jugador.moneda -= 1; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.piedra++; //Le agrego la piedra obtenido
                let tam = tamanioCaja(recursos[0]);//Sacando el tamaño en la caja
                animacionSumar(recursos[0], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en piedra
                recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Muestro la piedra en pantalla
                mostrarAlertaPersonalizada("Se ha obtenido 1 Piedra Estelar");
            } else mostrarAlertaPersonalizada("No cuenta con 1 moneda para obtener 1 de Piedra Estelar");
        } else mostrarAlertaPersonalizada("Regrese pronto");
    }, false);

    //Comprando MADERA en el mercado
    panel_mercado[3].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar MADERA vale 1 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 1){
                jugador.moneda -= 1; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.madera++; //Le agrego la madera obtenido
                recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera; //Muestro la madera en pantalla
                let tam = tamanioCaja(recursos[1]);//Sacando el tamaño en la caja
                animacionSumar(recursos[1], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en madera
                mostrarAlertaPersonalizada("Se ha obtenido 1 Madera de la Familia Joestar");
            } else mostrarAlertaPersonalizada("No cuenta con 1 moneda para obtener 1 de Madera de la Familia Joestar");
        } else mostrarAlertaPersonalizada("Regrese pronto");
    }, false);

    //Comprando PAN en el mercado
    panel_mercado[4].addEventListener("click", ()=>{
        let respuesta = confirm("Comprar PAN vale 15 monedas. ¿Esta segur@?");
        if(respuesta){
            if(jugador.moneda >= 15){
                jugador.moneda -= 15; //Le quito al jugador 3 monedas
                contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
                jugador.pan++; //Le agrego la madera obtenido
                recursos[6].textContent = "Pan de los Joestar: " + jugador.pan; //Actualizo los caballos en pantalla
                let tam = tamanioCaja(recursos[6]);//Sacando el tamaño en la caja
                animacionSumar(recursos[6], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en madera
                mostrarAlertaPersonalizada("Se ha obtenido un pan de los Joestar");
            } else mostrarAlertaPersonalizada("No cuenta con 15 monedas para obtener 1 de pan");
        } else mostrarAlertaPersonalizada("Regrese pronto");
    }, false);
    /*========================================================================*/

    /*========================EDIFICIO DE LOS ESTABLOS========================*/
    //Evento para los establos => Los Establos de Hold Horse (costo: 8 monedas, 10 de madera y 5 de trigo)
    let boton_criarCaballos = document.querySelector(".establos");
    array_eficios[5].addEventListener("click", () =>{
        if(jugador.moneda >= 8 && jugador.madera >= 10 && jugador.trigo >= 5){
            //Restando lo valores cuando se desbloquea el edificio
            jugador.moneda -= 8;
            jugador.madera -= 10;
            jugador.trigo -= 5;
            //Actualizando los recursos en pantalla
            contadorMonedas.textContent = jugador.moneda; //Actualizamos la cantidad de monedas
            recursos[1].textContent = "Madera de la Familia Joestar: " + jugador.madera; //Actualizo la madera en pantalla
            recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo; //Actualizo la madera en pantalla

            boton_criarCaballos.setAttribute("style", "display: block");//Mostrando el boton al crear los establos
            array_eficios[5].disabled = true;//Desactivando el edificio del establo
            array_eficios[6].disabled = false;//Activando el nuevo edificio (MOLINO)
            mostrarAlertaPersonalizada("Se ha desbloqueado un nuevo edicio (El molino de la Fuerza)");
        }else mostrarAlertaPersonalizada("Como mínimo se necesitan 8 monedas, 10 de madera y 5 de trigo");
        
    }, false);

    //Permite criar caballos por 2 de cuero y 10 trigos
    boton_criarCaballos.addEventListener("click", ()=>{
        if(jugador.cuero >= 2 && jugador.trigo >= 10){
            //Restando los recursos para obtener 1 caballo
            jugador.cuero -= 2;
            jugador.trigo -= 10;
            //Actualizando los valores en pantalla
            recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo; //Actualizo la madera en pantalla
            recursos[4].textContent = " Alma de Stand: " + jugador.cuero; //Actualizo el cuero en pantalla
            mostrarAlertaPersonalizada("Se ha obtenido un Caballo");
            jugador.caballos++;
            let tam = tamanioCaja(recursos[5]);//Sacando el tamaño en la caja
            animacionSumar(recursos[5], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en piedra
            recursos[5].textContent = "Caballos de Hol Horse: " + jugador.caballos; //Actualizo los caballos en pantalla
        }else mostrarAlertaPersonalizada("Se necesitan 2 de Alma de Stand y 10 trigos para obtener un caballo");
    }, false);
    /*========================================================================*/

    /*========================EDIFICIO DEL MOLINO========================*/
    let boton_amasarPan= document.querySelector(".molino");
    //Evento para el molino => El Molino de la Fuerza (costo: 5 monedas, 8 de piedra y 3 caballos)
    array_eficios[6].addEventListener("click", ()=>{
        if(jugador.moneda >= 5 && jugador.piedra >= 8 && jugador.caballos >=3){
            //Restando los recursos para obtener el molino
            jugador.moneda -= 5;
            jugador.piedra -= 8;
            jugador.caballos -= 3;

            //Actualizando los valores restados en pantalla
            contadorMonedas.textContent = jugador.moneda; //Actualizo la cantidad de monedas
            recursos[0].textContent = "Piedra Estelar: " + jugador.piedra; //Actualizo la piedra en pantalla
            recursos[5].textContent = "Caballos de Hol Horse: " + jugador.caballos; //Actualizo los caballos en pantalla

            //Desactivando los edificios
            array_eficios[6].disabled = true;
            //Habilitando la taberna
            mostrarAlertaPersonalizada("Se ha habilitado un último edificio, El salón de los Stand(Taberna)");
            //Habilitando el Amasar pan
            boton_amasarPan.setAttribute("style", "display:block");
            array_eficios[7].disabled = false;
            document.querySelector("#mercado_pan").setAttribute("style", "display:block");
            mostrarAlertaPersonalizada("Hay un nuevo recurso a comprar en el mercado");
        }else mostrarAlertaPersonalizada("Se necesitan 5 monedas, 8 piedras y 3 caballos para poder comprar el Molino");
    }, false);

    //Evento para poder amasar el pan => (costo: 2 de trigo y min 10 trabajadores)
    boton_amasarPan.addEventListener("click", ()=>{
        if(jugador.trigo >= 2 && jugador.trabajadores >= 10){
            //Restando y sumando los valores al amasar el pan
            jugador.trigo -= 2;
            jugador.pan++;
            let tam = tamanioCaja(recursos[6]);//Sacando el tamaño en la caja
            animacionSumar(recursos[6], tam.width, tam.heigth, "+1");//Que se vea la animación sumar en madera
            //Actualizando los recursos
            recursos[3].textContent = "Trigo de los Joestar: " + jugador.trigo; //Actualizo la madera en pantalla
            recursos[6].textContent = "Pan de los Joestar: " + jugador.pan; //Actualizo los caballos en pantalla
            mostrarAlertaPersonalizada("Se ha obtenido un pan de los Joestar");
        }else mostrarAlertaPersonalizada("Para obtener una unidad de pan son necesarias 2 de trigo y 10 trabajadores");
        
    }, false);
    /*========================================================================*/
    /*========================EDIFICIO DE LA TABERNA========================*/
    //Evento para la taberna => El salón de los Stand (costo: 10 monedas, 7 de madera, 9 de piedra, 3 caballos y 10 de pan)
    array_eficios[7].addEventListener("click", () => {
        if(jugador.moneda >= 10 && jugador.madera >= 7 && jugador.piedra >= 9 && jugador.caballos >= 3 && jugador.pan >= 10){
            mostrarAlertaPersonalizada("¡Felicidades! El juego ha terminado y has ganado. La página se recargará en 3 segundos");
            PonerSonido("audio/despedida.mp3", 1);
            setTimeout(() => {
                location.reload();
            }, 3000);//3 segundos en reiniciar
        }else mostrarAlertaPersonalizada("Para construir la El salón de los Stand(taberna) es necesario 10 monedas, 7 de madera, 9 de piedra, 3 caballos y 10 de pan");
    }, false);

    //==============TODAS LAS FUNCIONES NECESARIAS PARA LA CORRECTA EJECUCIÓN DEL CÓDIGO==============\\
    // Función para crear el alert personalizado con fondo negro
    function mostrarAlertaPersonalizada(mensaje) {
        //Creo un fondo negro
        let fondo = document.createElement("div");
        fondo.setAttribute("class", "fondo");
    
        //Creo un div donde contendrá el mensaje
        let alerta = document.createElement("div");
        alerta.setAttribute("class", "alerta");
        alerta.appendChild(document.createTextNode(mensaje));
    
        //Boton para cerrar el mensaje
        let botonCerrar = document.createElement("button");
        botonCerrar.appendChild(document.createTextNode("Cerrar"));
        botonCerrar.setAttribute("class", "cerrarBtn");
    
        //Boton para cerrar la notificación y el fondo negro
        botonCerrar.addEventListener("click", () => {
            document.body.removeChild(alerta); //Elimina la alerta
            document.body.removeChild(fondo); //Elimina el fondo negro
        });
        //Agrega al body
        alerta.appendChild(botonCerrar);
        document.body.appendChild(fondo); //Agregar el fondo negro
        document.body.appendChild(alerta); //Agregar la alerta
    }
    //Función que activa el panel de los edificios tanto como para el mercado
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
    // Función para manejar la animación
    function animacionSumar(elemento, top, left, mensaje) {
        let p = document.createElement("p"); //Creación del elemento p
        p.appendChild(document.createTextNode(mensaje));
        p.setAttribute("class", "sumar"); //Asignar clase
        p.setAttribute("style", `
            top: ${top}px; 
            left: ${left}px;
        `);
        elemento.parentElement.appendChild(p); //Agregar p al padre del elemento
        //Eliminar el elemento p después de la animación
        setTimeout(() => {
            elemento.parentElement.removeChild(p);
        }, 2000); //Duración de la animación
    }
    //Función que devuelve el ancho y largo de cada elemento para utilizarla en posición donde de haga la animación de sumar
    function tamanioCaja(elemento){
        let estilo = window.getComputedStyle(elemento);
        let width = parseInt(estilo.getPropertyValue("width"));
        let heigth = parseInt(estilo.getPropertyValue("heigth"));
        return {width, heigth};
    }
    //Función donde se crea un sonido
    function PonerSonido(ruta, vol){
        let sonido = new Audio(ruta);
        sonido.volume = vol;
        sonido.play();
    }
});