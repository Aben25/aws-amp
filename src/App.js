import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckIn from './components/CheckIn';
import React, { useState, useEffect, createContext } from "react";
import Confirmation from './components/Confirmation';

export const EventContext = createContext();

function App() {

  const [hit, setHit] = useState();

  return (
    <div className="App">
      <EventContext.Provider value={{ setHit, hit }}>
        <BrowserRouter>
          <Header />
          <h1 className="mt-3 ">2022 ARTBA National Convention Check-In</h1>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/Check" element={<CheckIn />} />
            <Route path="/Confirm" element={<Confirmation />} />
          </Routes>
        </BrowserRouter>
      </EventContext.Provider>
    </div>
  );
}

export default App;


