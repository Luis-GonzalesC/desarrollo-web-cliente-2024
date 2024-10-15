//Funcion del ejercicio Nº1
function ejercicio1(){
    let euros = 0;
    //Variable constante del dolar que puede variar
    const dolar = 1.0965;
    do{
        euros = parseFloat(prompt("Ingrese una cantidad en euros"));
        if(isNaN(euros)) alert("Ingrese un número no UNA CADENA");
        else if(euros < 0){
            alert("Ingrese un número positivo");
        }
    }while(isNaN(euros) || (euros < 0));

    let resultado = (euros * dolar); //Se realiza la operacion
    alert(`${euros} euros equivale a ${resultado} dólares americanos`)
}

//Funcion del ejercicio Nº2
function ejercicio2(){
    //Variables que se usarán para comprobar las notas
    let calificacion = 0;
    let suspensos = 0;
    let aprobados = 0;
    let notables = 0;
    let sobresalientes = 0;
    let i = 0;
    do{
        calificacion = Number(prompt(`Ingrese 10 calificaciones en el rango (0 - 10): ${i+1}`));
        if(isNaN(calificacion) || calificacion == " ") alert("No ingrese una cadena");
        else if(calificacion < 0) alert("No ingrese un número negativo");
        else if(calificacion < 0 || calificacion > 10) alert("Rango de numeros entre 0 y 10");
        else if (calificacion >= 0 && calificacion <= 10) i++;

        //Se comprueba con las notas la cantidad de (suspensos, aprobados, notables, sobresalientes)
        if(calificacion < 5) suspensos++;
        else if (calificacion >= 5 && calificacion <= 6) aprobados++;
        else if (calificacion >= 7 && calificacion <= 8) notables++;
        else sobresalientes++;

    }while(i < 10);
    alert(`El número de suspensos es: ${suspensos}
            El número de aprobados es: ${aprobados}
            El número de notables es: ${notables}
            El número de sobresalientes es: ${sobresalientes}`);
}

//Funcion del ejercicio Nº3
function ejercicio3(){
    //Apartado A
    let numero = 0; //variable a almacenar dentro del array
    let array = []; //array inicializado
    do{
        numero = parseFloat(prompt("Ingrese un número positivo (negativo si desea salir)"));
        if(isNaN(numero)) alert("No ingrese una cadena");
        else if (numero >= 0) array.push(numero);
    }while(numero >= 0);

    //Apartado B
    console.log(array.join(" "));
    
    //Apartado C
    let suma = 0;
    array.forEach((ele) =>{
        suma += ele;
    });
    console.log("La suma de todos los números dentro del array es: "+suma);
 
    //Apartado D
    numero = 0;
    do{
        numero = parseInt(prompt("Ingrese un número entero positivo"));
        if(isNaN(numero)) alert("No ingrese una cadena");
        if (numero < 0) alert("Ingrese un número ENTERO POSITIVO");
    }while(numero < 0 || isNaN(numero));

    //Aparado E
    //Primer bucle para buscar la primera pos
    let i = 0;
    let posPrimera = -1;

    while (i < array.length){
        if(array[i] == numero){
            posPrimera = i;
            i = array.length;
        }
        i++;
    }

    //Segundo bucle inverso para buscar la última posicion
    let posUltima = -1;
    i = array.length;
    while(i > 0){
        if(array[i] == numero){
            posUltima = i;
            i = 0;
        }
        i--;
    }

    if(posPrimera == -1 && posUltima == -1) console.log("No existe el número dentro del array");
    else if(posPrimera != -1 && posUltima == -1) console.log(`Solo aparece en la primera posicion ${posPrimera}`);
    
    else console.log(`La primera aparición del número es en la posición ${posPrimera} y la última es ${posUltima}`);
}

//Funcion del ejercicio Nº4
function ejercicio4(){
    //Inicializo la matriz 3x3
    let matriz = [
        [],
        [],
        []
    ];;

    //Apartado A => RELLENAR CON VALORES ALEATORIOS
    let count = 0;
    matriz.forEach((ele) =>{
        count = 0;
        while(count < 3){
            ele.push((Math.floor(Math.random() * (20 - 2)+ 2)));
            count++;
        }
    });
 
    //Apartado B => MOSTRAR POR CONSOLA
    let tempo = mostrarMatriz(matriz);

    //Apartado C => SUMAR LOS VALORES DEL ARRAY E ITERO SOBRE EL ARRAY "ORIGINAL"
    let suma = 0;
    matriz.forEach((ele)=>{
        ele.forEach((value) =>{
           suma += (value);
        });
    });
    console.log(`La suma de todos los elementos ${suma}`)

    //Apartado D => CREAR OTRO Y CAMBIAR LOS VALORES MAYORES A 10 POR UN 9
    let copia = [];
    let i = 0;
    //Agrego a mi array filas vacias
    while(i < matriz.length){
        copia.push([]);
        i++;
    }

    /*Itero sobre el array DEVUELTO CON LOS VALORES ORIGINAL DE FORMA ORDENADA*/
    for (let i = 0; i < tempo.length; i++) {
        for (let j = 0; j < tempo.length; j++) {
            if(tempo[i][j] > 10) copia[i][j] = "09";
            else copia[i][j] = tempo[i][j];
        }
    }
    //Mostrando copia
    copia.forEach((ele) =>{
        console.log(ele.join(" "));
        
    });

    //Apartado E => SE PIDE UN VALOR Y SE INTERCAMBIA LAS FILAS
    let num = 0;
    do{
        num = Number(prompt("Ingrese un valor entre 1 y 3"));
        if(num < 1 || num > 3) alert("Ingrese un numero entre los valores 1 y 3");
        else if(isNaN(num)) alert("No ingrese una cadena");
    }while((num < 1 || num > 3) || isNaN(num));

 
    num -= 1;//Le resto 1 al valor porque las filas de las matrices empiezan en 0
    let tmp = []; //Creo mi variable temporal
    tmp = matriz[num]; //GUARDO la fila dento de mi variable
    matriz[num] = copia[num];//Cambio la fila de matriz por la fila de la copia
    copia[num] = tmp; //Guardo en la copia la fila de matriz

    
}

/*FUNCTION CREADA PARA DEVOLVER UN ARRAY SIN CAMBIAR LOS VALORES ORIGINALES QUE SE LES PASA
Y MOSTRARLO POR PANTALLA*/
function mostrarMatriz(matriz){
    let count = 0;
    let tmp = [];
    while(count < matriz.length){
        tmp.push([]);
        count++;
    }
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if(matriz[i][j] < 10) tmp[i].push(`0${matriz[i][j]}`);
            else tmp[i].push(matriz[i][j]);
        }
        console.log((tmp[i].join(" ")));
    }

    return tmp;
}