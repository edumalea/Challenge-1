//Vamos a crear variables con las acciones de los botones
var botonEncriptar= document.querySelector(".encriptar");
var botonDesencriptar= document.querySelector(".desencriptar");
var muneco= document.querySelector(".imagenmuneco");
var h3mensaje= document.querySelector(".h3msj");
var textoParrafo= document.querySelector(".parrafoingresar");
var resultado= document.querySelector(".textoresultado");
var botonCopiar= document.querySelector(".botoncopiar");
//Creamos la función de encriptar
botonEncriptar.onclick= encriptar;
botonDesencriptar.onclick= desencriptar;

botonCopiar.onclick= copiar;
        
function copiar(){
    var copiarTexto= resultado;
    var seleccion= document.createRange();
    seleccion.selectNodeContents(copiarTexto);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res =document.execCommand("copy");
    window.getSelection().removeRange(seleccion);
}


function encriptar(){
  ocultarAdelante();
  var areatexto= recuperTexto();
  resultado.textContent= encriptarTexto(areatexto);
}
function desencriptar(){
    ocultarAdelante();
    var areatexto= recuperTexto();
    resultado.textContent= desencriptarTexto(areatexto);
}


function recuperTexto(){
    var area = document.querySelector(".inputarea");
    return area.value;
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    h3mensaje.classList.add("ocultar");
    textoParrafo.classList.add("ocultar");
}

function encriptarTexto(msj){
    var texto = msj;
    var textoEncriptado= "";
    for(var i =0; i<texto.length; i++){
        if(texto[i]== "a"){
            textoEncriptado= textoEncriptado+"ai";
        }
        else if(texto[i]== "e"){
            textoEncriptado= textoEncriptado+"enter";
        }
        else if(texto[i]== "i"){
            textoEncriptado= textoEncriptado+"imes";
        }
        else if(texto[i]== "o"){
            textoEncriptado= textoEncriptado+"ober";
        }
        else if(texto[i]== "u"){
            textoEncriptado= textoEncriptado+"ufat";
        }
        else{
            textoEncriptado=textoEncriptado+texto[i];
        }
    }
    return textoEncriptado;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal= "";
    for(var i =0; i<texto.length; i++){
        if(texto[i]== "a"){
            textoFinal= textoFinal+"a";
            i=i+1;
        }
        else if(texto[i]== "e"){
            textoFinal= textoFinal+"e";
            i=i+4;
        }
        else if(texto[i]== "i"){
            textoFinal= textoFinal+"i";
            i=i+3;
        }
        else if(texto[i]== "o"){
            textoFinal= textoFinal+"o";
            i=i+3;
        }
        else if(texto[i]== "u"){
            textoFinal= textoFinal+"u";
            i=i+3;
        }
        else{
            textoFinal= textoFinal+texto[i];
        }
        
    }
    return textoFinal;
}