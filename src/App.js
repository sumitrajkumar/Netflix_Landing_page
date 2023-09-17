import React, {Component} from 'react';
import logo from './logo.svg';
import First from './components/First'; 
import Second from './components/Second';   
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Last from './components/Last';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/Second" element={<Second/>} />
          <Route exact path="/" element={<First/>}/>
        </Routes>
        <Third/>
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Last/>
      </Router>
      
   
    </>
  );
}

export default App;
