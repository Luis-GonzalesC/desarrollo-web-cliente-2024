window.onload = () => {
    arriba();
}

let celdas_td = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
];

function arriba(){
    let celdas = document.getElementsByTagName("th");
    let boton = document.getElementsByTagName("input")[0];
    boton.onclick = function () {
        celdas_td.forEach((fila, i) =>{
            fila.forEach((elemento, j) =>{
                if(elemento == 1){
                    celdas[j].style.backgroundColor = "red";
                }
            });
        });
    }
}