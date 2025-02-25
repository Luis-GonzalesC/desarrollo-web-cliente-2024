window.onload = () => {
    const EURO = 0.83;

    let formu = document.getElementsByTagName("form")[0];
    let inputs = document.querySelectorAll("input");
    let array = []; //Donde almacenaré todos mi inputs
    /** 
     * 0 => dolares
     * 1 => euros
     * 2 => boton
    */
     
    for(let input of inputs){
        array.push(input);
    }
    //Por defecto estarán desactivados ambas casillas
    array[0].disabled = true;
    array[1].disabled = true;

    //Dependiendo de la lista de monedas que seleccione habilito un input u otro
    formu.moneda.addEventListener("click",
        () => {
            switch(formu.moneda.selectedIndex){
                case 1:
                    array[0].disabled = false;//Desactivo dolares
                    array[1].disabled = true;//Activo Euros
                    break;
                case 2:
                    array[0].disabled = true;//Activo dolares
                    array[1].disabled = false;//Desactivo euros
                    break;
            }
            vaciarContenido();
        }
        , false);
    
    array[2].addEventListener("click", 
        function(){
            switch(formu.moneda.selectedIndex){
                case 0:
                    alert("Selecciona un convertidor de moneda");
                    break;
                case 1: //Dolares a Euros
                    let numero1 = parseFloat(array[0].value);
                    if(comprobarMoneda(numero1)){
                        array[1].value = numero1 * EURO;
                        array[0].value = ""
                    } else vaciarContenido();

                    break;
                case 2: //Euros a Dolares
                    let numero2 = parseFloat(array[1].value);
                    if(comprobarMoneda(numero2)){
                        array[0].value = (numero2 / EURO);
                        array[1].value = ""
                    } else vaciarContenido();
                    break;
            }
        }
        , false);

    //Funcion para comprobar que sea un número correcto que me ingresa el uusario
    function comprobarMoneda(numero){
        if (isNaN(numero)) {
            alert("Ingrese un número");
            return false;
        }
        else if (numero <= 0) {
            alert("Ingrese un número positivo");
            return false;
        }
        return true;
    }

    function vaciarContenido(){
        array[0].value = ""
        array[1].value = ""
    }
}