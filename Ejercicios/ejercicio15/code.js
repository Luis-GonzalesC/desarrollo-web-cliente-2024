const colores = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
function ej15(array){
    let correcto = [];
    let incorrecto = [];

    for(let i = 0; i < array.length; i++){
        if(colores.includes(array[i])) correcto.push(array[i]);
        else incorrecto.push(array[i]);
    }
    return correcto.concat(incorrecto);
}