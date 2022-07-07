//funcion que aplica el estilo a la opción  seleccionada en el menu y quita la previamente seleccionada
function seleccionar(link){
    var opciónes = document.querySelectorAll('#links a')
    opciones(0).className = "";
    opciones(1).className = "";
    opciones(2).className = "";
    opciones(3).className = "";
    opciones(4).className = "";
    link.className = "seleccionado";
    
    var x = document.getElementById("nav");
    x.className = ""
}

    

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}