window.onload = () =>{
    //============================= PARTE I =============================//
    //1.1
    let tutor = {
        nombre: "Alejandra",
        edad: 29,
        DNI: "23456789K",
        titulo_universitario: "Ingeniera Informática",
        mostrar: function(){
            let res = "";
            for (let valor in this) {
                if(valor != "mostrar" && valor != "cambiarNombre") res += (`${valor}: ${this[valor]}\n`);
            }
            return res;
        },
        cambiarNombre: function(name){
            this.nombre = name;
            console.log("Nombre cambiado");
        }
    };
    /*
    console.log(tutor.mostrar());
    tutor.cambiarNombre("Jaime")*/

    //1.2
    let asignatura1 = {
        nombre_curso: "Desarrollo web en entorno cliente",
        curso: 2, //numero
        horas_totales: 16,
        mostrar: function(){
            let res = "";
            for(let valor in this){
                if(valor != "mostrar" && valor != "cambiarHoras") res += (`${valor}: ${this[valor]} \n`);
            }
            return res;
        },
        cambiarHoras: function(newhours){
            this.horas_totales = newhours;
        }
    };

    /*console.log(asignatura1.mostrar());
    asignatura1.cambiarHoras(50);
    asignatura1.mostrar();*/


    let asignatura2 = {
        nombre_curso: "Desarrollo web en entorno servidor",
        curso: 2, //numero
        horas_totales: 16,
        mostrar: function(){
            let res = "";
            for(let valor in this){
                if(valor != "mostrar" && valor != "cambiarHoras") res += (`${valor}: ${this[valor]} \n`);
            }
            return res;
        },
        cambiarHoras: function(newhours){
            this.horas_totales = newhours;
        }
    };

    //console.log(asignatura2.mostrar());
    

    let asignatura3 = {
        nombre_curso: "Base de Datos",
        curso: 1, //numero
        horas_totales: 20,
        mostrar: function(){
            let res = "";
            for(let valor in this){
                if(valor != "mostrar" && valor != "cambiarHoras") res += (`${valor}: ${this[valor]} \n`);
            }
            return res;
        },
        cambiarHoras: function(newhours){
            this.horas_totales = newhours;
        }
    };

    //console.log(asignatura3.mostrar());

    let asignatura4 = {
        nombre_curso: "Lenguaje de Marcas",
        curso: 1, //numero
        horas_totales: 18,
        mostrar: function(){
            let res = "";
            for(let valor in this){
                if(valor != "mostrar" && valor != "cambiarHoras") res += (`${valor}: ${this[valor]} \n`);
            }
            return res;
        },
        cambiarHoras: function(newhours){
            this.horas_totales = newhours;
        }
    };

    //console.log(asignatura4.mostrar());

    let lista_asignaturas = [asignatura1, asignatura2, asignatura3, asignatura4];

    //1.3
    let alumno = {
        nombre: "Estela",
        edad: 18,
        ciclo: 2,
        curso: 2,
        tutor,
        lista_asignaturas: [],
        lista_notas : [],
        calcularMedia: function(){//Tener en cuenta que si no hay nada en lista de notas, nos dará 0
            let media = 0;
            for (let ele of this.lista_notas) {
                media += ele;
            }
            return media / this.lista_notas.length;
        },
        mediaAsignatura: function(){
            let res = "</br>La asignatura de: </br>";
            for(let i = 0; i < this.lista_asignaturas.length; i++){
                res += (`${this.lista_asignaturas[i].nombre_curso}
                            con su media de ${this.lista_notas[i]} </br>`);
            }
            return res;
        },
        mostrar: function(){
            let res = "";
            for(let valor in this){
                if(valor != "calcularMedia" && valor != "mediaAsignatura" && valor != "mostrar"){
                    if(valor == "lista_asignaturas") {
                        res += "\nLas asignaturas son: \n"
                        for(let asignatura of this.lista_asignaturas){
                            res += asignatura.mostrar();
                        }
                        res += "\n" +this.mediaAsignatura();
                    }
                    else if(valor == "tutor"){
                        res += "\n";
                        res += "El tutor es:\n"
                        res += alumno.tutor.mostrar();
                    }
                    else if (valor == "lista_notas") {
                        res += "\n\n"
                        res += "La media de todas las notas es " + this.calcularMedia();
                    }
                    else res += (`${valor}: ${this[valor]}\n`);
                }
            }
            return res;
        }
    };

    //Agregando al alumno las asignaturas correspondientes como sus notas
    for (let asig of lista_asignaturas) {
        if(asig.curso == alumno.curso){//Si pertenecen al mismo curso lo agrego
            alumno.lista_asignaturas.push(asig);
            alumno.lista_notas.push(Math.floor(Math.random() * (10 - 0 + 1) ) + 0);
        }
    }
    
    //alumno.mediaAsignatura();
    console.log(alumno.mostrar());

    //1.4
    let div = document.getElementsByTagName("div")[0];
    div.innerHTML = "<h1>Los datos del alumno son: </h1>";
    for (let clave in alumno) {
        if(clave == "tutor"){//Si es igual al tutor quiero sacar los datos que tiene ese objeto
            div.innerHTML += "<h1>El tutor asignado es: </h1>";
            //console.log("El tutor asignado es:");
            for(valor_tutor in alumno.tutor){ //alumno[clave] == alumno.tutor
                //console.log("\t-" + valor_tutor+": " + alumno.tutor[valor_tutor]); //alumno.tutor[valor_tutor] => me dice el valor de cada uno, con la notacion (.) me sale undefined
                if(valor_tutor != "mostrar" && valor_tutor != "cambiarNombre") div.innerHTML += valor_tutor+": " + alumno.tutor[valor_tutor] + "</br>";
            }
        }
        else if(clave == "lista_asignaturas"){
            div.innerHTML += "<h1>Las asignaturas a las que pertence son: </h1>";
            //console.log("Las asignaturas son:");
            for (let asignatura of alumno.lista_asignaturas) { //alumno[lista_asignaturas] == alumno.lista_asignaturas (un for of para poder acceder a cada asignatura de la lista)
                for(valor_asignatura in asignatura){
                    //si es distinto que la funcion mostrar, quiero que el resto de valores me lo saque en el div
                    if(valor_asignatura != "mostrar" && valor_asignatura != "cambiarHoras"){
                        //console.log("\t-" + valor_asignatura+": " + asignatura[valor_asignatura]);
                        div.innerHTML += valor_asignatura+": " + asignatura[valor_asignatura] + "</br>";
                    }
                }
            }
        }
        else if(clave == "lista_notas"){
            //console.log("Las notas son:");
            div.innerHTML += "<h1>Las notas son:</h1>";
            for (let i = 0; i < alumno.lista_notas.length; i++) {
                //console.log("\t-" + alumno.lista_nota[i]);
                div.innerHTML += "Las notas son: ";
                div.innerHTML += alumno.lista_notas[i] + "</br>"
            }
            div.innerHTML += alumno.mediaAsignatura();
            div.innerHTML += "La media total de los cursos es: " + alumno.calcularMedia()
        }
        else{
            if(clave != "calcularMedia" && clave != "mediaAsignatura" && clave != "mostrar"){
                div.innerHTML += clave+": " + alumno[clave];
                div.innerHTML += "</br>";
                //console.log(clave+": " + alumno[clave]);
            }
        }
    }
}