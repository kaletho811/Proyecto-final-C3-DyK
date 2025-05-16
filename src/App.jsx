import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import DetalleProducto from './paginas/DetalleProducto';
import CarritoPagina from './paginas/CarritoPagina';
import LoginPagina from './paginas/LoginPagina';
import RegistroPagina from './paginas/RegistroPagina';
import Header from './componentes/Header';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  return (
    <Router>
      <Header total={carrito.length} />
      <Routes>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<CarritoPagina carrito={carrito} eliminar={eliminarDelCarrito} />} />
        <Route path="/login" element={<LoginPagina />} />
        <Route path="/registro" element={<RegistroPagina />} />
      </Routes>
    </Router>
  );
}

export default App;