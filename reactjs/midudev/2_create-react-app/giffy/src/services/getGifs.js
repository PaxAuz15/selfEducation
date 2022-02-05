import { apiKey } from "./constants"

export default function getGifs({keyword = "Ecuador"} = {}){
    
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

    return fetch(apiUrl)
      .then(res=>res.json())
      .then(json=>{
          const { data } = json
          const gifs = data.map((image)=>{
            const {title, id, images} = image
            const {url} = images.downsized_medium
            return {id, title,url}
          })
          return gifs
        })
}