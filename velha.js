var Jogador, Ganhador = null;
var Jogadorselecionado = document.getElementById('Jogador-selecionado');
var Ganhadorselecionado = document.getElementById('Ganhador-selecionado');

trocaJogador('X');

function escolhaQuadrado(id) {
    if (Ganhador !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = Jogador;
    quadrado.style.color = '#000';

    if (Jogador === 'X') {
        Jogador = 'O';
    } else {
        Jogador = 'X';
    }

    trocaJogador(Jogador);
    checaGanhador();
}

function trocaJogador(valor) {
    Jogador = valor;
    Jogadorselecionado.innerHTML = Jogador;
}

function checaGanhador() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if (checkSequence(quadrado1, quadrado2, quadrado3)) {
        trocaCorQuadrado(quadrado1, quadrado2, quadrado3);
        trocaGanhador(quadrado1);
        return;
    }

    if (checkSequence(quadrado4, quadrado5, quadrado6)) {
        trocaCorQuadrado(quadrado4, quadrado5, quadrado6);
        trocaGanhador(quadrado4);
        return;
    }

    if (checkSequence(quadrado7, quadrado8, quadrado9)) {
        trocaCorQuadrado(quadrado7, quadrado8, quadrado9);
        trocaGanhador(quadrado7);
        return;
    }

    if (checkSequence(quadrado1, quadrado4, quadrado7)) {
        trocaCorQuadrado(quadrado1, quadrado4, quadrado7);
        trocaGanhador(quadrado1);
        return;
    }

    if (checkSequence(quadrado2, quadrado5, quadrado8)) {
        trocaCorQuadrado(quadrado2, quadrado5, quadrado8);
        trocaGanhador(quadrado2);
        return;
    }

    if (checkSequence(quadrado3, quadrado6, quadrado9)) {
        trocaCorQuadrado(quadrado3, quadrado6, quadrado9);
        trocaGanhador(quadrado3);
        return;
    }

    if (checkSequence(quadrado1, quadrado5, quadrado9)) {
        trocaCorQuadrado(quadrado1, quadrado5, quadrado9);
        trocaGanhador(quadrado1);
        return;
    }

    if (checkSequence(quadrado3, quadrado5, quadrado7)) {
        trocaCorQuadrado(quadrado3, quadrado5, quadrado7);
        trocaGanhador(quadrado3);
    }
}

function trocaGanhador(quadrado) {
    Ganhador = quadrado.innerHTML;
    Ganhadorselecionado.innerHTML = Ganhador;
}

function trocaCorQuadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checkSequence(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function riniciar() {
    Ganhador = null;
    Ganhadorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'rgb(87, 150, 150)';
        quadrado.style.color = 'rgb(87, 150, 150)';
        quadrado.innerHTML = '-';
    }

    trocaJogador('X');
}