function apartadoA(){
    //Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
    let parra = document.getElementsByClassName("uno")[0];

    parra.setAttribute("class", "dos");
}

function apartadoB() {
    let parra = document.getElementsByTagName("p")[0];

    /*if(parra.getAttribute("class") == "uno") parra.setAttribute("class", "dos");
    else parra.setAttribute("class", "uno");*/

    parra.setAttribute("class", parra.getAttribute("class") == "uno" ? "dos" : "uno");

}