/**
 * Jokenpo
 * @author Claudio Henrique
 */

let sorteio

function jogar() {
    // validação da obrigatoriedade da escolha do jogador
    // usamos o argumento "checked" para validar radion buttons e checked box
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")
    } else {
        // lógica principal
        sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break;
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break;
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break;
            default:
                break;
        }
    }
    // lógica para determinar empate ou declarar o vencedor
    if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
        // a linha abaixo insere um texto na tag identificada
        document.getElementById('resultado').innerText = "Empate!";
    } else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
        document.getElementById('resultado').innerText = "Você venceu!";
    } else {
        document.getElementById('resultado').innerText = "Computador venceu!";
    }
}

function limpar() {
    document.getElementById('pc').src="img/pc.png";
    document.getElementById('resultado').innerText = "";
}