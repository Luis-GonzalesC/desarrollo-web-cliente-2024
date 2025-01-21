window.onload = () =>{
    //parte 1
    let tutor = {
        nombre: "Paco",
        edad: 22,
        DNI: "23456789K",
        titulo_universitario: "Tutor",
        mostrar: function(){
            for (const valor in this) {
                if(valor != "mostrar" && valor != "cambiarNombre") console.log(valor+": " + this[valor]);
            }
        },
        cambiarNombre: function(name){
            tutor.nombre = name;
            console.log("Nombre cambiado");
            
        }
    };
    /*
    tutor.mostrar();
    tutor.cambiarNombre("Estela")*/

    //parte 2
    let asignatura1 = {
        nombre_curso: "Desarrollo web en entorno cliente",
        curso: 2, //numero
        horas_totales: 16,
    };

    let asignatura2 = {
        nombre_curso: "Desarrollo web en entorno servidor",
        curso: 2, //numero
        horas_totales: 16,
    };

    let asignatura3 = {
        nombre_curso: "Base de Datos",
        curso: 1, //numero
        horas_totales: 20,
    };

    let asignatura4 = {
        nombre_curso: "Lenguaje de Marcas",
        curso: 1, //numero
        horas_totales: 18,
    };

    let lista_asignaturas = [asignatura1, asignatura2, asignatura3, asignatura4];

    //parte 3
    let alumno = {
        nombre: "Luis",
        edad: 20,
        ciclo: 2,
        curso: 2,
        tutor,
        lista_asignaturas,
        lista_nota : [8, 9, 9, 8]
    }
    console.log(Object.keys(alumno));
    console.log("===========================");
    console.log(Object.values(alumno));
    

    //PARTE 4
    let div = document.getElementsByTagName("div")[0];
    div.innerHTML = "Los datos del alumno son: ";
    div.innerHTML += "<br/><br/>";
    for (let clave in alumno) {
        if(clave == "tutor"){//Si es igual al tutor quiero sacar los datos que tiene ese objeto
            div.innerHTML += "<br/>";
            div.innerHTML += "El tutor asignado es: ";
            div.innerHTML += "<br/>";
            //console.log("El tutor asignado es:");
            for(valor_tutor in alumno.tutor){ //alumno[clave] == alumno.tutor
                //console.log("\t-" + valor_tutor+": " + alumno.tutor[valor_tutor]); //alumno.tutor[valor_tutor] => me dice el valor de cada uno, con la notacion (.) me sale undefined
                if(valor_tutor != "mostrar" && valor_tutor != "cambiarNombre") div.innerHTML += valor_tutor+": " + alumno.tutor[valor_tutor] + "<br/>";
            }
        }
        else if(clave == "lista_asignaturas"){
            div.innerHTML += "<br/>";
            //console.log("Las asignaturas son:");
            for (let asignatura of alumno.lista_asignaturas) { //alumno[lista_asignaturas] == alumno.lista_asignaturas (un for of para poder acceder a cada asignatura de la lista)
                for(valor_asignatura in asignatura){
                    //console.log("\t-" + valor_asignatura+": " + asignatura[valor_asignatura]);
                    div.innerHTML += valor_asignatura+": " + asignatura[valor_asignatura] + "<br/>";
                }
                div.innerHTML += "<br/>";
            }
        }
        else if(clave == "lista_nota"){
            //console.log("Las notas son:");
            for (let i = 0; i < alumno.lista_nota.length; i++) {
                //console.log("\t-" + alumno.lista_nota[i]);
                div.innerHTML += "Las notas son: ";
                div.innerHTML += alumno.lista_nota[i] + "<br/>"
            }
        }
        else{
            div.innerHTML += clave+": " + alumno[clave];
            div.innerHTML += "<br/>";
            //console.log(clave+": " + alumno[clave]);
        }
    }
    

    /*================ PARTE II================*/
}