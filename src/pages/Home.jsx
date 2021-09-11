import React from "react";
import '../components/header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/header";
import '../index.css'
import '../App.css'

export default class Home extends React.Component {
  render() {
    return (
      <div className="test">
        <Header />
      <header className="App-header">
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
}