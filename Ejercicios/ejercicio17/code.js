function almacenarArray(){
    let array = [];
    let numero = null;
    let i = 0;

    while (i < 10) {
        numero = parseInt(prompt(`Ingrese 10 números enteros (${i + 1}-10)`));
        if (isNaN(numero)) alert("Número introducido INCORRECTO");
        else {
            array.push(numero);
            i++;
        }
    }
    return array;
}

function mostrarArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(`Indice = ${i} Valor = ${array[i]}`);
    }
}

function rotarValores(array, posini, posfini){
    //Guardar el valor de la posición inicial
    let tmp = array[posini];
    
    /*Muevo cada cajon hacia la derecha
    machacando lo que hay en la actual y pasando uno a uno*/
    //Pero no me funciona xd
    for (let i = posini; i < posfini; i++) {
        array[i] = array[i + 1];
    }
    
    //Pongo el valor inicial en la pos final
    array[posfini] = tmp;
    
}