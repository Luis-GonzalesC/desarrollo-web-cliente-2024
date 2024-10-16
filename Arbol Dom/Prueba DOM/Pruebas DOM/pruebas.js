function prueba(){
    let parras = document.getElementsByTagName("table");
    
    let dedo = parras[0];
    
    // dedo.width = "15px";
    // dedo.className = "pepe";
    //dedo.setAttribute("width",2000);
    dedo.setAttribute("class","goku");
    dedo.setAttribute("name","luis");
    let valor = parseInt(dedo.getAttribute("width"));
    valor += 30;
    dedo.setAttribute("width", valor);
    
    
}

window.onload = function (){



    
}

function bomba(){
    let bombi = document.getElementById("bombom");

    //innerHTML  
    //innetText
    //textContent => No respeta CSS
    console.log(bombi.innerText);
}

/*
    ACCESO A ATRIBUTOS

    1)NOTACION PUNTO => Y EL NOMBRE DEL ATRIBUTO
    2) GET Y SET
    3) ATRIBUTOS QUE TIENEN TODAS LAS ETIQUETAS
*/
function cambia(){
        //llegar al elemento
    let dedo = document.getElementsByTagName("input")[0];
    //hacer el cambio
    dedo.type = "password";
}