window.onload = () =>{
    let inputs = document.querySelectorAll("input[type='text']");
    let boton = document.querySelector("input[type='button']");

    boton.addEventListener("click", 
        function(){
            //Paso los valores a minúsculas
            let campo1 = inputs[0].value.toLowerCase();
            let campo2 = inputs[1].value.toLowerCase()

            //Compruebo longitudes
            if (campo1.length != campo2.length) {
                alert("NO SON ANAGRAMAS");
                return;//Para cortar
            }

            //Hago un array ordenando y luego lo vuelvo a unir
            let ordenado1 = Array.from(campo1).sort().join('');
            let ordenado2 = Array.from(campo2).sort().join('');

            if (ordenado1 == ordenado2) alert("SI SON ANAGRAMAS");
            else alert("NO SON ANAGRAMAS");
        }
    , false)
    
}