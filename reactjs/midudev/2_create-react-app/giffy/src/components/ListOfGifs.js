import { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"

const ListOfGifs = ({ keyword }) => {
    const [gifs, setGifs] = useState([])

    useEffect(function(){
        console.log("useEfect ListOfGifs");
        getGifs({keyword})
            .then(gifs=>setGifs(gifs))
    },[keyword])
    
    return (
        <>
        {console.log("render from ListOfGifs")}
        {gifs.map(({id,title,url})=> {
            return <Gif key={id} id-={id} title={title} image={url} />
        })}
        </>
        
    )
}

export default ListOfGifs