import renderToDOM from './render-to-dom'
import makeMessage from './make-message'

const waitTime = new Promise((todoOk, todoMal) => {
    setTimeout(() => {
        todoOk('han pasado 3 segundos')
    }, 3000)
})
module.exports = {
    firstMessage: 'Hola mundo desde un modulo',
    delayMessage: async () => {
        const message = await waitTime;
        renderToDOM(makeMessage(message));
    }
}