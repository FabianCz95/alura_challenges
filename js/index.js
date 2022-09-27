function Mostrar() {
    document.getElementById("sin_texto").style.display = "none";
    document.getElementById("con_texto").style.display = "grid"


}

function Ocultar() {
    document.getElementById("sin_texto").style.display = "grid";
    document.getElementById("con_texto").style.display = "none";
}

function Encriptar() {
    var texto = document.getElementById("text__area").value

    if (texto == '') {
        alert("Ingrese el texto que desea encriptar!");
        return;
    }

    var dividir_palabras = texto.split(' ')

    for (let i = 0; i < dividir_palabras.length; i++) {
        const element = dividir_palabras[i];
        var deletrear = element.split('');

        for (let i = 0; i < deletrear.length; i++) {
            let ele = deletrear[i];

            switch (ele) {
                case "a":
                    ele = "ai"
                    break;

                case "e":
                    ele = "enter"
                    break;
                case "i":
                    ele = "imes"
                    break;
                case "o":
                    ele = "ober"
                    break;
                case "u":
                    ele = "ufat"
                    break;
                default:
                    break;
            }

            deletrear[i] = ele
        };

        dividir_palabras[i] = deletrear.join('');
    };

    var texto_encriptado = dividir_palabras.join(' ');
    document.getElementById("texto_encriptado").innerHTML = `${texto_encriptado}`

    Mostrar();
}

function Desencriptar() {
    var texto = document.getElementById("text__area").value

    if (texto == '') {
        alert("Ingrese el texto que desea encriptar!");
        return;
    }

    var dividir_palabras = texto.split(' ')

    for (let i = 0; i < dividir_palabras.length; i++) {
        const element = dividir_palabras[i];
        var deletrear = element.split('');
        var newDesencriptado = [];

        console.log(deletrear);

        for (let i = 0; i < deletrear.length; i++) {
            let ele = deletrear[i];

            newDesencriptado.push(ele);

            switch (ele) {
                case "a":
                    i = i + 1;
                    break;

                case "e":
                    i = i + 4;
                    break;
                case "i":
                    i = i + 3;
                    break;
                case "o":
                    i = i = i + 3;
                    break;
                case "u":
                    i = i = i + 3;
                    break;
                default:
                    break;
            }
        };

        dividir_palabras[i] = newDesencriptado.join('');
    };


    var texto_encriptado = dividir_palabras.join(' ');
    document.getElementById("texto_encriptado").innerHTML = `${texto_encriptado}`
    Mostrar();
}

function Copiar_texto() {
    var texto_a_copiar = document.getElementById('texto_encriptado');

    texto_a_copiar.select();
    document.execCommand('copy')
    alert('Texto copiado correctamente!')
}