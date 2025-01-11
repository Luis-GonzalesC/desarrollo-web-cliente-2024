window.onload = () =>{
    let div = document.querySelector(".mi_div");

    //Math.random() * (max - min) + 1 ) + min;
    let posX = Math.floor(Math.random() * (screen.width - 100) + 1) + 100;
    let posY = Math.floor(Math.random() * (screen.height - 100) + 1) + 100;

    div.setAttribute("style", `
        position: absolute;
        top: ${posX}px;
        left: ${posY}px`);

    document.addEventListener("keydown", 
        (ev)=>{
            let movimiento = 20;
            switch (ev.key) {
                case "ArrowRight": // Muevo a la derecha
                    posX += movimiento;//Sumo y luego compruebo
                    //Evito que el div se salga por la derecha
                    if(posX + div.offsetWidth >= screen.width) posX = screen.width;
                    moverDiv(div, posX, posY);
                    break;
                case "ArrowLeft": // Mover a la izquierda
                    posX -= movimiento;//Sumo y luego compruebo
                    //Evito que el div se salga por la izquieda
                    if(posX + div.offsetWidth <= 0) posX = 0;
                    moverDiv(div, posX, posY);
                    break;
                case "ArrowUp": // Mover hacia arriba
                    posY -= movimiento;//Sumo y luego compruebo
                    //Evito que el div se salga por arriba de la pantalla
                    if(posY + div.offsetHeight <= 0) posY = 0;
                    moverDiv(div, posX, posY);
                    break;
                case "ArrowDown": // Mover hacia abajo
                    posY += movimiento;//Sumo y luego compruebo
                    //Evito que el div se salga por abajo de la pantalla
                    if(posY + div.offsetHeight >= screen.height) posY = screen.height;
                    moverDiv(div, posX, posY);
                    break;
            }
        }, false);
}

//Función que se repite en cada caso del switch
function moverDiv(div, x, y) {
    div.style.left = x + "px";
    div.style.top = y + "px";
}