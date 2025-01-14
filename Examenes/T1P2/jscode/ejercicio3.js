window.onload = () =>{

    let disparar = document.getElementsByTagName("input")[0];
    let div = document.getElementsByClassName("solucion")[0];

    disparar.onclick = function(){
        let filas, celdas;
        //Comprobando el número de filas que me ingresa el usuario
        do {
            filas = parseInt(prompt("Ingrese un número de filas"));
            if(isNaN(filas)) alert("No ingrese una cadena");
            else if(filas < 0) alert("No ingrese un número negativo");
            else if(filas == 0) alert("No se crea una tabla con 0 número de filas");
            else if(filas > 10) alert("Ingrese un número mayor a 10 (0-10)");
        } while ((isNaN(filas)) || (filas <= 0) || (filas > 10));

        //Comprobando el número de celdas que me ingresa el usuario
        do {
            celdas = parseInt(prompt("Ingrese un número de filas"));
            if(isNaN(celdas)) alert("No ingrese una cadena");
            else if(celdas < 0) alert("No ingrese un número negativo");
            else if(celdas == 0) alert("No se crea una tabla con 0 número de celdas");
            else if(celdas > 10) alert("Ingrese un número mayor a 10 (0-10)");
        } while ((isNaN(celdas)) || (celdas <= 0) || (celdas > 10));

        /*======CREACION DE LA TABLA Y ANIDANDO SUS ELEMENTOS======*/
        let tabla = document.createElement("table");
        let tbody = document.createElement("tbody");

        tabla.setAttribute("class", "tabla");//colocando su clase 
        //ANIDANDO LA TABLA
        tabla.appendChild(tbody);
        //FILAS
        let count = 1;//variable para colocar el texto dentro de cada div
        //Bucle anidado para la creación de filas y de columnas
        for (let i = 0; i < filas; i++) {
            let trBody = document.createElement("tr");//creación del tr
            tbody.appendChild(trBody);
            for (let i = 0; i < celdas; i++) {
                let td = document.createElement("td")//creación del td
                td.appendChild(document.createTextNode(count));//aniado texto al td
                trBody.appendChild(td);//colocando el td al tr
            }
            count++;
        }
        //agregando al div contenedora mi tabla
        div.appendChild(tabla);
    }
}