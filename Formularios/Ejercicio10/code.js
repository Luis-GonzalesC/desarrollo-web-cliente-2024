window.onload = () =>{
    let formulario = document.forms[0];
    let primera_lista = formulario.elements[0];
    let segunda_lista = formulario.elements[1];
    let boton = formulario.elements[2];

    let graficas = [
        ["HD 3000", "HD 4000", "IRIS 600"],
        ["RX Series 500", "Vega Series", "RX Series 6000"],
        ["GTX Serie 1000", "GTX Serie 2000", "GTX Serie 3000"]
    ];

    primera_lista.addEventListener("click", 
        ()=>{
            borrarValores(segunda_lista);
            switch (primera_lista.selectedIndex) {
                case 1:
                    rellenarSegundaLista(0);
                    break;
                case 2:
                    rellenarSegundaLista(1);
                    break;
                case 3:
                    rellenarSegundaLista(2);
                    break;
            }
        }, false)

    boton.addEventListener("click", 
        (ev)=>{
            ev.preventDefault();
            if(primera_lista.selectedIndex == 0 || segunda_lista.selectedIndex == -1){
                alert("Tienes que elegir una opción");
            }else{
                primera_lista.selectedIndex = 0;//Regreso por defecto la primera posicion (VACIO)
                borrarValores(segunda_lista);
            }
        }, false)
    
    //Función para rellenar de valores mi segunda lista
    function rellenarSegundaLista(indexSeleccionado){
        for(let i = 0; i < graficas.length; i++){
            let opcion = document.createElement("option");
            opcion.appendChild(document.createTextNode(graficas[indexSeleccionado][i]))
            segunda_lista.appendChild(opcion);
        }
    }
    
    //Funcion para borrar todas las opciones que tiene mi segunda lista
    function borrarValores(papi){
            //Mientras papi tenga hijos (mi contenedor)
            while(papi.firstChild){
                papi.removeChild(papi.firstChild);//matalos a todos(sus hijos)
            }
        }
}