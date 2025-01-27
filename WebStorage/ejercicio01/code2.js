window.onload = () =>{
    let input = document.querySelector("input[type='button']");

    //Mostrando el usuario y contraseña
    mostrarUsuario("El nombre de usuario es: ", "nombre")
    mostrarUsuario("La contraseña: ", "contrasena")

    //Borrando los datos almacenados
    input.addEventListener("click", ()=>{
        localStorage.clear();
    });

    function mostrarUsuario(mensaje, ge_item){
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(mensaje + localStorage.getItem(ge_item)))
        document.getElementsByTagName("body")[0].appendChild(p);

    }
}