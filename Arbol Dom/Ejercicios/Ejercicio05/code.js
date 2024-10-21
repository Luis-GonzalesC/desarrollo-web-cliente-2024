window.onload = () => {
    apartadoA();
    apartadoB();
}

function apartadoA(){
    //Cuando se haga click sobre el párrafo, cambia de la clase “uno” a la clase “dos”.
    let parra = document.getElementsByClassName("uno")[0];
    
    parra.onclick = function(){
        this.setAttribute("class", "dos");
    }

}

function apartadoB() {
    let parra = document.getElementsByTagName("p")[0];

    parra.onclick = function(){
        /*if(parra.getAttribute("class") == "uno") parra.setAttribute("class", "dos");
        else parra.setAttribute("class", "uno");*/

        this.setAttribute("class", this.getAttribute("class") == "uno" ? "dos" : "uno");
    }


}