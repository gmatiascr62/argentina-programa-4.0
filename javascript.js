resumen = document.getElementById("resumen");
contacto = document.getElementById("cont");
experiencia = document.getElementById("exp");
info = document.getElementById('info_p');


function resum() {
    info.innerHTML=pf;
    info.style.backgroundColor = '#aadfff';
}
function conta() {
    info.innerHTML=ct;
    info.style.backgroundColor = '#caffaa';
}
function exp() {
    info.innerHTML=xp;
    info.style.backgroundColor = '#fff4aa';
}


resumen.addEventListener('click', resum);
contacto.addEventListener('click', conta);
experiencia.addEventListener('click', exp);

pf = "Como egresado en Informática de Sistemas, he realizado trabajos en python y javascript, que me han permitido desarrollar mi conocimiento de la informática y obtener experiencia práctica en soporte a usuarios y análisis de sistemas. Soy una persona orientada al cliente y a la búsqueda de soluciones, y puedo comunicarme en inglés y español a nivel bilingüe";

xp = "2010 - 2015:<br/>Empresa dedicada a Frontend.<br/><br/>2015 - 2018:<br/>Empresa dedicada a base de datos.<br/><br/>2018 - actual:<br/>Empresa dedicada a desarrollo Android.";

ct = "-Celular: 1123871919<br/><br/>-Email: gmatiascr62@gmail.com<br/><br/>-Dirección: Calle 10 n° 2087.";

resum();