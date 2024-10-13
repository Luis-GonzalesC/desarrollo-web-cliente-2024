
function compararArray(array1, array2){
    let array_concatenado = []
    let array_final = []; // Array para almacenar los elementos únicos
    
    //Metodo para concatenar arrays
    array_concatenado = array1.concat(array2);
    
    for(let i = 0; i < array_concatenado.length; i++){
        let repetido = false; //Por defecto no está repetido

        for(let j = 0; j < array_concatenado.length; j++){
            //SI ES IGUAL ESTÁ REPETIDO
            if(i != j && array_concatenado[i] == array_concatenado[j]){
                repetido = true;
                j = array_concatenado.length;
                // delete array[i];
            }
        }
        if(!repetido) array_final.push(array_concatenado[i]);
    }
    return array_final;
}