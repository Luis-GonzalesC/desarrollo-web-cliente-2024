const array = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];

function generador_banderas(franjas){
    let franjas_banderas = [];
    for(let i = 0; i < franjas; i++){
        franjas_banderas.push(array[Math.floor(Math.random() * array.length)]);
    }
    return franjas_banderas;
}


function crearTabla(franja_colores){
    document.write("<table> <thead> <tr>");
    for(let i = 0; i < franja_colores.length; i++){
        document.write(`
            <td style="background-color: ${franja_colores[i]}; width: 100px; height: 100px;">
            </td>`
        );
    }
    
    document.write("</tr></thead></table>");
}