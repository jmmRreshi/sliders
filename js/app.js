var Paginacion = {
    
    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "fade",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    formatearLoop: false
}

var Metodos = {

    inicioSlide: function(){
        for(var i = 0; i < Paginacion.paginacion.length; i++){
            Paginacion.paginacion[i].addEventListener("click", Metodos.paginacionSlide)
            Paginacion.imgSlide[i].style.width = (100/Paginacion.paginacion.length) +"%"
        }
        
        Paginacion.avanzar.addEventListener("click", Metodos.avanzar);
        Paginacion.retroceder.addEventListener("click", Metodos.retroceder);
        
        Metodos.intervalo();

        Paginacion.cajaSlide.style.width = (Paginacion.paginacion*100) + "%";
    },

    paginacionSlide: function(item){
       
        Paginacion.item = item.target.parentNode.getAttribute("item") - 1;

        Metodos.movimientoSlide(Paginacion.item)

    },

    avanzar: function(){
        if (Paginacion.item < 3) {
            Paginacion.item++;
        }else if (Paginacion.item == 3) {
            Paginacion.item = 0;
        }


        Metodos.movimientoSlide(Paginacion.item);

    },

    retroceder: function(){
        if (Paginacion.item > 0) {
            Paginacion.item--
        } else if ( Paginacion.item == 0){
            Paginacion.item = 3;
        }
        

        Metodos.movimientoSlide(Paginacion.item);
    },





    movimientoSlide: function(item){

        Paginacion.formatearLoop = true;


        Paginacion.cajaSlide.style.left = item * -100 + "%"; 
        for(var i = 0; i < Paginacion.paginacion.length; i++){
        Paginacion.paginacion[i].style.opacity = .5;
        }
        
        Paginacion.paginacion[item].style.opacity = 1;

       if(Paginacion.animacionSlide == "slide"){
            Paginacion.cajaSlide.style.transition = ".7s left ease-in-out";
        } 
        
            if(Paginacion.animacionSlide == "fade"){
          
               
        
                Paginacion.cajaSlide.style.transition = ".7s opacity ease-in-out";
                         setTimeout(function () {
                             Paginacion.imgSlide[item].style.opacity = 1;
               
                              }, 500);
        }
    },

    intervalo: function(){
        setInterval(() => {

            if (Paginacion.formatearLoop) {
                Paginacion.formatearLoop = false;
            }else{
                Metodos.avanzar();
            }
        }, 5000);

    }


}


Metodos.inicioSlide();