import {Personaje} from './personaje.js'
import {Objeto} from './objeto.js'
import {claseClerigo,claseGuerrero,claseBardo,clasePicaro,razaElfo,razaEnano,razaMediano,razaHumano,claseMago} from './clase_raza.js'
import {Mago} from './claseMago.js'
import {Enano} from './enano.js'

export class Escena{
    #personaje1 = new Personaje('bbbb',Enano,Mago)
    #lineaactual =0
    narrar(texto){
        document.getElementById('divHistoria').innerHTML = '<b>Narrador: '+texto+'</b>'
    }
    introducirImagen(imagen){
        document.getElementById('whosTalking').src='./imagenes/'+imagen
    }
    cambiarFondo(imagen) {
        document.getElementById('fondo').style.backgroundImage="url('./imagenes/"+imagen+"')"
    }
    generarBoton(contenido,id){
        let boton=document.getElementById(id)
        boton.textContent = contenido
        boton.style.display = "block"
    }
    avanzar(){
        this.#lineaactual++
    }
    reiniciarEscena(){
        this.#lineaactual=0
    }
    escena1(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('<i>Pipo el Gladiador era un guerrero de baja estatura que vivía en la mágica Ciudad de Eldoria, en el Reino de Arkania. A pesar de su pequeña estatura, tenía un corazón valiente y un espíritu indomable. Desde muy joven, Pipo soñaba con ser un gladiador, y a pesar de las burlas y el escepticismo de quienes lo rodeaban, se dedicó a entrenar incansablemente.')
                break;
            case 2:
                this.narrar('uno')
                break;
            default:
                this.generarBoton('escena1','1')
        }
    }
    escena2(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('escena 2')
                break;
            case 2:
                this.narrar('dos')
                break;
            default:
                this.generarBoton('escena2','1')
        }
    }
}