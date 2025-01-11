window.onload = () =>{
    let div = document.querySelector(".mi_div");
    let timer = null;

    //Math.random() * (max - min) + 1 ) + min;
    let posX = Math.floor(Math.random() * (screen.width - 100) + 1) + 100;
    let posY = Math.floor(Math.random() * (screen.height - 100) + 1) + 100;

    //Valores aleatorios para cada vez que aparece la caja
    div.setAttribute("style", `
        position: absolute;
        top: ${posY}px;
        left: ${posX}px`);

    //apartadoA(div);
    apartadoB(div, timer);
}

//Apartado A
function apartadoA(div){
    document.addEventListener("keydown", 
        (ev)=>{
            let movimiento = 20;//Movimiento por el que va a ir la caja
            switch (ev.key) {
                case "ArrowRight": // Muevo a la derecha
                    moviendoDiv(div, "dere", movimiento);
                    break;
                case "ArrowLeft": // Mover a la izquierda
                    moviendoDiv(div, "iz", movimiento);
                    break;
                case "ArrowUp": // Mover hacia arriba
                    moviendoDiv(div, "arri", movimiento);
                    break;
                case "ArrowDown": // Mover hacia abajo
                    moviendoDiv(div, "aba", movimiento);
                break;
            }
        }, false);
}


//--------------------Apartado B
function apartadoB(div, timer){
    document.addEventListener("keypress", 
        (ev) => {
            let teclas_movimiento = ["w", "s", "a", "d"];//Array de teclas que solo quiero que ejecute mi codigo siempre que se pulse alguna de ellas

            //Solo quiero que se ejecute el codigo si pulso algunas de las teclas de movimiento
            if (teclas_movimiento.includes(ev.key)) {
                /*Como el evento se lanza cada vez que se pulse una tecla, miro si mi variable no es nula, si lo es la reseteo
                Ademas, solo quiero que se resete si pulso alguna de movimiento, no cualquier tecla*/
                if (timer != null) clearInterval(timer);

                let movimiento = 20;//Movimiento por el que va a ir la caja

                // Mover el div una vez por cada tecla presionada
                switch (ev.key) {
                    case "w":
                        timer = setInterval(() => {
                            moviendoDiv(div, "arri", movimiento);
                        }, 50);
                        break;
                    case "s":
                        timer = setInterval(() => {
                            moviendoDiv(div, "aba", movimiento);
                        }, 50);
                        break;
                    case "a":
                        timer = setInterval(() => {
                            moviendoDiv(div, "iz", movimiento);
                        }, 50);
                        break;
                    case "d":
                        timer = setInterval(() => {
                            moviendoDiv(div, "dere", movimiento);
                        }, 50);
                        break;
                }
            }
            
    }, false);
}

//Función para mover el div y que no se salga de la pantalla 
function moviendoDiv(div, direccion, movimiento) {
    //Tomo los valores del div
    let posX = parseInt(div.style.left);
    let posY = parseInt(div.style.top);

    switch (direccion) {
        case "dere":
            posX += movimiento;
            if (posX + div.offsetWidth >= screen.width) posX = screen.width - div.offsetWidth;//Margenes derechos
            break;
        case "iz":
            posX -= movimiento;
            if (posX <= 0) posX = 0;//Margenes izquierdos
            break;
        case "arri":
            posY -= movimiento;
            if (posY <= 0) posY = 0;//Margenes de arriba
            break;
        case "aba":
            posY += movimiento;
            if (posY + div.offsetHeight >= screen.height) posY = screen.height - div.offsetHeight;//Margenes de abajo
            break;
    }
    div.style.left = posX + "px";
    div.style.top = posY + "px";
}

