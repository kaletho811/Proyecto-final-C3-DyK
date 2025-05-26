import React from 'react';
import { useNavigate } from 'react-router-dom';

const Producto = ({ producto }) => {
  const navigate = useNavigate();

  const agregarAlCarrito = (e) => {
    e.stopPropagation();

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const existe = carrito.find(item => item.id === producto.id);
    if (!existe) {
      carrito.push({ ...producto, cantidad: 1 });
    } else {
      existe.cantidad += 1;
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert('Producto agregado al carrito');
  };

  const verDetalles = () => {
    navigate(`/producto/${producto.id}`);
  };

  return (
    <div className="producto-card" onClick={verDetalles} style={{ cursor: 'pointer' }}>
      <img src={producto.thumbnail} alt={producto.title} style={{ width: '200px' }} />
      <h3>{producto.title}</h3>
      <p>Precio: ${producto.price}</p>
      <button onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
};

export default Producto;

