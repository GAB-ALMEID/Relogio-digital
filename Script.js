const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hor = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hor < 10) hr = '0' + hor;
    if (min < 10) hr = '0' + min;
    if (seg < 10) hr = '0' + seg;

    horas.textContent = hor;
    minutos.textContent = min;
    segundos.textContent= seg;
})