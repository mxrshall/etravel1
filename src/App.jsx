import Homepage from "./Homepage";
import Galeria from "./Galeria";
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
        <Route path="/etravel1/" element={<Homepage />} />
        <Route path="/galeria" element={<Galeria />} />
    </Routes>
  );
}

export default App;
