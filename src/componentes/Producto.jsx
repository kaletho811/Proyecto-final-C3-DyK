import React from 'react';
import { Link } from 'react-router-dom';

const Producto = ({ producto }) => {
  return (
    <div className="producto-card">
      <img src={producto.thumbnail} alt={producto.title} style={{ width: '200px' }} />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <Link to={`/detalle/${producto.id}`}>Ver detalles</Link>
    </div>
  );
};

export default Producto;
