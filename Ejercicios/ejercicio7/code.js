let tmp = []; //temporal para la suma
let suma = 0;
function sumaParcial(array){
    for(let i = 0; i < array.length; i++){
        suma += array[i];//variable que sumo cada cosa del array
        tmp[i] = suma;//guardo en el array la suma del elemento anterior 
    }
    return tmp;
}