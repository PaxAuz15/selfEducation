import { useState, useEffect } from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfGifs from './components/ListOfGifs';

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
        <ListOfGifs gifs={gifs} />
        <button onClick={handleChangeGifs}>Change gifs</button>
      </section>
    </div>
  );
}

export default App;
