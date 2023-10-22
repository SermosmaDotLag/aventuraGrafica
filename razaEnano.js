import { Personaje } from "./personaje.js"
import { razaEnano } from "./clase_raza.js"

export class Enano extends Personaje{
    #colorBarba = null
    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre,razaEnano,clase)
        this.#colorBarba = colorBarba
    }
}