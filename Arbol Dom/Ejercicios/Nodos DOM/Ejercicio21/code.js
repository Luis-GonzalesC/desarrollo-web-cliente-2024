window.onload = () =>{
    let enlace = document.getElementsByTagName("a")[0];

    enlace.onmouseover = function(){
        let div = document.createElement("div");
        div.setAttribute("style", `
            background-color:red; 
            width: 200px;
            height: 200px;
            background-color: aqua;
            font-size: 1.8rem;
            text-align: justify;
            padding: 20px;
            box-shadow: 2px 7px 2px 4px yellow;
            border-radius: 10px;
            float: right`);
        //Segunda forma
        /*div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundColor = "aqua";
        div.style.fontSize = "1.8rem";
        div.style.textAlign = "justify";
        div.style.padding = "20px";
        div.style.boxShadow = "2px 2px 2px 1px yellow";*///desplazamiendo en X e Y de la sombra, difuminación de la sombra, que tanto quiero que se expanda, y el color
        // div.style.borderRadius = "10px";

        //div.appendChild(document.createTextNode("Esto es un enlace"));
        //Apartado B
        div.appendChild(document.createTextNode("La URL del enlace es " + this.getAttribute("href")));
        //Para que salga en la esquina superior izquierda
        // div.style.float = "right";
        document.body.appendChild(div);
    }
}