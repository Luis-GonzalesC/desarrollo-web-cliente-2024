window.onload = () =>{
    let formulario = document.getElementsByTagName("form")[0];
    let divi = document.getElementsByClassName("div")[0];

    //Apartado A => radio button
    /*
    formulario.colores.forEach((color) => {//Accediendo a cada elemento del html
        color.addEventListener("click", 
            () =>{
                if(color.checked) divi.setAttribute("style", `background-color:${color.value}`);
            }
            , false)
    });*/

    //Apartado B
    Array.from(formulario.colores.options).forEach((color) => {//Accediendo a cada elemento del html
        color.addEventListener("click", 
            () =>{
                divi.setAttribute("style", `background-color:${color.value}`);
            }
            , false)
    });
}