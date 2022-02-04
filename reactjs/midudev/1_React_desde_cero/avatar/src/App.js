import Avatar from "./Avatar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Women in tech</h1>
      <div className="avatars">
        <Avatar />
        <Avatar id={2} name="Veronica" size="large" />
      </div>
    </div>
  );
}

export default App;
