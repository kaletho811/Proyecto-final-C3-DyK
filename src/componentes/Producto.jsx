import { Link } from 'react-router-dom';

export default function Producto({ producto, agregarAlCarrito }) {
  return (
    <div className="producto">
      <img src={producto.thumbnail} alt={producto.title} />
      <h3>{producto.title}</h3>
      <p>${producto.price}</p>
      <Link to={`/producto/${producto.id}`}>Ver detalles</Link>
      <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
    </div>
  );
}