import '../css/estilos.css'
import {firstMessage, delayMessage} from './message.js'
import platziImg from '../img/platzi.png'
import data from './teachers'
import renderToDOM from './render-to-dom'
import React from 'react'
import {render} from 'react-dom'
import Teachers from './components/teachers'

let button = document.getElementById('dynamic-import');
button.addEventListener('click', async () => {
   const {default: alerta} = await import('./alerta')
    alerta();
});

render(<Teachers data={data}/>, document.getElementById('container'));
console.log(data);

data.teachers.forEach((teacher) => {
    const element = document.createElement('li');
    element.textContent = teacher.name;
    renderToDOM(element);
})

const img = document.createElement('img')
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);
document.write(firstMessage);
delayMessage()
console.log('Hola mundo, desde webpack external')