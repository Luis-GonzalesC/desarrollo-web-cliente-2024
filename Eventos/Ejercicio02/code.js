window.onload = () =>{
    let div = document.getElementsByTagName("div");
    
    document.addEventListener("mousemove", 
        (ev)=>{
            div[0].textContent = "PosX: " + ev.clientX + " PosY: " + ev.clientY;
        }, false);

    document.addEventListener("mousedown", 
        (ev)=>{
            //ev.button => 0 Boton izquierdo, 1 => Boton central (rueda), 2=> Boton derecho
            if (ev.button == 0) div[1].textContent = "Boton presionado el Izquierdo";
            //else div[1].textContent = "Boton presionado el Derecho";
        }, false);

    document.addEventListener("contextmenu", 
        (ev)=>{
            ev.preventDefault(); //Para desactivar el menu al presional el boton derecho
            div[1].textContent = "Boton presionado el Derecho (SIN EL MENU)";
        }, false);
}