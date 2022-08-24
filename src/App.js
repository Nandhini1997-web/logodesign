import Logodesign from './Logodesign.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logodesign} className="App-logo" alt="Logodesign" />
        <p>
          Logo is not a communication,it's an identification.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Logo is thinking made visual
        </a>
      </header>
    </div>
  );
}

export default App;
