window.onload = () =>{
    let formulario = document.forms[0];
    let boton = document.querySelector("input[type='submit']");
    boton.addEventListener("click", 
        (ev) => {
            ev.preventDefault();
            if(formulario[0] == ''){
                alert("El dni no puede estar vacio");
                formulario[0].focus();
            }
            
        }, false);
}