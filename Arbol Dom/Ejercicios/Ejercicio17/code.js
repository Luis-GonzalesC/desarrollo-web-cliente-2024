let timer1, timer2, timer3, timer4, timer5;
let timer = [timer1, timer2, timer3, timer4, timer5];

window.onload = () => {
    let salto = 150;
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
        for (let div of divisito) {
            resetear(div, boton2, count);
            count++;
        }
    }
}

function resetear(divisito, boton2, contador){
    divisito.style.left = 0;
    boton2.disabled = false;
    i = 1;
    clearInterval(timer[contador]);
}

function mover(div, salto, tiempo, i){
    //Math.random() * (max - min) ) + min; 
    let random = Math.floor(Math.random()*(1500 - 250) + 250);
    i = 1;
    timer[tiempo] = setInterval(() => {
        if ((salto* i) <= (screen.width)) {
            div.style.left = (salto * i) + "px";
            i++;
        }else{
            alert("ganaste wey");
        }
    }, random);
}