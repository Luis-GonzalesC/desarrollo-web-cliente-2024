window.onload = () =>{
    suma();
    resta();
}

function suma(){
    let dif = document.getElementsByTagName("div")[0];
    let buton = document.getElementsByTagName("input")[0];
    buton.onclick = function () {
        dif.textContent = parseInt(dif.textContent) + 1;
    }
}

function resta(){
    let dif = document.getElementsByTagName("div")[0];
    let buton = document.getElementsByTagName("input")[1];
    buton.onclick = function () {
        dif.textContent = parseInt(dif.textContent) - 1;
    }
}