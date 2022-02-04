import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { useState } from 'react';

const App = () => {
  const [keyword,setKeyword] = useState("")
  const [change,setChange] = useState("")

  function handleChange(event){
    setChange(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    setKeyword(event.target[0].value)
  }

  return (
    <div className="App">
      <section className="App-content">
        {console.log("render")}
        <form onSubmit={handleSubmit}>
            {console.log("render from FormGif")}
          <input onChange={handleChange} value={change}></input>
          <button>Search Gif</button>
        </form>
        <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
