window.onload = () =>{
    let formulario = document.forms[0];
    let primera_lista = formulario.elements[0];
    let segunda_lista = formulario.elements[1];
    let boton = formulario.elements[2];

    boton.addEventListener("click", 
        (ev)=>{
            ev.preventDefault();
            console.log(ev);
            
        }, false)
    
    
    
}