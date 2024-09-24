const array = ["red", "yellow", "green", "white", "blue", "brown", "pink", "black"];
function generador_banderas(franjas){
    let franjas_banderas = [];
    for(let i = 0; i < franjas; i++){
        franjas_banderas.push(array[Math.floor(Math.random() * array.length)]);
    }
    return franjas_banderas;
}