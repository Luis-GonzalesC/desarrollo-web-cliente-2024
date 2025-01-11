window.onload = () =>{
    let section = document.querySelector("section");
    let p = document.getElementsByTagName("p")[0];
    let link = document.getElementsByTagName("a")[0];
    
    section.addEventListener("click", 
        function(ev){
            this.setAttribute("style", "background-color:red");
            console.log("a");
            ev.stopPropagation();
        }, false);
    
    p.addEventListener("click", 
        function(ev){
            this.setAttribute("style", "width: 10rem");
            console.log("b");
            ev.stopPropagation();
        }, false);

    link.addEventListener("click", 
        function(ev){
            let confirmacion_usu = confirm("Te quieres mover a la pagina enlazada? S/N");
            if(!confirmacion_usu) ev.preventDefault();
            console.log("c");
            ev.stopPropagation();//Esto para que se ejecute solo 1 Y NO TODOS LOS EVENTOS CUANDO ESTAN DENTRO DE OTRO ELEMENTO
        }, false);
}

/**
 * a) Prueba la fase de burbuja y la fase de captura ¿ves la diferencia?
 *  La fase de burbuja se ejecuta de adentro hacia afuera y la de captura de afuera hacia adentro

 * b) Con todas las funciones de evento definidas y asignadas: haz que solo se ejecute la del enlace.
 * c) Con todas las funciones de evento definidas y asignadas: haz que solo se ejecute la del section.
 *   ev.stopPropagation();//Esto para que se ejecute solo 1 Y NO TODOS LOS EVENTOS CUANDO ESTAN DENTRO DE OTRO ELEMENTO
 * 
 */