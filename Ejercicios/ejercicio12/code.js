function amistad(entrada){
    const MAXLETRASNOMBRE = 4;
    let salida = [];
    for(let i = 0; i < entrada.length; i++){
        if(entrada[i].length == MAXLETRASNOMBRE){
            salida.push(entrada[i]); // Añade el nombre al array de salida
        }
    }
    return salida;
}