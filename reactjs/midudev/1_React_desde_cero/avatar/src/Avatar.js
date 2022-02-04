import { useState } from "react"

const Avatar = (props) => {
    const [enabled, setEnabled] = useState(true)

    const className = enabled ? "" : "disabled"

    let pictureClassName = ""
    if (props.size === "small"){
      pictureClassName = "is-small"
    } else if (props.size === "large") {
      pictureClassName = "is-large"
    }
    const handleClick = () => {
        setEnabled(preventState => {
          return !preventState
        })
    }

    const uri = `https://randomuser.me/api/portraits/women/${props.id}.jpg`
    return (
      <picture className={pictureClassName}>
        <img src={uri} alt={props.name} className={className} onClick={handleClick} sizes={props.size}/>
        <strong>{props.name}</strong>
      </picture>
    )
}

export default Avatar