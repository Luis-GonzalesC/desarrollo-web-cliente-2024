window.onload = () =>{
    let formulario = document.getElementsByTagName("form")[0];
    
    formulario[2].addEventListener("click", 
        function(){
            if(formulario[0].value != ""){
                formulario[1].value = formulario[0].value;//Value para coger el valor del texto
                formulario[0].value = "";
            }else{
                alert("No ingrese cadena vacia");
            }
        }, false);
}