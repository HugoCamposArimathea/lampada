let btnLigar = document.querySelector('#ligar');
let btnDesligar = document.querySelector('#desligar');
let img = document.querySelector('#imagem');

function verificar() {
    return img.src.indexOf ('quebrada') > -1
};

function ligarLampada() {
    if (!verificar()) {
        img.src = 'image/ligada.jpg'
    }
};

function desligarLampada() {
    if (!verificar()) {
        img.src = 'image/desligada.jpg'
    }
};

function lampadaQuebrada() {
    img.src = 'image/quebrada.jpg'
    document.getElementById('ligar').disabled = true;
    document.getElementById('desligar').disabled = true;
};