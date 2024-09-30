import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./components/Search";
import UnitsButton from "./components/UnitsButton";
function App() {

  return (
    <div className="App">
      <header className="App-header">
          <Search/>
          <UnitsButton/>
      </header>
      <Routes >
          <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
