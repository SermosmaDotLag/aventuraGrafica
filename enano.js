import { Personaje } from "./personaje.js"
import { razaEnano } from "./clase_raza.js"

export class Enano extends Personaje{
    static rey = 'Thorin Escudo de roble'
    static alabarAlRey(){
        return 'Viva '+ Enano.rey
    }
    #colorBarba = null

    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre,razaEnano,clase)
        this.#colorBarba = colorBarba
    }

    picar(){
    }
}