//GENERAR UN TOKEN AUTOMATICO

//URI
const URI="https://accounts.spotify.com/api/token"

//DATOS DE ENVIO
const DATO1="grant_type=client_credentials"
const DATO2="client_id=5938fd7d0e5f4d889ba4db749d5780ad"
const DATO3="client_secret=63d8eca3cf88416ca881b4f92588b05b"

//PETICION
const PETICION={
    method:"POST",
    headers:{},
    body:DATO1+"&"+DATO2+"&"+DATO3
}

//FETCH