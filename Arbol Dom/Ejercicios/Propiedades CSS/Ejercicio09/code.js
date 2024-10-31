window.onload = () =>{
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.style.backgroundColor = "yellow";
    parrafo.style.border = "1px solid black";
    parrafo.style.margin = "100px";
    parrafo.style.color = "green";
    parrafo.style.fontSize = "80px";
    //apartadoA();
    apartadoB();
}

function apartadoA(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.onclick = function(){
        this.style.backgroundColor = "red";
        this.style.border = "2px solid black";
        this.style.margin = "800px";
        this.style.color = "white";
        this.style.fontSize = "90px";
    }
}

let i = 0;
function apartadoB(){
    let parrafo = document.getElementsByTagName("p")[0];
    parrafo.onclick = function(){
        if(i == 0){
            this.style.backgroundColor = "red";
            this.style.border = "2px solid black";
            this.style.margin = "800px";
            this.style.color = "white";
            this.style.fontSize = "90px";
            i++
        }else{
            this.style.backgroundColor = "yellow";
            this.style.border = "1px solid black";
            this.style.margin = "100px";
            this.style.color = "green";
            this.style.fontSize = "80px";
            i = 0;
        }
    }
}