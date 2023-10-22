import { Personaje } from "./personaje.js"
import { claseClerigo} from "./clase_raza.js"

export class claseClerigo extends Personaje{
    static soyclerigo(){
        return 'te curo'
    }
}