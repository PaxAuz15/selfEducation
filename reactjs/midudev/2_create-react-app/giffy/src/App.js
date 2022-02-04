import { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

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
          gifs.map(({id,title,url})=> {
            return <Gif key={id} id-={id} title={title} image={url} />
          })
        }
        <button onClick={handleChangeGifs}>Change gifs</button>
      </section>
    </div>
  );
}

export default App;
