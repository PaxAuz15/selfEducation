import { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';

const App = () => {
  const [gifs,setGif] = useState([])

  function handleChangeGifs(){
    setGif()
  }

  

  useEffect(function(){
    console.log("useEffect")
    getGifs({keyboards:'rick'}).then((images)=>{
      setGif(images)
    })
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {console.log("render")}
        {
          gifs.map(gif=>{
            return(
              <>
                <h4>{gif.title}</h4>
                <small>{gif.id}</small>
                <img src={gif.url} alt={gif.title}/>
              </>
            )
          })
        }
        <button onClick={handleChangeGifs}>Change gifs</button>
      </section>
    </div>
  );
}

export default App;
