import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Verify from './components/Verify'
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src="../asstes/logo.png" className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Verify/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
