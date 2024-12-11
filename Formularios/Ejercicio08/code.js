window.onload = () =>{
    let formulario = document.getElementsByTagName("form")[0];
    let divi = document.getElementsByClassName("div")[0];

    //Apartado A
    /*
    formulario.colores.forEach((color) => {//Accediendo a cada elemento del html
        color.addEventListener("click", 
            () =>{
                if(color.checked) divi.setAttribute("style", `background-color:${color.value}`);
            }
            , false)
    });*/

    //Apartado B
    formulario.colores.forEach((color) => {//Accediendo a cada elemento del html
        color.addEventListener("click", 
            () =>{
                if(color.checked) divi.setAttribute("style", `background-color:${color.value}`);
            }
            , false)
    });
}