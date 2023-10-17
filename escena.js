import {Personaje} from './personaje.js'
import {Objeto} from './objeto.js'
import {claseClerigo,claseGuerrero,claseBardo,clasePicaro,razaElfo,razaEnano,razaMediano,razaHumano,claseMago} from './clase_raza.js'
import {Mago} from './claseMago.js'
import {Enano} from './enano.js'

export class Escena{
    #personaje1 = new Personaje('bbbb',Enano,Mago)
    narrar(texto){
        document.getElementById('divHistoria').innerHTML += '<b>Narrador: '+texto+'</b>'
    }
    limpiardiv(){
        document.getElementById('divHistoria').innerHTML = ' '
    }
    introducirimagen(imagen){
        document.getElementById('divHistoria').innerHTML += '<img src=./imagenes/'+imagen+'>'
    }
    escena1(){
        this.narrar('<i>Pipo el Gladiador era un guerrero de baja estatura que vivía en la mágica Ciudad de Eldoria, en el Reino de Arkania. A pesar de su pequeña estatura, tenía un corazón valiente y un espíritu indomable. Desde muy joven, Pipo soñaba con ser un gladiador, y a pesar de las burlas y el escepticismo de quienes lo rodeaban, se dedicó a entrenar incansablemente.')
        this.introducirimagen("pipo.jpg")
    }
    cambiarFondo() {
        document.body.style.background = "url('bosque.jpg') no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}