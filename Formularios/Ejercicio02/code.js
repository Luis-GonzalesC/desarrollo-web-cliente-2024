window.onload = () =>{
    let formu = document.querySelector("form");

    formu[0].onkeydown = () =>{
        
        for(let i = 0; i < formu[0].value.length; i++){
            console.log(formu[0].value.charAt(i));
            
        }
        //formu[1].value += formu[0].value;//Value para coger el valor del texto
    }
}