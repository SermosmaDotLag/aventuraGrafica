import { Personaje } from "./personaje.js"
import { claseGuerrero } from "./clase_raza.js"

export class Guerrero extends Personaje{
    static soyguerrero(){
        return 'me pego'
    }
}