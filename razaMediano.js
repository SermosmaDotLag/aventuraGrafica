import { Personaje } from "./personaje.js"
import { razaMediano } from "./clase_raza.js"

export class Mediano extends Personaje{
    #colorBarba = null
    constructor(nombre, clase = null, colorBarba = 'Blanca'){
        super(nombre,razaMediano,clase)
        this.#colorBarba = colorBarba
    }
}