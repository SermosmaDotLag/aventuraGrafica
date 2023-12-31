import { Personaje } from "./personaje.js"
import { razaHumano } from "./clase_raza.js"

export class Humano extends Personaje{
    #colorPelo = null
    #colorPiel = null
    constructor(nombre, clase = null, colorPelo = 'Negro', colorPiel = 'Normal'){
        super(nombre,razaHumano,clase)
        this.#colorPelo = colorPelo
        this.#colorPiel = colorPiel
    }
}