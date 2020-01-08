import React, { useState, useEffect } from 'react';
import './App.css';


import Header from "./components/Header";
import ListView from "./components/ListView.js";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="App">
      <Header></Header>
      <ListView></ListView>
      <Footer></Footer>
    </div>
  );
}


export default App;
