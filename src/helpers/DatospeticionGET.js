const ID_ARTISTA="4Y6VI2Mfdhvb1RImggzOiY"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQBraZbClDTMiZNbfMuTvPqpzlenS22ybpF-QLxSlXayjY8JAOs0k4aKfxCieJ35C4wFVgmFC5D3h6KkDjRHKMSxPwIeqZhoZ5O75ZkXyTQZqRdpv9LJTLJIUPusfc4qoeO6SFBwT3pa3GHA94Z0mb6GU8al8oGKP7jaqsrVfs2LGVH-Wvk"

export const PETICION={
    method: "GET",
    headers: {
        Authorization:TOKEN
    }
}