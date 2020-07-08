const propiedadesFor = {
    entradas: document.querySelectorAll("input.validar"),
    valor: null,
    exprecionRegular: null,
    validarUsuario: false,
    validarContra: false,
    validadEmail: false,
    validarTerminos: null
}

const metodosForm = {

    iniciarFormulario:function(){
        for(var i = 0; i < propiedadesFor.entradas.length; i++){
            propiedadesFor.entradas[i].addEventListener("focus", metodosForm.enFoco);
            
            propiedadesFor.entradas[i].addEventListener("blur", metodosForm.fueraDeFoco);

            propiedadesFor.entradas[i].addEventListener("change", metodosForm.cambioEntrada);
        }

        metodosForm.validarFormulario();
    },

    enFoco: function(e){
        propiedadesFor.valor = e.target.value;

        if (propiedadesFor.valor == "") {

            document.querySelector("#"+e.target.id).style.background = "rgb(255, 255, 0, .5)";

            document.querySelector("[for="+e.target.id+"] .obligatorio").style.opacity = 1;
        
        }

        document.querySelector("[for="+e.target.id+"]").appendChild(document.createElement("DIV")).setAttribute("class", "error");

    },

    fueraDeFoco: function(e){
        
        document.querySelector("#"+e.target.id).style.background = "white";

        document.querySelector("[for="+e.target.id+"] .obligatorio").style.opacity = 0;
    
    },

    cambioEntrada: function(e){
        propiedadesFor.valor = e.target.value;
        
        if(propiedadesFor.valor != ""){
            switch(e.target.id){
                case "nombre":
                    if(propiedadesFor.valor.length < 2 || propiedadesFor.valor.length > 6){
                        document.querySelector("[for="+e.target.id+"] .error").innerHTML = '<span style="color:red">*Error al ingresar los datos: '+ e.target.placeholder+'</span>'
                        propiedadesFor.validarUsuario = false
                    }else{
                        document.querySelector("[for="+e.target.id+"] .error").parentNode.removeChild(document.querySelector("[for="+e.target.id+"] .error"));
                        propiedadesFor.validarUsuario = true;
                    }

                    break;
                case "password":
                   propiedadesFor.exprecionRegular =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;

                   if(!propiedadesFor.exprecionRegular.test(propiedadesFor.valor)){
                    document.querySelector("[for="+e.target.id+"] .error").innerHTML =
                    '<span style="color:red">*Error al ingresar los datos: '+ e.target.placeholder+'</span>';
                    propiedadesFor.validarContra = false;
                   }else{
                    document.querySelector("[for="+e.target.id+"] .error").parentNode.removeChild
                    (document.querySelector("[for="+e.target.id+"] .error"));
                    propiedadesFor.validarContra = true;
                   }
                    break;
                case "email":
                    propiedadesFor.exprecionRegular =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

                    if(!propiedadesFor.exprecionRegular.test(propiedadesFor.valor)){
                     document.querySelector("[for="+e.target.id+"] .error").innerHTML =
                     '<span style="color:red">*Error al ingresar los datos: '+ e.target.placeholder+'</span>';
                     metodosForm.validarFormulario.validadEmail = false;
                    }else{
                     document.querySelector("[for="+e.target.id+"] .error").parentNode.removeChild
                     (document.querySelector("[for="+e.target.id+"] .error"));
                     metodosForm.validarFormulario.validadEmail = true;
                    }
                    break;
            }
        }else{
            document.querySelector("[for="+e.target.id+"] .error").parentNode.removeChild
                     (document.querySelector("[for="+e.target.id+"] .error"));
        }
    },

    validarFormulario: function(){
        propiedadesFor.validarTerminos = document.querySelector("#terminos").checked

        if(!propiedadesFor.validarUsuario || propiedadesFor.validarContra || propiedadesFor.validadEmail){
   
            document.querySelector("#noEnviado").innerHTML='<span style="color:red">*Tiene errores en los datos ingresados.</span>'
            return false;
        }else if(!propiedadesFor.validarTerminos){
        
            document.querySelector("#noEnviado").innerHTML='<span style="color:red">*Tiene errores en los datos ingresados.</span>'

            return false
        }else{
            return true
        }
    }
     

}

metodosForm.iniciarFormulario()