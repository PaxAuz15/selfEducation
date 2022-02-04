import { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

const ListOfGifs = ({ keyword }) => {
    const [gifs, setGifs] = useState([])

    useEffect(function(){
        getGifs({keyword})
            .then(gifs=>setGifs(gifs))
    },[keyword])
    
    return (
        gifs.map(({id,title,url})=> {
            return <Gif key={id} id-={id} title={title} image={url} />
          })
    )
}

export default ListOfGifs