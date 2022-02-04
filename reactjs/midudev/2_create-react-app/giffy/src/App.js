import { useState, useEffect } from 'react';
import './App.css';

const GIFS = [
  "https://media.giphy.com/media/7frSUXgbGqQPKNnJRS/giphy.gif",
  "https://media.giphy.com/media/z0ImSbMh4uJR4BEJju/giphy.gif"
]

const GIFS_DIFF = [
  "https://media.giphy.com/media/MVDPX3gaKFPuo/giphy.gif",
  "https://media.giphy.com/media/26xBwFcBGPLNfGbkY/giphy.gif"
]

const App = () => {
  const [gifs,setGif] = useState(GIFS)

  function handleChangeGifs(){
    setGif(GIFS_DIFF)
  }

  useEffect(function(){
    console.log("useEffect")
    setGif(GIFS_DIFF)
  },[])

  return (
    <div className="App">
      <section className="App-content">
        {console.log("render")}
        {
          gifs.map(gif=>{
            return <img src={gif}/>
          })
        }
        <button onClick={handleChangeGifs}>Change gifs</button>
      </section>
    </div>
  );
}

export default App;
