window.onload = () =>{
    let div = document.getElementsByTagName("div");

   

    for (element of div) {
        element.onmouseover = function(){
            let estilos = window.getComputedStyle(this);
            let fondo = estilos.getPropertyValue('background-color');
            document.body.style.backgroundColor = fondo;
            console.log(fondo);
            
        }
        element.onmouseout = function(){
            document.body.style.backgroundColor = "white";
        }
    }
}