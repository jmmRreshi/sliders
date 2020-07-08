propiedadesMouse = {

    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure"),
    mouseX: 0,
    mouseY: 0,
    horizontal: true,
    vertical: true
}


metodosMouse ={

    inicioMouse: function(){

        propiedadesMouse.zona.addEventListener("mousemove", metodosMouse.movimientosMouse);
        for(var i = 0; i < propiedadesMouse.figuras.length; i++){
            propiedadesMouse.figuras[i].innerHTML = "<img src= './css/img/mouse/plano0"+i+".png'>"
            propiedadesMouse.figuras[i].style.zIndex = -i;
        }

        setTimeout(()=>{
            propiedadesMouse.zona.style.height = propiedadesMouse.figuras[0].childNodes[0].height + "px";

        },100)

    },

    movimientosMouse: function(e){

        propiedadesMouse.mouseX = e.offsetX;
        propiedadesMouse.mouseY = e.offsetY;

        for(var i = 0; i < propiedadesMouse.figuras.length; i++){

            if (propiedadesMouse.horizontal) {
                propiedadesMouse.figuras[i].style.left = -propiedadesMouse.mouseX/(i*100+50) + "%";
            }
            if (propiedadesMouse.vertical) {
                propiedadesMouse.figuras[i].style.top = propiedadesMouse.mouseY/(i*100+50) + "%";

            }
        }  
    }

}

metodosMouse.inicioMouse();