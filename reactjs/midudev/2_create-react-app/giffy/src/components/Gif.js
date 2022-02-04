const Gif = ({title,id,image}) => {
    return (
        <>
            <h4>{title}</h4>
            <small>{id}</small>
            <img src={image} alt={title}/>
        </>
    )
}

export default Gif