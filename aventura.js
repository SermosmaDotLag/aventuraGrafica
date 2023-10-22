console.log('Script cargado correctamente.')

import { Escena } from './escena.js'

let historia = new Escena()
let siguiente = document.getElementById("siguiente")
let opcion1 = document.getElementById("1")
let escena = 1

function recargarescenas(){
    if(escena==1)
    historia.escena1()
    if(escena==2)
    historia.escena2()
}

siguiente.onclick = function() {
    historia.avanzar()
    recargarescenas()
}

opcion1.onclick = function(){
    opcion1.style.display = 'none'
    escena=2
    historia.reiniciarEscena()
    historia.avanzar()
    recargarescenas()
}