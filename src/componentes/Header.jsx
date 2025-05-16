import { Link } from 'react-router-dom';

export default function Header({ total }) {
  return (
    <header>
      <h1>E-Commerce React</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito ({total})</Link>
        <Link to="/login">Login</Link>
        <Link to="/registro">Registro</Link>
      </nav>
    </header>
  );
}