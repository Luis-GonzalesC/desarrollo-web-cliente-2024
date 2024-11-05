window.onload = () =>{

    document.getElementsByTagName("div")[0].onmousemove = (e) =>{
        console.log("POSX: " + e.clientY + " POSY: " + e.clientX);
    }
}