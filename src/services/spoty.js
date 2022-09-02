import {URI,PETICION} from '../helpers/DatospeticionGET.js'
import {consultarCanciones} from './servicioconsultarcanciones.js'
import {pintarCanciones} from '../controller/controladorPintarCanciones.js'

//CONSUMIR UN API (CONSUMIR UN SERVICIO)
let canciones=await consultarCanciones(URI,PETICION)
console.log(canciones)

//Renderizo los DATOS
pintarCanciones(canciones.tracks)