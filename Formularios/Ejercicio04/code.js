window.onload = () => {
    const EURO = 0.83;

    let formu = document.getElementsByTagName("form")[0];
    let inputs = document.querySelectorAll("input");
    let array = [];
     
    for(let input of inputs){
        array.push(input);
    }

    array[0].disabled = true;
    array[1].disabled = true;

    formu.moneda.addEventListener("click",
        function(){
            switch(formu.moneda.selectedIndex){
                case 1:
                    array[0].disabled = false;
                    array[1].disabled = true;
                    break;
                case 2:
                    array[0].disabled = true;
                    array[1].disabled = false;
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
                case 1:
                    let numero1 = parseFloat(array[0].value);
                    if(comprobarMoneda(numero1)){
                        array[1].value = numero1 * EURO;
                        array[0].value = ""
                    } else vaciarContenido();

                    break;
                case 2:
                    let numero2 = parseFloat(array[1].value);
                    if(comprobarMoneda(numero2)){
                        array[0].value = (numero2 / EURO);
                        array[1].value = ""
                    } else vaciarContenido();
                    break;
            }
        }
        , false);

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