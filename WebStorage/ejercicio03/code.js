window.onload = () =>{
    let formu = document.forms[0];

    formu[4].addEventListener("click", (ev)=>{
        ev.preventDefault();
        let objeto = { //Objeto JSON
            nombre : formu[0].value,
            apellidos : formu[1].value,
            edad : formu[2].value,
            email : formu[3].value
        };
        //console.table(objeto);
        let tmp = JSON.stringify(objeto);

        localStorage.setItem("usuario", tmp);
        
    });
    
}