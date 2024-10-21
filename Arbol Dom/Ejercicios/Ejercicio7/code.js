window.onload = () =>{    
    todosTh();
    todosTd();
}


function todosTh(){
    let dedos = document.getElementsByTagName("th");

    let colores = ["red", "blue", "green", "aqua"];
    let i = 0;
    

    for (elemento of dedos) {
        let pintado = false;
        elemento.onclick = function(){
            if(this.getAttribute("style") == "background-color: black;"){
                this.style.backgroundColor = colores[i];
            }else{
                this.style.backgroundColor = colores[i];
            }

            if(i < colores.length - 1) i++;
            else i = 0;
        }
    }
}

function todosTd(){
    let dedos = document.getElementsByTagName("td");

    let colores = ["red", "blue", "green", "aqua"];
    let i = 0;
    

    for (elemento of dedos) {
        elemento.onclick = function() {
            if(this.getAttribute("style") == "background-color: black;"){
                this.style.backgroundColor = colores[i];
            }else{
                this.style.backgroundColor = colores[i];
            }

            if(i < colores.length - 1) i++;
            else i = 0;
        }
    }
}