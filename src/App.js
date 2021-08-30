import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This <code>site</code> is under development.
        </p>
        <a
          className="App-link"
          href="https://bit.ly/eaeniko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check my others links.
        </a>
      </header>
    </div>
  );
}

export default App;
