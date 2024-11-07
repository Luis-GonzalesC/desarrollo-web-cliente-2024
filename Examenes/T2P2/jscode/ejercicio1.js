let timer;//Variable del tiempo que lo usaré para generar de forma aleatoria los valores

window.onload = () =>{
    apartadoA_B();
}

//Apartado a
function apartadoA_B(){
    let boton_generar = document.getElementsByClassName("botones")[0];
    let boton_comparar = document.getElementsByClassName("botones")[1];
    
    let div_iz = document.getElementById("ladoIzq");
    let div_der= document.getElementById("ladoDer");
    let div_abajo = document.getElementById("salida");



    //Punto numero 1 => Al pulsar el botón aparece un valor numérico entre 1 y 50, obtenido de forma aleatoria. (ambos divs)
    boton_generar.onclick = function(){
        //Valores aleatorios para los divs
        const maximo = 50;
        const minimo = 1;

        //Apartado B
        timer = setInterval(() => {
            //Math.random() * (max - min) + 1 ) + min;
            let random1 = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);//para el div de la iz
            let random2 = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);//para el div de la derecha
            
            div_iz.textContent = random1;
            div_der.textContent = random2;
            //2. El boton genera queda desabilitado y se habilita el de comparar
            this.disabled = true;
            boton_comparar.disabled = false;
            div_abajo.textContent = "";//limpiando el div interior cuando se pulse generar
        }, 1000);
        
    }

    //Punto numero 3 =>  Al pulsar el botón Compara el mayor de los valores contenidos en los divs superiores se mueve al div inferior.
    boton_comparar.onclick = function(){
        clearInterval(timer);
        //primer caso que el div izquierdo sea menor que el derecho
        if(parseInt(div_iz.textContent) < parseInt(div_der.textContent)) div_abajo.textContent = div_der.textContent;
        //segundo caso que el div izquierdo sea mayor que el derecho
        else if (parseInt(div_iz.textContent) < parseInt(div_der.textContent)) div_abajo.textContent = div_iz.textContent;
        //Y en tercer caso que ambos sean iguales
        else div_abajo.textContent = div_iz.textContent;
        //Desabilito el boton comprar y habilito el de generar
        this.disabled = true;
        boton_generar.disabled = false;
        //Limpio los 2 div (tanto iz como der)
        div_iz.textContent = "";
        div_der.textContent = "";
    }

}