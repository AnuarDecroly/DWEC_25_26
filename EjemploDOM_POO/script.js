import Persona from './Persona.js';

const persona1 = new Persona('Anuar', 'Khan');


document.addEventListener('DOMContentLoaded', function () {

    const sectionPrincipal = document.getElementById('principal');

    const divP = document.createElement('div');
    divP.classList.add('contenedor');

    const p1 = document.createElement('p');
    p1.textContent = persona1.nombre + ' ' + persona1.apellido;

    p1.classList.add('parrafo');

    const btn_1 = document.createElement('button');
    const btn_2 = document.createElement('button');
    const btn_3 = document.createElement('button');

    btn_1.textContent = 'click me';
    btn_2.textContent = 'click me';
    btn_3.textContent = 'click me';

    btn_1.classList.add('btn');
    btn_2.classList.add('btn');
    btn_3.classList.add('btn');

    btn_1.addEventListener('click', function () {
        p1.style.color = 'red';
    });
    btn_2.addEventListener('click', function () {
        p1.style.color = 'blue';
    });
    btn_3.addEventListener('click', function () {
        p1.style.color = 'green';
    }); 

    divP.append(btn_1, btn_2, btn_3);
    
    sectionPrincipal.append(p1, divP);
});
