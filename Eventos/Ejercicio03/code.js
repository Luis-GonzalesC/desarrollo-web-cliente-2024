window.onload = ()=>{
    let div = document.querySelector(".mi_div");

    document.addEventListener("keypress", 
        (ev)=>{
            div.textContent = "Tecla presionada => " + ev.key;
        }, false);
    
}