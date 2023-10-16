console.log('Script cargado correctamente.')
import {Personaje} from './personaje.js'
import {Objeto} from './objeto.js'
import {claseClerigo,claseGuerrero,claseMago,claseBardo,clasePicaro,razaElfo,razaEnano,razaMediano,razaHumano} from './clase_raza.js'
import {Enano} from './enano.js'


let bilbo =  new Personaje('Bildo Bolson',razaHobbit)
let gandalf = new Personaje('Gandalf El Gris','Humano','Mago')

let aladar = new Personaje('Aladar el Azul','Humano','Mago')

console.log(bilbo, gandalf)

gandalf.hablar('Buenos dias mi viejo amigo')
bilbo.hablar('¡Gandalf! Me alegro de verte')

let lampara = new Objeto('Lámpara de mesa azul')
let reloj = new Objeto('Reloj de abuelo')

let thorin = new Enano('Thorin Escudo de Roble', claseGuerrero)
let kili = new Enano('Kili')
let fili = new Enano('Fili')
let dwalin = new Enano('Dwalin')

gandalf.hablar('¡Ya están aqui! Bienvenidos a la casa de Bilbo','<br>')

document.getElementById('divHistoria').innerHTML += 'De pronto en la casa aparecieron ...'

kili.coger(lampara)
console.log(kili)

bilbo.hablar('¡Deja eso en su sitio!')
kili.hablar('Cógelo Fili')
kili.pasar(lampara,fili)
fili.hablar('¡Ya la tengo!')
fili.coger(reloj)
console.log(fili)

dwalin.hablar('Viva nuestro rey ' + Enano.rey)
kili.hablar(Enano.alabarRey())