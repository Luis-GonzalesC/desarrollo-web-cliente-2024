let timer;
window.onload = () =>{
    let div = document.getElementsByTagName("div")[0];
    let progres = document.getElementsByTagName("progress")[0];
    let boton = document.getElementsByTagName("input")[0];
    boton.onclick = function(){
        this.disabled = true;
        progres.value = 0;
        timer = setInterval(() =>{
            if(parseInt(progres.value)+10 >= progres.max){
                clearInterval(timer);
                this.disabled = false;
                div.innerText++;
            } 
            progres.value += 10;
        },50);
    }
}