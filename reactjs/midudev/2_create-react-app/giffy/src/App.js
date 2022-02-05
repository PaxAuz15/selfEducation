import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter';
import Home from './pages/Home';

const logo = `${process.env.PUBLIC_URL}/logo.png`;

const App = () => {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img src={logo} className="logo" alt='Giffy Logo'/>
        </Link>
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
