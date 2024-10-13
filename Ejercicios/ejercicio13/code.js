function pedirAnio(){
    let anio = null;
    do{
        anio = (parseInt(prompt("Ingrese un año")))
        if (isNaN(anio))
            alert("Ingrese un año");
    }while(isNaN(anio));

    let siglo = Math.ceil(anio / 100); //Calcula el siglo
    alert("Perteneces al siglo " + siglo); 

}