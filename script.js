// Seleção de Elementos
const horas = document.getElementById('horas');
const background = document.body

// Código principal
const dataAtual = new Date();
const horaPadrao = `${dataAtual.getHours().toString().padStart(2, '0')}:${dataAtual.getMinutes().toString().padStart(2, '0')}:${dataAtual.getSeconds().toString().padStart(2, '0')}`;
horas.innerHTML = horaPadrao;
setInterval(atualizarHora, 1000);
const backgroundImage = background.style.backgroundImage = setarBackground()

// Funções
function atualizarHora() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();
    const segundos = dataAtual.getSeconds();
    const textoRelogio = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    return horas.innerHTML = textoRelogio;
}

function setarBackground() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours()
    console.log(dataAtual.getHours())
    
    if (hora >= 5 && hora < 12) {
        background.style.backgroundImage = "url('img/background-dia.jpg')"
    } else if (hora >= 12 && hora < 18) {
        background.style.backgroundImage = "url('img/background-tarde.jpg')"
    } else if (hora >= 18) {
        background.style.backgroundImage = "url('img/background-noite.jpg')"
    } else {
        background.style.backgroundImage = "url('img/background-noite.jpg')"
    };

    return;
}

// Eventos