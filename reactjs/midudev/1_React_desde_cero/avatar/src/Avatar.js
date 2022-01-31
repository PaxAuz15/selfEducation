import { useState } from "react"

const Avatar = (props) => {
    const [enabled, setEnabled] = useState(true)

    const className = enabled ? "" : "disabled"

    const handleClick = () => {
        setEnabled(!enabled)
    }

    const uri = `https://randomuser.me/api/portraits/women/${props.id}.jpg`
    console.log(uri)
    return (
      <picture>
        <img src={uri} alt={props.name} className={className} onClick={handleClick}/>
        <strong>{props.name}</strong>
      </picture>
    )
}

export default Avatar