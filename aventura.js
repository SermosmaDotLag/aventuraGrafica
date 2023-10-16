console.log('Script cargado correctamente.')
import {Personaje} from './personaje.js'
import {Objeto} from './objeto.js'
import {claseClerigo,claseGuerrero,claseBardo,clasePicaro,razaElfo,razaEnano,razaMediano,razaHumano,claseMago} from './clase_raza.js'
import {Mago} from './claseMago.js'
import {Enano} from './enano.js'

let Personaje1 = new Personaje('Enano Magoso',Enano,Mago)
Personaje1.hablar(Mago.soymago())