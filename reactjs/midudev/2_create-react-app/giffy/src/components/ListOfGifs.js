import { useEffect, useState } from "react"
import Gif from "./Gif"
import getGifs from "../services/getGifs"
import Loading from "./Loading"

const ListOfGifs = ({params}) => {
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        console.log("useEfect ListOfGifs");
        setLoading(true)
        getGifs({keyword})
            .then(gifs=>{
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword])
    
    return (
        <>
        {console.log("render from ListOfGifs")}
        {loading ? <Loading /> : gifs.map(({id,title,url})=> {
            return <Gif key={id} id-={id} title={title} image={url} />
        })}
        </>
        
    )
}

export default ListOfGifs