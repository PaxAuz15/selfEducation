import './App.css';
import ListOfGifs from './components/ListOfGifs';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        {console.log("render")}
        <ListOfGifs keyword="Chile" />
      </section>
    </div>
  );
}

export default App;
