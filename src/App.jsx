import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import DetalleProducto from './paginas/DetalleProducto';
import LoginPagina from './paginas/LoginPagina';
import RegistroPagina from './paginas/RegistroPagina';
import CarritoPagina from './paginas/CarritoPagina';
import Header from './componentes/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route path="/login" element={<LoginPagina />} />
        <Route path="/registro" element={<RegistroPagina />} />
        <Route path="/carrito" element={<CarritoPagina />} />
      </Routes>
    </Router>
  );
}

export default App;
