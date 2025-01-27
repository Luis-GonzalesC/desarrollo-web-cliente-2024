window.onload = () =>{
    let formu = document.forms[0];

    formu[2].addEventListener("click", (ev)=>{
        ev.preventDefault();
        localStorage.setItem("nombre", formu[0].value);
        localStorage.setItem("contrasena", formu[1].value);

        console.log(formu[1].value);
        
    });
    
}