import React, {Component} from 'react';
import logo from './logo.svg';
import First from './components/First'; 
import Second from './components/Second';   

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
      </Router>
    
   
    </>
  );
}

export default App;
