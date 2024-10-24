function jaime(){
    console.log("Soy Sr.Hormiga");
}

let timer;
window.onload = () =>{
//timer
/*setInterval => coge una funcion y me la repite cada segundo
entre los parentesis =>( nombre de la funcion o funcion anónima, y los milisegundos 10000 )=> milisegundos => 1s
*/

/*setTimeout => Se espera el numero de segundos y lanza la funcion UNA VEZ.
clearTimeout*/


    document.getElementsByTagName("button")[0].onclick = function(){
        let contador = 0;

        timer = setInterval(function(){
            let dedo = document.querySelector("div");
            contador++;
            dedo.innerText = contador;
            //dedo.innerHTML = frase;
        },500);

        this.disabled = true;
    };

    document.getElementsByTagName("button")[1].onclick = function(){
        clearInterval(timer);
        document.getElementsByTagName("button")[0].disabled = false;
    };
}