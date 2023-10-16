import { Objeto } from "./objeto.js";

export class Personaje{
    #nombre = null;
    #raza = null;
    #clase = null;
    #inventario = null;

    constructor(nombre, raza, clase){
        this.#nombre = nombre;
        this.#raza = raza;
        this.#clase = clase;
        this.#inventario = new Set();
    }

    hablar(texto){
        let textoMejorado = `<br>${this.nombre}: "${texto}"`; //el this hace referencia al objeto antes del punto
        document.getElementById('divHistoria').innerHTML += texto; //innerHTML es el texto dentro del div
    }

    coger(objeto){
        this.#inventario.add(objeto);
    }

    //typeof ---> tipos generales (boolean, string...)
    pasar(objeto, personaje){
        if(!(objeto instanceof Objeto)){  //instanceof ---> Nos dice si el objeto pertenece a la clase
            throw 'Objeto inválido'
        }

        if(!(personaje instanceof Personaje)){
            throw 'Personaje inválido'
        }

        this.#inventario.delete(objeto);
        personaje.coger(objeto);
    }
}