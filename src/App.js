import logo from './logo.svg';
import './App.css';

const mystyle = {
      color: "green",
      backgroundColor: "white",
      padding: "10px",
      fontFamily: "Arial",
      borderRadius: "25px"
};

// This is App.js react app
function App() {
  return (
    <div  className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={mystyle}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
