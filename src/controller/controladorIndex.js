import {generarURI} from '../helpers/generarURI.js'
import {PETICION} from '../helpers/DatospeticionGET.js'
import {consultarCanciones} from '../services/servicioconsultarcanciones.js'
import {pintarCanciones} from "./controladorPintarCanciones.js"

let botonArtista=document.getElementById("botonBuscar")
botonArtista.addEventListener("click",function(evento){
    
    let artista=document.getElementById("artista")

    const URI=generarURI(artista.value)


    async function activarServicio(){
        let canciones=await consultarCanciones(URI,PETICION)
        pintarCanciones(canciones.tracks)
    }

    activarServicio()
    
    
    


    


})