export default function CarritoPagina({ carrito, eliminar }) {
  const total = carrito.reduce((acc, prod) => acc + prod.price, 0);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <p>${prod.price}</p>
          <button onClick={() => eliminar(prod.id)}>Eliminar</button>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}