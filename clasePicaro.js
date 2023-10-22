import { Personaje } from "./personaje.js"
import { clasePicaro } from "./clase_raza.js"

export class Picaro extends Personaje{
    static soypicaro(){
        return 'Te robo'
    }
}