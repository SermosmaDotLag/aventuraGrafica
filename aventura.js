console.log('Script cargado correctamente.')

import { Escena } from './escena.js'

let historia = new Escena()
let siguiente = document.getElementById("siguiente")
let opcion1 = document.getElementById("1")
let opcion2 = document.getElementById("2")
let opcion3 = document.getElementById("3")
let escena = 1

function recargarescenas(){
    if(escena==1)
    historia.escena1()
    if(escena==2)
    historia.escena2()
    if(escena==3)
    historia.escena3()
    if(escena==4)
    historia.escena4()
    if(escena==5)
    historia.escena5()
    if(escena==6)
    historia.escena6()
    if(escena==7)
    historia.escenaFinal()
}

siguiente.onclick = function() {
    historia.avanzar()
    recargarescenas()
}

opcion1.onclick = function(){
    opcion1.style.display = 'none'
    escena=historia.boton1()
    historia.reiniciarEscena()
    historia.avanzar()
    recargarescenas()
}

opcion2.onclick = function(){
    opcion1.style.display = 'none'
    escena=historia.boton2()
    historia.reiniciarEscena()
    historia.avanzar()
    recargarescenas()
}

opcion3.onclick = function(){
    opcion1.style.display = 'none'
    escena=historia.boton3()
    historia.reiniciarEscena()
    historia.avanzar()
    recargarescenas()
}