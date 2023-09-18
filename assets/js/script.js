const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos  = document.getElementById('seundos');

const relogio = setInterval(function Time(){
    
    let dateToday = new Date ();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

    if (hr >= 5 && hr < 7){
        document.body.style.background =
        "linear-grandient(130deg, #108dc, #f77f13)";
    }
    else if (hr >= 7 && hr < 16){
        document.body.style.background =
        "linear-grandient(130deg, #f9f19, #fc641b)";
    }
    else if (hr >= 16 && hr < 18){
        document.body.style.background =
        "linear-gradiente(130deg, #fc641b, #0d368c, #0a4e6a)";
    }
    else {
        document.body.style.background =
        "linear-gradiente(130deg, #0f2027, #154c60, #0d36c)";
    }
})


