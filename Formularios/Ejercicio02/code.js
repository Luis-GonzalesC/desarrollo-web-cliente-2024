window.onload = () =>{
    let formu = document.querySelector("form");

    formu[0].onkeydown = () =>{
    
        formu[1].value += formu[0].value;//Value para coger el valor del texto
    }
}