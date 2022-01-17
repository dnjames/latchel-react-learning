import logo from './logo.svg';
import './App.css';
import Input from "./components/Input";
import AgeGuesser from "./components/AgeGuesser";
import SpaceXLaunches from "./components/SpaceXLaunches";
import { useState } from 'react';

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input name = {name} setName = {setName} />
        <AgeGuesser name={name} />

        <br/><br/>
        <SpaceXLaunches />
      </header>
    </div>
  );
}

export default App;
