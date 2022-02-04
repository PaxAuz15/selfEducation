import { useState } from "react"

const Avatar = (props) => {
    const [enabled, setEnabled] = useState(true)

    const className = enabled ? "" : "disabled"

    const handleClick = () => {
        setEnabled(preventState => {
          return !preventState
        })
    }

    const uri = `https://randomuser.me/api/portraits/women/${props.id}.jpg`
    return (
      <picture>
        <img src={uri} alt={props.name} className={className} onClick={handleClick}/>
        <strong>{props.name}</strong>
      </picture>
    )
}

export default Avatar