var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var botonCopiar = document.querySelector("#copiar");
var imagenTexto = document.querySelector(".imagen-texto");
var resultado = document.querySelector("#text-area-right");



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;




function texto(){
    var area = document.querySelector("#text-area")
    return area.value
}

function ocultar() {
    imagenTexto.classList.add("ocultar")
}

function encriptar() {
    ocultar()
    resultado.textContent = encriptarTexto(texto())
}

function desencriptar(){
    ocultar()
    resultado.textContent = desencriptarTexto(texto())
}

botonCopiar.addEventListener('click', e => {
    resultado.select();
    document.execCommand('copy');

})

function encriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}

function desencriptarTexto(mensaje){
    let texto = mensaje;
    let textoFinal = "";

    for (let i = 0; i < texto.length; i++){

        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }

        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }

        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }

        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }

        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }

        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal
}

