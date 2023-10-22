import { Personaje } from "./personaje.js"
import { razaElfo} from "./clase_raza.js"

export class Elfo extends Personaje{
    #colorPelo = null
    #colorPiel = null
    constructor(nombre, clase = null, colorPelo = 'Negro', colorPiel = 'Normal'){
        super(nombre,razaHumano,clase)
        this.#colorPelo = colorPelo
        this.#colorPiel = colorPiel
    }
}