window.onload = () =>{
    let titulo = document.getElementsByClassName("list__item");
   
    let item = document.getElementsByClassName("item__submenu");

    //array.from me convierte la coleccion en un arreglo para poder iterarlo con el forEach
    Array.from(titulo).forEach((elemento,pos) => {
        elemento.onclick= function(){
            if(pos != titulo.length - 1){
                let estilos = window.getComputedStyle(item[pos]);
                let display = estilos.getPropertyValue("display");
                if(display == "none") item[pos].style.display = "block";
                else item[pos].style.display = "none";

                Array.from(item).forEach((item, posx) => {
                    if(posx != pos) item.style.display = "none";
                });
            }
        }
    });
}