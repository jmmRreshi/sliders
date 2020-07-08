var propiedadesScroll ={
    
    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0,
    padding: 0
} 

var metodosScroll={
    inicioScroll: function(){
        document.addEventListener("scroll", metodosScroll.efectoParalax);
        for (let i = 0; i < propiedadesScroll.botonera.length; i++) {      
            propiedadesScroll.botonera[i].addEventListener("click", metodosScroll.desplazamiento);
        }
        
    },

    efectoParalax: function(){
        propiedadesScroll.posicionScroll = window.pageYOffset;

        if(propiedadesScroll.posicionScroll > 100){
            propiedadesScroll.cabezote.style.position  = "fixed";
            propiedadesScroll.cabezote.style.zIndex = 10;
            propiedadesScroll.padding=80;
        }else{
            propiedadesScroll.cabezote.style.position = "relative"
            propiedadesScroll.cabezote.style.zIndex = 0;
            propiedadesScroll.padding=180;

        }


        if(propiedadesScroll.posicionScroll > propiedadesScroll.cajaScroll.offsetTop - 200){
            for(var i = 0; i < propiedadesScroll.articulos.length; i++){
                propiedadesScroll.articulos[i].style.marginLeft= "0%";
            }
        }else{
            for(var i = 0; i < propiedadesScroll.articulos.length; i++){
                propiedadesScroll.articulos[i].style.marginLeft = propiedadesScroll.posicionScroll /23.2 -100 + "%";
            }
        }
    
    },

    desplazamiento:function(e){
      e.preventDefault();

      propiedadesScroll.ruta = e.target.getAttribute("href");
        
      propiedadesScroll.destinoScroll = document.querySelector(propiedadesScroll.ruta).offsetTop - propiedadesScroll.padding;

      propiedadesScroll.intervalo = setInterval(function(){
        if(propiedadesScroll.posicionScroll < propiedadesScroll.destinoScroll){
            propiedadesScroll.posicionScroll+=100;
                
            if(propiedadesScroll.posicionScroll >= propiedadesScroll.destinoScroll){
                    propiedadesScroll.posicionScroll = propiedadesScroll.destinoScroll
                    clearInterval(propiedadesScroll.intervalo);
                }
        }else{
            propiedadesScroll.posicionScroll-=100;

                if(propiedadesScroll.posicionScroll <= propiedadesScroll.destinoScroll){
                    propiedadesScroll.posicionScroll = propiedadesScroll.destinoScroll
                    clearInterval(propiedadesScroll.intervalo);
                }
        }

        window.scrollTo(0, propiedadesScroll.posicionScroll);

      },50)
    }

    
}

metodosScroll.inicioScroll();   