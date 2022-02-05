import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <h1>
          <Link to='/'>App</Link>
        </h1>
        {console.log("render")}
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={ListOfGifs}
          path="/search/:keyword"/>
      </section>
    </div>
  );
}

export default App;
