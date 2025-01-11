window.onload = ()=>{
    let formulario = document.forms[0];
    let contra = formulario[0];
    //let checkbox = formulario[1];
    let imagen = document.getElementsByClassName("ojo")[0];

    /*checkbox.addEventListener("click", 
        ()=>{
            if(checkbox.checked) contra.setAttribute("type", "text");
            else contra.setAttribute("type", "password");
        }, false);
    */
   
    imagen.addEventListener("mousedown", 
        ()=>{
            imagen.setAttribute("src", "ojo1.png");
            contra.setAttribute("type", "text");
        }, false)
    
    imagen.addEventListener("mouseup", 
        ()=>{
            imagen.setAttribute("src", "no-visible.png");
            contra.setAttribute("type", "password");
        }, false)
}