function likes(array_nombres){
    let longitud = array_nombres.length;
    let cadena = null;
    switch (longitud){
        case 0:
            cadena = "no one likes this";
            break;
        case 1:
            cadena = `${array_nombres[0]} likes this`;
            break;
        case 2:
            cadena = `${array_nombres[0]} and ${array_nombres[1]} likes this`;
            break;
        case 3:
            cadena = `${array_nombres[0]}, ${array_nombres[1]} and ${array_nombres[2]} likes this`;
            break;
        default:
            cadena = `${array_nombres[0]}, ${array_nombres[1]} and ${longitud-2} others likes this`;
    }
    return cadena;
}