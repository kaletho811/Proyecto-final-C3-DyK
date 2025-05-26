import React from 'react';
import { Link } from 'react-router-dom';
import '../estilos/header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="contenedor-header">
        <h1 className="nombre-tienda">🏪D&K Store</h1>
        <nav className="nav-links">
          <Link to="/">🏠Inicio</Link>
          <Link to="/carrito">🛒Carrito</Link>
          <Link to="/login">👾Login</Link>
          <Link to="/registro">👤Registro</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
