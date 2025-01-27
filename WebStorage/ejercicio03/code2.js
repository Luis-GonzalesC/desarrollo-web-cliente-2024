window.onload = () =>{
    let botones = document.getElementsByTagName("input");


    botones[0].addEventListener("click", ()=>{
        let objeto = JSON.parse(localStorage.getItem("usuario")); //Recibo el objeto en formato STRING y lo paso a CADENA

        for(dato in objeto){//Recorrer el objeto
            mostrarValores(dato + " ➡ ", objeto[dato]);
        }

    }, false);

    botones[1].addEventListener("click", ()=>{
        localStorage.clear();
    }, false);
    

    function mostrarValores(mensaje, get_item){
        let section = document.createElement("section");
        section.appendChild(document.createTextNode(mensaje + get_item))
        document.getElementsByTagName("body")[0].appendChild(section);

    }
    
}