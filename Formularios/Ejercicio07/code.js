window.onload = () =>{
    let formulario = document.getElementsByTagName("form")[0];

    formulario[1].addEventListener("click",
        ()=>{
            let textoArea = formulario[0].value;
            if(textoArea != ""){
                formulario[0].value = "";
                let divisito = document.createElement("div");//Creo el div
                divisito.appendChild(document.createTextNode(textoArea)); //Agrego el texto al div
                formulario.parentNode.appendChild(divisito);
            } else{
                alert("Ingrese un texto");
            }
        } , false);
}