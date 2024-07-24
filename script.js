import { machuPicchu, huacachina, lineasNasca, bañosDelInca } from "./lugares.js";

let enlaces = document.querySelectorAll('a')

let titleElement = document.getElementById('titulo')
let captionElement = document.getElementById('subtitulo')
let paragraphElement = document.getElementById('parrafo')
let imageElement = document.getElementById('img')

//event click

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {

        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        this.classList.add('active')

        let content = getContent(this.textContent)
        
        titleElement.innerHTML = content.titulo
        captionElement.innerHTML = content.subtitulo
        paragraphElement.innerHTML = content.parrafo
        imageElement.src = content.imagen
    });

});

function getContent(enlace){
    let content = {
        'Machu Picchu': machuPicchu,
        'Huacachina': huacachina,
        'Lineas de Nasca': lineasNasca,
        'Baños del Inca': bañosDelInca
    };
    return content[enlace];
}