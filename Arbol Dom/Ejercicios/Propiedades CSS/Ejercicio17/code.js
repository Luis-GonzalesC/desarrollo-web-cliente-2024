//let timer1, timer2, timer3, timer4, timer5;
let timer = [0, 0, 0, 0, 0];

window.onload = () => {
    let salto = 30;
    let i = 1;
    let divisito = document.getElementsByTagName("div");
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.getElementsByTagName("input")[1];

    let count = 0;
    boton2.onclick = function () {
        count = 0;
        this.disabled = true;
        for (let div of divisito) {
            mover(div, salto, count, i);
            count++;
        }
    }
    
    boton1.onclick = function(){
        count = 0;
        boton2.disabled = false;
        for (let div of divisito) {
            resetear(div, count);
            count++;
        }
    }

    
}

function resetear(divisito, contador){
    divisito.style.left = 0;
    i = 1;
    clearInterval(timer[contador]);
}

function mover(div, salto, tiempo, i){
    const maximo = 120;
    const minimo = 10;
    //Math.random() * (max - min) + 1 ) + min; 
    let random = Math.floor(Math.random()*(maximo - minimo + 1) + minimo);
    i = 1;
    timer[tiempo] = setInterval(() => {
        
        if ((salto* i) >= (screen.width /*- 200*/)){ //200 porque evito el scrooll
            for(let timers of timer){
                clearInterval(timers);
            }
            alert("El ganador es: " + div.dataset.nombre);
        }else{
            div.style.left = (salto * i) + "px";
            i++;
        }
    }, random);
}