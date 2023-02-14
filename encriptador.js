//Llaves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const noTexto = document.querySelector(".noTexto");
copia.style.display = "none";



function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z\s \u00E0-\u00FC]*$/);

    if(!validador || validador === 0) {
        alert("Solo están permitidos textos en letra minúscula sin puntos ni comas")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        noTexto.style.display = "none";
        copia.style.display = "block"
   }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["é", "enter"], ["i", "imes"],["í", "imes"], ["a", "ai"],["á", "ai"], ["o", "ober"],["ó", "ober"], ["u", "ufat"], ["ú", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada;
}



function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    noTexto.style.display = "none";
    
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["é", "enter"], ["i", "imes"],["í", "imes"], ["a", "ai"],["á", "ai"], ["o", "ober"],["ó", "ober"], ["u", "ufat"], ["ú", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada;
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado al Portapapeles")
}
