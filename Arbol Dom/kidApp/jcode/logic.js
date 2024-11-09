let fondos = ["red","green","blue","yellow","orange","pink","lightblue","lightgreen"];
let ccolores = ["#00FF48","#D4478E","#FFD100","#0070FF","#7AAA83","#385B66","#ED91BF","#95AD95"];

window.onload = () =>{
    let main = document.getElementsByTagName("main")[0];
    colores_fondo(main);
    crearFiguras(main);
}

let i = 0;//para el fondo y para los colores
function colores_fondo(main){
    
    main.onclick = function(){
        if (i < fondos.length -1) i++;
        else i = 0;
        this.style.setProperty('background-color', fondos[i]);
    }
}

//Sonido
let sonido = new Audio();
sonido.setAttribute("src", "Musica/sonido.mp3");
sonido.volume = 0.1;  // Establecer el volumen al 50%

function crearFiguras(pantalla){

    let div = document.createElement("div");

    pantalla.onmousedown = function(e){//Pulsar (sin soltar) un botón del ratón
        
        //Solo cuando pulse quiero que se ejecute el sonido
        sonido.play();

        const POSX = e.clientX; // Coordenada X del clic
        const POSY = e.clientY; // Coordenada Y del clic
        
        /* El tamaño de esas figuras siempre será un 10% de la anchura de la pantalla del 
        dispositivo (tanto para la altura como para la anchura de la figura*/
        const TAM_PANTALLA = screen.width * 0.10;
        
        // TAM / 2 = la mitad de mi ancho y largo de caja para poder centrarla
        const TAMANIO_CAJA = (TAM_PANTALLA / 2);

        //POSX - (TAM / 2) => ESTO PARA SABER LA POSICION CORRECTA DONDE VA A IR MI CAJA
        // El resultado de lo anterior se lo resto a mis posiciones para poder mover la caja y centrarlo

        //Aplicando el borde al circulo de forma aleatoria
        let radius = 0;
        if(Math.random() < 0.5){
            radius = 20;   
        }
        //Asignando sus atributos correspondientes
        div.setAttribute("style", `
            position: relative;
            background-color: ${ccolores[i]};
            border-radius: ${radius}rem;
            width: ${TAM_PANTALLA}px;
            height: ${TAM_PANTALLA}px;
            left: ${POSX - TAMANIO_CAJA}px;
            top: ${POSY - TAMANIO_CAJA}px`);
        // Añadir la figura al body
        this.appendChild(div);

        //=================================>Mover Figuras<=================================\\
        //Mientras se mantenga el click en la pantalla, si se mueve el ratón, la figura creada se moverá con el ratón
        this.onmousemove = function(ev){
            const LIMIT_HORIZONTAL = screen.width - TAM_PANTALLA; // Limite derecho basado en la pantalla
            const LIMIT_VERTICAL = screen.height - TAM_PANTALLA; // Limite inferior basado en la pantalla

            let nueva_posX = ev.clientX - TAMANIO_CAJA;
            let nueva_posY = ev.clientY - TAMANIO_CAJA;

            // Asegurar que no se salga de los límites (derecha e inferior)
            if (nueva_posX < 0) nueva_posX = 0; // izquieda
            if (nueva_posX >= LIMIT_HORIZONTAL) nueva_posX = LIMIT_HORIZONTAL; // derecha
            if (nueva_posY < 0) nueva_posY = 0; // arriba
            if (nueva_posY > LIMIT_VERTICAL) nueva_posY = LIMIT_VERTICAL; //abajo

            // Asignar las nuevas coordenadas
            div.style.left = nueva_posX + "px";
            div.style.top = nueva_posY + "px";
        }
    }

    //llamo a mi funcion Destruir Figuras
    destruirFiguras(pantalla, div,sonido);
}

function destruirFiguras(pantalla, div,sonido){
    pantalla.onmouseup = function(){
        this.removeChild(div);
        sonido.pause();  // Pauso el sonido cuando destruyo la figura
    }
}