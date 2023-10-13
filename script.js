const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

function semTempoIrmao() {
    const tempo = new Date();

    const horaRotacao = 
    (360 / 12) * tempo.getHours();

    const minutoRotacao = 
    (360 / 60) * tempo.getMinutes();

    const segundoRotacao = 
    (360 / 60) * tempo.getSeconds();

horas.style.transform = `rotate(${horaRotacao}deg)`
minutos.style.transform = `rotate(${minutoRotacao}deg)`
segundos.style.transform = `rotate(${segundoRotacao}deg)`
}


semTempoIrmao()

setInterval(semTempoIrmao, 1000)