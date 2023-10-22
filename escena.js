import {Personaje} from './personaje.js'
import {Objeto} from './objeto.js'
import {claseClerigo,claseGuerrero,claseBardo,clasePicaro,razaElfo,razaEnano,razaMediano,razaHumano,claseMago} from './clase_raza.js'
import {Humano} from './razaHumano.js'
import {Enano} from './razaEnano.js'
import {Mediano} from './razaMediano.js'
import {Picaro} from './clasePicaro.js'
import {Guerrero} from './claseGuerrero.js'
import {Mago} from './claseMago.js'
import {Bardo} from './claseBardo.js'

export class Escena{
    #pipo = new Personaje('Pipo el Gladiador',Enano,Guerrero)
    #mago = new Personaje('Mago Egocéntrico',Humano,Mago)
    #picaro = new Personaje('Enano Cleptómano y Pícaro',Enano,Picaro)
    #bardo = new Personaje('Sensual Bardo',Humano,Bardo)
    
    #objeto = new Objeto()

    #lineaactual = 0
    #boton1 = 0
    #boton2 = 0
    #boton3 = 0
    narrar(texto){
        document.getElementById('divHistoria').innerHTML = '<b>Narrador: '+texto+'</b>'
        this.introducirImagen('narrador.png')
    }
    introducirImagen(imagen){
        document.getElementById('whosTalking').src='./imagenes/'+imagen 
    }
    hablar(nombre, imagen, texto){
        
        document.getElementById('divHistoria').innerHTML = '<b>'+nombre+': '+texto+'</b>'
        this.introducirImagen(imagen)
    }
    cambiarFondo(imagen) {
        document.getElementById('fondo').style.backgroundImage="url('./imagenes/"+imagen+"')"
    }
    generarBoton(contenido,id,resultado){
        let boton=document.getElementById(id)
        if(id==1)
            this.#boton1=resultado
        if(id==2)
            this.#boton2=resultado
        if(id==3)
            this.#boton1=resultado
        boton.textContent = contenido
        boton.style.display = "block"
    }
    avanzar(){
        this.#lineaactual++
    }
    reiniciarEscena(){
        this.#lineaactual=0
    }
    boton1(){
        return this.#boton1
    }
    boton2(){
        return this.#boton2
    }
    boton3(){
        return this.#boton3
    }
    escena1(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('Pipo el Gladiador era un guerrero de baja estatura que vivía en la mágica Ciudad de Eldoria, en el Reino de Arkania. A pesar de su pequeña estatura, tenía un corazón valiente y un espíritu indomable. Desde muy joven, Pipo soñaba con ser un gladiador, y a pesar de las burlas y el escepticismo de quienes lo rodeaban, se dedicó a entrenar incansablemente.')
                this.cambiarFondo("arena.png")
                break;
            case 2:
                this.narrar('Pipo demostró ser un luchador tenaz y hábil, y su determinación lo llevó a superar grandes adversidades en la arena de combate mágica. A menudo se enfrentaba a oponentes mucho más altos y poderosos que él, pero su agilidad y astucia le permitían esquivar hechizos y encontrar debilidades en sus contrincantes. Su humildad y carisma también ganaron el apoyo del público, que comenzó a admirar al pequeño gladiador con un gran corazón.')
                break;
            case 3:
                this.narrar('A medida que Pipo luchaba en combates cada vez más desafiantes, su fama creció. Se convirtió en un héroe popular en Eldoria y una fuente de inspiración para muchos, especialmente para aquellos que enfrentaban dificultades en sus propias vidas. Su historia de superación y valentía resonaba en los corazones de todos.')
                break;
            case 4:
                this.narrar('Pipo el Gladiador no solo luchaba en la arena mágica, sino que también luchaba por causas justas fuera de ella. Se convirtió en un defensor de los oprimidos y desfavorecidos, utilizando su fama y sus poderes para ayudar a quienes más lo necesitaban. Su generosidad y compasión le ganaron el amor y el respeto de todo el Reino de Arkania.')
                break;
            case 5:
                this.narrar('Finalmente, Pipo el Gladiador se retiró de la arena mágica como un héroe aclamado. Aunque su pequeña estatura fue su característica más distintiva, demostró que el verdadero valor reside en el corazón y la determinación. Su legado perduró a lo largo de las eras como un recordatorio de que cualquier ser, sin importar su tamaño o apariencia, puede superar adversidades y convertirse en un verdadero héroe en el mágico Reino de Arkania.')
                break;
            default:
                this.generarBoton('Ir a la taberna','1',2)
        }
    }
    escena2(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('<b>--De camino a la taberna--</b><br>Pipo el Gladiador se encontraba en su modesta casa en Eldoria, el sol se estaba poniendo en el horizonte, y el resplandor dorado de la mágica ciudad iluminaba las calles empedradas. Como cualquier aventurero en busca de un merecido descanso, Pipo decidió dirigirse a la taberna local para relajarse y compartir historias de su última hazaña en la arena de combate.')
                this.cambiarFondo("taberna.webp")
                break;
            case 2:
                this.narrar('Saliendo de su hogar, Pipo caminó por las estrechas y adoquinadas calles de Eldoria. Las casas de colores vivos se alineaban a ambos lados de las calles, con enredaderas mágicas que trepaban por las paredes, otorgando a la ciudad un aspecto aún más encantador. La brisa cálida y perfumada de la ciudad lo envolvía mientras avanzaba hacia su destino.')
                break;
            case 3:
                this.narrar('A medida que Pipo se acercaba a la taberna, el ruido de la vida nocturna de Eldoria se hacía más audible. El murmullo de la gente riendo y charlando, la música de los bardo y el tintineo de las copas llenaban el aire. La taberna se alzaba majestuosa, con su letrero de madera pulida y su puerta de roble macizo.')
                break;
            case 4:
                this.narrar('Al entrar en la taberna, Pipo se encontró con los personajes habituales de la vida nocturna de Eldoria. En la esquina, el sensual bardo entonaba melodías apasionadas que hacían suspirar a todos los presentes. En una mesa cercana, el mago egocéntrico e insoportable, vestido con una capa de terciopelo púrpura, hablaba en voz alta sobre sus supuestos logros mágicos, mientras su audiencia asentía educadamente.')
                break;
            case 5:
                this.narrar('En la barra, el enano cleptómano y pícaro disfrutaba de un trago y jugaba a los dados con unos incautos visitantes. Siempre con una mirada traviesa en los ojos y una sonrisa socarrona, el enano era conocido por sus artimañas y su habilidad para desaparecer objetos ajenos sin que nadie se diera cuenta.')
                break;
            case 6:
                this.narrar('Pipo se acercó a la barra, saludando al tabernero con una sonrisa. Había llegado a su refugio nocturno favorito, donde compartiría risas, historias y nuevas aventuras con estos peculiares personajes que llamaban a Eldoria su hogar. La velada prometía emociones y risas en la mágica Ciudad de Eldoria.')
                break;
            default:
                this.generarBoton('Sentarse','1',3)//Primer parametro contenido del boton, segundo el numero de boton que es y tercer parametro a que escena te lleva
        }
    }
    escena3(){
        switch(this.#lineaactual){
            case 1:
                this.hablar('Mago Egocéntrico','mago-icon.jpg','Pipo, amigo mío, debes considerar la idea de tener a nuestro talentoso bardo en nuestra próxima aventura. Sus habilidades musicales son simplemente excepcionales. No solo puede entretenernos en el camino con canciones que tocarán los corazones de dragones, sino que también puede usar su música para desorientar a nuestros enemigos. ¡Imagina a un ogro atacando al ritmo de una balada triste!')
                this.cambiarFondo("taberna2.webp")
                break;
            case 2:
                this.hablar('Sensual Bardo','bardo-icon.jpg','(Inclina su cabeza con una sonrisa pícara) Sí, Pipo, y no solo eso. Mi música también puede levantar los espíritus y fortalecer nuestros corazones cuando enfrentemos momentos difíciles. Además, mi encanto natural puede ser de gran ayuda al interactuar con los aldeanos y conseguir información. ¿Qué dices, aceptas mis melodías en esta travesía?')
                break;
            case 3:
                this.hablar('Enano Cleptómano y Pícaro','enano-icon.jpg','(Interviene con una risa) ¡No subestimes a nuestro bardo, Pipo! Además de ser un virtuoso de la música, es tan astuto como yo a la hora de "adquirir" cosas. Entre sus encantadoras canciones y mis habilidades en la sombra, no habrá tesoro que se nos resista. ¡Somos un equipo imbatible!')
                break;
            case 4:
                this.hablar('Pipo el Gladiador','pipo-icon.jpg','(Sonríe ante la persuasión de sus compañeros) Bueno, después de escuchar sus argumentos, no puedo negar que las habilidades del bardo podrían ser útiles en nuestra aventura. Además, su música seguramente nos hará olvidar las penurias del camino. ¡Bien, bardo, estás dentro! Preparemos nuestras mochilas y partamos en busca de la próxima hazaña en el Reino de Arkania!')
                break;
            case 5:
                this.narrar('Y así, Pipo aceptó la propuesta de sus compañeros aventureros, confiando en las habilidades del bardo y entusiasmado por lo que les depararía en su emocionante travesía.')
                break;
            default:
                this.generarBoton('El Bosque Encantado','1',4)
        }
    }
    escena4(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('El primer desafío los llevó a un oscuro y misterioso bosque encantado. El viento susurraba secretos antiguos entre los árboles centenarios y las sombras danzaban a su alrededor. Mientras avanzaban, se encontraron con una horda de esqueletos, guardianes de la entrada al bosque.')
                this.cambiarFondo("bosqueencantado.jpg")
                break;
            case 2:
                this.narrar('Pipo, con su espada y escudo, lideró el ataque, mientras el mago lanzaba destellos mágicos y el bardo cantaba una balada inspiradora que fortalecía la moral del grupo. El enano, hábil en el combate cuerpo a cuerpo, luchó con astucia. Finalmente, lograron derrotar a los esqueletos y avanzar más profundamente en el bosque.')
                break;
            default:
                this.generarBoton('El Puente de las Sombras','1',5)
        }
    }
    escena5(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('El segundo desafío los llevó a un siniestro puente cubierto de niebla y sombras. A medida que avanzaban, una criatura sombría emergió de las brumas. Era un ser que se alimentaba de miedos y pesadillas, y su presencia amenazaba con atormentarlos.')
                this.cambiarFondo("puentesombras.jpg")
                break;
            case 2:
                this.narrar('El mago, arrogante como siempre, intentó someter a la criatura con sus hechizos. Sin embargo, fue el bardo quien, con su música, logró calmar a la bestia de las sombras, disipando la niebla y permitiendo que el grupo cruzara el puente sin más obstáculos.')
                break;
            default:
                this.generarBoton('La Caverna del Dragón','1',6)
        }
    }
    escena6(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('Llegaron a la entrada de una caverna oscura y misteriosa, donde se suponía que se encontraba La Chancla del Poder. Sin embargo, el guardián de la caverna resultó ser un poderoso dragón que dormía profundamente. Despertar al dragón podría resultar en un desastre.')
                this.cambiarFondo("dragon.jpg")
                break;
            case 2:
                this.narrar('El mago sugirió un plan arriesgado para robar sigilosamente la Chancla del Poder sin despertar al dragón, pero el enano pícaro, siempre amante de lo audaz, insistió en enfrentarlo. El bardo, sabiendo que la música tenía el poder de calmar las bestias, comenzó a tocar su arpa de manera cautelosa.')
                break;
            case 3:
                this.narrar('La melodía del bardo se extendió por la caverna y, milagrosamente, el dragón se mantuvo en un sueño profundo. Pipo, con cuidado, tomó La Chancla del Poder y salieron de la caverna con éxito.')
                break;
            case 4:
                this.narrar('Con La Chancla en su posesión, el grupo se retiró de la caverna sin despertar al dragón. Regresaron a Eldoria, donde se convirtieron en héroes y la leyenda de Pipo el Gladiador, el mago egocéntrico, el enano cleptómano y pícaro, y el sensual bardo se extendió por todo el reino como los valientes aventureros que habían conquistado el mito de La Chancla del Poder y sobrevivido a todos los desafíos en su camino.')
                break;
            default:
                this.generarBoton('Fin','1',7)
        }
    }
    escenaFinal(){
        switch(this.#lineaactual){
            case 1:
                this.narrar('Pipo se encontraba inmerso en una aventura épica, luchando contra fuerzas oscuras para salvar su mundo. Después de enfrentar desafíos imposibles y se convirtió en un héroe aclamado. Sin embargo, justo cuando creía que todo estaba en calma, Pipo se despertó con la sensación de que todo era solo un sueño. Mientras intenta comprender la realidad de su vida cotidiana, comienza a dudar de la verdadera naturaleza de sus hazañas heroicas. La línea entre sueño y realidad se difumina, dejando a Pipo cuestionando si alguna vez fue un héroe o simplemente fue parte de un sueño extraordinario.') 
                this.cambiarFondo("cielo.jpg")
                break;
            default:
                this.generarBoton('Volver a dormir','1',1)    
        }
    }
}