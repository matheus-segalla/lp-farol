import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FarolLP from './FarolLP';
import UpsellMotor from './UpsellMotor';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FarolLP />} />
        <Route path="/upsell-motor" element={<UpsellMotor />} />
      </Routes>
    </BrowserRouter>
  );
}