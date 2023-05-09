function captura(tipo){
    console.log("evento capturado:"+tipo);
}

function pulsada(event){
    if(event.keyCode==192){
        console.log("tecla pulsada:Ñ");
    }
    else{
        console.log("tecla pulsada:" + String.fromCharCode(event.keyCode));
    }
    }
    
    
    function limpiar(){
        alert("Se ha ejecutado el limpiar");
    }       
    
    function envio(){
        alert("Se ha ejecutado el submit");
    }
    
    
    
    
    function cambiar(){
    
        console.log("El dato cambiado");
    }

    
    let prevScrollPos = window.pageYOffset; //posición del desplazamiento 
            window.onscroll = function() { 
                let currentScrollPos = window.pageYOffset; // detecta un nuevo desplazamiento, la posición actual del desplazamiento de la página 
                if (prevScrollPos > currentScrollPos) { //Si la posición actual es menor que la anterior, es decir, si la página se desplaza
                                                    // hacia arriba, se establece la posición top de la barra de navegación en 0 para mostrarla
                    document.querySelector("nav").style.top = "0";
                } else { //Si la posición actual es mayor que la anterior, es decir, si la página se desplaza hacia abajo, se establece 
                        //la posición top de la barra de navegación en -50px para ocultarla 
                    document.querySelector("nav").style.top = "-50px";
                }
                prevScrollPos = currentScrollPos;
            }