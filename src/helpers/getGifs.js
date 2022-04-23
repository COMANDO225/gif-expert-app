export const getGifs = async (nombre) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(nombre)}&limit=10&api_key=JH89MJnJgrNYRcskiNMAZt6HCB1Tl0Mh`
    const respuesta = await fetch(url)
    const {data} = await respuesta.json()


    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    ))

    return gifs
}