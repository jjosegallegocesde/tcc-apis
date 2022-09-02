const ID_ARTISTA="4Y6VI2Mfdhvb1RImggzOiY"

export const URI=`https://api.spotify.com/v1/artists/${ID_ARTISTA}/top-tracks?market=US`

const TOKEN="Bearer BQBPaP_iA8Ke9BuM9NrisGfMtroyHQNdhc7Myto_6WTvRjuL9VwP1zIqrvwLXTjMEPm5VKDOvJs2BS37cxVSEQVTjM9jd0TZkxxoK194I-LTr3cTwwUVYQtOVTMMNEYvxUsT_2XBqwiWDF85Fw0fjT67lx74XcY50mizBoRdXCshDQ0a6eQ"

export const PETICION={
    method: "GET",
    headers: {
        Authorization:TOKEN
    }
}