import '../css/estilos.css'
import {firstMessage, delayMessage} from './message.js'
import platziImg from '../img/platzi.png'
import Video from '../video/v1.webm'

const img = document.createElement('img');
img.setAttribute('src', platziImg);
img.setAttribute('width', 50);
img.setAttribute('height', 50);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', Video);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);


document.write(firstMessage);
delayMessage()
console.log('Hola mundo, desde webpack external')