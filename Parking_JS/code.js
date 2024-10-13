let plazas = [[],[]];

function main(){
    iniciarAparcamiento();
    menu();
}

function menu(){
    let salir = false;
    let opcion = 0;
    //1. Aparcar Vehículo
    //2. Sacar Vehículo
    //3. Mostrar Aparcamiento
    //4. Salir del programa
    while (!salir){
        do{
            opcion = parseInt(prompt(`o-----MENU-----o
                1. Aparcar Vehículo
                2. Sacar Vehículo
                3. Mostrar Aparcamiento
                4. Salir del programa`));
            if(isNaN(opcion)) alert('Ingresa un número no UNA CADENA');
            else if(opcion < 1 || opcion > 4) alert('Esa no es una opción');
        }while(isNaN(opcion) || (opcion < 1 || opcion > 4));
        
        switch (opcion){
            case 1:
                aparcaVehiculo();
                break;
            case 2:
                sacarVehiculo();
                break;
            case 3:
                mostrarAparcamiento();
                break;
            case 4:
                salir = true;
                alert("Gracias por su visita");
                break;
        }
    }
}

/*FUNCION PARA APARCAR SEGUN EL TAMAÑO*/
function aparcaVehiculo(){
    let tamVehiculo = " ";
    let seguirAparcando = " ";
    do{
        do{
            tamVehiculo = prompt("Ingrese el tamaño de su vehículo (G, P)").toLowerCase();
            if (tamVehiculo != "g" && tamVehiculo != "p") {
                alert("Ingrese una letra válida (G|P)");
            }
        }while(tamVehiculo != "g" && tamVehiculo != "p");
        
        if(!comprobarPequenios() && tamVehiculo == "p"){
            let pos = plazas[1].indexOf('L');
            plazas[1][pos] = "O";
            alert(`Vehículo aparcado en la plaza P${pos}`);
        }else{
            if(comprobarPequenios()){
                console.log("Su vehículo pequeño será aparcado en uno grande");
            }
            let pos = plazas[0].indexOf('L');
            plazas[0][pos] = "O";
            alert(`Vehículo aparcado en la plaza G${pos}`);
        }

        do{
            seguirAparcando = prompt("Aparcar Otro (S/N)").toLowerCase();
            if(seguirAparcando != "s" && seguirAparcando != "n") alert("Ingrese una letra válida");
        }while(seguirAparcando != "s" && seguirAparcando != "n");
    }while(seguirAparcando == "s");

}

/*FUNCION PARA MOSTRAR LOS APARCAMIENTOS LIBRES*/
function mostrarAparcamiento(){
    console.log("Situación del aparcamiento:");
    
    plazas.forEach((elemento) =>{
        console.log(elemento);
    });
}

/*FUNCTION PARA SACAR UN VEHICULO DEL APARCAMIENTO*/
function sacarVehiculo(){
    let tamVehiculo = " ";
    let numplaza = 0;
    let seguirAparcando = " ";
    do{
        do{
            tamVehiculo = prompt("Tamaño del vehículo (G/P)?").toLowerCase();
            if (tamVehiculo != "g" && tamVehiculo != "p") {
                alert("Ingrese una letra válida (G|P)");
            }
        }while(tamVehiculo != "g" && tamVehiculo != "p");
    
        do{
            numplaza = prompt("Numero de plaza?");
            if (numplaza < 0 || isNaN(numplaza)) {
                alert("Ingrese un número VALIDO");
            }
        }while(numplaza < 0 || isNaN(numplaza));
    
        if((tamVehiculo == "g" && plazas[0][numplaza] == 'L') || (tamVehiculo == "p" && plazas[1][numplaza] == 'L')) alert(`IMPOSIBLE: en esa plaza no hay ningún vehículo`);
        else if (tamVehiculo == "g" && plazas[0][numplaza] == 'O')  {
            alert("La plaza queda disponible");
            plazas[0][numplaza] = 'L';
        }else if (tamVehiculo == "p" && plazas[1][numplaza] == 'O'){
            alert("La plaza queda disponible");
            plazas[1][numplaza] = 'L';
        }else alert(`IMPOSIBLE: plaza no admitida`);

        do{
            seguirAparcando = prompt("Aparcar Otro (S/N)").toLowerCase();
            if(seguirAparcando != "s" && seguirAparcando != "n") alert("Ingrese una letra válida");
        }while(seguirAparcando != "s" && seguirAparcando != "n");
    }while(seguirAparcando == "s");
    

}

/*FUNCTION PARA INICIALIZAR MI ARRAY DE VACIOS " "*/
function iniciarAparcamiento(){
    plazas.forEach((ele, pos) =>{
        let i = 0;
        if(pos == 0){
            while(i < 10){
                ele.push("L");//POS 0 G
                i++;
            }
        }
        else{
            while(i < 14){
                ele.push("L");//POS 1 P
                i++;
            }
        }
    });
}

/*FUNCION PARA COMPROBAR SI TODOS LOS APARCAMIENTOS PEQUEÑOS ESTAN LLENOS*/
function comprobarPequenios(){
    return plazas[1].every((ele) => ele == "O");
}