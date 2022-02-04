import { useState } from "react"

const df = `${process.env.PUBLIC_URL}/default_profile.jpg`

const Avatar = ({id,name="🤦‍♀️",size}) => {
    const [enabled, setEnabled] = useState(true)

    const className = enabled ? "" : "disabled"

    let pictureClassName = ""
    if (size === "small"){
      pictureClassName = "is-small"
    } else if (size === "large") {
      pictureClassName = "is-large"
    }
    const handleClick = () => {
        setEnabled(preventState => {
          return !preventState
        })
    }

    const uri = `https://randomuser.me/api/portraits/women/${id}.jpg`
    return (
      <picture className={pictureClassName}>
        {
          id ? 
            <img src={uri} alt={name} className={className} onClick={handleClick} sizes={size}/> :
            <img src={df} alt={name} className={className} onClick={handleClick} sizes={size}/>
        }
        <strong>{name}</strong>
      </picture>
    )
}

//Default values (old way)
/*
Avatar.defaultProps = {
  name:"🤦‍♀️"
}
*/
export default Avatar