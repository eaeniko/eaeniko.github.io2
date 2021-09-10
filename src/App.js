import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         This <code>site</code> is under development By Nikolai Cinotti.
        </p>
        <Button 
          href="https://bit.ly/eaeniko"
          target="_blank"
          rel="noopener noreferrer" > Check my others links! </Button>
      </header>
    </div>
  );
}

export default App;
