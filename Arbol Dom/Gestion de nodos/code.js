//DOM CONTENTPATTER //se espera a que el dom esté cargado
window.onload = () =>{ //espera que se carge todo el contenido de la pagina, imagenes, archivos multimedia
    let boton1 = document.getElementsByTagName("input")[0];
    let boton2 = document.querySelectorAll("input[type='button']")[1];
    let boton3 = document.getElementsByTagName("input")[2];


    boton1.onclick = function(){//crear
        //1. Creando el nodo
        let nuevo = document.createElement("p");
        //2. opcional (atributoo)
        nuevo.setAttribute("class", "parra");
        //3. Creamos nodo texto
        let texto = document.createTextNode("Soy el nuevo párrafo y me llamo Luis");
        //4. Engacho el nodo texto al nuevo nodo
        nuevo.appendChild(texto);
        //5. Asignar un padre al nuevo
        let papi = document.querySelector("section");
        let bro = document.querySelectorAll("div")[2]; //SI LO QUIERO PONER ENTRE EL PADRE Y EL HERMANO

        papi.insertBefore(nuevo, bro); //Lo inserta antes del hermano

        //papi.appendChild(nuevo); ==> TE LO PONE AL FINAL DE TODO
        this.disabled = true;
        boton2.disabled = false;
    }

    boton2.onclick = function(){ //FUNCION PARA BORRAR

        let victima = document.getElementsByClassName("parra")[0];
        let papi = victima.parentNode; //ME DICE QUIEN ES SU PADRE => UN DEDO APUNTANDO AL PADRE
        papi.removeChild(victima);
        
        this.disabled = true;
        boton1.disabled = false;
    }

    boton3.onclick = borrar;

    function borrar(){
        let papi = document.querySelector("section"); 
        //let victimas = papi.children;
        //let victimas = document.querySelectorAll("div");//con esto me devuelve una lista y al borrar las posiciones se reajustan

        while(papi.firstChild){//Mientras papi tenga hijos
            papi.removeChild(papi.firstChild);//matalos a todos
        } // => pasa que esto se va a cargar todo lo que tenga

        /*
        for (let elemento of victimas) {
            
            let papi = elemento.parentNode;
            papi.removeChild(elemento);
        }*/

        /*
        //Si se quien es el padre pero no se quien es el hijo
        let hijos = papi.children; // me devuelve un html collection*/
    }
}