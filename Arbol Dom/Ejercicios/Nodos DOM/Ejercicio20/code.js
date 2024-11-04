window.onload = () =>{
    let p = document.getElementsByClassName("primera")[0];
    let padre = p.parentNode;//Hago esto porque no se quien es el padre (SI LO SE)
    let boton_generar = document.getElementsByTagName("input")[0];
    let boton_borrar_viejo = document.getElementsByTagName("input")[1];
    let boton_borrar_nuevo = document.getElementsByTagName("input")[2];
    let sustituir = document.getElementsByTagName("input")[3];

    boton_borrar_nuevo.disabled = true;//Por defecto el boton desabilitado

    boton_generar.onclick = function(){
        boton_borrar_nuevo.disabled = false;//Lo habilito el boton al pulsar en generar

        //1.Creando el nodo
        let nuevo = document.createElement("p");
        //COLOCANDO EL ATRIBUTO
        nuevo.setAttribute("class","segunda");
        //2 .Creamos el nodo texto
        let texto = document.createTextNode("Este es el nuevo párrafo que se acaba de crear")
        //3. Engancho el texto a mi elementos
        nuevo.appendChild(texto);
        //4. Se lo asigno al padre
        padre.appendChild(nuevo);
    }

    boton_borrar_viejo.onclick = function(){
        let nuevo_papi = p.parentNode;
        nuevo_papi.removeChild(p);
        this.disabled = true;
        sustituir.disabled = true;
    }

    boton_borrar_nuevo.onclick = function(){
        let parrafos = document.querySelectorAll(".segunda");//Selecciono la clase
        for (let elemento of parrafos) {
            let papi = elemento.parentNode;
            papi.removeChild(elemento);
        }
    }

    sustituir.onclick = function(){
        boton_borrar_viejo.disabled = true;
        this.disabled = true;
        let tabla = document.createElement("table");
        let thead = document.createElement("thead");
        let trHead = document.createElement("tr");
        let trBody = document.createElement("tr");
        let tbody = document.createElement("tbody");

        tabla.style.border = "1px solid black";
        //ANIDANDO LA TABLA
        tabla.appendChild(thead);
        thead.appendChild(trHead);
        for (let i = 0; i < 2; i++) {
            let th = document.createElement("th");
            th.appendChild(document.createTextNode(i));
            trHead.appendChild(th);
        }

        tabla.appendChild(tbody)
        tbody.appendChild(trBody);
        for (let i = 0; i < 2; i++) {
            let td = document.createElement("td")
            td.appendChild(document.createTextNode(i + 2));
            trBody.appendChild(td);
        }

        //En el padre, reemplazo la p por tabla
        padre.replaceChild(tabla, p);
    }
}