function boton1(){
    let mi_link = document.getElementsByTagName("a")[0];
    console.log(mi_link.href);
    console.log(mi_link.textContent);
    
}

function boton2(){
    let mi_link = document.getElementsByTagName("a")[0];
    mi_link.href = "https://www.jaimeweb.es/";

    mi_link.textContent = "e cambiao tron";
}