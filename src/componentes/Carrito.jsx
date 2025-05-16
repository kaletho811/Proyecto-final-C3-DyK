import React, { useEffect, useState } from 'react';

const Carrito = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem('carrito')) || [];
    setCarrito(datos);
  }, []);

  const eliminarProducto = (id) => {
    const actualizado = carrito.filter(item => item.id !== id);
    setCarrito(actualizado);
    localStorage.setItem('carrito', JSON.stringify(actualizado));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carrito');
  };

  const total = carrito.reduce((acc, prod) => acc + (prod.price * prod.cantidad), 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carrito.map(producto => (
              <li key={producto.id}>
                <img src={producto.thumbnail} alt={producto.title} style={{ width: '100px' }} />
                <p>{producto.title}</p>
                <p>Precio: ${producto.price} x {producto.cantidad}</p>
                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
