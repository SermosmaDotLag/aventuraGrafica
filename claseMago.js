import { Personaje } from "./personaje.js"
import { claseMago } from "./clase_raza.js"

export class Mago extends Personaje{
    static soymago(){
        return 'BOLA DE FUEGO'
    }
}