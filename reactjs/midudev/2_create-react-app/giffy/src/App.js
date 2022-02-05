import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        {/* spa with wouter -> Link Element */}
        <Link to="/gif/colombia">Gif de Colombia</Link>
        <Link to="/gif/ecuador">Gif de Ecuador</Link>
        <Link to="/gif/chile">Gif de Chile</Link>
        {console.log("render")}
        <Route 
          component={ListOfGifs}
          path="/gif/:keyword"/>
      </section>
    </div>
  );
}

export default App;
