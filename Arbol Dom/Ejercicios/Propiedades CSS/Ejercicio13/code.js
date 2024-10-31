window.onload = () =>{
    let texto = document.getElementsByTagName("p")[0];
    //Colocando fuentes
    texto.style.width = "420px";
    texto.style.height = "150px";
    texto.style.fontSize = "100px";
    texto.style.display = "none";

    let mostrar = document.getElementsByTagName("b")[0];
    mostrar.onclick = function() {
        if (texto.style.display == "none") {
            texto.style.display = "block";
            this.innerText = "Ocultar";
        } else {
            texto.style.display = "none";
            this.innerText = "Mostrar";
        }
    }
}