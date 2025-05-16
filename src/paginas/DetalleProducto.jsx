import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetalleProducto({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProducto(data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.title}</h2>
      <img src={producto.thumbnail} alt={producto.title} />
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Stock: {producto.stock}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
    </div>
  );
}