function boton1(){
    let tablita = document.getElementsByTagName("table")[0];

    console.log("Anchura "+tablita.getAttribute("width"));
    console.log("Altura " +tablita.getAttribute("heigth"));

    let ancho = 0, largo = 0;
    //Pide unos valores nuevos para cada propiedad y los aplica a la tabla.
    do{
        ancho = Number(prompt("Ingrese valores para el ancho del tabla"));
        largo = Number(prompt("Ingrese valores para el largo del tabla"));
    }while(ancho <= 0 || largo <= 0);

    /*
    El primero muestra los valores de anchura y altura de la tabla, pide unos valores
    nuevos para cada propiedad y los aplica a la tabla. 
    ¿se aplican correctamente los valores? ¿Falla alguno?
    * Si no le pongo los px no se aplican los valorens
        tablita.setAttribute("width", ancho);
        tablita.setAttribute("heigth", largo);
    */

    tablita.setAttribute("width", ancho+"px");
    tablita.setAttribute("heigth", largo+"px");
}

function boton2(){
    /*El segundo muestra el valor actual del borde de la tabla y solicita un valor nuevo
    para aplicarlo. ¿Funciona correctamente el nuevo valor*/
    let tablita = document.getElementsByTagName("table")[0];

    console.log("El borde es: "+ tablita.getAttribute("border"));

    let borde = 0;
    do{
        borde = Number(prompt("Ingrese el valor de un borde a aplicar"));
    }while(borde <= 0);
    
    tablita.setAttribute("border", borde);
}

let contador = 0;
function boton3(){
    /*
    El tercer botón va cambiar la alineación de la tabla cada vez que se pulse. Es
    decir, si la tabla está alineada al centro, al pulsar el botón, la tabla quedará
    alineada a la derecha. Si se pulsa el botón otra vez, se alineará a la izquierda y si
    vuelvo a pulsarlo, la tabla se pondrá en el centro
    */
    let tablita = document.getElementsByTagName("table")[0];
    switch (contador) {
        case 0:
            tablita.setAttribute("align", "right");
            contador++;
            break;
        case 1:
            tablita.setAttribute("align", "left"); 
            contador++;
            break;
        case 2:
            tablita.setAttribute("align", "center");
            contador = 0;
            break;
    }
}
