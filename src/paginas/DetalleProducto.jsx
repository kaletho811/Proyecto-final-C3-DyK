import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setCargando(false);
      })
      .catch(err => {
        console.error('Error al cargar producto:', err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-producto">
      <h2>{producto.title}</h2>
      <img src={producto.thumbnail} alt={producto.title} style={{ width: '300px' }} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>
      <p>Marca: {producto.brand}</p>
      {/* Puedes agregar más detalles según la API */}
    </div>
  );
};

export default DetalleProducto;

