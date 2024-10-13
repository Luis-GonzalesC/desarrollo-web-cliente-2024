/*
    A tener en cuenta:
    • El programa comienza pidiendo el numero de mesas que tiene el restaurante.
    • Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará
    por pantalla como quedan las mesas inicialmente.
    • El programa seguirá pidiendo comensales hasta que se introduzca un valor
    negativo
*/

//Inicio de programa
let num = 0;
let mesas = [];

function main(){
    //Se pide cantidad de mesas / muestra las mesas cargadas
    pedirNumMesas();
    
    //FUNCIONAMIENTO REAL
    let num_personas = 0;
    let seguir = true;
    while(seguir){
        num_personas = parseInt(prompt("Para cuantas personas desea la mesa?"));
        if (num_personas < 0){
            alert("Gracias por su visita");
            seguir = false;
        }
        else if(num_personas >= 5) alert("Lo siento, no admitimos grupos de 6, haga grupos de 4 personas como máximo e intente de nuevo");
        else if(isNaN(num_personas)) alert("INGRESE UN NUMERO CORRECTO");
        else 
            if(!mesasLlenas()) (sentarseMesa(num_personas));
            else {
                alert("TODAS LAS MESAS ESTAN LLENAS");
                seguir = false;
            }
    }
}

//Metodo para pedir la cantidad de mesas en el restaurante
function pedirNumMesas(){
    do{
        num = parseInt(prompt("Ingrese el número de mesas para su restaurante:"));
        if(num <= 0 || isNaN(num)) alert("INCORRECTO VUELVA A INTENTARLO");
    }while(num <= 0 || isNaN(num));

    //Se generan de forma aleatoria
    cargarMesas();
    //Muestro mesas
    mostrarMesas();
}

//Método que genera las mesas aleatoriamente
function cargarMesas(){
    for(let i = 0; i < num; i++){
        mesas.push(Math.floor(Math.random() *5));
    }
}

//Método para mostar las mesas con la cantidad de personas dentro
function mostrarMesas(){
    /*mesas.forEach((ele) => {
        console.log(ele);
    });*/
    console.log("Estado de las mesas: "+ mesas);
}

//Metodo para colocar un grupo de personas dentro de la mesa
function sentarseMesa(num_personas){
    console.log("El usuario pide una mesa para "+num_personas);
    
    let i = 0;
    while(i < mesas.length){
        let mesa_encontrada = encontrarMesa0();

        if(mesa_encontrada != -1){
            mesas[mesa_encontrada] += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(mesa_encontrada + 1)}`);
            i = mesa.length;
        }
        else if (mesas[i] + num_personas <= 4){
            mesas[i] += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(i + 1)}`);
            i = mesas.length;
        }else{
            console.log("No hay mesas para "+num_personas + " personas");
        }
        i++;
    }
    mostrarMesas();

    /*
    for(let mesa of mesas) {
        let mesa_encontrada = encontrarMesa0();

        if(mesa_encontrada != -1){
            mesa += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(pos + 1)}`);
            return true;
        }
        else if ((mesa + num_personas) <= 4){
            mesa += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(pos + 1)}`);
            return true;
        }else {
            alert("No quedan mesas disponibles");
            return false;
        }
    }
    mostrarMesas();*/

    /*
    let sentado = mesas.forEach((ele, pos) =>{
        //Variable que almacena la pos del array donde exista una posicion vacia
        let mesa_encontrada = encontrarMesa0();

        if(mesa_encontrada != -1){
            mesas[pos] += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(pos + 1)}`);
            return true;
        }
        else if ((ele + num_personas) <= 4){
            mesas[pos] += num_personas;
            console.log(`Por favor, siéntese en la mesa ${(pos + 1)}`);
            return true;
        }else {
            alert("No quedan mesas disponibles");
            return false;
        }
    });
    return sentado;*/
}

function encontrarMesa0(){
    let pos = 0;
    for(mesa of mesas){
        if(mesa === 0){
            return pos;
        }
        pos++;
    };
    return -1;
}

function mesasLlenas(){
    return mesas.every((ele) => (ele == 4));
}
