//CONSUMIENDO APIS


import {URI,PETICION} from '../helpers/DatospeticionGET.js'

//3. arranco pues
//consumo el APIS
fetch(URI,PETICION)
.then(function(respuesta) {
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    console.log(respuesta.tracks)
    let fila = document.getElementById("fila")

    
})
.catch(function(error){
    console.log(error)
})