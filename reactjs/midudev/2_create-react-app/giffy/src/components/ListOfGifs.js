import Gif from "./Gif"

const ListOfGifs = ({ gifs }) => {
    return (
        gifs.map(({id,title,url})=> {
            return <Gif key={id} id-={id} title={title} image={url} />
          })
    )
}

export default ListOfGifs