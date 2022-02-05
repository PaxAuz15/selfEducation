const Gif = ({title,id,image}) => {
    
    return (
        <>
            {/* TODO: Create gif detail */}
            <h4>{title}</h4>
            <small>{id}</small>
            <img src={image} alt={title}/>
        </>
    )
}

export default Gif