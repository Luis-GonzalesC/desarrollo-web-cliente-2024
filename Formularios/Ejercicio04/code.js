window.onload = () => {
    const EURO = 0.83;

    let formu = document.getElementsByTagName("form")[0];
    let inputs = document.querySelectorAll("input");
    let array = [];
     
    for(let input of inputs){
        array.push(input);
    }

    formu.moneda.addEventListener("click",
        function(){
            switch(formu.moneda.selectedIndex){
                case 1:
                    array[1].disabled = true;
                    /*let numero = parseFloat(array[0].value);
                    if(isNaN(numero)) alert("Ingrese un número");
                    else if (numero <= 0) alert("Ingrese número positivo");
                    else array[1].value = numero * EURO;
                    array[0].value = ""*/
                    break;
                case 2:
                    array[0].disabled = true;
                    array[1].disabled = false;
                    break;
            }
        }
        , false);
    
    array[2].addEventListener("click", 
        function(){
            switch(formu.moneda.selectedIndex){
                case 1:
                    let numero1 = parseFloat(array[0].value);
                    if(isNaN(numero1)) alert("Ingrese un número");
                    else if (numero1 <= 0) alert("Ingrese número positivo");
                    else array[1].value = numero1 * EURO;
                    array[0].value = ""
                    break;
                case 2:
                    let numero2 = parseFloat(array[1].value);
                    if(isNaN(numero2)) alert("Ingrese un número");
                    else if (numero2 <= 0) alert("Ingrese número positivo");
                    else array[0].value = numero2 / EURO;
                    array[0].value = ""
                    break;
            }
        }
        , false);
    
    
}