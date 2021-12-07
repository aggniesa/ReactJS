import logo from './logo.svg';
import './App.css';

//Componentes
import Navbar from "./Componentes/navbar/Navbar";

/* function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
      <h1> Tienda de productos </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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
    </>
  );
} */

function App () {
  return (
    <>
      <Navbar/>
      <main>Main</main>
    </>
  );
}

export default App;
